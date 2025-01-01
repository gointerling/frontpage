import path from 'path'
import fs from 'fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'fade', mode: 'out-in' },
  },
  ssr: false,
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
    'nuxt-vue3-google-signin',
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
  plugins: [
    '~/plugins/supabase.ts',
    '~/plugins/axios.js',
    '~/plugins/pinia.js',
   ],
  googleSignIn: {
    // ENV
    clientId: process.env.VITE_GOOGLE_CLIENT_ID,
  },
})