/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.svg')",
        rainbowGradient: 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 57.94%, #E1D55D 20.57%)',
        infoGame: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      colors: {
        rainbowGradient: 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 57.94%, #E1D55D 20.57%)'
      }
    },
  },
  plugins: [],
}
