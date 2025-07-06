<script lang="ts">
	let { data } = $props<{ data: any }>();

	let users = $derived(data.users);
</script>

<svelte:head>
	<title>Admin - SophNex Academy</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FF] to-[#E8ECFF]">
	<!-- Header -->
	<header class="mb-8 border-b border-[#3469B2]/20 bg-[#10112A]/90 shadow-lg backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div>
					<h1 class="text-xl font-semibold text-[#FFFFFF]">Admin Dashboard</h1>
					<p class="text-sm text-[#00C2A8]">View and manage course registrations</p>
				</div>
				<form method="POST" action="/admin/logout">
					<button
						type="submit"
						class="rounded-md bg-gradient-to-r from-[#FF5E5E] to-[#3469B2] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow-lg transition-all hover:from-[#3469B2] hover:to-[#FF5E5E] hover:shadow-xl"
					>
						Logout
					</button>
				</form>
			</div>
		</div>
	</header>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-lg border border-[#3469B2]/20 bg-[#FFFFFF]/80 shadow-lg backdrop-blur-sm">
			<div class="border-b border-[#3469B2]/20 px-6 py-4">
				<h2 class="text-xl font-semibold text-[#10112A]">Course Registrations ({users.length})</h2>
			</div>

			<div class="p-6">
				{#if users.length === 0}
					<div class="py-12 text-center">
						<svg
							class="mx-auto h-12 w-12 text-[#5254A3]"
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
						<h3 class="mt-2 text-sm font-medium text-[#10112A]">No registrations yet</h3>
						<p class="mt-1 text-sm text-[#5254A3]">
							Registrations will appear here once students start enrolling.
						</p>
					</div>
				{:else}
					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-[#3469B2]/20">
							<thead class="bg-[#F8F9FF]">
								<tr>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Name
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Email
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Phone
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Course
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Status
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Payment
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#10112A] uppercase"
									>
										Date
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-[#3469B2]/20 bg-[#FFFFFF]/50">
								{#each users as user}
									<tr class="transition-colors hover:bg-[#F8F9FF]/50">
										<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-[#10112A]">
											{user.name}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-[#5254A3]">
											{user.email}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-[#5254A3]">
											{user.phone}
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-[#5254A3]">
											<span class="capitalize">{user.course}</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap">
											<span
												class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {user.status ===
												'verified'
													? 'bg-[#00C2A8]/20 text-[#00C2A8]'
													: user.status === 'pending'
														? 'bg-[#FF5E5E]/20 text-[#FF5E5E]'
														: 'bg-[#5254A3]/20 text-[#5254A3]'}"
											>
												{user.status}
											</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap">
											<span
												class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {user.paymentStatus ===
												'paid'
													? 'bg-[#00C2A8]/20 text-[#00C2A8]'
													: user.paymentStatus === 'pending'
														? 'bg-[#FF5E5E]/20 text-[#FF5E5E]'
														: 'bg-[#5254A3]/20 text-[#5254A3]'}"
											>
												{user.paymentStatus}
											</span>
										</td>
										<td class="px-6 py-4 text-sm whitespace-nowrap text-[#5254A3]">
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
			<a href="/" class="font-medium text-[#3469B2] transition-colors hover:text-[#00C2A8]">
				← Back to Home
			</a>
		</div>
	</div>
</div>
