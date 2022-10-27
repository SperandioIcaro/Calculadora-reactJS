/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      'px': '350px',
    },
    extend: {
      fontFamily: { 
        start: 'Press Start 2P',
        sans: 'Audiowide', 
      },
    },
  },
  plugins: [],
}