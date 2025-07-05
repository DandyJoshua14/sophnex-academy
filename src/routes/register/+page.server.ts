import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const course = formData.get('course') as string;

        // Basic validation
        if (!name || !email || !phone || !course) {
            return {
                success: false,
                message: 'All fields are required'
            };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }

        try {
            // Here you would typically:
            // 1. Save to database
            // 2. Send confirmation email
            // 3. Send payment instructions
            // 4. Log the registration

            // For now, we'll just log to console and return success
            console.log('New registration:', {
                name,
                email,
                phone,
                course,
                timestamp: new Date().toISOString()
            });

            // TODO: Implement actual data storage
            // Example: await db.registrations.create({ name, email, phone, course });

            return {
                success: true,
                message: 'Registration successful! We will contact you soon with payment details.'
            };
        } catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                message: 'Registration failed. Please try again.'
            };
        }
    }
}; 