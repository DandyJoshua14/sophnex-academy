import type { Actions, PageServerLoad } from './$types';
import { getUserByEmail, verifyPassword } from '$lib/database';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
    // If already authenticated, redirect to dashboard
    const sessionId = cookies.get('user_session');
    if (sessionId) {
        throw redirect(302, '/dashboard');
    }

    return {};
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Basic validation
        if (!email || !password) {
            return {
                success: false,
                message: 'Email and password are required'
            };
        }

        try {
            // Check if user exists
            const user = await getUserByEmail(email);
            if (!user) {
                return {
                    success: false,
                    message: 'Invalid email or password'
                };
            }

            // Verify password
            const isPasswordValid = await verifyPassword(password, user.password);
            if (!isPasswordValid) {
                return {
                    success: false,
                    message: 'Invalid email or password'
                };
            }
            console.log(user)
            // Check if user is verified
            if (user.status !== 'verified') {
                return {
                    success: false,
                    message: 'Your account is not yet verified. Please complete your payment to access the course.',
                    userStatus: user.status,
                    userEmail: user.email
                };
            }

            // Set user session cookie
            cookies.set('user_session', JSON.stringify({
                userId: user._id?.toString(),
                email: user.email,
                name: user.name,
                course: user.course
            }), {
                path: '/',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            // Redirect to dashboard
            throw redirect(302, '/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: 'An error occurred during login. Please try again.'
            };
        }
    }
}; 