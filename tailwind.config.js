/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        "bright-red": "#fc4747",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        "project-text-color": "#cfd0d4",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
