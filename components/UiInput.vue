<script setup>
// Design-system Input: uppercase label, dark field, gold focus ring, optional hint.
defineProps({
    label: { type: String, default: '' },
    hint: { type: String, default: '' },
    error: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    maxlength: { type: Number, default: null },
    modelValue: { type: [String, Number], default: '' },
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex flex-col gap-2">
        <label v-if="label" class="font-sans font-semibold text-[12px] tracking-[0.14em] uppercase text-ink-300">{{ label }}</label>
        <input
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength || undefined"
            :value="modelValue"
            class="w-full box-border font-sans text-[15px] text-ivory bg-ink-900 border rounded-md px-4 py-[13px] outline-none transition-[border-color,box-shadow] duration-200 [color-scheme:dark] placeholder:text-ink-400 focus:border-gold-line focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
            :class="error ? 'border-[#c65a50] shadow-[0_0_0_3px_rgba(198,90,80,0.12)]' : 'border-hairline'"
            :aria-invalid="error ? 'true' : 'false'"
            @input="emit('update:modelValue', $event.target.value)"
        >
        <span v-if="error" class="text-xs text-[#e08a80]">{{ error }}</span>
        <span v-if="hint" class="text-xs text-ink-300">{{ hint }}</span>
    </div>
</template>
