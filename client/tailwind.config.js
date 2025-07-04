/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#344e41',
        secondary: '#3a5a40',
        teritory: '#606c38',
        forthary: '#588157',
        light: '#a3b18a',
        dark: '#0f172a',   // ✅ Fixed hex code
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
        dm_serif: ['DM Serif Text', 'serif'],
        condiment: ['Condiment', 'cursive'],
        merienda: ['Merienda', 'cursive'],
        alegreya: ["Alegreya", "serif"],
        bodoni: ["Bodoni Moda", "serif"],
        rocker: ["New Rocker", "cursive"],
      },
    },
  },
  plugins: [],
};
