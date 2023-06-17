/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#fff',
            red: {
                500: '#ff0f4d',
                600: '#ea003d',
            },
            purple: {
                300: '#352f4b',
                400: '#312b45',
            },
        },
    },
    plugins: [require('prettier-plugin-tailwindcss')],
}
