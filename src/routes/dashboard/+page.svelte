<script lang="ts">
	import PythonCourse from '$lib/components/PythonCourse.svelte';
	import JavaScriptCourse from '$lib/components/JavaScriptCourse.svelte';
	import HTMLCSSCourse from '$lib/components/HTMLCSSCourse.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props<{ data: any }>();

	let user = $derived(data.user);
</script>

<SEO
	title="Student Dashboard - SophNex Academy"
	description="Access your programming course materials, daily lessons, and learning resources. Continue your Python or JavaScript programming journey with SophNex Academy."
	keywords="student dashboard, course materials, Python lessons, JavaScript lessons, programming tutorials, online learning platform"
	url="/dashboard"
	type="website"
	noIndex={true}
/>

<div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF]">
	<!-- Header -->
	<header class="border-b border-[#3469B2]/20 bg-[#10112A]/90 shadow-lg backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="min-w-0 flex-1">
					<h1 class="truncate text-lg font-semibold text-[#FFFFFF] sm:text-xl">
						Welcome back, {user.name}!
					</h1>
					<p class="truncate text-xs text-[#00C2A8] sm:text-sm">
						Course: {user.course === 'python'
							? 'Introduction to Python'
							: user.course === 'javascript'
								? 'Introduction to JavaScript'
								: user.course === 'htmlcss'
									? 'Introduction to HTML & CSS'
									: 'Unknown'}
					</p>
				</div>
				<div class="ml-4 flex items-center space-x-2 sm:space-x-4">
					<span class="hidden max-w-32 truncate text-sm text-[#FFFFFF] sm:block">{user.email}</span>
					<a
						href="/dashboard/profile"
						class="rounded-md bg-white/10 px-2 py-2 text-xs font-medium text-[#FFFFFF] transition-all hover:bg-white/20 hover:shadow-lg sm:px-3 sm:text-sm"
					>
						<span class="hidden sm:inline">Profile</span>
						<span class="sm:hidden">👤</span>
					</a>
					<form method="POST" action="/logout">
						<button
							type="submit"
							class="rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-2 py-2 text-xs font-medium text-[#FFFFFF] shadow-lg transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] hover:shadow-xl sm:px-3 sm:text-sm"
						>
							<span class="hidden sm:inline">Logout</span>
							<span class="sm:hidden">🚪</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
		<div class="mb-6 sm:mb-8">
			<h2 class="mb-2 text-xl font-bold text-[#10112A] sm:text-2xl">Your Learning Journey</h2>
			<p class="text-sm text-[#5254A3] sm:text-base">
				Follow along with the daily lessons and complete your assignments to master {user.course ===
				'python'
					? 'Python'
					: 'JavaScript'} programming.
			</p>
		</div>

		{#if user.course === 'python'}
			<PythonCourse />
		{:else if user.course === 'javascript'}
			<JavaScriptCourse />
		{:else if user.course === 'htmlcss'}
			<HTMLCSSCourse />
		{:else}
			<div class="py-12 text-center">
				<p class="text-[#5254A3]">Course content not available.</p>
			</div>
		{/if}
	</main>
</div>
