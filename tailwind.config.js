/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  content: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'deep-blue': '#010026',
        // blue: '#2CBCE9',
        // red: '#DC4492',
        // yellow: '#FDCC49',
        // grey: '#ededed',
        // 'dark-grey': '#757575',
        // 'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        profile: "url('./assets/profile-picture.png')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
