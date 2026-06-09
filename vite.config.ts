// FILE: vite.config.ts (root of project)
// This is Vite's configuration file. Vite is the build tool that powers your dev server.
// Without this file, `npm run dev` won't know how to compile your React + TypeScript code.
//
// LEARNING:
// - defineConfig: a helper that gives you TypeScript autocomplete for Vite options
// - @vitejs/plugin-react: transforms JSX/TSX → JavaScript that browsers understand
// - base: set to './' for GitHub Pages deployment (relative paths)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],  // enables React Fast Refresh (hot reload) in development
  base: "./",          // use relative paths — required when deploying to GitHub Pages
});
