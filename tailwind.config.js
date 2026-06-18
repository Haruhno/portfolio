/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(16, 185, 129, 0.15), 0 10px 40px rgba(15, 23, 42, 0.5)',
      },
    },
  },
  plugins: [],
}
