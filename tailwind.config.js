/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      backgroundColor:{
        'brand':'#9affec',
      },
      backdropBlur:{
        'blur':'5px'
      }
    },
    variants:{
      extend:{
        backdropBlur:['responsive']
      }
    }
  },
  plugins: [],
}