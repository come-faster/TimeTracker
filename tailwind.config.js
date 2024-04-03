/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#1d1d2a",
        emptyBar: "#2a2b3a",
        mainBar: "#353648",
        text:{
          title:"#FFF",
        },
        icon:{
          title:"#FFF",
        },
      }
    },
  },
  plugins: [],
}