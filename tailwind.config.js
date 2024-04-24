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
 
    extend: {
      backgroundImage: {
        'banner-img': "url('./src/assets/Bannar/bannar.png')",
        'online-shopping': "url('./src/assets/online Shopping/Rectangle-01.png')",
       
       
      },
      colors: {
        primary : "#600451"
      },
 
    },
  },
  plugins: [],
}

