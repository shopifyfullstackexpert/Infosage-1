/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#082d4a',
          dark: '#051d30',
        },
        accent: {
          DEFAULT: '#ec1d25',
          dark: '#c1141b',
        }
      }
    },
  },
  plugins: [],
}
