<script setup>
import { footerExplore, footerServices, phoneDisplay, SERVICE_AREA } from '~/data/site.js';

const phone = phoneDisplay();
</script>

<template>
    <footer class="border-t border-subtle bg-ink-950">
        <div class="max-w-[1240px] mx-auto px-6 pt-[clamp(52px,7vw,80px)] pb-10 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-11">
            <div class="flex flex-col gap-4">
                <BrandLogo :size="26"></BrandLogo>
                <p class="m-0 text-sm leading-[1.7] text-ink-300 max-w-[32ch]">Stay Lit Party. Premium event entertainment — interactive performers, luxury special effects, and unforgettable enhancements.</p>
                <p class="m-0 font-display font-medium italic text-[15px] text-gold-400">Creating moments that leave a lasting impression.</p>
            </div>

            <div>
                <div class="text-[11px] tracking-[0.18em] uppercase text-gold-400 mb-[18px]">Explore</div>
                <div class="flex flex-col gap-[11px]">
                    <NuxtLink v-for="f in footerExplore" :key="f.id" :to="'/' + f.id" class="text-ink-200 text-sm no-underline transition-colors duration-200 hover:text-gold-300">{{ f.label }}</NuxtLink>
                </div>
            </div>

            <div>
                <div class="text-[11px] tracking-[0.18em] uppercase text-gold-400 mb-[18px]">Experiences</div>
                <div class="flex flex-col gap-[11px]">
                    <NuxtLink v-for="f in footerServices" :key="f.id" :to="'/' + f.id" class="text-ink-200 text-sm no-underline transition-colors duration-200 hover:text-gold-300">{{ f.label }}</NuxtLink>
                </div>
            </div>

            <div>
                <div class="text-[11px] tracking-[0.18em] uppercase text-gold-400 mb-[18px]">Contact</div>
                <div class="flex flex-col gap-[11px] text-sm text-ink-200">
                    <span>hello@slpevents.com</span>
                    <span>{{ phone }}</span>
                    <span class="text-ink-300">{{ SERVICE_AREA }}</span>
                    <div class="flex gap-4 mt-2 text-ink-300">
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"></circle></svg>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 7l10 6 10-6"></path></svg>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>
                    </div>
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
