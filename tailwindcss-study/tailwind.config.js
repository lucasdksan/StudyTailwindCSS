/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "modify-green": "#06d6a0",
        "modify-red": "#ff595e"
      }
    },
  },
  plugins: [],
}

