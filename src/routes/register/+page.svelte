<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let { form } = $props<{ form: any }>();

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
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
		}
	];

	// Handle form submission with redirect
	function handleSubmit(event: any) {
		const { update } = event.detail;

		update(({ result }: any) => {
			if (result?.type === 'success' && result.data?.redirectUrl) {
				// Redirect to Paystack payment page
				window.location.href = result.data.redirectUrl;
			}
		});
	}
</script>

<svelte:head>
	<title>Register - SophNex Academy</title>
	<meta name="description" content="Register for our pre-launch courses at SophNex Academy" />
</svelte:head>

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

			<form method="POST" use:enhance={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
						Full Name *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						bind:value={formData.name}
						required
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

				{#if formData.course}
					<div class="rounded-md bg-blue-50 p-4">
						<h3 class="mb-2 font-medium text-blue-900">Selected Course Details:</h3>
						{#each courses.filter((c) => c.id === formData.course) as course}
							<div class="text-blue-800">
								<p class="font-medium">{course.name}</p>
								<p class="text-sm">{course.description}</p>
								<p class="mt-1 text-sm font-medium">Price: {course.price}</p>
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

			<div class="mt-6 text-center">
				<p class="text-sm text-gray-600">By registering, you agree to our terms and conditions</p>
			</div>
		</div>

		<div class="mt-8 text-center">
			<a href="/" class="font-medium text-blue-600 hover:text-blue-800"> ← Back to Home </a>
		</div>
	</div>
</div>
