import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getUserById, connectToDatabase } from '$lib/database';

export const load: PageServerLoad = async ({ cookies }) => {
    const sessionId = cookies.get('user_session');
    if (!sessionId) {
        throw redirect(302, '/login');
    }

    try {
        const session = JSON.parse(sessionId);
        const user = await getUserById(session.userId);

        if (!user) {
            throw redirect(302, '/login');
        }

        return {
            user: {
                name: user.name,
                email: user.email,
                course: user.course
            }
        };
    } catch (error) {
        console.error('Profile load error:', error);
        throw redirect(302, '/login');
    }
};

export const actions: Actions = {
    updateName: async ({ request, cookies }) => {
        const sessionId = cookies.get('user_session');
        if (!sessionId) {
            return {
                success: false,
                message: 'Session expired. Please log in again.'
            };
        }

        try {
            const session = JSON.parse(sessionId);
            const formData = await request.formData();
            const newName = formData.get('name') as string;

            if (!newName || newName.trim().length < 2) {
                return {
                    success: false,
                    message: 'Name must be at least 2 characters long'
                };
            }

            const { db } = await connectToDatabase();
            const usersCollection = db.collection('users');

            // Update user's name
            const result = await usersCollection.updateOne(
                { _id: session.userId },
                {
                    $set: {
                        name: newName.trim(),
                        updatedAt: new Date()
                    }
                }
            );

            if (result.modifiedCount > 0) {
                // Update session cookie with new name
                cookies.set('user_session', JSON.stringify({
                    userId: session.userId,
                    email: session.email,
                    name: newName.trim(),
                    course: session.course
                }), {
                    path: '/',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24 * 7 // 7 days
                });

                return {
                    success: true,
                    message: 'Name updated successfully!'
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to update name. Please try again.'
                };
            }
        } catch (error) {
            console.error('Profile update error:', error);
            return {
                success: false,
                message: 'An error occurred while updating your profile. Please try again.'
            };
        }
    }
}; 