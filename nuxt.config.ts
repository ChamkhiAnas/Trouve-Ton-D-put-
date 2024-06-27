// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseId: process.env.baseId,
      tableIdOrName:process.env.tableIdOrName,
      api_Key:process.env.api_Key,
      apiBase:process.env.apiBase,



    }
  },
  css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styling.scss" as *;'
        }
      }
    }
  },
})
