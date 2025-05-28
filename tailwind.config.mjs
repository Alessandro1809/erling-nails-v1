/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'theme-red': '#ff0080',
      },
      fontFamily: {
        'special': ['Satisfy', 'cursive'],
      },
      keyframes: {
        'delayed-spin': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        }
      },
      animation: {
        'delayed-spin': 'delayed-spin 1s linear infinite'
      }
    },
  },
  plugins: [],
} 