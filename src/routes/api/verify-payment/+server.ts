import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { verifyPayment } from '$lib/paystack';
import {
    getPaymentByReference,
    updatePaymentStatus,
    getUserByEmail,
    updateUserStatus,
    updateUserPaymentStatus,
    deleteUser
} from '$lib/database';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { reference } = await request.json();

        if (!reference) {
            return json({ success: false, message: 'Payment reference is required' }, { status: 400 });
        }

        // Verify payment with Paystack
        const paystackResponse = await verifyPayment(reference);

        if (!paystackResponse.status) {
            return json({ success: false, message: 'Payment verification failed' }, { status: 400 });
        }

        const paymentData = paystackResponse.data;

        // Check if payment was successful
        if (paymentData.status === 'success') {
            // Find the user by email from Paystack response
            const user = await getUserByEmail(paymentData.customer.email);

            if (!user) {
                return json({ success: false, message: 'User not found' }, { status: 404 });
            }

            // Update payment record
            await updatePaymentStatus(reference, 'success', paystackResponse);

            // Update user status to verified and payment status to paid
            await updateUserStatus(user._id!, 'verified');
            await updateUserPaymentStatus(user._id!, 'paid', reference);

            return json({
                success: true,
                message: 'Payment verified successfully',
                user: {
                    name: user.name,
                    email: user.email,
                    course: user.course
                },
                amount: paymentData.amount / 100, // Convert from kobo to naira
                reference: reference
            });
        } else {
            // Payment failed - find user and delete registration
            const user = await getUserByEmail(paymentData.customer.email);

            if (user) {
                // Update payment status to failed
                await updatePaymentStatus(reference, 'failed', paystackResponse);
                await updateUserPaymentStatus(user._id!, 'failed', reference);

                // Delete the user registration
                await deleteUser(user._id!);
            }

            return json({
                success: false,
                message: 'Payment verification failed. Please try registering again.'
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        return json({
            success: false,
            message: 'An error occurred during payment verification'
        }, { status: 500 });
    }
}; 