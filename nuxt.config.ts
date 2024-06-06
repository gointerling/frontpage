// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // apps name
  head: {
    title: 'Gointerling',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  modules: ['nuxt-icons', '@nuxtjs/google-fonts'],
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
})
