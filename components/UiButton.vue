<script setup>
import { computed } from 'vue';

// Design-system Button: gold-filled "primary", quiet "ghost", outlined "secondary".
const props = defineProps({
    variant: { type: String, default: 'primary' }, // primary | secondary | ghost
    size: { type: String, default: 'md' }, // sm | md | lg
    fullWidth: { type: Boolean, default: false },
    to: { type: [String, Object], default: null }, // renders a <NuxtLink> when set
});

const sizeCls = {
    sm: 'px-4 py-2 text-[12px] tracking-[0.14em] gap-2',
    md: 'px-[26px] py-[13px] text-[13.5px] tracking-[0.16em] gap-2.5',
    lg: 'px-[38px] py-[17px] text-[15px] tracking-[0.18em] gap-3',
};

const variantCls = {
    primary: 'bg-gold-grad text-on-accent border border-transparent hover:brightness-[1.08] hover:shadow-glow',
    secondary: 'bg-transparent text-gold-300 border border-gold-line hover:bg-[rgba(var(--accent-rgb),0.12)]',
    ghost: 'bg-transparent text-ivory border border-hairline hover:bg-[rgba(var(--accent-rgb),0.12)]',
};

const cls = computed(() => [
    props.fullWidth ? 'flex w-full' : 'inline-flex',
    'items-center justify-center font-sans font-semibold uppercase whitespace-nowrap no-underline',
    'rounded-full cursor-pointer transition-[transform,filter,box-shadow,background] duration-200 active:scale-[0.97]',
    sizeCls[props.size],
    variantCls[props.variant],
]);
</script>

<template>
    <NuxtLink v-if="to" :to="to" :class="cls"><slot></slot></NuxtLink>
    <button v-else :class="cls"><slot></slot></button>
</template>
