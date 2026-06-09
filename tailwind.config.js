/** @type {import('tailwindcss').Config} */
// FILE: tailwind.config.js (in root of project)
// CODE THIS FIRST after running: npx tailwindcss init -p

export default {
  // "content" tells Tailwind WHERE to look for class names
  // so it only generates CSS for classes you actually use (tree-shaking)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // all files in src folder
  ],
  theme: {
    extend: {
      // Custom font families — we'll load these from Google Fonts in index.css
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      // Custom colors extending Tailwind's default palette
      colors: {
        brand: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",   // primary green accent
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        surface: {
          DEFAULT: "#0a0f0d",   // deep dark bg
          card: "#111a15",      // slightly lighter card bg
          border: "#1e2d23",    // subtle borders
          muted: "#1a2820",     // muted elements
        },
      },
      // Custom animations
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow":  "glow 2s ease-in-out infinite alternate",
        "scan":  "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #22c55e33" },
          to:   { boxShadow: "0 0 30px #22c55e88, 0 0 60px #22c55e44" },
        },
        scan: {
          "0%":   { backgroundPosition: "0 -100%" },
          "100%": { backgroundPosition: "0 200%" },
        },
      },
      // Custom background sizes
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
