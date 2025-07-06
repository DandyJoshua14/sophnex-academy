import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
    // Check if user is authenticated
    const sessionData = cookies.get('user_session');

    if (!sessionData) {
        throw redirect(302, '/login');
    }

    try {
        const user = JSON.parse(sessionData);
        return {
            user: {
                userId: user.userId,
                email: user.email,
                name: user.name,
                course: user.course
            }
        };
    } catch (error) {
        // Invalid session data
        cookies.delete('user_session', { path: '/' });
        throw redirect(302, '/login');
    }
}; 