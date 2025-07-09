<script lang="ts">
	let selectedDay = 1;

	const htmlCssLessons = [
		{
			day: 1,
			title: 'Introduction to HTML & CSS',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Welcome to Day 1 of Introduction to HTML & CSS! Today we'll explore the basics of web structure and styling.

HTML (HyperText Markup Language) is the standard markup language for creating web pages, while CSS (Cascading Style Sheets) is used to style and layout web pages.

Key topics for today:
- What is HTML & CSS and why learn them?
- Setting up your development environment
- Your first HTML page
- Basic structure of an HTML document
- Introduction to CSS and how to link it to HTML

By the end of today, you'll have created your first web page and understand the fundamental building blocks of the web.`
		},
		// ... Add days 2-30 with similar placeholder structure ...
	];

	for (let i = 2; i <= 30; i++) {
		htmlCssLessons.push({
			day: i,
			title: `Day ${i} Lesson Title`,
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day ${i}: Lesson content coming soon.`
		});
	}

	function selectDay(day: number) {
		selectedDay = day;
	}
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-lg">
		<h1 class="mb-4 text-3xl font-bold text-[#10112A]">HTML &amp; CSS Course Dashboard</h1>
		<p class="mb-6 text-[#5254A3]">
			This 30-day intensive course will take you from complete beginner to confident web designer and developer. Each day builds upon the previous lessons, focusing on practical web development skills.
		</p>

		<!-- Day Selection -->
		<div class="mb-6 grid grid-cols-5 gap-2 md:grid-cols-10">
			{#each htmlCssLessons as lesson}
				<button
					on:click={() => selectDay(lesson.day)}
					class="rounded-lg border-2 p-4 transition-colors {selectedDay === lesson.day
						? 'border-[#3469B2] bg-[#3469B2] text-white'
						: 'border-[#3469B2] bg-white text-[#3469B2] hover:bg-[#3469B2] hover:text-white'}"
				>
					<div class="font-semibold">Day {lesson.day}</div>
				</button>
			{/each}
		</div>

		<!-- Selected Day Content -->
		{#each htmlCssLessons.filter((lesson) => lesson.day === selectedDay) as lesson}
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-[#10112A]">Day {lesson.day}: {lesson.title}</h2>
				<!-- Coming Soon Banner -->
				<div class="mb-2 flex items-center gap-2 rounded bg-yellow-100 px-4 py-2 text-yellow-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 flex-shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="#FEF3C7" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4m0 4h.01"
						/>
					</svg>
					<span class="font-medium">Coming soon</span>
				</div>
				<!-- Video Player -->
				<!-- <div class="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/{lesson.videoId}"
						title="Day {lesson.day} - {lesson.title}"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div> -->

				<!-- Transcript -->
				<!-- <div class="rounded-lg bg-[#F8F9FF] p-4">
					<h3 class="mb-2 font-semibold text-[#10112A]">Lesson Transcript:</h3>
					<div class="whitespace-pre-line text-[#5254A3]">{lesson.transcript}</div>
				</div> -->
			</div>
		{/each}
	</div>
</div> 