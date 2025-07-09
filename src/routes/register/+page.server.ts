import type { Actions } from './$types';
import { createUser, getUserByEmail, hashPassword, deleteUser } from '$lib/database';
import { initializePayment, getCoursePrice } from '$lib/paystack';

export const actions: Actions = {
    default: async ({ request, url }) => {
        let userId: any = null;

        try {
            const formData = await request.formData();
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const phone = formData.get('phone') as string;
            const password = formData.get('password') as string;
            const confirmPassword = formData.get('confirmPassword') as string;
            const course = formData.get('course') as string;

            // Basic validation
            if (!name || !email || !phone || !password || !confirmPassword || !course) {
                let missingFields = [];
                if (!name) missingFields.push('Full Name');
                if (!email) missingFields.push('Email');
                if (!phone) missingFields.push('Phone');
                if (!password) missingFields.push('Password');
                if (!confirmPassword) missingFields.push('Confirm Password');
                if (!course) missingFields.push('Course');
                return {
                    success: false,
                    message: `The following fields are required: ${missingFields.join(', ')}`
                };
            }

            // Password validation
            if (password.length < 8) {
                return {
                    success: false,
                    message: 'Password must be at least 8 characters long'
                };
            }

            if (password !== confirmPassword) {
                return {
                    success: false,
                    message: 'Passwords do not match'
                };
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return {
                    success: false,
                    message: 'Please enter a valid email address'
                };
            }

            // Course validation
            if (!['python', 'javascript', 'htmlcss'].includes(course)) {
                return {
                    success: false,
                    message: 'Please select a valid course'
                };
            }

            // Check if user already exists
            const existingUser = await getUserByEmail(email);
            if (existingUser) {
                return {
                    success: false,
                    message: 'A user with this email already exists'
                };
            }

            // Hash password
            const hashedPassword = await hashPassword(password);

            // Create user in database
            userId = await createUser({
                name,
                email,
                phone,
                password: hashedPassword,
                course: course as 'python' | 'javascript' | 'htmlcss'
            });

            // Get course price
            const amount = getCoursePrice(course);

            // Initialize Paystack payment (Paystack will generate its own reference)
            const callbackUrl = `${url.origin}/verify`;
            const paymentResponse = await initializePayment(email, amount, callbackUrl);

            if (paymentResponse.status && paymentResponse.data) {
                // Return the Paystack URL to the client
                return {
                    success: true,
                    message: 'Registration successful! Redirecting to payment...',
                    redirectUrl: paymentResponse.data.authorization_url
                };
            } else {
                // If payment initialization fails, delete the user and return error
                if (userId) {
                    await deleteUser(userId);
                }
                return {
                    success: false,
                    message: 'Payment initialization failed. Please try again.'
                };
            }
        } catch (error) {
            // If user was created but something else failed, delete the user
            if (userId) {
                try {
                    await deleteUser(userId);
                } catch (deleteError) {
                    console.error('Failed to delete user after error:', deleteError);
                }
            }

            // console.error('Registration error:', error);
            return {
                success: false,
                message: 'Registration failed. Please try again.'
            };
        }
    }
}; 