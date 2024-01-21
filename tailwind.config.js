/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-red": "#fc4747",
        "very-dark-blue": "#10141E",
        "desaturated-dark-blue": "#5A698F",
        "dark-blue": "#161D2F",
      },
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}