/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#001D5B',
        'accent': {
          DEFAULT: '#ED7155',
          100: '#FFD700',
          200: '#FFC700',
          300: '#FFB700',
          500: '#FF9700',
          700: '#FF7700',
        },
      },
      // set all font family to poppins
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
