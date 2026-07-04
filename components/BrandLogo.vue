<script setup>
// Type-based wordmark + four-point "spark" motif (Bodoni Moda).
defineProps({
    variant: { type: String, default: 'wordmark' }, // 'wordmark' | 'monogram'
    size: { type: Number, default: 28 },
});
</script>

<template>
    <span role="img" aria-label="SLP Events" class="inline-flex items-center" :style="{ gap: variant === 'wordmark' ? '0.55em' : 0 }">
        <svg :width="size" :height="size" viewBox="0 0 64 64" fill="none" aria-hidden="true" class="block flex-none">
            <path d="M32 12 L36 28 L52 32 L36 36 L32 52 L28 36 L12 32 L28 28 Z" fill="var(--c-gold500)"></path>
            <circle cx="32" cy="32" r="3" fill="#f6f2e9"></circle>
        </svg>
        <span
            v-if="variant === 'wordmark'"
            class="font-display font-semibold leading-none text-ivory whitespace-nowrap tracking-[0.02em]"
            :style="{ fontSize: size * 0.82 + 'px' }"
        >SLP <span class="italic text-gold-500">Events</span></span>
    </span>
</template>
