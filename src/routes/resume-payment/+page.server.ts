import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { connectToDatabase } from '$lib/database';
import { initializePayment } from '$lib/paystack';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;

        if (!email) {
            return {
                success: false,
                message: 'Email is required'
            };
        }

        try {
            const { db } = await connectToDatabase();
            const usersCollection = db.collection('users');

            // Find user with pending payment
            const user = await usersCollection.findOne({
                email: email.toLowerCase(),
                status: 'pending'
            });

            if (!user) {
                return {
                    success: false,
                    message: 'No pending payment found for this email. Please check your email or register for a course.'
                };
            }

            // Initialize Paystack payment
            const callbackUrl = `${process.env.PUBLIC_BASE_URL || 'http://localhost:5173'}/verify`;
            const amount = 5000; // 5,000 NGN

            const result = await initializePayment(user.email, amount, callbackUrl);

            if (result.status && result.data) {
                // Update user with new payment reference
                await usersCollection.updateOne(
                    { _id: user._id },
                    {
                        $set: {
                            paymentReference: result.data.reference,
                            updatedAt: new Date()
                        }
                    }
                );

                // Redirect to Paystack payment page
                throw redirect(302, result.data.authorization_url);
            } else {
                return {
                    success: false,
                    message: 'Failed to initialize payment. Please try again.'
                };
            }
        } catch (error) {
            console.error('Payment resume error:', error);

            if (error instanceof Response) {
                throw error; // Re-throw redirect
            }

            return {
                success: false,
                message: 'An error occurred while processing your payment. Please try again.'
            };
        }
    }
}; 