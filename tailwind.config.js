/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2563eb",
          200: "#598EF3",
          300: "#D3E6FE",
        },
        accent: {
          100: "#d946ef",
          200: "#fae8ff",
        },
        secundary: {
          100: "#cbd5e1",
          200: "#94a3b8",
        },
        surface: {
          100: "#475569",
          200: "#334155",
          300: "#1E2229",
        },
      },
    },
  },
  plugins: [],
};
