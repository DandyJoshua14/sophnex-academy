import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
    // Clear the user session cookie
    cookies.delete('user_session', { path: '/' });

    // Redirect to login page
    throw redirect(302, '/login');
}; 