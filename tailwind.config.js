/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        placeholder: '#999999',
        textLight: '#212121',
        gray: {
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
        },
      },
      fontFamily: {
        light: 'Urbanist_300Light',
        regular: 'Urbanist_400Regular',
        medium: 'Urbanist_500Medium',
        semibold: 'Urbanist_600SemiBold',
        bold: 'Urbanist_700Bold',
        black: 'Urbanist_900Black',
      },
    },
  },
  plugins: [],
};
