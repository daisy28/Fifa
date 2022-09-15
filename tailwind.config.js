/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./index.html"],
  theme: {
    extend: {
      colors: {
        nav: "rgba(70, 8, 25, 0.9)",
        red: "#B31541",
        gold: "#DFA751",
        darkred: "#821333",
        black: "#131415",
        pink: "#BB0768",
        lightred: "#CC1447",
        lightpink : "rgba(187, 7, 104, 0.7699)",
        gray : "rgba(187, 7, 104, 0)",
        lightgray: "rgba(255, 255, 255, 0.5)"
      }
    },

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
