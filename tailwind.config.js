/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          50: "#fff7ed",
          100: "#ffecd4",
          200: "#ffd5a9",
          300: "#ffb772",
          400: "#fe8e39",
          500: "#fc6e13",
          600: "#ed5309",
          700: "#d0400a",
          800: "#9c3010",
          900: "#7d2a11",
          950: "#441306",
        },
      },
    },
  },
  plugins: [],
};
