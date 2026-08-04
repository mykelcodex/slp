<script setup>
import { computed, ref } from 'vue';
import { faqs, faqCategories } from '~/data/site.js';

useHead({ title: 'FAQ — SLP Events' });

const cat = ref('Booking');
const tabs = faqCategories.map((c) => ({ id: c, label: c }));
const visible = computed(() => faqs.filter((f) => f.cat === cat.value));
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,200px)] pb-[clamp(48px,6vw,72px)] flex flex-col items-center text-center gap-5">
                <UiEyebrow>FAQ</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,76px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Everything you're <em class="italic text-gold-300">wondering</em></h1>
                <p class="m-0 max-w-[52ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Booking, setup, travel, safety, payments — if it's not here, ask us directly.</p>
            </div>
        </section>

        <!-- TABS + QUESTIONS -->
        <section class="max-w-[840px] mx-auto px-6 pt-[clamp(40px,5vw,64px)] pb-[clamp(72px,9vw,110px)]">
            <div class="flex justify-center mb-9 overflow-x-auto max-w-full pb-1.5">
                <UiTabs v-model="cat" :items="tabs"></UiTabs>
            </div>
            <div class="flex flex-col gap-3">
                <UiAccordion v-for="f in visible" :key="f.q" :title="f.q">
                    <p class="m-0 text-[14.5px] leading-[1.75] text-ink-200">{{ f.a }}</p>
                </UiAccordion>
            </div>
            <div v-reveal class="mt-12 flex flex-wrap items-center justify-between gap-5 p-[clamp(26px,4vw,40px)] rounded-2xl border border-[rgba(var(--accent-rgb),0.35)] bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(var(--accent-rgb),0.14)_0%,var(--c-surface)_60%)]">
                <div class="flex flex-col gap-1.5">
                    <h2 class="m-0 font-display font-semibold text-[clamp(22px,2.8vw,30px)] text-ivory">Still curious?</h2>
                    <p class="m-0 text-sm text-ink-200">Real answers from real humans, fast.</p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <UiButton to="/booking">Book Your Event</UiButton>
                </div>
            </div>
        </section>
    </main>
</template>
