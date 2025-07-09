<script lang="ts">
	import { onMount } from 'svelte';

	let { form } = $props<{ form: any }>();

	let formData = $state({
		email: '',
		course: ''
	});

	const courses = [
		{
			id: 'python',
			name: 'Introduction to Python',
			price: '5,000 NGN',
			description: 'Learn the fundamentals of Python programming language'
		},
		{
			id: 'javascript',
			name: 'Introduction to JavaScript',
			price: '5,000 NGN',
			description: 'Master the basics of JavaScript for web development'
		},
		{
			id: 'htmlcss',
			name: 'Introduction to HTML & CSS',
			price: '5,000 NGN',
			description: 'Build and style beautiful web pages with HTML & CSS'
		}
	];

	// Handle redirect on the client side
	onMount(() => {
		if (form?.success && form?.redirectUrl) {
			// Small delay to show the success message briefly
			setTimeout(() => {
				window.location.href = form.redirectUrl;
			}, 1000);
		}
	});
</script>

<svelte:head>
	<title>Resume Payment - SophNex Academy</title>
	<meta name="description" content="Complete your payment for SophNex Academy courses" />
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF] px-4 py-12 sm:px-6 lg:px-8"
>
	<div class="w-full max-w-md space-y-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-[#10112A]">Resume Payment</h2>
			<p class="mt-2 text-sm text-[#5254A3]">Select your course and complete your payment</p>
		</div>

		{#if form?.message}
			<div
				class="rounded-md p-4 {form.success
					? 'border border-[#00C2A8] bg-[#00C2A8]/10 text-[#00C2A8]'
					: 'border border-[#FF5E5E] bg-[#FF5E5E]/10 text-[#FF5E5E]'}"
			>
				{form.message}
			</div>
		{/if}

		{#if form?.success && form?.redirectUrl}
			<div class="text-center">
				<div
					class="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-[#3469B2]"
				></div>
				<p class="text-sm text-[#5254A3]">Redirecting to payment gateway...</p>
			</div>
		{:else}
			<div class="rounded-lg bg-white p-6 shadow-xl">
				<form method="POST" class="space-y-6">
					<div>
						<label for="email" class="block text-sm font-medium text-[#10112A]">Email address</label
						>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								bind:value={formData.email}
								required
								class="block w-full appearance-none rounded-md border border-[#3469B2]/20 px-3 py-2 text-sm placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
								placeholder="Enter your email address"
							/>
						</div>
					</div>

					<div>
						<label for="course" class="block text-sm font-medium text-[#10112A]"
							>Select Course</label
						>
						<div class="mt-1">
							<select
								id="course"
								name="course"
								bind:value={formData.course}
								required
								class="block w-full appearance-none rounded-md border border-[#3469B2]/20 px-3 py-2 text-sm placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
							>
								<option value="">Choose a course</option>
								{#each courses as course}
									<option value={course.id}>{course.name} - {course.price}</option>
								{/each}
							</select>
						</div>
					</div>

					{#if formData.course}
						<div class="rounded-md border border-[#3469B2]/20 bg-[#F8F9FF] p-4">
							<h3 class="mb-2 text-sm font-medium text-[#10112A]">Selected Course Details:</h3>
							{#each courses.filter((c) => c.id === formData.course) as course}
								<div class="text-[#5254A3]">
									<p class="font-medium">{course.name}</p>
									<p class="text-xs">{course.description}</p>
									<p class="mt-1 text-sm font-medium text-[#3469B2]">Price: {course.price}</p>
								</div>
							{/each}
						</div>
					{/if}

					<button
						type="submit"
						class="w-full rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] focus:ring-2 focus:ring-[#FF5E5E] focus:ring-offset-2 focus:outline-none"
					>
						Continue to Payment
					</button>
				</form>

				<div class="mt-6 text-center">
					<a
						href="/login"
						class="font-medium text-[#3469B2] transition-colors hover:text-[#00C2A8]"
					>
						← Back to Login
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>
