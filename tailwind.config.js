/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-dark': '#121212',
        'dark': '#1B2430',
        'dark-blue': '#4a727d',
        'normal-blue': '#b3c9c9',
        'semi-blue': '#cef2e4',
        'light-blue': '#d3ede6',
        'bg-color': '#9b9b9b',
      },},
  },
  plugins: [require('@tailwindcss/typography'),],
}