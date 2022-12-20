/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // hero: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url('header-image.png')",
        hero: "linear-gradient(rgba(0,0,0,.9) 0,transparent, 70%,rgba(0,0,0,.9)), url('header-image.png')",
      },
    },
  },
  plugins: [],
};
// background: rgba(0,0,0,.4);
// background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));
