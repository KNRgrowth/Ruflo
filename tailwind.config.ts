import type { Config } from "tailwindcss";

// Brand colors and fonts are available as Tailwind classes too (e.g. text-brass, bg-ink, font-display).
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0d0c",
        char: "#171513",
        brass: { DEFAULT: "#b8945a", hi: "#e3c993", lo: "#7d6136" },
        cream: "#f2e9da",
        neon: "#ff5c93",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Impact", "sans-serif"],
        serif: ['"Bodoni Moda"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "Arial", "sans-serif"],
        sign: ['"Mrs Saint Delafield"', "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
