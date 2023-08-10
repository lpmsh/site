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

                dot: ["var(--dot-font)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                custom: {
                    50: "#effef2",
                    100: "#dbfde3",
                    200: "#b8fac7",
                    300: "#81f49c",
                    400: "#40e467",
                    500: "#1bcc46",
                    600: "#10a935",
                    700: "#10852d",
                    800: "#136828",
                    900: "#115623",
                    950: "#033010",
                },
                // {
                //     50: "#f5f6fa",
                //     100: "#eaebf4",
                //     200: "#d0d4e7",
                //     300: "#a6b0d3",
                //     400: "#7686ba",
                //     500: "#6374ae",
                //     600: "#414f88",
                //     700: "#36406e",
                //     800: "#30395c",
                //     900: "#2c324e",
                //     950: "#1d2034",
                // },
            },
        },
    },
    plugins: [],
};
