<script setup>
import { onMounted, onUnmounted } from 'vue';
import { menuItems, whatsappHref } from '~/data/site.js';

const emit = defineEmits(['close']);
const route = useRoute();
const wa = whatsappHref();

const onKey = (e) => e.key === 'Escape' && emit('close');
onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>

<template>
    <div class="fixed inset-0 z-[120] bg-[rgba(var(--scrim-rgb),0.97)] backdrop-blur-[20px] flex flex-col [animation:fadeIn_260ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <div class="flex items-center justify-between py-[15px] px-[clamp(16px,3vw,32px)] border-b border-subtle">
            <BrandLogo :size="24"></BrandLogo>
            <button
                class="bg-[rgba(var(--line-rgb),0.05)] border border-hairline rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-ivory"
                aria-label="Close menu"
                @click="emit('close')"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto pt-7 pb-5 px-[clamp(20px,5vw,40px)] flex flex-col gap-0.5">
            <NuxtLink
                v-for="(m, i) in menuItems"
                :key="m.id"
                :to="m.id === 'home' ? '/' : '/' + m.id"
                class="flex items-center gap-3.5 text-left py-[11px] font-display font-medium text-[clamp(24px,5.6vw,32px)] no-underline transition-[color,padding] duration-200 hover:text-gold-300 hover:pl-2"
                :class="(m.id === 'home' ? 'index' : m.id) === route.name ? 'text-gold-300' : 'text-ivory'"
                :style="{ animation: `menuIn 400ms cubic-bezier(0.16,1,0.3,1) ${i * 40}ms both` }"
                @click="emit('close')"
            >
                <span class="font-mono text-[11px] text-gold-600 tracking-[0.1em] min-w-[26px]">{{ String(i + 1).padStart(2, '0') }}</span>
                <span>{{ m.label }}</span>
            </NuxtLink>
        </div>

        <div class="pt-[18px] pb-7 px-[clamp(20px,5vw,40px)] border-t border-subtle flex flex-col gap-3">
            <UiButton to="/booking" size="lg" full-width @click="emit('close')">Book Your Event</UiButton>
            <a :href="wa" target="_blank" rel="noopener" class="flex items-center justify-center gap-2.5 h-[50px] rounded-full border border-[rgba(var(--line-rgb),0.16)] text-ivory no-underline text-[13px] font-semibold tracking-[0.08em] uppercase">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
                <span>Chat on WhatsApp</span>
            </a>
        </div>
    </div>
</template>
