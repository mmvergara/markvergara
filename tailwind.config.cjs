/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Inter:["Inter", 'sans-serif']
    },
    extend: {
      colors: {
        crownBlue: "#1890bf",
        cardBg: "#1e252e",
        skillCardBg: "#242d38",
        slateD:"#b2becd",

        chakraUI: "#4db6ac",
        javascript:"#f0db4f",
        git:"#f34f29"

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
