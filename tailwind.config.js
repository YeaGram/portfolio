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
      },
      colors: {
      'sun' : "#912C9B",
      'sunEnd': '#0A062B',
      'mountainEnd': '#150941'
      },
      dropShadow: {
        'primDrop': '2px 2px 2px rgba(0, 0, 0, 0.5)',
      },
      screens:{
        'screen320':'330px',
      },
      animation: {
        'myRotate': 'tridirotate 10s cubic-bezier(1, 0, 0, 1) infinite'
      },
      keyframes: {
        tridirotate: {
          '0%, 100%': {transform: 'rotateY(0deg)'},
          '50%':{transform: 'rotateY(360deg)'}
        }
      },
    },
    
  },
  plugins: [],
}