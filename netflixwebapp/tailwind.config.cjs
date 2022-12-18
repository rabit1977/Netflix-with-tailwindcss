/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)), url('header-image.png')",
      },
      logo: 'netflixwebappsrcassetsimageslogo.png',
    },
  },
  plugins: [],
};
