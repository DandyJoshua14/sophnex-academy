<script lang="ts">
	let selectedDay = 1;

	const htmlCssLessons = [
		{
			day: 1,
			title: 'What is HTML & Web Structure',
			videoId: 'e8I6mVC-LH8',
			transcript: `Welcome to Day 1! Today we'll explain how websites work, what HTML is, and introduce tags and elements.

Key topics:
- How websites work
- What is HTML?
- Tags and elements
- Basic web structure`
		},
		{
			day: 2,
			title: 'Setting Up VS Code + Starter Page',
			videoId: '',
			transcript: `Today you'll learn how to install VS Code and create your first HTML file.

Key topics:
- Installing VS Code
- Creating a project folder
- Writing your first HTML file
- Opening HTML in the browser`
		},
		{
			day: 3,
			title: 'Text Elements',
			videoId: '',
			transcript: `Explore text elements in HTML: headings, paragraphs, and emphasis.

Key topics:
- <h1> to <h6> headings
- <p> paragraphs
- <strong> and <em> for emphasis
- Semantic meaning of text tags`
		},
		{
			day: 4,
			title: 'Links & Buttons',
			videoId: '',
			transcript: `Learn to add links and buttons to your web pages.

Key topics:
- <a> for internal and external links
- <button> element
- Opening links in new tabs
- Accessibility basics for links and buttons`
		},
		{
			day: 5,
			title: 'Images in HTML',
			videoId: '',
			transcript: `Add images to your site and understand alt text and optimization.

Key topics:
- <img> tag and src attribute
- alt attribute for accessibility
- Basic image optimization tips`
		},
		{
			day: 6,
			title: 'Lists',
			videoId: '',
			transcript: `Create ordered, unordered, and nested lists in HTML.

Key topics:
- <ul> unordered lists
- <ol> ordered lists
- <li> list items
- Nesting lists`
		},
		{
			day: 7,
			title: 'Mini Task: Simple About Me Page',
			videoId: '',
			transcript: `Apply what you've learned to build a simple profile page.

Task:
- Use headings, paragraphs, lists, links, and images
- Create an "About Me" page with your info and a photo`
		},
		{
			day: 8,
			title: 'Intro to CSS',
			videoId: '',
			transcript: `Start styling your pages with CSS.

Key topics:
- What is CSS?
- Inline, internal, and external CSS
- Adding style to HTML elements`
		},
		{
			day: 9,
			title: 'Colors & Fonts',
			videoId: '',
			transcript: `Learn to use colors and fonts in your designs.

Key topics:
- color and background-color properties
- Using Google Fonts
- Setting font-family`
		},
		{
			day: 10,
			title: 'Text Styling',
			videoId: '',
			transcript: `Style your text with CSS.

Key topics:
- font-size, font-weight, line-height
- Text alignment and decoration`
		},
		{
			day: 11,
			title: 'Spacing: Margin & Padding',
			videoId: '',
			transcript: `Understand and use margin and padding for layout.

Key topics:
- margin vs padding
- Visualizing box spacing
- Applying spacing to elements`
		},
		{
			day: 12,
			title: 'Borders & Backgrounds',
			videoId: '',
			transcript: `Add borders and backgrounds to your elements.

Key topics:
- border and border-radius
- background gradients
- Styling containers`
		},
		{
			day: 13,
			title: 'Display Basics',
			videoId: '',
			transcript: `Learn about display types in CSS.

Key topics:
- block, inline, and inline-block elements
- How display affects layout`
		},
		{
			day: 14,
			title: 'Mini Task: Style the About Me Page',
			videoId: '',
			transcript: `Apply CSS to your About Me page.

Task:
- Add colors, fonts, and spacing
- Make your page visually appealing`
		},
		{
			day: 15,
			title: 'Box Model & Widths',
			videoId: '',
			transcript: `Understand the CSS box model and sizing.

Key topics:
- width, height properties
- content-box vs border-box
- Visualizing the box model`
		},
		{
			day: 16,
			title: 'Flexbox Basics',
			videoId: '',
			transcript: `Start using Flexbox for layout.

Key topics:
- display: flex
- Aligning items horizontally and vertically
- flex-direction and justify-content`
		},
		{
			day: 17,
			title: 'Flexbox Continued',
			videoId: '',
			transcript: `Go deeper with Flexbox.

Key topics:
- flex-wrap and gap
- Aligning columns and rows
- Responsive layouts with Flexbox`
		},
		{
			day: 18,
			title: 'Media Queries',
			videoId: '',
			transcript: `Make your site responsive with media queries.

Key topics:
- What are media queries?
- Basic breakpoints for devices
- Responsive design principles`
		},
		{
			day: 19,
			title: 'CSS Units',
			videoId: '',
			transcript: `Learn about different CSS units.

Key topics:
- px, %, em, rem, vw, vh
- When to use each unit`
		},
		{
			day: 20,
			title: 'Centering Elements',
			videoId: '',
			transcript: `Master centering in CSS.

Key topics:
- Centering with Flexbox
- margin: auto for centering
- Vertical and horizontal alignment`
		},
		{
			day: 21,
			title: 'Mini Task: Responsive Card',
			videoId: '',
			transcript: `Build a responsive card layout.

Task:
- Use Flexbox and media queries
- Make the card mobile-friendly`
		},
		{
			day: 22,
			title: 'Forms & Inputs',
			videoId: '',
			transcript: `Create forms and input fields.

Key topics:
- <input>, <label>, <textarea>, <button>
- Basic form structure
- Accessibility tips`
		},
		{
			day: 23,
			title: 'Transitions & Hover Effects',
			videoId: '',
			transcript: `Add interactivity with CSS transitions and hover effects.

Key topics:
- :hover pseudo-class
- transition and transform properties
- Animating buttons and links`
		},
		{
			day: 24,
			title: 'Developer Tools',
			videoId: '',
			transcript: `Use browser developer tools to inspect and debug.

Key topics:
- Inspecting elements
- Testing responsiveness
- Debugging CSS`
		},
		{
			day: 25,
			title: 'Common Mistakes to Avoid',
			videoId: '',
			transcript: `Learn best practices and avoid common pitfalls.

Key topics:
- Clean, semantic HTML
- Avoiding inline styles
- Consistent naming and indentation`
		},
		{
			day: 26,
			title: 'Portfolio Planning',
			videoId: '',
			transcript: `Plan your portfolio project.

Key topics:
- Sketching a basic layout
- Deciding on sections and content
- Setting project goals`
		},
		{
			day: 27,
			title: 'Project Build Day 1',
			videoId: '',
			transcript: `Start building your portfolio homepage.

Task:
- Create the main layout
- Add navigation and sections`
		},
		{
			day: 28,
			title: 'Project Build Day 2',
			videoId: '',
			transcript: `Continue building and add responsiveness.

Task:
- Style your homepage
- Make it responsive for mobile devices`
		},
		{
			day: 29,
			title: 'Final Touches',
			videoId: '',
			transcript: `Polish your project and prepare for launch.

Key topics:
- Clean up code
- Polish design and layout
- Final checks`
		},
		{
			day: 30,
			title: 'Launch & Next Steps',
			videoId: '',
			transcript: `Deploy your site and plan your learning journey.

Key topics:
- Deploying with GitHub Pages
- Sharing your portfolio
- Next steps in web development`
		}
		
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
		{#if !lesson.videoId}
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
				</div>
				{:else}
	<div>
				<!-- Video Player -->
				<div class="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/{lesson.videoId}"
						title="Day {lesson.day} - {lesson.title}"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>

				<!-- Transcript -->
				<div class="rounded-lg bg-[#F8F9FF] p-4">
					<h3 class="mb-2 font-semibold text-[#10112A]">Lesson Transcript:</h3>
					<div class="whitespace-pre-line text-[#5254A3]">{lesson.transcript}</div>
				</div>
			</div>
			{/if}
		{/each}
	</div>
</div> 