/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url('header-image.png')",
      },
    },
  },
  plugins: [],
};
