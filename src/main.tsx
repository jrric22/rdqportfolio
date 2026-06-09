// FILE: src/main.tsx
// CODE THIS LAST — The entry point. Renders the App into the DOM.
// Vite uses this file as the starting point of your entire app.
//
// LEARNING:
// - StrictMode: React dev helper that warns about potential issues (double-renders in dev only)
// - createRoot: React 18's new way to render. Previously was ReactDOM.render().
// - document.getElementById("root") targets the <div id="root"> in index.html

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ← Global CSS imported here (Tailwind + custom vars)
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// The "!" after getElementById is TypeScript's non-null assertion.
// It tells TS: "I know this element exists, don't worry about it being null."
// In real apps you might add: if (!el) throw new Error("Root not found");
