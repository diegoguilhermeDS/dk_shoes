/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#ededed",
          opacity: "#33333380"
        },
        customGray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        }
      },
      minHeight: {
        "1": 250
      },
      animation: {
        animationOpenModal: "animationShowModal 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" 
      },
      keyframes: {
        animationShowModal: {
          "0%": {
            webkitTransform: "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            transform: "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            opacity: 0,
          },
          "100%": {
            webkitTransform: "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            transform: "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [],
}

