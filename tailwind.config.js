/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    textDecorationThickness: {
      3: '3px',
    },
    
    fontSize: {
      // customize with [fontsize, lineheight], 
      base: '5rem',
      sm: '3rem' ,
      xs: '7rem',
      '4xl': '2rem'
    },
    extend: {},
  },
  plugins: [],
}
