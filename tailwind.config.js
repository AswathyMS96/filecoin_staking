/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'grotesk': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary:"#0047FF",
        secondary:"#00FFE0",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-border': {
          'border-image': 'linear-gradient(45deg, #00FFE0, #0047FF) 1',
          'border-image-slice': '1',
          'border-radius':'29px',
          'border-width':'2px'
        },
      };
      addUtilities(newUtilities, ['before', 'after']);
    },
  ],
}
