/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html, jsx}",
        "./src/**/*",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bgDark: "#121212",
                textPara: "#57556C",
                heading: "#3182CE",
                textWhite: "#FAF7F2",
                textLight: "#9ca3af",
                darkHover: "#18191E",
            },
        },
    },
    plugins: [],
};
