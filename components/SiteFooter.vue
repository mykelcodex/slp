<script setup>
import { navItems } from '~/data/site.js';
</script>

<template>
    <footer class="border-t border-subtle bg-ink-950">
        <div class="max-w-[1240px] mx-auto px-6 py-[clamp(34px,5vw,54px)] flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <NuxtLink to="/" class="flex items-center no-underline">
                <BrandLogo :size="26"></BrandLogo>
            </NuxtLink>

            <nav class="flex flex-wrap items-center gap-x-6 gap-y-3">
                <NuxtLink
                    v-for="n in navItems"
                    :key="n.id"
                    :to="'/' + n.id"
                    class="text-[12.5px] font-semibold tracking-[0.12em] uppercase text-ink-200 no-underline transition-colors duration-200 hover:text-gold-300"
                >{{ n.label }}</NuxtLink>
            </nav>
        </div>

        <div class="border-t border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[18px] flex flex-wrap gap-3 justify-between items-center text-xs text-ink-400">
                <span>© 2026 SLP Events · Stay Lit Party</span>
                <span class="font-display font-medium italic text-ink-300">Every entrance, grand.</span>
            </div>
        </div>
    </footer>
</template>
