/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Nunito : ["Nunito Sans", "sans-serif"]
    },
    colors: {
      primary : "#600451"
    },
    extend: {
      backgroundImage: {
        'banner-img': "url('./src/assets/Bannar/bannar.png')",
       
      }
    },
  },
  plugins: [],
}

