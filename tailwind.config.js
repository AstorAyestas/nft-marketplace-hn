module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
      colors: {
        blueTurquoise: {
          50: "#EBFBFF",
          100: "#D6F8FF",
          200: "#A8EFFF",
          300: "#66E3FF",
          400: "#05D1FF",
          500: "#00BCE4",
          600: "#00ABD1",
          700: "#0096B8",
          800: "#007D99",
          900: "#00576B",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
