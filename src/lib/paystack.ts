import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

// Paystack API utilities
const PAYSTACK_SECRET_KEY = dev
    ? "sk_test_beb6fe8aa9970a7a6ed92d8a81631b2900e81ed9"
    : (env.PAYSTACK_SECRET_KEY || "sk_live_2628d28664ec41c81f844eeb008e98bee2fca2d8");

// Initialize payment
export async function initializePayment(email: string, amount: number, callbackUrl: string) {
    try {
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                amount: amount * 100, // Convert to kobo (smallest currency unit)
                callback_url: callbackUrl,
                currency: 'NGN'
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Paystack API error:', response.status, errorText);
            throw new Error(`Paystack API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        // console.log('Paystack payment initialized:', result);
        return result;
    } catch (error) {
        console.error('Error initializing payment:', error);
        throw error;
    }
}

// Verify payment
export async function verifyPayment(reference: string) {
    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Paystack verification error:', response.status, errorText);
            throw new Error(`Paystack API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        // console.log('Paystack payment verified:', result);
        return result;
    } catch (error) {
        console.error('Error verifying payment:', error);
        throw error;
    }
}

// Get course price
export function getCoursePrice(course: string): number {
    const prices = {
        python: 10000,
        javascript: 10000,
        htmlcss: 10000
    };
    return prices[course as keyof typeof prices] || 10000;
} 