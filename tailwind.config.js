/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headings: ["var(--font-montserrat-header)"],
        body: ["var(--font-roboto-body)"],
      },
      screens: {
        tallOrWideAndLandscape: {
          raw: `only screen and ( (max-height: 480px) and (max-width: 960px)) and (orientation: landscape)`,
        },
      },
    },
  },
  plugins: [],
};
