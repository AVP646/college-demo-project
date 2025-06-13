/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'bg-green-900',
    'w-3',
    'h-3',
    'opacity-100',
    'bg-white',
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1rem)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(0.8)' }
        }
      },
      animation: {
        moveingY: 'move 3s linear infinite',
        rotating: 'rotate 15s linear infinite',
        scalingUp: 'scaleUp 3s linear infinite'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px"
        }
      }
    }
  },
  plugins: []
}
