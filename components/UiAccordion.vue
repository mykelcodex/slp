<script setup>
import { ref } from 'vue';

// Single expandable FAQ-style item (design-system Accordion).
defineProps({ title: { type: String, required: true } });
const open = ref(false);
</script>

<template>
    <div class="border-b border-subtle">
        <button
            class="w-full flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer text-left py-5 font-display font-semibold text-[19px] text-ivory"
            :aria-expanded="open"
            @click="open = !open"
        >
            {{ title }}
            <span class="flex-none text-gold-400 text-[20px] transition-transform duration-300" :class="open ? 'rotate-45' : ''">+</span>
        </button>
        <div class="grid transition-[grid-template-rows] duration-500 ease-entrance" :style="{ gridTemplateRows: open ? '1fr' : '0fr' }">
            <div class="overflow-hidden">
                <div class="pb-5 text-ink-200"><slot></slot></div>
            </div>
        </div>
    </div>
</template>
