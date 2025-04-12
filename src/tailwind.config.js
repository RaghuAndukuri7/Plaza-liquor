/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'plaza-dark': '#1a1a1a',
          'plaza-light': '#f8f8f8',
          'plaza-amber': {
            DEFAULT: '#d97706',
            light: '#f59e0b',
            dark: '#b45309'
          },
          'plaza-gold': '#b8860b',
          'plaza-red': '#b91c1c',
          'plaza-burgundy': '#831843',
        },
        fontFamily: {
          'playfair': ['"Playfair Display"', 'serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
          'slide-up': 'slideUp 0.5s ease-out',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        backgroundImage: {
          'hero-pattern': "url('/src/assets/hero-bg.jpg')",
          'whiskey-texture': "url('/src/assets/whiskey-texture.jpg')",
          'wine-texture': "url('/src/assets/wine-texture.jpg')",
        },
        boxShadow: {
          'plaza': '0 4px 6px rgba(0, 0, 0, 0.1)',
          'plaza-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
          'plaza-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwindcss-text-shadow')
    ],
  }