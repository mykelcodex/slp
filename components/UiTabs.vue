<script setup>
// Design-system Tabs: underline tabs with a gold active indicator.
defineProps({
    items: { type: Array, required: true }, // [{ id, label }]
    modelValue: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div role="tablist" class="flex gap-2 border-b border-subtle">
        <button
            v-for="it in items"
            :key="it.id"
            role="tab"
            :aria-selected="it.id === modelValue"
            class="relative bg-transparent border-none cursor-pointer font-sans text-sm tracking-[0.06em] uppercase px-4 py-3 whitespace-nowrap transition-colors duration-200"
            :class="it.id === modelValue ? 'font-semibold text-gold-200' : 'font-medium text-ink-300 hover:text-ink-200'"
            @click="emit('update:modelValue', it.id)"
        >
            {{ it.label }}
            <span class="absolute left-3 right-3 -bottom-px h-0.5" :class="it.id === modelValue ? 'bg-gold-grad' : 'bg-transparent'"></span>
        </button>
    </div>
</template>
