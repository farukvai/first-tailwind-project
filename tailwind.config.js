/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:  'class',
  content: ['*'],
  theme: {
    extend: {
      colors: {
        background: '#111827', // Custom dark background color
        text: '#E5E7EB',       // Custom light text color for dark mode
      },
    },
  },
  plugins: [],
}

