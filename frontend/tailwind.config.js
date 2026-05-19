/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Cabinet Grotesk"', "Manrope", "sans-serif"],
                body: ["Manrope", "sans-serif"],
                mono: ['"JetBrains Mono"', "monospace"],
            },
            colors: {
                ink: {
                    900: "#050505",
                    800: "#0a0a0a",
                    700: "#121212",
                    600: "#1a1a1a",
                },
                bone: {
                    50: "#fafafa",
                    300: "#a3a3a3",
                    500: "#525252",
                },
                rust: {
                    DEFAULT: "#e05d3a",
                    hover: "#c74b2a",
                },
            },
        },
    },
    plugins: [],
};
