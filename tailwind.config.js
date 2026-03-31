/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'cyber-cyan': '#00d9ff',
        'cyber-blue': '#0099ff',
        'cyber-purple': '#9d4edd',
        'cyber-pink': '#f72585',
        'cyber-gold': '#ffd60a',
        'dark-bg': '#0a1628',
        'darker-bg': '#050d1a',
        'card-bg': 'rgba(15, 25, 50, 0.6)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0f1f3d 100%)',
        'gradient-glow': 'linear-gradient(135deg, #00d9ff 0%, #9d4edd 50%, #f72585 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(157, 78, 221, 0.4)',
        'glow-pink': '0 0 20px rgba(247, 37, 133, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.6), 0 0 20px rgba(247, 37, 133, 0.3)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d9ff' },
          '100%': { boxShadow: '0 0 20px #00d9ff, 0 0 30px #00d9ff' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), 0 0 20px rgba(247, 37, 133, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}