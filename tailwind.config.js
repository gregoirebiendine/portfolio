/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      aspectRatio: {
        "2/1": "2/1"
      },
      colors: {
        "primary": "#5c5580",
        "secondary": "#5f9cc1",
        "tertiary": "#d76d6d",
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif"
      },
      backgroundImage: {
        'stats': "url('/bg-stats.svg')",
      }
    },
  },
  plugins: [],
}

