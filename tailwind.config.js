{import('tailwindcss').Config} 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#1FB6FF',
        neonGreen: '#13CE66',
        neonPurple: '#7E5BEF',
      },
    },
  },
  plugins: [],
};
