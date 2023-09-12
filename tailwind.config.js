/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        'sans': ['Inter'],
        'roboto': ['Roboto'],
      },
      extend: {
          boxShadow: {
            '3xl': ' 0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
          }
        },
    },
    plugins: [],
  }