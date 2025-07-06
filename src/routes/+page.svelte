<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);

	const courses = [
		{
			id: 'python',
			name: 'Introduction to Python',
			price: '5,000 NGN',
			description: 'Learn the fundamentals of Python programming language',
			features: [
				'Basic syntax and data types',
				'Control structures',
				'Functions and modules',
				'File handling',
				'Practical projects'
			]
		},
		{
			id: 'javascript',
			name: 'Introduction to JavaScript',
			price: '5,000 NGN',
			description: 'Master the basics of JavaScript for web development',
			features: [
				'Variables and data types',
				'Functions and scope',
				'DOM manipulation',
				'Event handling',
				'Basic web applications'
			]
		}
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<svelte:head>
	<title>SophNex Academy - Learn to Code</title>
	<meta
		name="description"
		content="Join SophNex Academy for comprehensive programming courses. Learn Python and JavaScript from industry experts."
	/>
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 z-50 w-full bg-white shadow-lg">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<h1 class="text-xl font-bold text-blue-600">SophNex Academy</h1>
				</div>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="#home"
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">Home</a
				>
				<a
					href="#courses"
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
					>Courses</a
				>
				<a
					href="#about"
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
					>About</a
				>
				<a
					href="/register"
					class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
					>Register Now</a
				>
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMenu}
					class="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 border-t bg-white px-2 pt-2 pb-3 sm:px-3">
				<a
					href="#home"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
					>Home</a
				>
				<a
					href="#courses"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
					>Courses</a
				>
				<a
					href="#about"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
					>About</a
				>
				<a
					href="/register"
					class="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
					>Register Now</a
				>
			</div>
		</div>
	{/if}
</nav>

<!-- Hero Section -->
<section id="home" class="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
	<div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
				Learn to Code with
				<span class="text-blue-600">SophNex Academy</span>
			</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
				Start your journey into the world of programming with our comprehensive courses. Learn from
				industry experts and build real-world projects.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/register"
					class="rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700"
				>
					Get Started Today
				</a>
				<a
					href="#courses"
					class="rounded-lg border-2 border-blue-600 px-8 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
				>
					View Courses
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Courses Section -->
<section id="courses" class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Pre-Launch Courses</h2>
			<p class="text-xl text-gray-600">
				Join our exclusive pre-launch program and be among the first to experience our innovative
				learning approach
			</p>
		</div>

		<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
			{#each courses as course}
				<div
					class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
				>
					<div class="p-8">
						<div class="mb-6 text-center">
							<h3 class="mb-2 text-2xl font-bold text-gray-900">{course.name}</h3>
							<p class="mb-4 text-gray-600">{course.description}</p>
							<div class="mb-6 text-3xl font-bold text-blue-600">{course.price}</div>
						</div>

						<div class="mb-6">
							<h4 class="mb-3 font-semibold text-gray-900">What you'll learn:</h4>
							<ul class="space-y-2">
								{#each course.features as feature}
									<li class="flex items-center text-gray-600">
										<svg
											class="mr-3 h-5 w-5 text-green-500"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											/>
										</svg>
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<a
							href="/register"
							class="block w-full rounded-md bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
						>
							Enroll Now
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">About SophNex Academy</h2>
				<p class="mb-6 text-lg text-gray-600">
					SophNex Academy is dedicated to making programming education accessible, practical, and
					engaging. Our mission is to empower individuals with the skills they need to succeed in
					the digital age.
				</p>
				<p class="mb-8 text-lg text-gray-600">
					We believe in learning by doing. Our courses combine theoretical knowledge with hands-on
					projects that you can add to your portfolio and showcase to potential employers.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-blue-600">2</div>
						<div class="text-gray-600">Pre-Launch Courses Available</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-blue-600">5K</div>
						<div class="text-gray-600">NGN per Course</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-lg">
				<h3 class="mb-6 text-2xl font-bold text-gray-900">Why Choose Us?</h3>
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-gray-900">Expert Instructors</h4>
							<p class="text-gray-600">
								Learn from industry professionals with years of experience
							</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-gray-900">Practical Projects</h4>
							<p class="text-gray-600">Build real-world projects to enhance your portfolio</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-gray-900">Flexible Learning</h4>
							<p class="text-gray-600">
								Learn at your own pace with lifetime access to course materials
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-blue-600 py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
			Ready to Start Your Coding Journey?
		</h2>
		<p class="mb-8 text-xl text-blue-100">
			Join our pre-launch program and get exclusive access to our courses at a special price.
		</p>
		<a
			href="/register"
			class="rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-gray-100"
		>
			Register Now - Only 5,000 NGN
		</a>
	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 py-12 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h3 class="mb-4 text-2xl font-bold">SophNex Academy</h3>
			<p class="mb-6 text-gray-400">Empowering the next generation of developers</p>
			<div class="flex justify-center space-x-6">
				<a href="/register" class="text-gray-400 transition-colors hover:text-white">Register</a>
				<a href="#courses" class="text-gray-400 transition-colors hover:text-white">Courses</a>
				<a href="#about" class="text-gray-400 transition-colors hover:text-white">About</a>
			</div>
			<div class="mt-8 border-t border-gray-800 pt-8">
				<p class="text-gray-400">&copy; 2024 SophNex Academy. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
