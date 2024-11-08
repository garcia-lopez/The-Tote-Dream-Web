/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "TD-LightPink": "#e1cdc3",
        "TD-SquarePink": "#d7949c",
        "TD-DarkSquarePink": "#993b46",
        "TD-BigSquarePink": "#d599A0",
        'TD-HoverPink1': '#a8575f',
        'TD-HoverPink2': '#e2a8b0',
      },
      screens: {
        'phone': {'max': '900px'}, // Applies to anything below 640px
      },
    },
  },
  plugins: [],
}

