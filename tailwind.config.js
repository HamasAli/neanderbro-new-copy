/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--montserrat)"],
        helvetica: ["var(--helvetica)"],
        privacyFont: ["var(--privacyFont)"],
      },

      colors: {
        yellow: "#ffc107",
        blue: "#00a3ff",
        darkBlue: "#144272",
        dark: "#242435",
        white: "#ffffff",
        gray: "#e3e3e3",
        background: "#191919",
      },
      fontSize: {
        xs: ["12px"],
        sm: ["14px"],
        md: ["16px"],
        lg: ["20px"],
        xl: ["24px"],
        "2xl": ["32px"],
        "3xl": ["50px"],
      },
      margin: {
        "shift-left": "-22px",
      },
    },
  },
  plugins: [],
};
