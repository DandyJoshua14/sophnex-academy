<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props<{ data: any; form: any }>();

	let { user } = data;
	let { form: formData } = form || {};

	let name = $state(user?.name || '');
	let isSubmitting = $state(false);

	// Handle form submission with loading state and update name after success
	function handleSubmit({ result }: { result: any }) {
		isSubmitting = false;
		if (result?.success && result?.message && result?.form) {
			if (result.form.name) {
				name = result.form.name;
			}
		}
	}
</script>

<svelte:head>
	<title>Profile - SophNex Academy</title>
	<meta name="description" content="Update your profile information" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF]">
	<!-- Header -->
	<header class="border-b border-[#3469B2]/20 bg-white/80 backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="flex flex-col items-center justify-between gap-2 py-4 text-center sm:flex-row sm:items-center sm:gap-0 sm:text-left"
			>
				<div
					class="flex w-full flex-col items-center space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-4"
				>
					<a
						href="/dashboard"
						class="w-full text-[#3469B2] transition-colors hover:text-[#00C2A8] sm:w-auto"
					>
						← Back to Dashboard
					</a>
					<h1 class="w-full text-2xl font-bold text-[#10112A] sm:w-auto">Profile Settings</h1>
				</div>
				<div class="mt-2 w-full text-sm text-[#5254A3] sm:mt-0 sm:w-auto">
					Welcome, {user?.name}
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="overflow-hidden rounded-xl bg-white shadow-lg">
			<!-- Profile Header -->
			<div class="bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-6 py-8">
				<div class="flex items-center space-x-4">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
						<span class="text-2xl font-bold text-white">
							{user?.name?.charAt(0)?.toUpperCase() || 'U'}
						</span>
					</div>
					<div>
						<h2 class="text-2xl font-bold text-white">{user?.name}</h2>
						<p class="text-white/80">{user?.email}</p>
						<p class="text-sm text-white/60 capitalize">{user?.course} Course</p>
					</div>
				</div>
			</div>

			<!-- Profile Form -->
			<div class="p-6">
				{#if form?.message}
					<div
						class="mb-6 rounded-md p-4 {form.success
							? 'border border-[#00C2A8] bg-[#00C2A8]/10 text-[#00C2A8]'
							: 'border border-[#FF5E5E] bg-[#FF5E5E]/10 text-[#FF5E5E]'}"
					>
						{form.message}
					</div>
				{/if}

				<form
					method="POST"
					action="?/updateName"
					use:enhance={(formEl) => {
						isSubmitting = true;
						return async ({ result }) => {
							if (
								result?.type === 'success' &&
								result?.data?.message == 'Name updated successfully!'
							) {
								isSubmitting = false;
								window.location.reload();
							}
						};
					}}
					class="space-y-6"
				>
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-[#10112A]">
							Full Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							bind:value={name}
							required
							minlength="2"
							class="block w-full rounded-md border border-[#3469B2]/20 px-4 py-3 text-[#10112A] placeholder-[#5254A3] shadow-sm transition-colors focus:border-[#3469B2] focus:ring-[#3469B2] focus:outline-none"
							placeholder="Enter your full name"
						/>
						<p class="mt-1 text-xs text-[#5254A3]">
							Your name will be displayed on your dashboard and course materials
						</p>
					</div>

					<div class="rounded-lg border border-[#3469B2]/20 bg-[#F8F9FF] p-4">
						<h3 class="mb-2 text-sm font-medium text-[#10112A]">Account Information</h3>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span class="text-[#5254A3]">Email:</span>
								<span class="font-medium text-[#10112A]">{user?.email}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-[#5254A3]">Course:</span>
								<span class="font-medium text-[#10112A] capitalize">{user?.course}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-[#5254A3]">Account Status:</span>
								<span class="font-medium text-[#00C2A8]">Verified</span>
							</div>
						</div>
					</div>

					<div class="flex justify-end space-x-4">
						<a
							href="/dashboard"
							class="rounded-md border border-[#3469B2]/20 bg-white px-6 py-3 text-sm font-medium text-[#5254A3] transition-colors hover:bg-[#F8F9FF]"
						>
							Cancel
						</a>
						<button
							type="submit"
							disabled={!name.trim() || name.trim().length < 2 || isSubmitting}
							class="rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-6 py-3 text-sm font-medium text-white transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] focus:ring-2 focus:ring-[#FF5E5E] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						>
							Update Name
						</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Future Features Notice -->
		<div class="mt-8 rounded-lg border border-[#3469B2]/20 bg-white p-6 shadow-md">
			<h3 class="mb-2 text-lg font-medium text-[#10112A]">Coming Soon</h3>
			<p class="mb-4 text-sm text-[#5254A3]">
				We're working on adding more profile customization options. In the future, you'll be able
				to:
			</p>
			<ul class="space-y-2 text-sm text-[#5254A3]">
				<li class="flex items-center">
					<span class="mr-3 h-2 w-2 rounded-full bg-[#00C2A8]"></span>
					Update your profile picture
				</li>
				<li class="flex items-center">
					<span class="mr-3 h-2 w-2 rounded-full bg-[#00C2A8]"></span>
					Change your password
				</li>
				<li class="flex items-center">
					<span class="mr-3 h-2 w-2 rounded-full bg-[#00C2A8]"></span>
					Update your phone number
				</li>
				<li class="flex items-center">
					<span class="mr-3 h-2 w-2 rounded-full bg-[#00C2A8]"></span>
					Manage notification preferences
				</li>
			</ul>
		</div>
	</main>
</div>
