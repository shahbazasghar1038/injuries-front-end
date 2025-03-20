/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'smm': {'raw': '(max-width: 479px)'},
      'sm': {'min': '480px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1290px'},
      'xl': {'min': '1291px', 'max': '1560px'},
      'xxl': {'min': '1561px', 'max': '1920px'},
      '3xl': {'min': '1921px'},
    },
    extend: {},
  },
  plugins: [],
};
