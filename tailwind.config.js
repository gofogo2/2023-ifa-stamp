/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xxxs': '144px',
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '720px',
      'lg': '1080px',
    },
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