/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.svg')"
      },
      colors: {
        rainbowPurple: '#9572FC',
        rainbowSkyBlue: '#43E7AD',
        raibownskyGreen: 'E2D45C'
      }
    },
  },
  plugins: [],
}
