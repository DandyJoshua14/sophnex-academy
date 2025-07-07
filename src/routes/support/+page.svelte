<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	const supportEmail = 'sophnexacademy@gmail.com';
	const supportHours = 'Monday - Friday, 9:00 AM - 6:00 PM (WAT)';
	const responseTime = 'Within 24 hours';

	const faqs = [
		{
			question: 'How do I register for a course?',
			answer:
				'You can register for our courses by visiting the registration page and filling out the form. Choose between Python or JavaScript programming courses.'
		},
		{
			question: 'What payment methods do you accept?',
			answer:
				'We accept payments through Paystack, which supports various payment methods including cards, bank transfers, and mobile money.'
		},
		{
			question: 'How long do I have access to the course materials?',
			answer:
				'You have lifetime access to your course materials once you complete your registration and payment.'
		},
		{
			question: 'Can I switch between courses after registration?',
			answer:
				'Course changes can be accommodated within the first week of registration. Please contact us for assistance.'
		},
		{
			question: 'What if I have technical issues with the platform?',
			answer:
				"For any technical issues, please email us with details of the problem and we'll assist you promptly."
		}
	];
</script>

<SEO
	title="Customer Support - SophNex Academy"
	description="Get help and support for your SophNex Academy courses. Contact our customer support team for assistance with registration, payments, and technical issues."
	keywords="customer support, help desk, contact SophNex Academy, programming course support, technical support, student assistance"
	url="/support"
	type="website"
/>

<div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF]">
	<!-- Header -->
	<header class="border-b border-[#3469B2]/20 bg-white/80 backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between py-4">
				<div class="flex items-center space-x-4">
					<a href="/" class="text-[#3469B2] transition-colors hover:text-[#00C2A8]">
						← Back to Home
					</a>
					<h1 class="text-2xl font-bold text-[#10112A]">Customer Support</h1>
				</div>
				<div class="text-sm text-[#5254A3]">We're here to help!</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Contact Section -->
		<div class="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
			<div class="bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-6 py-8">
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
					>
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h2 class="mb-2 text-2xl font-bold text-white">Get in Touch</h2>
					<p class="text-white/80">We're here to help with any questions or concerns</p>
				</div>
			</div>

			<div class="p-6">
				<div class="grid gap-8 md:grid-cols-2">
					<!-- Email Contact -->
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2A8]/10"
						>
							<svg
								class="h-6 w-6 text-[#00C2A8]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 text-lg font-semibold text-[#10112A]">Email Support</h3>
						<p class="mb-4 text-[#5254A3]">Send us an email and we'll get back to you promptly</p>
						<a
							href="mailto:{supportEmail}"
							class="inline-flex items-center rounded-lg bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-6 py-3 font-medium text-white shadow-lg transition-all hover:from-[#00C2A8] hover:to-[#3469B2] hover:shadow-xl"
						>
							<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							{supportEmail}
						</a>
					</div>

					<!-- Support Hours -->
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5E5E]/10"
						>
							<svg
								class="h-6 w-6 text-[#FF5E5E]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 text-lg font-semibold text-[#10112A]">Support Hours</h3>
						<p class="mb-2 text-[#5254A3]">{supportHours}</p>
						<p class="text-sm font-medium text-[#00C2A8]">Response time: {responseTime}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
			<div class="px-6 py-8">
				<h2 class="mb-6 text-center text-2xl font-bold text-[#10112A]">
					Frequently Asked Questions
				</h2>
				<div class="space-y-4">
					{#each faqs as faq, index}
						<div class="rounded-lg border border-[#3469B2]/20 p-4">
							<h3 class="mb-2 font-semibold text-[#10112A]">{faq.question}</h3>
							<p class="text-sm text-[#5254A3]">{faq.answer}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Additional Support Info -->
		<div class="overflow-hidden rounded-xl bg-white shadow-lg">
			<div class="px-6 py-8">
				<h2 class="mb-6 text-center text-2xl font-bold text-[#10112A]">
					Before Contacting Support
				</h2>
				<div class="grid gap-6 md:grid-cols-3">
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3469B2]/10"
						>
							<svg
								class="h-6 w-6 text-[#3469B2]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 font-semibold text-[#10112A]">Check Documentation</h3>
						<p class="text-sm text-[#5254A3]">
							Review course materials and documentation for common solutions
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2A8]/10"
						>
							<svg
								class="h-6 w-6 text-[#00C2A8]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 font-semibold text-[#10112A]">Review FAQs</h3>
						<p class="text-sm text-[#5254A3]">
							Check our frequently asked questions for quick answers
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5E5E]/10"
						>
							<svg
								class="h-6 w-6 text-[#FF5E5E]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 font-semibold text-[#10112A]">Email Support</h3>
						<p class="text-sm text-[#5254A3]">Contact us directly for personalized assistance</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact CTA -->
		<div class="mt-8 text-center">
			<p class="mb-4 text-[#5254A3]">Still need help? We're here for you!</p>
			<a
				href="mailto:{supportEmail}"
				class="inline-flex items-center rounded-lg bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] hover:shadow-xl"
			>
				<svg class="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				Contact Support
			</a>
		</div>
	</main>
</div>
