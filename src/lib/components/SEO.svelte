<script lang="ts">
	import {
		generateMetaTags,
		generateStructuredData,
		generateOrganizationData,
		generateBreadcrumbData,
		defaultSEO,
		type SEOConfig
	} from '$lib/seo';

	let {
		title = defaultSEO.title,
		description = defaultSEO.description,
		keywords = defaultSEO.keywords,
		image = defaultSEO.image,
		url = defaultSEO.url,
		type = 'website',
		author = defaultSEO.author,
		publishedTime,
		modifiedTime,
		section,
		tags,
		breadcrumbs,
		noIndex = false
	} = $props();

	// Create SEO config
	const seoConfig: SEOConfig = {
		title,
		description,
		keywords,
		image,
		url,
		type: type as 'website' | 'article' | 'course',
		author,
		publishedTime,
		modifiedTime,
		section,
		tags
	};

	// Generate meta tags
	const metaTags = generateMetaTags(seoConfig);
	const structuredData = generateStructuredData(seoConfig);
	const organizationData = generateOrganizationData();
	const breadcrumbData = breadcrumbs ? generateBreadcrumbData(breadcrumbs) : '';
</script>

<svelte:head>
	<title>{title}</title>
	{@html metaTags}
	{@html structuredData}
	{@html organizationData}
	{#if breadcrumbData}
		{@html breadcrumbData}
	{/if}
	{#if noIndex}
		<meta name="robots" content="noindex, nofollow" />
		<meta name="googlebot" content="noindex, nofollow" />
	{/if}
</svelte:head>
