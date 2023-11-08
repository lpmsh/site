/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Satoshi", "sans-serif"],

                dot: ["var(--dot-font)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bg: "#111111",
                // custom: {
                //     50: "#feffe5",
                //     100: "#fbffc7",
                //     200: "#f5ff96",
                //     300: "#e9fd59",
                //     400: "#d8f420",
                //     500: "#bbdb07",
                //     600: "#92af01",
                //     700: "#6d8506",
                //     800: "#57680c",
                //     900: "#48580f",
                //     950: "#263102",
                // }, //yellow
                custom: {
                    50: "#f2f7fd",
                    100: "#e5edf9",
                    200: "#c4daf3",
                    300: "#91bbe8",
                    400: "#5699da",
                    500: "#307bc7",
                    600: "#2162ac",
                    700: "#1b4d89",
                    800: "#1a4272",
                    900: "#1b395f",
                    950: "#12243f",
                },
            },
        },
    },
    plugins: [],
};
