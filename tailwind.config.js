/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('./src/assets/Bannar/bannar.png')",
       
      }
    },
  },
  plugins: [],
}

