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
        teritory: '#588157',
        forthary: '#a3b18a',
        light: '#dad7cd',
        dark: '#0f172a',   // ✅ Fixed hex code
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
        dm_serif: ['DM Serif Text', 'serif'],
        condiment: ['Condiment', 'cursive'],
        merienda: ['Merienda', 'cursive']
      },
    },
  },
  plugins: [],
};
