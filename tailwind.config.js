/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens:{
      sm:"390px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        brightRed : "hsl(12, 88% 59%)",
        brightRedLight : "hsl(12, 88% 69%)",
        brightRedSupLight : "hsl(12, 88% 95%)",
        darkBlue : "hsl(228, 39% 23%)",
        darkGrayishBlue : "hsl(227, 12% 61%)",
        veryDarkBlue : "hsl(233, 12% 13%)",
        veryPaleRed : "hsl(13, 100% 96%)",
        veryLightGray : "hsl(0, 0% 98%)",
      }
    },
  },
  plugins: [],
}

