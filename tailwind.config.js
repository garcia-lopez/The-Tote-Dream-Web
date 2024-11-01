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
      },
    },
  },
  plugins: [],
}

