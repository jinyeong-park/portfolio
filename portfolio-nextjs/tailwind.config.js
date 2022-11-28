/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/*.{js, ts, jsx, tsx}",
    "./pages/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}
