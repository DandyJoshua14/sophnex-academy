<script lang="ts">
	let { data } = $props<{ data: any }>();

	let users = $derived(data.users);
</script>

<svelte:head>
	<title>Admin - SophNex Academy</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 flex items-center justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
				<p class="mt-2 text-gray-600">View and manage course registrations</p>
			</div>
			<form method="POST" action="/admin/logout">
				<button
					type="submit"
					class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
				>
					Logout
				</button>
			</form>
		</div>

		<div class="rounded-lg bg-white shadow">
			<div class="border-b border-gray-200 px-6 py-4">
				<h2 class="text-xl font-semibold text-gray-900">Course Registrations ({users.length})</h2>
			</div>

			<div class="p-6">
				{#if users.length === 0}
					<div class="py-12 text-center">
						<svg
							class="mx-auto h-12 w-12 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						<h3 class="mt-2 text-sm font-medium text-gray-900">No registrations yet</h3>
						<p class="mt-1 text-sm text-gray-500">
							Registrations will appear here once students start enrolling.
						</p>
					</div>
				{:else}
					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Name
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Email
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Phone
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Course
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Status
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Payment
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Date
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								{#each users as user}
									<tr>
										<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
											{user.name}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
											{user.email}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
											{user.phone}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
											<span class="capitalize">{user.course}</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap">
											<span
												class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {user.status ===
												'verified'
													? 'bg-green-100 text-green-800'
													: user.status === 'pending'
														? 'bg-yellow-100 text-yellow-800'
														: 'bg-red-100 text-red-800'}"
											>
												{user.status}
											</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap">
											<span
												class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {user.paymentStatus ===
												'paid'
													? 'bg-green-100 text-green-800'
													: user.paymentStatus === 'pending'
														? 'bg-yellow-100 text-yellow-800'
														: 'bg-red-100 text-red-800'}"
											>
												{user.paymentStatus}
											</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
											{new Date(user.createdAt).toLocaleDateString()}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>
		</div>

		<div class="mt-8">
			<a href="/" class="font-medium text-blue-600 hover:text-blue-800"> ← Back to Home </a>
		</div>
	</div>
</div>
