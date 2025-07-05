import type { PageServerLoad } from './$types';
import { getAllUsers } from '$lib/database';

export const load: PageServerLoad = async () => {
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