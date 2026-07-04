<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { navItems } from '~/data/site.js';

defineProps({ menuOpen: Boolean });
const emit = defineEmits(['toggle-menu']);

const route = useRoute();
const scrolled = ref(false);
const onScroll = () => (scrolled.value = window.scrollY > 24);
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

// ---- Theme (light default; persisted in localStorage) ----
// The pre-paint init lives in an inline head script (nuxt.config.ts), so this
// state only mirrors the <html data-theme> attribute for the toggle icon.
const theme = useState('theme', () => 'light');
onMounted(() => {
    theme.value = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
});
const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme.value;
    try {
        localStorage.setItem('slp-theme', theme.value);
    } catch (e) {
        /* private mode */
    }
};
const themeLabel = computed(() => (theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'));

// Over the home hero (which is always dark) the header forces the dark scope
// so its text stays ivory; once scrolled (or elsewhere) it follows the page theme.
// `undefined` removes the attribute so the header simply inherits.
const headerTheme = computed(() => (route.name === 'index' && !scrolled.value ? 'dark' : undefined));
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-[90] transition-colors duration-300"
        :data-theme="menuOpen ? undefined : headerTheme"
        :class="scrolled || menuOpen
            ? 'bg-[rgba(var(--scrim-rgb),0.86)] backdrop-blur-[14px] border-b border-subtle'
            : 'bg-transparent border-b border-transparent'"
    >
        <div class="max-w-[1380px] mx-auto px-[clamp(16px,3vw,32px)] h-[74px] flex items-center justify-between gap-6">
            <NuxtLink to="/" class="flex items-center no-underline">
                <BrandLogo :size="26"></BrandLogo>
            </NuxtLink>

            <nav class="hidden lg:flex items-center gap-0.5">
                <NuxtLink
                    v-for="n in navItems"
                    :key="n.id"
                    :to="'/' + n.id"
                    class="px-[13px] py-2 font-sans font-semibold text-[12.5px] tracking-[0.09em] uppercase transition-colors duration-200 no-underline hover:text-gold-300"
                    :class="route.name === n.id ? 'text-gold-300' : 'text-ink-200'"
                >{{ n.label }}</NuxtLink>
            </nav>

            <div class="flex items-center gap-3">
                <button
                    class="bg-[rgba(var(--line-rgb),0.05)] border border-hairline rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-ivory transition-colors duration-200 hover:text-gold-300 hover:border-gold-line active:scale-[0.92]"
                    :aria-label="themeLabel"
                    :title="themeLabel"
                    @click="toggleTheme"
                >
                    <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M4.93 19.07l1.41-1.41"></path><path d="M17.66 6.34l1.41-1.41"></path></svg>
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
                <UiButton to="/booking" size="sm" class="hidden lg:inline-flex">Book Your Event</UiButton>
                <button
                    class="lg:hidden bg-[rgba(var(--line-rgb),0.05)] border border-hairline rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-ivory"
                    aria-label="Menu"
                    @click="emit('toggle-menu')"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path></svg>
                </button>
            </div>
        </div>
    </header>
</template>
