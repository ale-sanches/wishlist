// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/ui'],
    devtools: {enabled: true},
    ui: {fonts: true},
    fonts: {
        families: [{name: 'Inter Variable', provider: 'none'}],
        providers: {
            google: false,
            googleicons: false,
            bunny: false,
            fontshare: false,
            fontsource: false,
            adobe: false,
            npm: false,
        },
    },
    css: ['~/assets/css/main.css'],
    compatibilityDate: '2025-07-15',
    vite: {
        warmupEntry: false,
        viteNode: {requestTimeout: 180000},
    },
    eslint: {
        config: {stylistic: true},
    },
})
