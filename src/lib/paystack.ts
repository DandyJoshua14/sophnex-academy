// Paystack API utilities
const PAYSTACK_SECRET_KEY = "sk_live_2628d28664ec41c81f844eeb008e98bee2fca2d8";

// Initialize payment
export async function initializePayment(email: string, amount: number, reference: string, callbackUrl: string) {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            amount: amount * 100, // Convert to kobo (smallest currency unit)
            reference,
            callback_url: callbackUrl,
            currency: 'NGN'
        })
    });

    if (!response.ok) {
        throw new Error(`Paystack API error: ${response.statusText}`);
    }

    return await response.json();
}

// Verify payment
export async function verifyPayment(reference: string) {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error(`Paystack API error: ${response.statusText}`);
    }

    return await response.json();
}

// Generate unique reference
export function generateReference(): string {
    return `sophnex_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get course price
export function getCoursePrice(course: string): number {
    const prices = {
        python: 5000,
        javascript: 5000
    };
    return prices[course as keyof typeof prices] || 5000;
} 