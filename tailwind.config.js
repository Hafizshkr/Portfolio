/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'sm' : '360px',
      'md' : '768px',
      'lg' : '976px',
      'xl' : '1440px',

    },
    extend: {
      colors: {'secondary' : '#e4e4e7' }, 

    },
  },

  plugins: [],
}

