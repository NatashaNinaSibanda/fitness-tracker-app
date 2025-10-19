const { TbKeyframes } = require('react-icons/tb')

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
        neonYellow: '#fff333'
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 0.99 },
        '20%, 24%, 55%': { opacity: 0.4 },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite'
      },
      dropShadow: {
        neon: '0 0 10px #00ffff, 00 20px #00ffff, 0 0 30px #00ffff'
      
      },
    },
  },
  plugins: [],
}; 
