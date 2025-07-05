import type { Actions } from './$types';
import { createUser, getUserByEmail, hashPassword } from '$lib/database';
import { initializePayment, generateReference, getCoursePrice } from '$lib/paystack';

export const actions: Actions = {
    default: async ({ request, url }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        const course = formData.get('course') as string;

        // Basic validation
        if (!name || !email || !phone || !password || !confirmPassword || !course) {
            return {
                success: false,
                message: 'All fields are required'
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
        if (!['python', 'javascript'].includes(course)) {
            return {
                success: false,
                message: 'Please select a valid course'
            };
        }

        try {
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
            const userId = await createUser({
                name,
                email,
                phone,
                password: hashedPassword,
                course: course as 'python' | 'javascript'
            });

            // Generate payment reference
            const reference = generateReference();
            const amount = getCoursePrice(course);

            // Initialize Paystack payment
            const callbackUrl = `${url.origin}/verify?reference=${reference}`;
            const paymentResponse = await initializePayment(email, amount, reference, callbackUrl);

            if (paymentResponse.status && paymentResponse.data) {
                return {
                    success: true,
                    message: 'Registration successful! Redirecting to payment...',
                    redirectUrl: paymentResponse.data.authorization_url,
                    reference: reference
                };
            } else {
                // If payment initialization fails, delete the user
                // Note: In a real app, you might want to keep the user and retry payment later
                return {
                    success: false,
                    message: 'Payment initialization failed. Please try again.'
                };
            }
        } catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                message: 'Registration failed. Please try again.'
            };
        }
    }
}; 