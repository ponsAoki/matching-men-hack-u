/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#faeee7",
        "highlight-color": "#ff8ba7",
        "secondary-color": "#ffc6c7",
        "tertiary-color": "#c3f0ca",
      },
      fontFamily: {
        "caveat": ["Caveat", "cursive"],
        "zen": ["Zen Maru Gothic", "sans-serif"]
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
