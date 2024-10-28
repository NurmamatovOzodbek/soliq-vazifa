/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "promo-section-bg": "url('/src/assets/images/promoSectionBg.png')",
      },
    },
  },
  plugins: [],
};
