/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ".5rem",
        "3xs": ".625rem",
        "4xs": ".75rem",
        "5xs": ".875rem",
        "6xs": "1rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.5rem",
        "7xl": "5rem",
        "8xl": "6rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.6xl") },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
