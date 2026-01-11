/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cvblue': '#0E5484',
        'darkcolor': '#0F4539',
        'cvgreen': '#3BD80D',
        'taggreen': '#00E278',
        // Custom dark mode colors
        'dark': {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
          950: '#171717',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      scrollbar: {
        thin: 'thin',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
} 