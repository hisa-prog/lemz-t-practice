/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'panel': "#176F7F",
        'overlay-gray': 'rgba(13, 12, 12, 0.8)',
      },
    },
  },
  plugins: [],
}
