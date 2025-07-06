<script lang="ts">
	let { form } = $props<{ form: any }>();
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
			<p class="mt-2 text-sm text-[#5254A3]">Complete your payment to access your course</p>
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

		<div class="text-center">
			<a href="/login" class="font-medium text-[#3469B2] transition-colors hover:text-[#00C2A8]">
				← Back to Login
			</a>
		</div>
	</div>
</div>
