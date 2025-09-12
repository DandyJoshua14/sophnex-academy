<script lang="ts">
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/SOPHNEX%20ACADEMY%20LOGO-12.png" />
	<link rel="shortcut icon" type="image/png" href="/SOPHNEX%20ACADEMY%20LOGO-12.png" />
	<link rel="apple-touch-icon" href="/SOPHNEX%20ACADEMY%20LOGO-12.png" />
</svelte:head>

<SEO />
{@render children()}
