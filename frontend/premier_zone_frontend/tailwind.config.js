/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  extend: {
    colors: {
      plGreen: '#4fb89a',
      plBlue: '#1f5f6f',
      plYellow: '#facc15',
    },
  },
},

  plugins: [],
};
