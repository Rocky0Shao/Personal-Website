# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal website for Rocky built with React and Vite. The main application code lives in the `rocky-website/` subdirectory.

## Commands

All commands should be run from the `rocky-website/` directory:

```bash
cd rocky-website

npm install        # Install dependencies
npm run dev        # Start development server with HMR
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

## Architecture

- **Single-page application** using React Router for client-side routing
- **Routes**: `/` (Home), `/about` (About), `/contact` (Contact)
- **Supabase** backend for contact form submissions

### Source Structure (rocky-website/src/)

- `main.jsx` - React entry point
- `App.jsx` - Root component with routing setup
- `pages/` - Route-level components (Home, About, Contact)
- `components/` - Reusable UI components:
  - `Navbar` - Site navigation
  - `ThemeToggle` - Light/dark theme switcher
  - `CursorTrail` - Visual cursor effect
  - `CV` - Resume/CV display
  - `Headshot` - Profile image component
  - `ContactForm` - Form with Supabase integration
- `supabaseClient.js` - Supabase client configuration
