/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neutral-900': '#1D1B19',
                'primary': '#18E988',
            },
        },
    },
    plugins: [],
}

