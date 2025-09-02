<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';

	let isMenuOpen = $state(false);

	const courses = [
		{
			id: 'python',
			name: 'Introduction to Python',
			price: '50,000 NGN',
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
			price: '50,000 NGN',
			description: 'Master the basics of JavaScript for web development',
			features: [
				'Variables and data types',
				'Functions and scope',
				'DOM manipulation',
				'Event handling',
				'Basic web applications'
			]
		},
		{
			id: 'htmlcss',
			name: 'Introduction to HTML & CSS',
			price: '50,000 NGN',
			description: 'Build and style beautiful web pages with HTML & CSS',
			features: [
				'HTML document structure',
				'Headings, paragraphs, and lists',
				'Links and images',
				'CSS selectors and properties',
				'Page layout and responsive design'
			]
		}
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<SEO
	title="SophNex Academy - Learn Python & JavaScript Programming in Nigeria"
	description="Join SophNex Academy for comprehensive programming courses in Nigeria. Learn Python and JavaScript from industry experts with hands-on projects and real-world applications. Start your coding journey today!"
	keywords="programming courses Nigeria, Python programming Nigeria, JavaScript programming Nigeria, coding bootcamp Nigeria, web development Nigeria, software development Nigeria, learn to code Nigeria, programming education Nigeria, coding school Nigeria"
	url="/"
	type="website"
/>

<!-- Navigation -->
<nav
	class="fixed top-4 right-4 left-4 z-50 mx-auto max-w-7xl rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-2xl"
>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<a href="/">
						<img src="/SOPHNEX%20ACADEMY%20LOGO-09.png" alt="SophNex Academy Logo" class="h-14 w-auto" style="max-height: 56px;" />
					</a>
				</div>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="#home"
					class="rounded-md px-3 py-2 text-sm font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Home</a
				>
				<a
					href="#courses"
					class="rounded-md px-3 py-2 text-sm font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Courses</a
				>
				<a
					href="#about"
					class="rounded-md px-3 py-2 text-sm font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>About</a
				>
				<a
					href="/support"
					class="rounded-md px-3 py-2 text-sm font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Support</a
				>
				<a
					href="/login"
					class="rounded-md px-3 py-2 text-sm font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Login</a
				>
				<a
					href="/register"
					class="rounded-md bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow-lg backdrop-blur-sm transition-all hover:from-[#00C2A8] hover:to-[#3469B2] hover:shadow-xl"
					>Register Now</a
				>
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMenu}
					class="text-[#10112A] transition-colors hover:text-[#00C2A8] focus:text-[#00C2A8] focus:outline-none"
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
			<div
				class="space-y-1 rounded-b-2xl border-t border-white/30 bg-white/10 px-2 pt-2 pb-3 backdrop-blur-2xl sm:px-3"
			>
				<a
					href="#home"
					class="block rounded-md px-3 py-2 text-base font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Home</a
				>
				<a
					href="#courses"
					class="block rounded-md px-3 py-2 text-base font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Courses</a
				>
				<a
					href="#about"
					class="block rounded-md px-3 py-2 text-base font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>About</a
				>
				<a
					href="/support"
					class="block rounded-md px-3 py-2 text-base font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Support</a
				>
				<a
					href="/login"
					class="block rounded-md px-3 py-2 text-base font-medium text-[#10112A] transition-colors hover:text-[#00C2A8]"
					>Login</a
				>
				<a
					href="/register"
					class="block rounded-md bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-3 py-2 text-base font-medium text-[#FFFFFF] backdrop-blur-sm transition-all hover:from-[#00C2A8] hover:to-[#3469B2]"
					>Register Now</a
				>
			</div>
		</div>
	{/if}
</nav>

