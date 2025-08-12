<script lang="ts">
	import { enhance } from '$app/forms';
	import SEO from '$lib/components/SEO.svelte';

	let { form } = $props<{ form: any }>();

	let formData = $state({
		email: '',
		password: ''
	});

	let showPaymentResume = $state(false);
	let pendingEmail = $state('');

	// Check if we should show payment resume section
	$effect(() => {
		if (form?.userStatus === 'pending' && form?.userEmail) {
			showPaymentResume = true;
			pendingEmail = form.userEmail;
		}
	});

	function handleSubmit() {
		// Reset payment resume state on new login attempt
		showPaymentResume = false;
		pendingEmail = '';
	}
</script>



<SEO
	title="Login to Your Account - SophNex Academy"
	description="Login to your SophNex Academy account to access your programming courses. Continue your learning journey with Python and JavaScript programming."
	keywords="login SophNex Academy, student login, course access, programming course login, Python course login, JavaScript course login"
	url="/login"
	type="website"
/>



<div
	class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF] px-4 py-12 sm:px-6 lg:px-8"
>
	<div class="mx-auto max-w-md">
		<div class="mb-8 text-center">
			<h1 class="mb-2 text-3xl font-bold text-[#10112A]">Welcome Back</h1>
			<p class="text-[#5254A3]">Sign in to access your courses</p>
		</div>

		<div class="rounded-lg bg-white p-8 shadow-xl">
			{#if form?.message}
				<div
					class="mb-6 rounded-md p-4 {form.success
						? 'border border-[#00C2A8] bg-[#00C2A8]/10 text-[#00C2A8]'
						: 'border border-[#FF5E5E] bg-[#FF5E5E]/10 text-[#FF5E5E]'}"
				>
					{form.message}
				</div>
			{/if}

			<form method="POST" use:enhance={handleSubmit} class="space-y-6">
				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-[#10112A]">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						bind:value={formData.email}
						required
						class="block w-full rounded-md border border-[#3469B2]/20 px-3 py-2 text-[#10112A] placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
						placeholder="Enter your email address"
					/>
				</div>

				<div>
					<label for="password" class="mb-2 block text-sm font-medium text-[#10112A]">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						bind:value={formData.password}
						required
						class="block w-full rounded-md border border-[#3469B2]/20 px-3 py-2 text-[#10112A] placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
						placeholder="Enter your password"
					/>
				</div>

				<button
					type="submit"
					class="w-full rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] focus:ring-2 focus:ring-[#FF5E5E] focus:ring-offset-2 focus:outline-none"
				>
					Sign In
				</button>
			</form>

			<!-- Payment Resume Section -->
			{#if showPaymentResume}
				<div class="mt-6 border-t border-[#3469B2]/20 pt-6">
					<div class="rounded-md border border-[#3469B2]/20 bg-[#F8F9FF] p-4">
						<h3 class="mb-2 text-sm font-medium text-[#10112A]">Complete Your Payment</h3>
						<p class="mb-4 text-sm text-[#5254A3]">
							Your account is pending payment verification. Click below to resume your payment
							process.
						</p>
						<form method="POST" action="/resume-payment" class="space-y-4">
							<input type="hidden" name="email" value={pendingEmail} />
							<div>
								<label for="course" class="mb-2 block text-sm font-medium text-[#10112A]">
									Select Course
								</label>
								<select
									id="course"
									name="course"
									required
									class="block w-full rounded-md border border-[#3469B2]/20 px-3 py-2 text-[#10112A] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
								>
									<option value="">Choose a course</option>
									<option value="python">Introduction to Python - 50,000 NGN</option>
									<option value="javascript">Introduction to JavaScript - 50,000 NGN</option>
									<option value="htmlcss">Introduction to HTML & CSS - 50,000 NGN</option>
								</select>
							</div>
							<button
								type="submit"
								class="w-full rounded-md bg-gradient-to-r from-[#00C2A8] to-[#3469B2] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:from-[#3469B2] hover:to-[#00C2A8] focus:ring-2 focus:ring-[#00C2A8] focus:ring-offset-2 focus:outline-none"
							>
								Resume Payment
							</button>
						</form>
					</div>
				</div>
			{/if}

			<div class="mt-6 text-center">
				<p class="text-sm text-[#5254A3]">
					Don't have an account?
					<a href="/register" class="font-medium text-[#3469B2] hover:text-[#00C2A8]"
						>Register here</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
