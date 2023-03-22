/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": { transform: "translate(0,-20px)" },
        },
      },
      animation: { updown: "updown 5s loop" },
      backgroundImage: {
        "hero-img": "url('/src/hero.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
