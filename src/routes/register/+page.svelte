<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { form } = $props<{ form: any }>();

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		course: ''
	});

	let coupon = '';
	let couponApplied = false;
	let couponError = '';

	function checkCoupon() {
		if (coupon.trim().toUpperCase() === 'SOPHNEX@2025') {
			couponApplied = true;
			couponError = '';
		} else {
			couponApplied = false;
			couponError = coupon ? 'Invalid coupon code' : '';
		}
	}

	const courses = [
		{
			id: 'python',
			name: 'Introduction to Python',
			price: '50,000 NGN',
			description: 'Learn the fundamentals of Python programming language'
		},
		{
			id: 'javascript',
			name: 'Introduction to JavaScript',
			price: '50,000 NGN',
			description: 'Master the basics of JavaScript for web development'
		},
		{
			id: 'htmlcss',
			name: 'Introduction to HTML & CSS',
			price: '50,000 NGN',
			description: 'Build and style beautiful web pages with HTML & CSS'
		}
	];

	// Auto-redirect to Paystack when form is successful
	onMount(() => {
		if (form?.success && form?.redirectUrl) {
			// Small delay to show the success message briefly
			setTimeout(() => {
				window.location.href = form.redirectUrl;
			}, 1000);
		}
	});
</script>

<SEO
	title="Register for Programming Courses - SophNex Academy"
	description="Register for our pre-launch Python and JavaScript programming courses at SophNex Academy. Start your coding journey with expert-led instruction and hands-on projects."
	keywords="register programming course, Python course registration, JavaScript course registration, coding bootcamp registration, programming education Nigeria"
	url="/register"
	type="website"
/>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-md">
		<div class="mb-8 text-center">
			<h1 class="mb-2 text-3xl font-bold text-gray-900">Register for Courses</h1>
			<p class="text-gray-600">Join our pre-launch courses and start your coding journey</p>
		</div>

		<div class="rounded-lg bg-white p-8 shadow-xl">
			{#if form?.message}
				<div
					class="mb-6 rounded-md p-4 {form.success
						? 'border border-green-200 bg-green-50 text-green-800'
						: 'border border-red-200 bg-red-50 text-red-800'}"
				>
					{form.message}
				</div>
			{/if}

			{#if form?.success && form?.redirectUrl}
				<div class="py-8 text-center">
					<div class="mx-auto mb-4 h-16 w-16 text-green-500">
						<svg fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-medium text-gray-900">Registration Successful!</h3>
					<p class="mb-4 text-gray-600">Redirecting to payment gateway...</p>
					<div
						class="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"
					></div>
					<p class="text-sm text-gray-500">You will be redirected automatically in a few seconds</p>
				</div>
			{:else}
				<form method="POST" class="space-y-6">
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
							Full Name <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							bind:value={formData.name}
							required
							minlength="2"
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter your full name"
						/>
					</div>

					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-700">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							bind:value={formData.email}
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter your email address"
						/>
					</div>

					<div>
						<label for="phone" class="mb-2 block text-sm font-medium text-gray-700">
							Phone Number *
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							bind:value={formData.phone}
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter your phone number"
						/>
					</div>

					<div>
						<label for="password" class="mb-2 block text-sm font-medium text-gray-700">
							Password *
						</label>
						<input
							type="password"
							id="password"
							name="password"
							bind:value={formData.password}
							required
							minlength="8"
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter your password (min 8 characters)"
						/>
					</div>

					<div>
						<label for="confirmPassword" class="mb-2 block text-sm font-medium text-gray-700">
							Confirm Password *
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							bind:value={formData.confirmPassword}
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Confirm your password"
						/>
					</div>

					<div>
						<label for="course" class="mb-2 block text-sm font-medium text-gray-700">
							Select Course *
						</label>
						<select
							id="course"
							name="course"
							bind:value={formData.course}
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							<option value="">Choose a course</option>
							{#each courses as course}
								<option value={course.id}>{course.name} - {course.price}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="coupon" class="mb-2 block text-sm font-medium text-gray-700">
							Coupon Code (optional)
						</label>
						<div class="flex gap-2">
							<input
								type="text"
								id="coupon"
								name="coupon"
								bind:value={coupon}
								class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="Enter coupon code"
								on:input={checkCoupon}
							/>
						</div>
						{#if couponApplied}
							<p class="mt-1 text-green-600 text-sm font-medium">Coupon applied! 50% discount.</p>
						{:else if couponError}
							<p class="mt-1 text-red-600 text-sm font-medium">{couponError}</p>
						{/if}
					</div>

					{#if formData.course}
						<div class="rounded-md bg-blue-50 p-4">
							<h3 class="mb-2 font-medium text-blue-900">Selected Course Details:</h3>
							{#each courses.filter((c) => c.id === formData.course) as course}
								<div class="text-blue-800">
									<p class="font-medium">{course.name}</p>
									<p class="text-sm">{course.description}</p>
									<p class="mt-1 text-sm font-medium">
										Price: {couponApplied ? '5,000 NGN' : course.price}
									</p>
								</div>
							{/each}
						</div>
					{/if}

					<button
						type="submit"
						class="w-full rounded-md bg-blue-600 px-4 py-3 text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					>
						Register & Pay Now
					</button>
				</form>
			{/if}

			<div class="mt-6 text-center">
				<p class="text-sm text-gray-600">
					Already have an account?
					<a href="/login" class="font-medium text-blue-600 hover:text-blue-500">Sign in here</a>
				</p>
			</div>
		</div>
	</div>
</div>
