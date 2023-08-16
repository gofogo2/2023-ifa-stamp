/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
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