import type { Actions } from './$types';
import { connectToDatabase, createUser, getUserByEmail } from '$lib/database';
import { initializePayment } from '$lib/paystack';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const course = formData.get('course') as string;

        if (!email || !course) {
            return {
                success: false,
                message: 'Email and course selection are required'
            };
        }

        // Validate course selection
        if (course !== 'python' && course !== 'javascript' && course !== 'htmlcss') {
            return {
                success: false,
                message: 'Please select a valid course'
            };
        }

        try {
            const { db } = await connectToDatabase();
            const usersCollection = db.collection('users');

            // Check if user already exists
            let user = await getUserByEmail(email);

            if (user) {
                // User exists, check if they have a pending payment
                if (user.status === 'pending') {
                    // Update existing user's course if different
                    if (user.course !== course) {
                        await usersCollection.updateOne(
                            { _id: user._id },
                            {
                                $set: {
                                    course: course as 'python' | 'javascript'|'htmlcss',
                                    updatedAt: new Date()
                                }
                            }
                        );
                        user.course = course as 'python' | 'javascript'|'htmlcss';
                    }
                } else if (user.status === 'verified') {
                    return {
                        success: false,
                        message: 'Your account is already verified. You can log in to access your course.'
                    };
                } else {
                    // User exists but status is cancelled or other, update to pending
                    await usersCollection.updateOne(
                        { _id: user._id },
                        {
                            $set: {
                                course: course as 'python' | 'javascript'|'htmlcss',
                                status: 'pending',
                                paymentStatus: 'pending',
                                updatedAt: new Date()
                            }
                        }
                    );
                    user.status = 'pending';
                    user.course = course as 'python' | 'javascript' | 'htmlcss';
                }
            } else {
                // Create new user with minimal information
                const userId = await createUser({
                    name: email.split('@')[0], // Use email prefix as name
                    email: email.toLowerCase(),
                    phone: '', // Will be updated later if needed
                    password: '', // Will be set later if needed
                    course: course as 'python' | 'javascript'|'htmlcss'
                });
                user = await getUserByEmail(email);
            }

            if (!user) {
                return {
                    success: false,
                    message: 'Failed to create or update user account. Please try again.'
                };
            }

            // Initialize Paystack payment
            const callbackUrl = `${process.env.PUBLIC_BASE_URL || 'http://localhost:5173'}/verify`;
            const amount = 50000; // 50,000 NGN

            const result = await initializePayment(user.email, amount, callbackUrl);

            if (result.status && result.data) {
                // Update user with new payment reference immediately after initialization
                await usersCollection.updateOne(
                    { _id: user._id },
                    {
                        $set: {
                            paymentReference: result.data.reference,
                            updatedAt: new Date()
                        }
                    }
                );

                // Return the redirect URL instead of throwing redirect
                return {
                    success: true,
                    message: 'Payment initialized successfully. Redirecting to payment gateway...',
                    redirectUrl: result.data.authorization_url
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to initialize payment. Please try again.'
                };
            }
        } catch (error) {
            console.error('Payment resume error:', error);

            return {
                success: false,
                message: 'An error occurred while processing your payment. Please try again.'
            };
        }
    }
}; 