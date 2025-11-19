import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  auth: {
    baseURL: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    provider: {
      type: 'authjs',
    },
  },
  sidebaseAuth: {
    baseUrl: process.env.AUTH_ORIGIN || 'http://localhost:3000',
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      eslintPlugin({
        failOnError: false,
        failOnWarning: false,
        emitWarning: true,
        emitError: true,
      }),
    ],
  },
})
