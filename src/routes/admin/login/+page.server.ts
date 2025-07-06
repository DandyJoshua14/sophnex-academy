import type { Actions, PageServerLoad } from './$types';
import { getUserByEmail } from '$lib/database';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
    // If already authenticated, redirect to admin dashboard
    const sessionId = cookies.get('admin_session');
    if (sessionId === 'authenticated_admin_dandyernest') {
        throw redirect(302, '/admin');
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

        // Check if the email is the allowed admin email
        if (email !== 'dandyernest@sophnexacademy.com.ng') {
            return {
                success: false,
                message: 'Access denied. Invalid credentials.'
            };
        }

        // Check if the email exists in the database (should not work)
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return {
                success: false,
                message: 'Access denied. This email is not authorized for admin access.'
            };
        }

        // For now, use a simple password check
        // In production, you should use proper password hashing
        const adminPassword = 'admin123'; // You can change this to any secure password

        if (password !== adminPassword) {
            return {
                success: false,
                message: 'Access denied. Invalid credentials.'
            };
        }

        // Set authentication cookie
        cookies.set('admin_session', 'authenticated_admin_dandyernest', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 24 hours
        });

        // Redirect to admin dashboard
        throw redirect(302, '/admin');
    }
}; 