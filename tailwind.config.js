module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#9E9E9E',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          dark: '#121212'
        }
      },
        primary: {
          DEFAULT: '#BE8ABF',
          ligher: '#EA9ABB'
        },
        secondary: {
          DEFAULT: '#FEA5AD',
          lighter: '#F8C3AF'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
