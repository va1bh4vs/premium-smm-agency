module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6C2FDB', // electric purple
          50: '#F6F0FF',
        },
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    }
  },
  plugins: []
};
