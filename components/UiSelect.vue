<script setup>
// Design-system Select: pass <option> elements via the default slot.
defineProps({
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex flex-col gap-2">
        <label v-if="label" class="font-sans font-semibold text-[12px] tracking-[0.14em] uppercase text-ink-300">{{ label }}</label>
        <div class="relative">
            <select
                :value="modelValue"
                class="w-full box-border appearance-none font-sans text-[15px] text-ivory bg-ink-900 border border-hairline rounded-md pl-4 pr-10 py-[13px] outline-none cursor-pointer transition-[border-color,box-shadow] duration-200 focus:border-gold-line focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                @change="emit('update:modelValue', $event.target.value)"
            >
                <slot></slot>
            </select>
            <svg class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </div>
    </div>
</template>
