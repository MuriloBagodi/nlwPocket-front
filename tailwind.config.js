/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'available': '-moz-available',
        'available-webkit': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
}

