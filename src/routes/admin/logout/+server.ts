import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
    // Clear the admin session cookie
    cookies.delete('admin_session', { path: '/' });

    // Redirect to login page
    throw redirect(302, '/admin/login');
}; 