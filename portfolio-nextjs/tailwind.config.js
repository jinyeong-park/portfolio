/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/*.{js, ts, jsx, tsx}",
    "./pages/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#292929',
      },

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}
