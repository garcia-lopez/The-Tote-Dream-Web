/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "TD-LightPink": "#ffecf1",
        "TD-SquarePink": "#fcb8d6",
        "TD-DarkSquarePink": "#b15983",
        "TD-BigSquarePink": "#ffd5e8",
        'TD-HoverPink1': '#c37896',
        'TD-HoverPink2': '#fcc2dc',
      },
      screens: {
        'phone': {'max': '900px'}, // Applies to anything below 640px
      },
    },
  },
  plugins: [],
}

