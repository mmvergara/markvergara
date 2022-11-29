/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        crownBlue: "#1890bf",
        cardBg: "#1e252e",

        nodejs: "#026e00",
        react: "#0595bd",
        typescript: "#2f74c0",
        expressjs: "#2f2f2f",
        mongodb: "#4ba13e",
        firebase: "#ea980b",

        docusaurus: "#2da94a",
        postgresql: "#31648c",
        tailwindcss: "#41a0aa",
        chakraui: "#1e8a81",
        materialui: "#0079f2",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
