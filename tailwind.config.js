// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#503795',
        violet: colors.violet,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
