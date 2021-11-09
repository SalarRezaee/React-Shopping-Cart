module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      'xs': '380px',
      'sm': '540px',
      'md': '720px',
      'lg': '920px',
      'xl': '1040px'
    },
    extend: {
      primary : '#e03f3d',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}