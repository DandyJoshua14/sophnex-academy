<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let loading = $state(true);
	let verificationResult = $state<any>(null);
	let error = $state('');

	onMount(async () => {
		const reference = $page.url.searchParams.get('reference');

		if (!reference) {
			error = 'No payment reference found. Please try registering again.';
			loading = false;
			return;
		}

		try {
			// Call the verification API
			const response = await fetch('/api/verify-payment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ reference })
			});

			const result = await response.json();

			if (result.success) {
				verificationResult = result;
			} else {
				error = result.message || 'Verification failed. Please try again.';
			}
		} catch (err) {
			error = 'An error occurred during verification. Please try again.';
			console.error('Verification error:', err);
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Payment Verification - SophNex Academy</title>
	<meta name="description" content="Verifying your payment for SophNex Academy" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-md">
		<div class="mb-8 text-center">
			<h1 class="mb-2 text-3xl font-bold text-gray-900">Payment Verification</h1>
			<p class="text-gray-600">Verifying your payment...</p>
		</div>

		<div class="rounded-lg bg-white p-8 shadow-xl">
			{#if loading}
				<div class="py-8 text-center">
					<div
						class="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"
					></div>
					<p class="text-gray-600">Verifying your payment with Paystack...</p>
				</div>
			{:else if error}
				<div class="py-8 text-center">
					<div class="mx-auto mb-4 h-16 w-16 text-red-500">
						<svg fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-medium text-gray-900">Verification Failed</h3>
					<p class="mb-6 text-gray-600">{error}</p>
					<div class="space-y-3">
						<a
							href="/register"
							class="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
						>
							Try Registering Again
						</a>
						<a
							href="/"
							class="block w-full rounded-md border border-gray-300 px-4 py-2 text-center text-gray-700 transition-colors hover:bg-gray-50"
						>
							Back to Home
						</a>
					</div>
				</div>
			{:else if verificationResult?.success}
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
					<h3 class="mb-2 text-lg font-medium text-gray-900">Payment Successful!</h3>
					<p class="mb-4 text-gray-600">
						Your registration has been verified and payment completed.
					</p>

					<div class="mb-6 rounded-md border border-green-200 bg-green-50 p-4 text-left">
						<h4 class="mb-2 font-medium text-green-900">Registration Details:</h4>
						<div class="space-y-1 text-sm text-green-800">
							<p><strong>Name:</strong> {verificationResult.user.name}</p>
							<p><strong>Email:</strong> {verificationResult.user.email}</p>
							<p><strong>Course:</strong> {verificationResult.user.course}</p>
							<p><strong>Amount Paid:</strong> ₦{verificationResult.amount.toLocaleString()}</p>
							<p><strong>Reference:</strong> {verificationResult.reference}</p>
						</div>
					</div>

					<div class="mb-6 rounded-md border border-blue-200 bg-blue-50 p-4">
						<h4 class="mb-2 font-medium text-blue-900">What's Next?</h4>
						<p class="text-sm text-blue-800">
							We will contact you within 24 hours with your course access details and schedule.
						</p>
					</div>

					<a
						href="/"
						class="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
					>
						Back to Home
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>
