module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {           
    fontFamily : {
      'Montserrat': 'Montserrat',
      'Poppins': 'Poppins',
      'OpenSans': 'Open Sans',
    },
      TransitionTimingFunction: {
        'cubic1' : 'cubic-bezier(.51,.03,0,1)',
      }
    }, 
  },
  plugins: [],
}