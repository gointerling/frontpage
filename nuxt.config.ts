// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  generate: {
    routes: ['/'],
  },
  ssr: true,
  colorMode: {
    preference: 'light',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  modules: [
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700], // Define the font weights you need
    },
  },
  plugins: ['~/plugins/axios.js'],
})
