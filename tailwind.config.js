/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#03001C",
        primary: "#301E67",
        secondary: "#5B8FB9",
        offWhite: "#F4EEE0",
      }
    },
  },
  plugins: [],
}

