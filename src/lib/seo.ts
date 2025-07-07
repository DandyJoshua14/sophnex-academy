import { env } from '$env/dynamic/public';

// SEO Configuration for SophNex Academy
export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'course';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
}

// Base URL for the website
const BASE_URL = env.PUBLIC_BASE_URL || 'https://sophnex-academy.com';

// Default SEO configuration
export const defaultSEO: SEOConfig = {
    title: 'SophNex Academy - Learn Python & JavaScript Programming',
    description: 'Join SophNex Academy for comprehensive programming courses. Learn Python and JavaScript from industry experts with hands-on projects and real-world applications.',
    keywords: 'programming courses, Python programming, JavaScript programming, coding bootcamp, web development, software development, learn to code, programming education, Nigeria coding school',
    image: `${BASE_URL}/og-image.jpg`,
    url: BASE_URL,
    type: 'website',
    author: 'SophNex Academy'
};

// Course-specific SEO configurations
export const courseSEO = {
    python: {
        title: 'Python Programming Course - SophNex Academy',
        description: 'Master Python programming fundamentals with our comprehensive 30-day course. Learn syntax, data structures, functions, and build real-world projects.',
        keywords: 'Python programming, Python course, learn Python, Python tutorial, programming fundamentals, data science Python, web development Python',
        type: 'course' as const,
        section: 'Programming Courses'
    },
    javascript: {
        title: 'JavaScript Programming Course - SophNex Academy',
        description: 'Learn JavaScript programming from basics to advanced concepts. Master DOM manipulation, event handling, and build interactive web applications.',
        keywords: 'JavaScript programming, JavaScript course, learn JavaScript, web development, frontend development, DOM manipulation, interactive websites',
        type: 'course' as const,
        section: 'Programming Courses'
    }
};

// Generate meta tags for a page
export function generateMetaTags(config: SEOConfig): string {
    const meta = [
        // Basic meta tags
        `<meta charset="utf-8">`,
        `<meta name="viewport" content="width=device-width, initial-scale=1">`,
        `<meta name="description" content="${config.description}">`,
        `<meta name="keywords" content="${config.keywords || defaultSEO.keywords}">`,
        `<meta name="author" content="${config.author || defaultSEO.author}">`,

        // Open Graph tags
        `<meta property="og:title" content="${config.title}">`,
        `<meta property="og:description" content="${config.description}">`,
        `<meta property="og:type" content="${config.type || 'website'}">`,
        `<meta property="og:url" content="${config.url || defaultSEO.url}">`,
        `<meta property="og:image" content="${config.image || defaultSEO.image}">`,
        `<meta property="og:site_name" content="SophNex Academy">`,
        `<meta property="og:locale" content="en_US">`,

        // Twitter Card tags
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${config.title}">`,
        `<meta name="twitter:description" content="${config.description}">`,
        `<meta name="twitter:image" content="${config.image || defaultSEO.image}">`,
        `<meta name="twitter:site" content="@sophnexacademy">`,

        // Additional meta tags
        `<meta name="robots" content="index, follow">`,
        `<meta name="googlebot" content="index, follow">`,
        `<link rel="canonical" href="${config.url || defaultSEO.url}">`,

        // Favicon and app icons
        `<link rel="icon" type="image/x-icon" href="/favicon.ico">`,
        `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`,
        `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`,
        `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`,
        `<link rel="manifest" href="/site.webmanifest">`,

        // Theme color
        `<meta name="theme-color" content="#3469B2">`,
        `<meta name="msapplication-TileColor" content="#3469B2">`,
    ];

    // Add article-specific meta tags if type is article
    if (config.type === 'article' || config.type === 'course') {
        if (config.publishedTime) {
            meta.push(`<meta property="article:published_time" content="${config.publishedTime}">`);
        }
        if (config.modifiedTime) {
            meta.push(`<meta property="article:modified_time" content="${config.modifiedTime}">`);
        }
        if (config.author) {
            meta.push(`<meta property="article:author" content="${config.author}">`);
        }
        if (config.section) {
            meta.push(`<meta property="article:section" content="${config.section}">`);
        }
        if (config.tags) {
            config.tags.forEach(tag => {
                meta.push(`<meta property="article:tag" content="${tag}">`);
            });
        }
    }

    return meta.join('\n    ');
}

// Generate structured data (JSON-LD)
export function generateStructuredData(config: SEOConfig): string {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": config.type === 'course' ? "Course" : "WebSite",
        "name": config.title,
        "description": config.description,
        "url": config.url || defaultSEO.url,
        "publisher": {
            "@type": "Organization",
            "name": "SophNex Academy",
            "url": BASE_URL,
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`
            }
        }
    };

    // Add course-specific structured data
    if (config.type === 'course') {
        Object.assign(structuredData, {
            "provider": {
                "@type": "Organization",
                "name": "SophNex Academy",
                "sameAs": [
                    "https://twitter.com/sophnexacademy",
                    "https://linkedin.com/company/sophnex-academy"
                ]
            },
            "courseMode": "online",
            "educationalLevel": "beginner",
            "inLanguage": "en",
            "isAccessibleForFree": false,
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "inLanguage": "en"
            }
        });
    }

    return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
}

// Generate organization structured data
export function generateOrganizationData(): string {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "SophNex Academy",
        "url": BASE_URL,
        "logo": `${BASE_URL}/logo.png`,
        "description": "SophNex Academy offers comprehensive programming courses in Python and JavaScript, designed to help students master coding fundamentals and build real-world projects.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG",
            "addressRegion": "Nigeria"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@sophnex-academy.com"
        },
        "sameAs": [
            "https://twitter.com/sophnexacademy",
            "https://linkedin.com/company/sophnex-academy",
            "https://facebook.com/sophnexacademy"
        ],
        "offers": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Course",
                    "name": "Introduction to Python",
                    "description": "Learn Python programming fundamentals with hands-on projects"
                },
                "price": "5000",
                "priceCurrency": "NGN"
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Course",
                    "name": "Introduction to JavaScript",
                    "description": "Master JavaScript for web development and interactive applications"
                },
                "price": "5000",
                "priceCurrency": "NGN"
            }
        ]
    };

    return `<script type="application/ld+json">${JSON.stringify(organizationData, null, 2)}</script>`;
}

// Generate breadcrumb structured data
export function generateBreadcrumbData(breadcrumbs: Array<{ name: string; url: string }>): string {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${BASE_URL}${crumb.url}`
        }))
    };

    return `<script type="application/ld+json">${JSON.stringify(breadcrumbData, null, 2)}</script>`;
}

// SEO component props interface
export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'course';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    breadcrumbs?: Array<{ name: string; url: string }>;
    noIndex?: boolean;
} 