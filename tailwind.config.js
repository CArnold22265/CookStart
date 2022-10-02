/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./lessons/index.html",
    "./lessons/index.html",
    "./lessons/index.html",
  ],
  theme: {
    fontfamily: {
      roboto: ["roboto", "sans-serif"],
      robotoSlab: ["roboto slab", "serif"],
    },
    screens: {
      sm: "640px",
      md: "968px",
      lg: "1224px",
      xl: "1680px",
      xxl: "2036px",
    },
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
        roboto: ["roboto", "sans-serif"],
        robotoSlab: ["roboto slab", "serif"],
      },
      colors: {
        blu100: "#D3DFFF",
        blu200: "#ACC2FF",
        blu300: "#5E89ff",
        blu400: "#366CFF",
        blu500: "#0f50ff",
        blumain: "#003ee7",
        bludark: "#001f74",
        blackish: "rgb(26,26,26)",
        whitish: "#f3f3f3",
        PinkishAccent: "#e7003e",
        GreenAccent: "#3ee700",
        MainCompliment: "#E73500",
      },
    },
  },
  plugins: [],
};
