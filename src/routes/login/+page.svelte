<script lang="ts">
	let { form } = $props<{ form: any }>();

	let formData = $state({
		email: '',
		password: ''
	});
</script>

<svelte:head>
	<title>Student Login - SophNex Academy</title>
	<meta name="description" content="Login to access your course dashboard" />
</svelte:head>

<div
	class="flex min-h-screen flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:px-6 lg:px-8"
>
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Student Login</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Access your course dashboard and learning materials
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow-xl sm:rounded-lg sm:px-10">
			{#if form?.message}
				<div
					class="mb-6 rounded-md p-4 {form.success
						? 'border border-green-200 bg-green-50 text-green-800'
						: 'border border-red-200 bg-red-50 text-red-800'}"
				>
					{form.message}
				</div>
			{/if}

			<form method="POST" class="space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							bind:value={formData.email}
							required
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
							placeholder="Enter your registered email"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							bind:value={formData.password}
							required
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
							placeholder="Enter your password"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					>
						Sign in
					</button>
				</div>
			</form>

			<div class="mt-6">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-300" />
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="bg-white px-2 text-gray-500">New to SophNex Academy?</span>
					</div>
				</div>

				<div class="mt-6 text-center">
					<a href="/register" class="font-medium text-blue-600 hover:text-blue-500">
						Register for a course
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
