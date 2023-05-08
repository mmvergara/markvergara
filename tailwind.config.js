/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", "monospace"],
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        oneDarkPurple: "#ca78d6",
        oneDarkOrange: "#d19a66",
        oneDarkYellow: "#e5c07b",
        oneDarkGreen: "#98c379",
        oneDarkBlue: "#61afef",
        oneDarkRed: "#e06c75",
        oneDarkCyan: "#56b6c2",
        oneDarkGrey: " #9fa8b7",
        
        nightOwlBlue: "#51c3bc",
        nightOwlBlack: "#161b22",
        nightOwlBlack200: "#1a2029",
        nightOwlBlack300: "#21262d",
        nightOwlBlack400: "#2d333b",
        nightOwlBlack500: "#3b4048",
        nightOwlBlack600: "#484e55",
      },
    },
    plugins: [],
  },
};
