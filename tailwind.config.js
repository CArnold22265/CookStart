/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontfamily: {
      roboto: ["roboto, sans-serif"],
      "roboto-slab": ["roboto, serif"],
    },
    screens: {
      sm: "480px",
      md: "720px",
      lg: "1076px",
      xl: "1340px",
    },
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
      },
      colors: {
        blu100: "#D3DFFF",
        blu200: "#ACC2FF",
        blu300: "#5E89ff",
        blu400: "#366CFF",
        blu500: "#0f50ff",
        blumain: "#003ee7",
        PinkishAccent: "#e7003e",
        GreenAccent: "#3ee700",
        MainCompliment: "#E73500",
      },
    },
  },
  plugins: [],
};