<!-- Hero Section -->
<section id="home" class="bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF] pt-32">
	<div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold text-[#10112A] md:text-6xl">
				Learn to Code with
				<span class="bg-gradient-to-r from-[#3469B2] to-[#00C2A8] bg-clip-text text-transparent"
					>SophNex Academy</span
				>
			</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl text-[#5254A3]">
				Start your journey into the world of programming with our comprehensive courses. Learn from
				industry experts and build real-world projects.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/register"
					class="transform rounded-lg bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-8 py-3 text-lg font-medium text-[#FFFFFF] shadow-lg transition-all hover:scale-105 hover:from-[#00C2A8] hover:to-[#3469B2] hover:shadow-xl"
				>
					Get Started Today
				</a>
				<a
					href="#courses"
					class="rounded-lg border-2 border-[#3469B2] px-8 py-3 text-lg font-medium text-[#3469B2] transition-all hover:bg-[#3469B2] hover:text-[#FFFFFF] hover:shadow-lg"
				>
					View Courses
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Courses Section -->
<section id="courses" class="bg-[#FFFFFF] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-[#10112A] md:text-4xl">Pre-Launch Courses</h2>
			<p class="text-xl text-[#5254A3]">
				Join our exclusive pre-launch program and be among the first to experience our innovative
				learning approach
			</p>
		</div>

		<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
			{#each courses as course}
				<div
					class="transform overflow-hidden rounded-lg border-2 border-[#3469B2] bg-[#FFFFFF] shadow-lg transition-all hover:scale-105 hover:border-[#00C2A8] hover:shadow-xl {course.id === 'htmlcss' ? 'md:col-span-2' : ''}"
				>
					<div class="p-8">
						<div class="mb-6 text-center">
							<h3 class="mb-2 text-2xl font-bold text-[#3469B2]">{course.name}</h3>
							<p class="mb-4 text-[#5254A3]">{course.description}</p>
							<div
								class="mb-6 bg-gradient-to-r from-[#3469B2] to-[#00C2A8] bg-clip-text text-3xl font-bold text-transparent"
							>
								{course.price}
							</div>
						</div>

						<div class="mb-6">
							<h4 class="mb-3 font-semibold text-[#10112A]">What you'll learn:</h4>
							<ul class="space-y-2">
								{#each course.features as feature}
									<li class="flex items-center text-[#5254A3]">
										<svg
											class="mr-3 h-5 w-5 text-[#00C2A8]"
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
							class="block w-full rounded-md bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-4 py-3 text-center font-medium text-[#FFFFFF] shadow-lg transition-all hover:from-[#00C2A8] hover:to-[#3469B2] hover:shadow-xl"
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
<section id="about" class="bg-gradient-to-br from-[#3469B2] to-[#5254A3] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold text-[#FFFFFF] md:text-4xl">About SophNex Academy</h2>
				<p class="mb-6 text-lg text-[#FFFFFF]">
					SophNex Academy is dedicated to making programming education accessible, practical, and
					engaging. Our mission is to empower individuals with the skills they need to succeed in
					the digital age.
				</p>
				<p class="mb-8 text-lg text-[#FFFFFF]">
					We believe in learning by doing. Our courses combine theoretical knowledge with hands-on
					projects that you can add to your portfolio and showcase to potential employers.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-[#00C2A8]">3</div>
						<div class="text-[#FFFFFF]">Courses Available</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-[#00C2A8]">50K</div>
						<div class="text-[#FFFFFF]">NGN per Course</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-[#FFFFFF] p-8 shadow-lg">
				<h3 class="mb-6 text-2xl font-bold text-[#10112A]">Why Choose Us?</h3>
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-[#00C2A8]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-[#10112A]">Expert Instructors</h4>
							<p class="text-[#5254A3]">
								Learn from industry professionals with years of experience
							</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-[#00C2A8]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-[#10112A]">Practical Projects</h4>
							<p class="text-[#5254A3]">Build real-world projects to enhance your portfolio</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg class="h-6 w-6 text-[#00C2A8]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h4 class="text-lg font-medium text-[#10112A]">Flexible Learning</h4>
							<p class="text-[#5254A3]">
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
<section class="bg-gradient-to-r from-[#3469B2] to-[#00C2A8] py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-[#FFFFFF] md:text-4xl">
			Ready to Start Your Coding Journey?
		</h2>
		<p class="mb-8 text-xl text-[#FFFFFF]">
			Join our pre-launch program and get exclusive access to our courses at a special price.
		</p>
		<a
			href="/register"
			class="transform rounded-lg bg-[#FFFFFF] px-8 py-3 text-lg font-medium text-[#10112A] shadow-lg transition-all hover:scale-105 hover:bg-[#F8F9FF] hover:shadow-xl"
		>
			Register Now - Only 50,000 NGN
		</a>
	</div>
</section>

<!-- Footer -->
<footer class="bg-[#10112A] py-12 text-[#FFFFFF]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h3 class="mb-4 text-2xl font-bold text-[#3469B2]">SophNex Academy</h3>
			<p class="mb-6 text-[#5254A3]">Empowering the next generation of developers</p>
			<div class="flex justify-center space-x-6">
				<a href="/register" class="text-[#5254A3] transition-colors hover:text-[#00C2A8]"
					>Register</a
				>
				<a href="#courses" class="text-[#5254A3] transition-colors hover:text-[#00C2A8]">Courses</a>
				<a href="#about" class="text-[#5254A3] transition-colors hover:text-[#00C2A8]">About</a>
			</div>
			<div class="mt-8 border-t border-[#3469B2] pt-8">
				<p class="text-[#5254A3]">&copy; 2024 SophNex Academy. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
