/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {},
},
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.hide-scrollbar': {
        /* Hide scrollbar for Webkit browsers */
        '-webkit-overflow-scrolling': 'touch',
        'scrollbar-width': 'none', /* Firefox */
        '-ms-overflow-style': 'none', /* IE and Edge */
      },
      '.hide-scrollbar::-webkit-scrollbar': {
        display: 'none', /* Webkit browsers */
      },
    });
  },
],
}