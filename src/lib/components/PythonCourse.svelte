<script lang="ts">
	let selectedDay = $state(1);

	const pythonLessons = [
		{
			day: 1,
			title: 'Introduction to Python',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Welcome to Day 1 of Introduction to Python! Today we'll cover the basics of Python programming.
			
			Python is a high-level, interpreted programming language known for its simplicity and readability. We'll start by understanding what Python is, why it's popular, and how to set up our development environment.
			
			Key topics for today:
			- What is Python and why learn it?
			- Setting up Python on your computer
			- Your first Python program: "Hello, World!"
			- Understanding the Python interpreter
			- Basic syntax and indentation rules
			
			By the end of today, you'll have written your first Python program and understand the fundamental concepts that make Python such a powerful language.`
		},
		{
			day: 2,
			title: 'Variables and Data Types',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 2: Variables and Data Types in Python
			
			Today we'll explore how to store and manipulate data in Python using variables and different data types.
			
			Topics covered:
			- Creating and using variables
			- Understanding data types: integers, floats, strings, booleans
			- Type conversion and casting
			- Variable naming conventions
			- Basic arithmetic operations
			
			Variables are the foundation of programming - they allow us to store and reference data throughout our programs.`
		},
		{
			day: 3,
			title: 'Strings and String Operations',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 3: Strings and String Operations
			
			Today we'll dive deep into working with text data in Python through strings.
			
			What we'll learn:
			- String creation and manipulation
			- String methods: upper(), lower(), strip(), split()
			- String formatting with f-strings
			- String concatenation and repetition
			- Working with special characters and escape sequences
			
			Strings are one of the most commonly used data types in Python, and mastering them is essential for any programmer.`
		},
		{
			day: 4,
			title: 'Lists and Basic Collections',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 4: Lists and Basic Collections
			
			Today we'll learn about lists, one of Python's most versatile data structures.
			
			Key concepts:
			- Creating and accessing lists
			- List methods: append(), insert(), remove(), pop()
			- List slicing and indexing
			- List comprehension basics
			- Working with nested lists
			
			Lists allow us to store multiple items in a single variable, making them perfect for organizing data.`
		},
		{
			day: 5,
			title: 'Tuples and Sets',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 5: Tuples and Sets
			
			Today we'll explore two more important data structures: tuples and sets.
			
			Topics covered:
			- Tuples: immutable sequences
			- Tuple unpacking and methods
			- Sets: unordered collections of unique elements
			- Set operations: union, intersection, difference
			- When to use tuples vs lists vs sets
			
			Understanding the differences between these data structures will help you choose the right tool for each programming task.`
		},
		{
			day: 6,
			title: 'Dictionaries',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 6: Dictionaries
			
			Today we'll learn about dictionaries, Python's key-value data structure.
			
			What we'll cover:
			- Creating and accessing dictionaries
			- Dictionary methods: keys(), values(), items()
			- Adding, updating, and removing key-value pairs
			- Dictionary comprehension
			- Nested dictionaries
			
			Dictionaries are incredibly powerful for storing and organizing data with meaningful relationships.`
		},
		{
			day: 7,
			title: 'Control Structures - If Statements',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 7: Control Structures - If Statements
			
			Today we'll learn how to make decisions in our programs using conditional statements.
			
			Key topics:
			- if, elif, and else statements
			- Comparison operators
			- Logical operators: and, or, not
			- Truthy and falsy values
			- Nested if statements
			
			Control structures allow your programs to respond to different conditions and make decisions.`
		},
		{
			day: 8,
			title: 'Loops - For Loops',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 8: Loops - For Loops
			
			Today we'll learn about for loops, which allow us to repeat code for each item in a sequence.
			
			Topics covered:
			- Basic for loops with range()
			- Iterating over lists, strings, and other sequences
			- Loop control: break and continue
			- Nested loops
			- List comprehension with loops
			
			Loops are essential for processing collections of data efficiently.`
		},
		{
			day: 9,
			title: 'Loops - While Loops',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 9: Loops - While Loops
			
			Today we'll explore while loops, which repeat code as long as a condition is true.
			
			What we'll learn:
			- Basic while loop syntax
			- Infinite loops and how to avoid them
			- Using while loops for user input validation
			- While loops vs for loops
			- Practical applications of while loops
			
			While loops are perfect for situations where you don't know in advance how many iterations you'll need.`
		},
		{
			day: 10,
			title: 'Functions - Basics',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 10: Functions - Basics
			
			Today we'll start learning about functions, which are reusable blocks of code.
			
			Key concepts:
			- Defining and calling functions
			- Function parameters and arguments
			- Return statements
			- Function documentation with docstrings
			- Scope and local variables
			
			Functions help us organize code, avoid repetition, and make our programs more modular.`
		},
		{
			day: 11,
			title: 'Functions - Advanced',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 11: Functions - Advanced
			
			Today we'll explore advanced function concepts in Python.
			
			Topics covered:
			- Default parameters
			- Keyword arguments
			- Variable-length arguments (*args, **kwargs)
			- Lambda functions
			- Function as first-class objects
			
			These advanced concepts make Python functions incredibly flexible and powerful.`
		},
		{
			day: 12,
			title: 'Error Handling',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 12: Error Handling
			
			Today we'll learn how to handle errors gracefully in our Python programs.
			
			What we'll cover:
			- Understanding exceptions and errors
			- Try-except blocks
			- Multiple except clauses
			- Finally blocks
			- Raising custom exceptions
			
			Proper error handling makes your programs more robust and user-friendly.`
		},
		{
			day: 13,
			title: 'File Handling - Reading',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 13: File Handling - Reading
			
			Today we'll learn how to read data from files in Python.
			
			Key topics:
			- Opening and closing files
			- Reading files line by line
			- Reading entire files at once
			- Working with different file encodings
			- Context managers (with statements)
			
			File handling is essential for working with persistent data in your programs.`
		},
		{
			day: 14,
			title: 'File Handling - Writing',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 14: File Handling - Writing
			
			Today we'll learn how to write data to files in Python.
			
			Topics covered:
			- Writing text to files
			- Appending to existing files
			- Working with CSV files
			- File modes and permissions
			- Best practices for file operations
			
			Writing to files allows your programs to save data and create persistent output.`
		},
		{
			day: 15,
			title: 'Modules and Imports',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 15: Modules and Imports
			
			Today we'll learn how to organize code into modules and import functionality.
			
			What we'll learn:
			- Creating and using modules
			- Import statements: import, from...import
			- The __name__ variable
			- Built-in modules: math, random, datetime
			- Installing and using third-party packages
			
			Modules help you organize code and reuse functionality across multiple programs.`
		},
		{
			day: 16,
			title: 'Object-Oriented Programming - Classes',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 16: Object-Oriented Programming - Classes
			
			Today we'll introduce object-oriented programming concepts with classes.
			
			Key concepts:
			- What is object-oriented programming?
			- Creating classes and objects
			- Instance variables and methods
			- The __init__ method (constructor)
			- Self parameter and instance methods
			
			Classes allow you to create custom data types and organize related data and behavior.`
		},
		{
			day: 17,
			title: 'Object-Oriented Programming - Inheritance',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 17: Object-Oriented Programming - Inheritance
			
			Today we'll learn about inheritance, a key concept in object-oriented programming.
			
			Topics covered:
			- Creating subclasses
			- Method overriding
			- The super() function
			- Multiple inheritance
			- Abstract classes and interfaces
			
			Inheritance allows you to create hierarchies of related classes and reuse code.`
		},
		{
			day: 18,
			title: 'Object-Oriented Programming - Encapsulation',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 18: Object-Oriented Programming - Encapsulation
			
			Today we'll explore encapsulation and access control in Python classes.
			
			What we'll cover:
			- Public, private, and protected attributes
			- Name mangling in Python
			- Property decorators
			- Getters and setters
			- Data validation in classes
			
			Encapsulation helps protect data and control how it's accessed and modified.`
		},
		{
			day: 19,
			title: 'Regular Expressions',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 19: Regular Expressions
			
			Today we'll learn about regular expressions for pattern matching and text processing.
			
			Key topics:
			- Basic regex patterns
			- Character classes and quantifiers
			- Anchors and boundaries
			- Groups and capturing
			- Using the re module
			
			Regular expressions are powerful tools for searching and manipulating text.`
		},
		{
			day: 20,
			title: 'Working with JSON',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 20: Working with JSON
			
			Today we'll learn how to work with JSON data in Python.
			
			Topics covered:
			- What is JSON?
			- Parsing JSON with json.loads()
			- Creating JSON with json.dumps()
			- Working with nested JSON structures
			- JSON best practices
			
			JSON is the standard format for data exchange in web applications.`
		},
		{
			day: 21,
			title: 'Working with APIs',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 21: Working with APIs
			
			Today we'll learn how to interact with web APIs using Python.
			
			What we'll learn:
			- What are APIs?
			- Making HTTP requests with requests library
			- GET and POST requests
			- Handling API responses
			- Working with REST APIs
			
			APIs allow your Python programs to interact with external services and data.`
		},
		{
			day: 22,
			title: 'Database Basics with SQLite',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 22: Database Basics with SQLite
			
			Today we'll learn how to work with databases using SQLite in Python.
			
			Key concepts:
			- What are databases?
			- Connecting to SQLite databases
			- Creating tables and inserting data
			- Querying data with SELECT
			- Updating and deleting records
			
			Databases are essential for storing and retrieving structured data in applications.`
		},
		{
			day: 23,
			title: 'List and Dictionary Comprehensions',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 23: List and Dictionary Comprehensions
			
			Today we'll explore Python's powerful comprehension syntax.
			
			Topics covered:
			- List comprehensions
			- Dictionary comprehensions
			- Conditional comprehensions
			- Nested comprehensions
			- When to use comprehensions vs loops
			
			Comprehensions provide a concise way to create lists and dictionaries.`
		},
		{
			day: 24,
			title: 'Generators and Iterators',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 24: Generators and Iterators
			
			Today we'll learn about generators and iterators for memory-efficient data processing.
			
			What we'll cover:
			- What are iterators?
			- Creating generator functions with yield
			- Generator expressions
			- Memory efficiency of generators
			- Practical applications
			
			Generators are perfect for processing large datasets without loading everything into memory.`
		},
		{
			day: 25,
			title: 'Decorators',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 25: Decorators
			
			Today we'll learn about decorators, a powerful feature for modifying functions.
			
			Key topics:
			- What are decorators?
			- Creating simple decorators
			- Decorators with parameters
			- Multiple decorators
			- Built-in decorators: @property, @staticmethod
			
			Decorators allow you to add functionality to functions without modifying their code.`
		},
		{
			day: 26,
			title: 'Context Managers',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 26: Context Managers
			
			Today we'll learn about context managers for resource management.
			
			Topics covered:
			- What are context managers?
			- The with statement
			- Creating custom context managers
			- Contextlib utilities
			- Practical applications
			
			Context managers ensure proper resource cleanup and exception handling.`
		},
		{
			day: 27,
			title: 'Unit Testing',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 27: Unit Testing
			
			Today we'll learn how to write tests for your Python code.
			
			What we'll learn:
			- What is unit testing?
			- Writing tests with unittest
			- Test cases and assertions
			- Test fixtures and setup
			- Running tests and interpreting results
			
			Testing is essential for writing reliable and maintainable code.`
		},
		{
			day: 28,
			title: 'Project: Building a Web Scraper',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 28: Project: Building a Web Scraper
			
			Today we'll build a practical web scraper using the skills we've learned.
			
			Project components:
			- Using requests and BeautifulSoup
			- Parsing HTML content
			- Extracting specific data
			- Saving data to files
			- Error handling and rate limiting
			
			This project will combine many of the concepts we've covered in the course.`
		},
		{
			day: 29,
			title: 'Project: Building a Simple Web API',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 29: Project: Building a Simple Web API
			
			Today we'll create a simple web API using Flask.
			
			Project features:
			- Setting up a Flask application
			- Creating API endpoints
			- Handling HTTP methods
			- JSON request/response handling
			- Basic authentication
			
			This project will teach you how to create web services with Python.`
		},
		{
			day: 30,
			title: 'Final Project and Course Wrap-up',
			videoId: 'YYXdXT2l-Gg',
			transcript: `Day 30: Final Project and Course Wrap-up
			
			Congratulations on reaching the final day! Today we'll work on a comprehensive final project and review everything we've learned.
			
			Final project: Building a complete application that combines:
			- File handling and data processing
			- Object-oriented programming
			- Error handling and testing
			- API integration
			- User interface considerations
			
			We'll also discuss next steps in your Python journey and advanced topics to explore.`
		}
	];

	function selectDay(day: number) {
		selectedDay = day;
	}
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-lg">
		<h1 class="mb-4 text-3xl font-bold text-[#10112A]">Python Course Dashboard</h1>
		<p class="mb-6 text-[#5254A3]">
			This 30-day intensive course will take you from complete beginner to confident Python
			programmer. Each day builds upon the previous lessons, ensuring you have a solid foundation.
		</p>

		<!-- Day Selection -->
		<div class="mb-6 grid grid-cols-5 gap-2 md:grid-cols-10">
			{#each pythonLessons as lesson}
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
		{#each pythonLessons.filter((lesson) => lesson.day === selectedDay) as lesson}
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-[#10112A]">Day {lesson.day}: {lesson.title}</h2>

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
		{/each}
	</div>
</div>
