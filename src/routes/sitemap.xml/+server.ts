import { env } from '$env/dynamic/public';

const BASE_URL = env.PUBLIC_BASE_URL || 'https://sophnex-academy.com';

export async function GET() {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${BASE_URL}/</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
	<url>
		<loc>${BASE_URL}/register</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>${BASE_URL}/login</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${BASE_URL}/support</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>
	<url>
		<loc>${BASE_URL}/resume-payment</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.4</priority>
	</url>
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
} 