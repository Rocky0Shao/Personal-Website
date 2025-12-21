## Project Overview

This is a **Personal Website** project built with **React** and **Vite**. It is based on the standard `vite-react` template, providing a minimal setup for a modern web application.

- **Purpose:** To serve as a personal website for "Rocky".
- **Technologies:** React, Vite, JavaScript
- **Architecture:** A single-page application (SPA).

## Building and Running

### Prerequisites

- Node.js and npm (or a compatible package manager)

### Installation

To install the project dependencies, run the following command from the `rocky-website` directory:

```bash
npm install
```

### Development

To run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Building for Production

To build the application for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Development Conventions

### Linting

This project uses [ESLint](https://eslint.org/) for code linting. To run the linter, use:

```bash
npm run lint
```

The configuration can be found in `eslint.config.js`.

### Coding Style

The project follows the standard coding style and practices for a React application. Key aspects include:

-   **Component-based architecture:** The UI is built using reusable React components.
-   **JSX:** Markup is written in JSX.
-   **CSS Modules:** The template is set up to use CSS files, which can be used as CSS Modules for component-scoped styles.

## File Structure

-   `rocky-website/`
    -   `index.html`: The main HTML file and entry point for the browser.
    -   `package.json`: Defines project metadata, dependencies, and scripts.
    -   `vite.config.js`: Configuration for the Vite build tool.
    -   `src/`: Contains the main application source code.
        -   `main.jsx`: The entry point of the React application.
        -   `App.jsx`: The main application component.
        -   `assets/`: For static assets like images and SVGs.
    -   `public/`: For static assets that should not be processed by Vite.
