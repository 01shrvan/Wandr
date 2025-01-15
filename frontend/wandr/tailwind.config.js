/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dsiplay: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#05B683",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
