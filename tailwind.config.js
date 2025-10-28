/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          'DEFAULT': '#4f46e5', // Indigo 600
          'hover': '#4338ca', // Indigo 700
        },
        'secondary': '#111827', // Gray 900
        'light-bg': '#f9fafb', // Gray 50
        'dark-text': '#e5e7eb', // Gray 200
      },
    },
  },
  plugins: [],
};