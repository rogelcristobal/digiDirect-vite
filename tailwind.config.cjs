/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        "inter":["Inter",'sans-serif'],
        "open":['Open Sans','sans-serif'],
        "plus":['Plus Jakarta Sans','sans-serif']
    },
    extend: {
      
    },
  },
  plugins: [ require('@tailwindcss/typography')],
}
