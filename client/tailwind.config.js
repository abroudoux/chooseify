/** @type {import('tailwindcss').Config} */


export const darkMode = ["class"];
export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
];

export const theme = {
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
        },
    },
    extend: {
        keyframes: {
            "accordion-down": {
                from: { height: 0 },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: 0 },
            },
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
        },
        height: {
            screen: '96dvh',
        },
        width: {
            screen: '98dvw',
        },
    },
    colors: {
        'green': '#60D393',
        'green-lighten': '#70d79e',
        'black': '#1A1A1A',
        'white': '#FFFFFFDE',
        'grey-light': '#EBEDF0',
        'grey-light-lighten': '#f5f6f7',
        'grey-dark': '#2F2F2F',
        'grey-dark-lighten': '#393939',
        'blue-light': '#AAC8E4',
        'blue-light-lighten': '#d4e3f1',
    }
};

export const plugins = [
    require("tailwindcss-animate")
];