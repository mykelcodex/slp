<script setup>
import { onMounted, onUnmounted } from "vue";
import { menuItems } from "~/data/site.js";

const emit = defineEmits(["close"]);
const route = useRoute();

const onKey = (e) => e.key === "Escape" && emit("close");
onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <div
    class="fixed inset-0 z-[120] bg-[rgba(var(--scrim-rgb),0.97)] backdrop-blur-[20px] flex flex-col [animation:fadeIn_260ms_cubic-bezier(0.16,1,0.3,1)_both]"
  >
    <div
      class="flex items-center justify-between py-[15px] px-[clamp(16px,3vw,32px)] border-b border-subtle"
    >
      <BrandLogo :size="24"></BrandLogo>
      <button
        class="bg-[rgba(var(--line-rgb),0.05)] border border-hairline rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-ivory"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <div
      class="flex-1 overflow-y-auto pt-7 pb-5 px-[clamp(20px,5vw,40px)] flex flex-col gap-0.5"
    >
      <NuxtLink
        v-for="(m, i) in menuItems"
        :key="m.id"
        :to="m.id === 'home' ? '/' : '/' + m.id"
        class="flex items-center gap-3.5 text-left py-[11px] font-display font-medium text-[clamp(24px,5.6vw,32px)] no-underline transition-[color,padding] duration-200 hover:text-gold-300 hover:pl-2"
        :class="
          (m.id === 'home' ? 'index' : m.id) === route.name
            ? 'text-gold-300'
            : 'text-ivory'
        "
        :style="{
          animation: `menuIn 400ms cubic-bezier(0.16,1,0.3,1) ${i * 40}ms both`,
        }"
        @click="emit('close')"
      >
        <span class="text-[11px] text-gold-600 tracking-[0.1em] min-w-[26px]">{{
          String(i + 1).padStart(2, "0")
        }}</span>
        <span>{{ m.label }}</span>
      </NuxtLink>
    </div>

    <div
      class="pt-[18px] pb-7 px-[clamp(20px,5vw,40px)] border-t border-subtle flex flex-col gap-3"
    >
      <UiButton to="/booking" size="lg" full-width @click="emit('close')"
        >Book Your Event</UiButton
      >
    </div>
  </div>
</template>
