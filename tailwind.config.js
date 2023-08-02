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
        menuSectionBg: "url('../../../public/assets/dessert1.webp')",
        contactsSectionBg: "url('../public/assets/interno.webp')",
        footerBg: "url('../public/assets/footerbg.webp')",
      },
      backgroundSize: {
        300: "400%",
      },
      backgroundPosition: {
        semiCenter: "60% 90%",
      },
      dropShadow: {
        heroShadow: "-4px 4px rgba(0, 0, 0, 0.15)",
        drop: "0 1.2px 1.2px rgba(0,0,0,0.8)",
      },
      boxShadow: {
        menuBtnBoxShadow: "4px 4px 4px rgb(0,0,0)",
      },
      gridTemplateRows: {
        custom: "1fr,1fr,2fr",
      },
    },
  },
  plugins: [],
};
