import { env } from '$env/dynamic/public';

const BASE_URL = env.PUBLIC_BASE_URL || 'https://sophnex-academy.com';

export async function GET() {
    const robotsTxt = `User-agent: *
Allow: /
Allow: /register
Allow: /login
Allow: /support
Allow: /resume-payment

Disallow: /dashboard
Disallow: /admin
Disallow: /verify
Disallow: /logout

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=3600'
        }
    });
} 