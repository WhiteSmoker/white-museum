/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)", ...fontFamily.mono],
      },
      aspectRatio: {
        "10/16": "10 / 16",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      boxShadow: {
        all: "0 0 20px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
