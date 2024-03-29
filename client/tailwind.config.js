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
            screen: '96vh',
            full: '100%'
        },
        width: {
            screen: '96vw',
            full: '100%'
        },
    },
    colors: {
        'green': 'var(--green)',
        'green-lighten': 'var(--green-lighten)',
        'black': 'var(--black)',
        'white': 'var(--white)',
        'grey-light': 'var(--grey-light)',
        'grey-light-lighten': 'var(--grey-light-lighten)',
        'grey-dark': 'var(--grey-dark)',
        'grey-dark-lighten': 'var(--grey-dark-lighten)',
        'blue-light': 'var(--blue-light)',
        'blue-light-lighten': 'var(--blue-light-lighten)',
    }
};

export const plugins = [
    require("tailwindcss-animate")
];
