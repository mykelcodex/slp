<script setup>
// Gold-bordered closing CTA banner used at the bottom of most pages.
// Buttons go in the default slot.
defineProps({
    title: { type: String, required: true },
    desc: { type: String, default: '' },
});
</script>

<template>
    <div v-reveal class="flex flex-wrap items-center justify-between gap-6 p-[clamp(32px,5vw,56px)] rounded-[20px] border border-[rgba(var(--accent-rgb),0.35)] bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(var(--accent-rgb),0.16)_0%,var(--c-surface)_60%)]">
        <div class="flex flex-col gap-2.5 max-w-[52ch]">
            <h2 class="m-0 font-display font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.12] text-ivory">{{ title }}</h2>
            <p v-if="desc" class="m-0 text-[15px] leading-[1.7] text-ink-200">{{ desc }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
            <slot></slot>
        </div>
    </div>
</template>
