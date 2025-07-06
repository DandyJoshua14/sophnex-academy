<script lang="ts">
	import PythonCourse from '$lib/components/PythonCourse.svelte';
	import JavaScriptCourse from '$lib/components/JavaScriptCourse.svelte';

	let { data } = $props<{ data: any }>();

	let user = $derived(data.user);
</script>

<svelte:head>
	<title>Dashboard - SophNex Academy</title>
	<meta name="description" content="Your course dashboard and learning materials" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF]">
	<!-- Header -->
	<header class="border-b border-[#3469B2]/20 bg-[#10112A]/90 shadow-lg backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div>
					<h1 class="text-xl font-semibold text-[#FFFFFF]">Welcome back, {user.name}!</h1>
					<p class="text-sm text-[#00C2A8]">
						Course: {user.course === 'python'
							? 'Introduction to Python'
							: 'Introduction to JavaScript'}
					</p>
				</div>
				<div class="flex items-center space-x-4">
					<span class="text-sm text-[#FFFFFF]">{user.email}</span>
					<form method="POST" action="/logout">
						<button
							type="submit"
							class="rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-3 py-2 text-sm font-medium text-[#FFFFFF] shadow-lg transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] hover:shadow-xl"
						>
							Logout
						</button>
					</form>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="mb-2 text-2xl font-bold text-[#10112A]">Your Learning Journey</h2>
			<p class="text-[#5254A3]">
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
		{:else}
			<div class="py-12 text-center">
				<p class="text-[#5254A3]">Course content not available.</p>
			</div>
		{/if}
	</main>
</div>
