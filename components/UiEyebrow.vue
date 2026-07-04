<script setup>
// Uppercase gold kicker with leading hairline — the brand's section opener.
defineProps({ ornament: { type: Boolean, default: true } });
</script>

<template>
    <span class="inline-flex items-center gap-3 font-sans font-semibold text-[12px] tracking-[0.22em] uppercase text-gold-300">
        <span v-if="ornament" class="w-7 h-px bg-current opacity-60"></span>
        <slot></slot>
    </span>
</template>
