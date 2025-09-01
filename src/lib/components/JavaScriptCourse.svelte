<script lang="ts">
	let selectedDay = $state(1);

	const javascriptLessons = [
		{
			day: 1,
			title: 'Introduction to JavaScript',
			videoId: 'wvms1tLaqUo',
			transcript: `Welcome to Day 1 of Introduction to JavaScript! Today we'll dive into the world of web programming with JavaScript.
			
			JavaScript is a versatile programming language that powers the modern web. We'll start by understanding what JavaScript is, its role in web development, and how to set up our development environment.
			
			Key topics for today:
			- What is JavaScript and why learn it?
			- Setting up your development environment
			- Your first JavaScript program
			- Understanding the browser console
			- Basic syntax and structure
			
			By the end of today, you'll have written your first JavaScript code and understand how it fits into web development.`
		},
		{
			day: 2,
			title: 'Variables and Data Types',
			videoId: '',
			transcript: `Day 2: Variables and Data Types in JavaScript
			
			Today we'll explore how to store and manipulate data in JavaScript using variables and different data types.
			
			Topics covered:
			- Declaring variables with let, const, and var
			- Understanding data types: numbers, strings, booleans, null, undefined
			- Type coercion and conversion
			- Variable naming conventions
			- Basic arithmetic operations
			
			Variables are the foundation of programming - they allow us to store and reference data throughout our programs.`
		},
		{
			day: 3,
			title: 'Strings and String Methods',
			videoId: '',
			transcript: `Day 3: Strings and String Methods
			
			Today we'll dive deep into working with text data in JavaScript through strings.
			
			What we'll learn:
			- String creation and manipulation
			- String methods: toUpperCase(), toLowerCase(), trim(), split()
			- Template literals and string interpolation
			- String concatenation
			- Working with special characters and escape sequences
			
			Strings are one of the most commonly used data types in JavaScript, especially in web development.`
		},
		{
			day: 4,
			title: 'Arrays and Array Methods',
			videoId: '',
			transcript: `Day 4: Arrays and Array Methods
			
			Today we'll learn about arrays, one of JavaScript's most important data structures.
			
			Key concepts:
			- Creating and accessing arrays
			- Array methods: push(), pop(), shift(), unshift()
			- Array iteration methods: forEach(), map(), filter()
			- Array destructuring
			- Working with nested arrays
			
			Arrays allow us to store multiple items in a single variable, making them perfect for organizing data.`
		},
		{
			day: 5,
			title: 'Objects and Object Methods',
			videoId: '',
			transcript: `Day 5: Objects and Object Methods
			
			Today we'll explore objects, JavaScript's key-value data structure.
			
			Topics covered:
			- Creating and accessing objects
			- Object methods and properties
			- Object destructuring
			- Object.keys(), Object.values(), Object.entries()
			- Nested objects
			
			Objects are the foundation of JavaScript and are used extensively in web development.`
		},
		{
			day: 6,
			title: 'Functions - Basics',
			videoId: '',
			transcript: `Day 6: Functions - Basics
			
			Today we'll start learning about functions, which are reusable blocks of code in JavaScript.
			
			What we'll cover:
			- Function declarations and expressions
			- Function parameters and arguments
			- Return statements
			- Function scope and hoisting
			- Arrow functions introduction
			
			Functions help us organize code, avoid repetition, and make our programs more modular.`
		},
		{
			day: 7,
			title: 'Functions - Advanced',
			videoId: '',
			transcript: `Day 7: Functions - Advanced
			
			Today we'll explore advanced function concepts in JavaScript.
			
			Key topics:
			- Default parameters
			- Rest parameters
			- Arrow functions in detail
			- Higher-order functions
			- Callback functions
			
			These advanced concepts make JavaScript functions incredibly flexible and powerful.`
		},
		{
			day: 8,
			title: 'Control Flow - If Statements',
			videoId: '',
			transcript: `Day 8: Control Flow - If Statements
			
			Today we'll learn how to make decisions in our JavaScript programs using conditional statements.
			
			Topics covered:
			- if, else if, and else statements
			- Comparison operators
			- Logical operators: &&, ||, !
			- Truthy and falsy values
			- Ternary operators
			
			Control structures allow your programs to respond to different conditions and make decisions.`
		},
		{
			day: 9,
			title: 'Loops - For Loops',
			videoId: '',
			transcript: `Day 9: Loops - For Loops
			
			Today we'll learn about for loops, which allow us to repeat code for each item in a sequence.
			
			What we'll learn:
			- Traditional for loops
			- for...of loops for arrays
			- for...in loops for objects
			- Loop control: break and continue
			- Nested loops
			
			Loops are essential for processing collections of data efficiently.`
		},
		{
			day: 10,
			title: 'Loops - While and Do-While',
			videoId: '',
			transcript: `Day 10: Loops - While and Do-While
			
			Today we'll explore while and do-while loops for conditional repetition.
			
			Key concepts:
			- While loop syntax and usage
			- Do-while loops
			- Infinite loops and how to avoid them
			- Using while loops for user input validation
			- Practical applications
			
			While loops are perfect for situations where you don't know in advance how many iterations you'll need.`
		},
		{
			day: 11,
			title: 'Error Handling',
			videoId: '',
			transcript: `Day 11: Error Handling
			
			Today we'll learn how to handle errors gracefully in our JavaScript programs.
			
			Topics covered:
			- Understanding exceptions and errors
			- Try-catch blocks
			- Multiple catch blocks
			- Finally blocks
			- Throwing custom errors
			
			Proper error handling makes your programs more robust and user-friendly.`
		},
		{
			day: 12,
			title: 'DOM Basics',
			videoId: '',
			transcript: `Day 12: DOM Basics
			
			Today we'll learn about the Document Object Model (DOM) and how JavaScript interacts with HTML.
			
			What we'll cover:
			- What is the DOM?
			- Selecting elements with querySelector and querySelectorAll
			- getElementById and getElementsByClassName
			- Traversing the DOM tree
			- Basic DOM manipulation
			
			The DOM is the bridge between JavaScript and HTML, allowing dynamic web page manipulation.`
		},
		{
			day: 13,
			title: 'DOM Manipulation',
			videoId: '',
			transcript: `Day 13: DOM Manipulation
			
			Today we'll learn how to modify HTML elements and their content using JavaScript.
			
			Key topics:
			- Changing element content and attributes
			- Creating and adding new elements
			- Removing elements
			- Modifying CSS styles
			- Working with classes
			
			DOM manipulation is essential for creating interactive web applications.`
		},
		{
			day: 14,
			title: 'Event Handling',
			videoId: '',
			transcript: `Day 14: Event Handling
			
			Today we'll learn how to respond to user interactions and browser events.
			
			Topics covered:
			- What are events?
			- Adding event listeners
			- Common events: click, submit, keydown, mouseover
			- Event object and its properties
			- Event delegation
			
			Event handling is what makes web pages interactive and responsive to user input.`
		},
		{
			day: 15,
			title: 'Forms and Form Validation',
			videoId: '',
			transcript: `Day 15: Forms and Form Validation
			
			Today we'll learn how to work with HTML forms and validate user input.
			
			What we'll learn:
			- Accessing form elements
			- Form submission handling
			- Input validation techniques
			- Preventing form submission
			- Real-time validation
			
			Form handling is crucial for collecting and processing user data.`
		},
		{
			day: 16,
			title: 'Local Storage and Session Storage',
			videoId: '',
			transcript: `Day 16: Local Storage and Session Storage
			
			Today we'll learn how to store data in the browser for persistence.
			
			Key concepts:
			- What is local storage?
			- Setting and getting data
			- Removing data and clearing storage
			- Session storage vs local storage
			- Working with JSON data
			
			Browser storage allows your web applications to remember user preferences and data.`
		},
		{
			day: 17,
			title: 'JSON and Data Handling',
			videoId: '',
			transcript: `Day 17: JSON and Data Handling
			
			Today we'll learn how to work with JSON data in JavaScript.
			
			Topics covered:
			- What is JSON?
			- Parsing JSON with JSON.parse()
			- Creating JSON with JSON.stringify()
			- Working with nested JSON structures
			- Error handling with JSON
			
			JSON is the standard format for data exchange in web applications.`
		},
		{
			day: 18,
			title: 'Fetch API - Making HTTP Requests',
			videoId: '',
			transcript: `Day 18: Fetch API - Making HTTP Requests
			
			Today we'll learn how to make HTTP requests to web servers using the Fetch API.
			
			What we'll cover:
			- What is the Fetch API?
			- Making GET requests
			- Handling responses
			- Error handling
			- Working with different response formats
			
			The Fetch API allows your JavaScript code to communicate with web servers and APIs.`
		},
		{
			day: 19,
			title: 'Async JavaScript - Promises',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 19: Async JavaScript - Promises
			
			Today we'll learn about promises for handling asynchronous operations.
			
			Key topics:
			- What are promises?
			- Creating promises
			- Promise states: pending, fulfilled, rejected
			- Promise methods: then(), catch(), finally()
			- Chaining promises
			
			Promises help manage asynchronous code and avoid callback hell.`
		},
		{
			day: 20,
			title: 'Async JavaScript - Async/Await',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 20: Async JavaScript - Async/Await
			
			Today we'll learn about async/await, a modern way to handle asynchronous operations.
			
			Topics covered:
			- Async functions
			- Await keyword
			- Error handling with try/catch
			- Async/await vs promises
			- Practical applications
			
			Async/await makes asynchronous code look and behave more like synchronous code.`
		},
		{
			day: 21,
			title: 'ES6+ Features - Destructuring',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 21: ES6+ Features - Destructuring
			
			Today we'll explore destructuring, a powerful ES6 feature for extracting data.
			
			What we'll learn:
			- Array destructuring
			- Object destructuring
			- Default values
			- Nested destructuring
			- Practical applications
			
			Destructuring makes your code more concise and readable.`
		},
		{
			day: 22,
			title: 'ES6+ Features - Spread and Rest',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 22: ES6+ Features - Spread and Rest
			
			Today we'll learn about spread and rest operators in JavaScript.
			
			Key concepts:
			- Spread operator for arrays and objects
			- Rest parameters in functions
			- Copying arrays and objects
			- Merging arrays and objects
			- Practical use cases
			
			Spread and rest operators provide elegant ways to work with collections of data.`
		},
		{
			day: 23,
			title: 'ES6+ Features - Template Literals',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 23: ES6+ Features - Template Literals
			
			Today we'll explore template literals for advanced string manipulation.
			
			Topics covered:
			- Template literal syntax
			- String interpolation
			- Multi-line strings
			- Tagged templates
			- Practical applications
			
			Template literals make string manipulation more powerful and readable.`
		},
		{
			day: 24,
			title: 'Modules and Import/Export',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 24: Modules and Import/Export
			
			Today we'll learn how to organize code into modules using ES6 modules.
			
			What we'll cover:
			- What are modules?
			- Export statements
			- Import statements
			- Default vs named exports
			- Module organization
			
			Modules help you organize code and create reusable components.`
		},
		{
			day: 25,
			title: 'Object-Oriented Programming in JavaScript',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 25: Object-Oriented Programming in JavaScript
			
			Today we'll learn about object-oriented programming concepts in JavaScript.
			
			Key topics:
			- Classes and constructors
			- Inheritance with extends
			- Method overriding
			- Static methods and properties
			- Private fields and methods
			
			JavaScript supports object-oriented programming with modern class syntax.`
		},
		{
			day: 26,
			title: 'Regular Expressions in JavaScript',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 26: Regular Expressions in JavaScript
			
			Today we'll learn about regular expressions for pattern matching in JavaScript.
			
			Topics covered:
			- Creating regular expressions
			- Basic patterns and flags
			- String methods with regex
			- RegExp object methods
			- Practical applications
			
			Regular expressions are powerful tools for searching and validating text.`
		},
		{
			day: 27,
			title: 'Testing JavaScript Code',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 27: Testing JavaScript Code
			
			Today we'll learn how to write tests for your JavaScript code.
			
			What we'll learn:
			- What is testing?
			- Writing simple tests
			- Testing frameworks introduction
			- Unit testing concepts
			- Best practices
			
			Testing is essential for writing reliable and maintainable JavaScript code.`
		},
		{
			day: 28,
			title: 'Project: Building a Todo App',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 28: Project: Building a Todo App
			
			Today we'll build a practical todo application using the skills we've learned.
			
			Project features:
			- Adding and removing todos
			- Marking todos as complete
			- Local storage persistence
			- Form validation
			- Responsive design
			
			This project will combine many of the concepts we've covered in the course.`
		},
		{
			day: 29,
			title: 'Project: Building a Weather App',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 29: Project: Building a Weather App
			
			Today we'll create a weather application that fetches data from an API.
			
			Project components:
			- Fetching weather data from API
			- Displaying weather information
			- Handling user input for location
			- Error handling for API calls
			- Responsive design
			
			This project will teach you how to work with external APIs and handle asynchronous data.`
		},
		{
			day: 30,
			title: 'Final Project and Course Wrap-up',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 30: Final Project and Course Wrap-up
			
			Congratulations on reaching the final day! Today we'll work on a comprehensive final project and review everything we've learned.
			
			Final project: Building a complete web application that combines:
			- DOM manipulation and event handling
			- API integration and data handling
			- Local storage for persistence
			- Form validation and user interaction
			- Responsive design principles
			
			We'll also discuss next steps in your JavaScript journey and advanced topics to explore.`
		}
	];

	function selectDay(day: number) {
		selectedDay = day;
	}
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-lg">
		<h1 class="mb-4 text-3xl font-bold text-[#10112A]">JavaScript Course Dashboard</h1>
		<p class="mb-6 text-[#5254A3]">
			This 30-day intensive course will take you from complete beginner to confident JavaScript
			developer. Each day builds upon the previous lessons, focusing on practical web development
			skills.
		</p>

		<!-- Day Selection -->
		<div class="mb-6 grid grid-cols-5 gap-2 md:grid-cols-10">
			{#each javascriptLessons as lesson}
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
		{#each javascriptLessons.filter((lesson) => lesson.day === selectedDay) as lesson}
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
