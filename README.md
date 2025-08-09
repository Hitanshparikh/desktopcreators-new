
# Desktop Creators

Desktop Creators is a modern, professional IT solutions website built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS. It showcases services, industries, testimonials, and contact information for an IT company based in Anand, Gujarat.

## Features

- Beautiful, responsive landing page
- Solutions/services grid with images
- Industry-specific solutions
- Testimonials section
- Interactive Google Maps integration
- Contact form with validation
- Modern UI components (shadcn-ui)
- Mobile-friendly navigation and layout

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

### Installation

1. **Clone the repository:**
	```sh
	git clone https://github.com/Hitanshparikh/desktopcreators-new.git
	cd desktopcreators-new
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Start the development server:**
	```sh
	npm run dev
	```
4. Open [http://localhost:8080](http://localhost:8080) in your browser to view the site.

## Project Structure

- `src/components/` — All React components (Hero, Footer, ServicesGrid, etc.)
- `src/assets/` — Images and static assets
- `src/pages/` — Main page and 404 page
- `public/` — Static files
- `tailwind.config.ts` — Tailwind CSS configuration
- `vite.config.ts` — Vite configuration

## Customization

- Update company info, services, and images in the respective components in `src/components/`.
- Change theme and styles via Tailwind and shadcn-ui.

## Deployment

You can deploy this project to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

**Build for production:**
```sh
npm run build
```
The output will be in the `dist/` folder.

## License

This project is open source and available under the [MIT License](LICENSE).
