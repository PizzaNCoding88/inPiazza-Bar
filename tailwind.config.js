/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antic: ["var(--font-antic)"],
        madi: ["var(--font-madi)"],
        neon: ["var(--font-neon)"],
        americana: ["var(--font-americana)"],
      },
      colors: {
        primary: "#46403E",
        secondary: "#A17267",
        tertiary: "#F9FCFA",
        form: "#DEDEDE",
        customGrey: "#D9D9D9",
      },
      backgroundImage: {
        hero: "url('../public/assets/hero.webp')",
      },
      backgroundSize: {
        "240%": "400%",
      },
      backgroundPosition: {
        semiCenter: "40% 60%",
      },
      dropShadow: {
        heroShadow: "-4px 4px rgba(0, 0, 0, 0.15)",
        drop: "0 1.2px 1.2px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
