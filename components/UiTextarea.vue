<script setup>
// Design-system Textarea: same treatment as UiInput.
defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    rows: { type: Number, default: 4 },
    modelValue: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex flex-col gap-2">
        <label v-if="label" class="font-sans font-semibold text-[12px] tracking-[0.14em] uppercase text-ink-300">{{ label }}</label>
        <textarea
            :placeholder="placeholder"
            :rows="rows"
            :value="modelValue"
            class="w-full box-border resize-y font-sans text-[15px] leading-[1.6] text-ivory bg-ink-900 border border-hairline rounded-md px-4 py-[13px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-ink-400 focus:border-gold-line focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
            @input="emit('update:modelValue', $event.target.value)"
        ></textarea>
    </div>
</template>
