# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
# sophnex-academy

# SophNex Academy Website

A modern, responsive website for SophNex Academy built with SvelteKit and Tailwind CSS. The website features course registration functionality for pre-launch programming courses.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Course Registration**: User-friendly registration form for courses
- **Pre-launch Courses**: 
  - Introduction to Python (5,000 NGN)
  - Introduction to JavaScript (5,000 NGN)
- **Modern UI**: Clean, professional design with smooth animations
- **Form Validation**: Server-side form validation and error handling
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Frontend**: SvelteKit 5
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sophnex-academy-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout
│   ├── +page.svelte           # Homepage
│   ├── register/
│   │   ├── +page.svelte       # Registration page
│   │   └── +page.server.ts    # Server-side form handling
│   └── admin/
│       └── +page.svelte       # Admin dashboard (development)
├── app.css                    # Global styles
├── app.d.ts                   # TypeScript declarations
└── app.html                   # HTML template
```

## Pages

### Homepage (`/`)
- Hero section with call-to-action
- Course showcase
- About section
- Features and benefits

### Registration (`/register`)
- User registration form
- Course selection
- Form validation
- Success/error messages

### Admin (`/admin`)
- Development dashboard for viewing registrations
- Placeholder for future admin functionality

## Form Fields

The registration form collects:
- **Full Name** (required)
- **Email Address** (required, validated)
- **Phone Number** (required)
- **Course Selection** (required)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code

### Adding New Courses

To add new courses, update the `courses` array in:
1. `src/routes/+page.svelte` (for homepage display)
2. `src/routes/register/+page.svelte` (for registration form)

### Database Integration

Currently, the registration form logs data to the console. To integrate with a database:

1. Update `src/routes/register/+page.server.ts`
2. Add your database connection and queries
3. Implement proper error handling

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `build` folder
- **Railway**: Connect your repository
- **Self-hosted**: Deploy the built files to your server

## Future Enhancements

- [ ] Database integration (PostgreSQL, MongoDB, etc.)
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Course content management
- [ ] Student dashboard
- [ ] Progress tracking
- [ ] Certificate generation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.

---

**SophNex Academy** - Empowering the next generation of developers
