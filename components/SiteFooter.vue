<script setup>
import { navItems, socialLinks } from '~/data/site.js';
</script>

<template>
    <footer class="border-t border-subtle bg-ink-950">
        <div class="max-w-[1240px] mx-auto px-6 py-[clamp(34px,5vw,54px)] flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <NuxtLink to="/" class="flex items-center no-underline">
                <BrandLogo :size="26"></BrandLogo>
            </NuxtLink>

            <div class="flex flex-col gap-5 md:items-end">
                <nav class="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <NuxtLink
                        v-for="n in navItems"
                        :key="n.id"
                        :to="'/' + n.id"
                        class="text-[12.5px] font-semibold tracking-[0.12em] uppercase text-ink-200 no-underline transition-colors duration-200 hover:text-gold-300"
                    >{{ n.label }}</NuxtLink>
                </nav>

                <div class="flex items-center gap-3">
                    <a
                        v-for="s in socialLinks"
                        :key="s.id"
                        :href="s.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="s.label + ' ' + s.handle"
                        class="flex h-9 w-9 items-center justify-center rounded-full border border-subtle text-ink-200 transition-colors duration-200 hover:border-gold-300 hover:text-gold-300"
                    >
                        <svg v-if="s.id === 'instagram'" viewBox="0 0 24 24" class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                        </svg>
                        <svg v-else-if="s.id === 'tiktok'" viewBox="0 0 24 24" class="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                            <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3.1-2.5-.3-3.5-1v6.4c0 3.4-2.4 5.7-5.5 5.7-2.9 0-5-2.1-5-4.9 0-2.9 2.3-5 5.2-4.9.4 0 .8.1 1.1.2v2.7a3 3 0 0 0-1.3-.3c-1.3 0-2.4 1-2.4 2.3s1 2.3 2.3 2.3c1.4 0 2.5-1.1 2.5-2.9V3h2.6Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="border-t border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[18px] flex flex-wrap gap-3 justify-between items-center text-xs text-ink-400">
                <span>© 2026 SLP Events · Stay Lit Party</span>
                <span class="font-display font-medium italic text-ink-300">Every entrance, grand.</span>
            </div>
        </div>
    </footer>
</template>
