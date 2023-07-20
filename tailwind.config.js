/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFAD01',
        primaryLight: '#FFDE99',
        secondary: '#3F3D56',
        defaultText: '#3F3D56',
        disabled: '#C6C5D6',
        disabledText: '#757575',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
