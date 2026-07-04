<script setup>
import { ref, computed } from 'vue';
import { whatsappHref } from '~/data/site.js';

const route = useRoute();
const menuOpen = ref(false);
const wa = whatsappHref();

// The sticky bar hides on the booking/quote flows (they have their own CTAs).
const showMobileBar = computed(() => !['booking', 'quote'].includes(route.name));
</script>

<template>
    <div>
        <SiteHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen"></SiteHeader>
        <MobileMenu v-if="menuOpen" @close="menuOpen = false"></MobileMenu>

        <NuxtPage></NuxtPage>

        <SiteFooter></SiteFooter>

        <!-- Spacer so the mobile sticky bar never covers footer content -->
        <div v-if="showMobileBar" class="lg:hidden h-[calc(74px+env(safe-area-inset-bottom))] bg-ink-950" aria-hidden="true"></div>

        <!-- Floating WhatsApp (desktop) -->
        <a
            v-if="!menuOpen"
            :href="wa"
            target="_blank"
            rel="noopener"
            aria-label="Chat on WhatsApp"
            class="hidden lg:flex fixed right-[22px] bottom-[22px] z-[100] w-14 h-14 rounded-full bg-[#1da851] items-center justify-center shadow-[0_8px_24px_var(--shadow45)] [animation:glowPulse_3s_ease-in-out_infinite] transition-transform hover:scale-[1.08]"
        >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#f6f2e9"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
        </a>

        <!-- Mobile sticky bar -->
        <div
            v-if="showMobileBar && !menuOpen"
            class="lg:hidden fixed left-0 right-0 bottom-0 z-[95] flex gap-2.5 px-3.5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-[rgba(var(--scrim-rgb),0.92)] backdrop-blur-[14px] border-t border-[rgba(var(--line-rgb),0.1)]"
        >
            <a :href="wa" target="_blank" rel="noopener" class="flex-none w-[50px] h-[50px] rounded-full border border-[rgba(var(--line-rgb),0.16)] flex items-center justify-center no-underline">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
            </a>
            <div class="flex-1">
                <NuxtLink to="/booking" class="flex w-full items-center justify-center h-[50px] rounded-full bg-gold-grad text-on-accent font-sans font-semibold uppercase text-[13.5px] tracking-[0.16em] no-underline">Book Your Event</NuxtLink>
            </div>
        </div>
    </div>
</template>
