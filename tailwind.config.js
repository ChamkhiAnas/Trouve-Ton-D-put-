/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        textWhite50:'#D9D9D9',
        textWhite100:'#A8A8AB',
        textWhite200:'#FAF9F6', 
        textWhite250:'#FFFFFF',



      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [],
    base: true,
    utils: true,
  },
}

