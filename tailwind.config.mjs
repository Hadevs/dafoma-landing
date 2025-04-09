/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'foma-blue': '#0033CC',
        'foma-green': '#33FF66',
        'dark-blue': '#001133',
      },
      fontFamily: {
        'sans': ['SF Pro Display', 'sans-serif'],
        'display': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}