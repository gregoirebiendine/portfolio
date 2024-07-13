/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#676767',
        'gray-4': '#818181',
        'brand-1': '#9D8361',
        'brand-2': '#CCA878',
        'brand-3': '#E7C18F',
        'brand-4': '#F0D8B9',
      },
      fontFamily: {
        'sweet': ['sweet-sans-pro', 'sans-serif'],
        'cascadia': ['Cascadia Mono', 'sans-serif'],
      },
      padding: {
        '13': '3.125rem'
      }
    },
    plugins: [],
  }
}
