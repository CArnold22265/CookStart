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
      lg: "1444px",
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
        ltLtblue: "#68BFF3",
        blu100: "#CDE5F5",
        blu200: "#9BCBEB",
        blu300: "#82BEE6",
        blu400: "#50A4DC",
        lightassblue: "#43b0f1",
        blu500: " #1D8AD2",
        ltblumain: "#43b0f1",
        blumain: "#057dcd",
        bludark: "#1e3d58",
        blackish: "rgb(26,26,26)",
        whitish: "#e8eef1",
        gpt1: "#F96738",
        gpt2: "#EBF1F6",
        // gptl1:  #6CA0DC,
        // gptl2: #92B6F4,
      },
    },
  },
  plugins: [],
};
