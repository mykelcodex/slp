<script setup>
import { ref, computed } from 'vue';

const route = useRoute();
const menuOpen = ref(false);

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

        <!-- Mobile sticky bar -->
        <div
            v-if="showMobileBar && !menuOpen"
            class="lg:hidden fixed left-0 right-0 bottom-0 z-[95] flex gap-2.5 px-3.5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-[rgba(var(--scrim-rgb),0.92)] backdrop-blur-[14px] border-t border-[rgba(var(--line-rgb),0.1)]"
        >
            <div class="flex-1">
                <NuxtLink to="/booking" class="flex w-full items-center justify-center h-[50px] rounded-full bg-gold-grad text-on-accent font-sans font-semibold uppercase text-[13.5px] tracking-[0.16em] no-underline">Book Your Event</NuxtLink>
            </div>
        </div>
    </div>
</template>
