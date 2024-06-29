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
      screens: {
        'xs': '400px',   // Define the 'xs' breakpoint
      },
      colors:{
        textWhite50:'#D9D9D9',
        textWhite100:'#A8A8AB',
        textWhite200:'#FAF9F6', 
        textWhite250:'#FFFFFF',
        primary:'#E6255B',
        forground:'#272727'




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

