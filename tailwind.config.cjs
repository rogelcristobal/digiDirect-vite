/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      plus: ["Plus Jakarta Sans", "sans-serif"],
      readex:["Readex Pro", "sans-serif"],

      // e-ukraine
      "ukraine-light": ["ukraine-light", "sans-serif"],
      "ukraine-thin": ["ukraine-thin", "sans-serif"],
      "ukraine-regular": ["ukraine-regular", "sans-serif"],
      "ukraine-medium": ["ukraine-medium", "sans-serif"],
      "ukraine-bold": ["ukraine-bold", "sans-serif"],

      "liberationRegular": ["liberationRegular", "sans-serif"],
      "liberationBold": ["liberationBold", "sans-serif"],


      "ukraineHead-bold": ["ukraineHead-bold", "sans-serif"],
      "ukraineHead-light": ["ukraineHead-light", "sans-serif"],
      "ukraineHead-title": ["ukraineHead-title", "sans-serif"],
      "ukraineHead-medium": ["ukraineHead-medium", "sans-serif"],
      "ukraineHead-regular": ["ukraineHead-regular", "sans-serif"],
      "ukraineHead-thin": ["ukraineHead-thin", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
