<script lang="ts">
	let { form } = $props<{ form: any }>();

	let formData = $state({
		email: '',
		password: ''
	});

	let showPaymentResume = $state(false);
	let paymentEmail = $state('');

	// Show payment resume if user has pending status
	$effect(() => {
		if (form?.userStatus === 'pending' && form?.userEmail) {
			showPaymentResume = true;
			paymentEmail = form.userEmail;
		}
	});

	function togglePaymentResume() {
		showPaymentResume = !showPaymentResume;
	}
</script>

<svelte:head>
	<title>Student Login - SophNex Academy</title>
	<meta name="description" content="Login to access your course dashboard" />
</svelte:head>

<div
	class="flex min-h-screen flex-col justify-center bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF] py-12 sm:px-6 lg:px-8"
>
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-[#10112A]">Student Login</h2>
		<p class="mt-2 text-center text-sm text-[#5254A3]">
			Access your course dashboard and learning materials
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow-xl sm:rounded-lg sm:px-10">
			{#if form?.message}
				<div
					class="mb-6 rounded-md p-4 {form.success
						? 'border border-[#00C2A8] bg-[#00C2A8]/10 text-[#00C2A8]'
						: 'border border-[#FF5E5E] bg-[#FF5E5E]/10 text-[#FF5E5E]'}"
				>
					{form.message}
				</div>
			{/if}

			<form method="POST" class="space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-[#10112A]">
						Email address
					</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							bind:value={formData.email}
							required
							class="block w-full appearance-none rounded-md border border-[#3469B2]/20 px-3 py-2 placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none sm:text-sm"
							placeholder="Enter your registered email"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-[#10112A]"> Password </label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							bind:value={formData.password}
							required
							class="block w-full appearance-none rounded-md border border-[#3469B2]/20 px-3 py-2 placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none sm:text-sm"
							placeholder="Enter your password"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-[#3469B2] to-[#00C2A8] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:from-[#00C2A8] hover:to-[#3469B2] focus:ring-2 focus:ring-[#3469B2] focus:ring-offset-2 focus:outline-none"
					>
						Sign in
					</button>
				</div>
			</form>

			<div class="mt-6">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-[#3469B2]/20" />
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="bg-white px-2 text-[#5254A3]">New to SophNex Academy?</span>
					</div>
				</div>

				<div class="mt-6 text-center">
					<a
						href="/register"
						class="font-medium text-[#3469B2] transition-colors hover:text-[#00C2A8]"
					>
						Register for a course
					</a>
				</div>
			</div>

			<!-- Payment Resume Section - Only show for pending users -->
			{#if form?.userStatus === 'pending'}
				<div class="mt-8">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-[#3469B2]/20" />
						</div>
						<div class="relative flex justify-center text-sm">
							<span class="bg-white px-2 text-[#5254A3]">Complete your payment</span>
						</div>
					</div>

					<div class="mt-4 rounded-lg border border-[#3469B2]/20 bg-[#F8F9FF] p-4">
						<h3 class="mb-2 text-sm font-medium text-[#10112A]">Resume Payment</h3>
						<p class="mb-4 text-xs text-[#5254A3]">
							Your account is pending verification. Complete your payment to access your course.
						</p>

						<form method="POST" action="/resume-payment" class="space-y-4">
							<div>
								<label for="payment-email" class="block text-xs font-medium text-[#10112A]"
									>Email address</label
								>
								<div class="mt-1">
									<input
										id="payment-email"
										name="email"
										type="email"
										bind:value={paymentEmail}
										required
										readonly
										class="block w-full appearance-none rounded-md border border-[#3469B2]/20 bg-[#F8F9FF] px-3 py-2 text-sm placeholder-[#5254A3] shadow-sm focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
										placeholder="Enter your registration email"
									/>
								</div>
							</div>

							<button
								type="submit"
								class="w-full rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-3 py-2 text-sm font-medium text-white shadow-sm transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] focus:ring-2 focus:ring-[#FF5E5E] focus:ring-offset-2 focus:outline-none"
							>
								Continue Payment
							</button>
						</form>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
