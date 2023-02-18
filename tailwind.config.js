/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        'chalk': '#242729',
        'brightred': '#df4128',
        'tahiti': '#3ab7bf',

        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },

        //first = darker, second = lighter
        "1first": "#043F74", // navy
        "1second": "#BFD4DB", //light blue
        "2first": "#84B254", //dark green
        "2second": "#FFFDD0", //light green
        "3first": "#685695", // purple
        "3second": "#E4DCEC", // lilac
        "4first": "#C76C91", // dark rose
        "4second": "#F9EDEA", // light pink
        "5first": "#704F32", // brown
        "5second": "#F3E7D8", // pale yellow
      },
    },

    
  },
  plugins: [],
};
