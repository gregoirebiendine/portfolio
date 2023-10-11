/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "graybg": "#141010",
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "bebas-neue": "'bebas-neue', sans-serif",
        "bebas-neue-pro": "'bebas-neue-pro', sans-serif",
        "bahnschrift": "'bahnschrift', sans-serif",
      },
      backgroundImage: {
        'deco': "url('/background-deco.svg')",
      }
    },
  },
  plugins: [],
}

