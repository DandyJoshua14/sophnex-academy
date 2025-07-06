import type { PageServerLoad } from './$types';
import { getAllUsers, getUserByEmail } from '$lib/database';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, cookies }) => {
    // Check if user is authenticated
    const sessionId = cookies.get('admin_session');
    const isAuthenticated = sessionId === 'authenticated_admin_dandyernest';

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        throw redirect(302, '/admin/login');
    }

    try {
        const users = await getAllUsers();
        return {
            users: users.map(user => ({
                ...user,
                _id: user._id?.toString(),
                createdAt: user.createdAt.toISOString(),
                updatedAt: user.updatedAt.toISOString()
            }))
        };
    } catch (error) {
        console.error('Error loading users:', error);
        return {
            users: []
        };
    }
}; 