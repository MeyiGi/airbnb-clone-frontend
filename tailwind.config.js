module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: '#ff385c',
        airbnbDark: '#d50027',
      },
      borderColor: {
        DEFAULT: '#f3f4f6', // gray-100
      },
      fontFamily: {
        segui: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
