/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1a1f",
        secondary: "#32363f",
        card: "#1f2126",
        "primary-text": "#e0dfd6",
      },
    },
  },
  plugins: [],
};
