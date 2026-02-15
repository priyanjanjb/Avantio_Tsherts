/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
    fontFamily: {
      belleza: ['Belleza', 'sans-serif'], // here you can set fallback
      lato: ['Lato', 'sans-serif'], // here you can set fallback
    },
  },
  },
  plugins: [],
}

