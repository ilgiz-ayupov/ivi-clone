/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./lib/**/*.tsx', './app/**/*.tsx'],
    theme: {
        container: {
            center: true,
            padding: {
                sm: '1rem',
                md: '1.5rem'
            }
        },
        colors: {
            transparent: 'transparent',
            white: '#fff',
            red: {
                500: '#ff0f4d',
                600: '#ea003d'
            },
            purple: {
                300: '#352f4b',
                400: '#312b45',
                800: '#1f1b2e'
            },
            gray: {
                300: '#a5a1b2',
                400: '#a5a1b2'
            },
            blue: {
                400: '#0194e5'
            }
        }
    },
    plugins: [require('prettier-plugin-tailwindcss')]
};
