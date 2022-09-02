/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B2430',
        'dark-blue': '#4a727d',
        'normal-blue': '#b3c9c9',
        'semi-blue': '#cef2e4',
        'light-blue': '#d3ede6',
      },},
  },
  plugins: [require('@tailwindcss/typography'),],
}