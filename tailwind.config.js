/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ["DM Sans", 'sans-serif'], 
        'NumFont': ['NumFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

