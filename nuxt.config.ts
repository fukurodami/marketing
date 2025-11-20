export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  auth: {
    baseURL: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    provider: {
      type: 'authjs',
    },
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth', '@nuxt/eslint'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
})
