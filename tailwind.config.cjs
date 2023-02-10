/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-orange' : 'hsl(25, 97%, 53%)',
        'my-white' : 'hsl(0, 0%, 100%)',

        'my-light-gray' : 'hsl(217, 12%, 63%)',
        'my-medium-gray' : 'hsl(216, 12%, 54%)',

        'my-dark-blue' : 'hsl(213, 19%, 18%)',
        'my-very-dark-blue' : 'hsl(216, 12%, 8%)'
      }

    },
  },
  plugins: [],
}
