/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#CB997E',
        secondary:'#B7B7A4',
        tertiary:'#2B2826',
        primary1:'#DDBEA9',
        secondary1:'#A5A58D',
        tertiary1:'#E0E2DB',
        primary2:'#FFE8D6',
        secondary2:'#6B705C',
        tertiary2:'#F5F6F4',
        background1:'#f4f1de',
        background2:'#F0EBD1',
      }
    },
  },
  plugins: [],
}
