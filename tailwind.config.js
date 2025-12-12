/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hennessey-blue': '#052699',
        'hennessey-white': '#F9F9F9',
        'hennessey-black': '#030303',
      },
    },
  },
  plugins: [],
}
