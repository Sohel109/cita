/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode with class strategy
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1e40af',
                    light: '#3b82f6',
                    dark: '#1e3a8a',
                },
                secondary: {
                    DEFAULT: '#7c3aed',
                    light: '#a78bfa',
                },
                accent: {
                    DEFAULT: '#f59e0b',
                    light: '#fbbf24',
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            colors: {
                'citadingue-blue': '#205E8C',
                'citadingue-light': '#3A7CA8',
                'citadingue-dark': '#154263',
                'citadingue-mint': '#50C8B3',
                'citadingue-yellow': '#FCD34D',
                'citadingue-bg': '#113046',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
