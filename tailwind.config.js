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
        customPrimary: {
          DEFAULT: '#001D5B',
          50: '#145FFF',
          100: '#0051FE',
          200: '#0044D5',
          300: '#0037AD',
          400: '#002A84',
          500: '#001D5B',
          600: '#000B23',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'customGray': {
          50: '#FFFFFF',
          100: '#F5F7F9',
          200: '#DCE2E9',
          300: '#C3CED9',
          400: '#AABAC9',
          500: '#91A6B9',
          600: '#7891A9',
          700: '#617D98',
          800: '#51697F',
          900: '#415466',
          950: '#364655',
        },
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
      listStyleImage: {
        checkmark: 'url("assets/icons/check-package.svg")',
      },
    },
  },
  plugins: [],
}
