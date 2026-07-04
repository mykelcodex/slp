// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-01',
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    app: {
        head: {
            title: 'SLP Events — Stay Lit Party',
            htmlAttrs: { lang: 'en', 'data-theme': 'light' },
            script: [
                {
                    // Pre-paint theme init: reads the saved preference before first render
                    // so a dark-mode visitor never sees a light flash (and vice versa).
                    innerHTML:
                        "(function(){try{var t=localStorage.getItem('slp-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}})()",
                    tagPosition: 'head',
                },
            ],
            bodyAttrs: { class: 'bg-ink-950 text-ivory font-sans antialiased overflow-x-hidden' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Premium event entertainment — interactive performers, luxury special effects, and unforgettable enhancements.',
                },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&family=Manrope:wght@400..800&family=JetBrains+Mono:wght@400..600&display=swap',
                },
            ],
        },
    },
});
