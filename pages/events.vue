<script setup>
import { eventTypes } from '~/data/site.js';

useHead({ title: 'Events We Serve — SLP Events' });
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>Events We Serve</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Fifteen occasions.<br>One <em class="italic text-gold-300">standard</em>.</h1>
                <p class="m-0 max-w-[56ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Whatever you're celebrating, we've staged it — and we know exactly which experiences make it sing.</p>
            </div>
        </section>

        <!-- EVENT GRID -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div class="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                <div
                    v-for="ev in eventTypes"
                    :key="ev.name"
                    v-reveal
                    class="rounded-xl overflow-hidden border border-subtle bg-ink-800 flex flex-col transition-[transform,border-color,box-shadow] duration-300 ease-entrance hover:-translate-y-1 hover:border-gold-line hover:shadow-[0_18px_48px_var(--shadow50)]"
                >
                    <div class="relative aspect-[16/9] overflow-hidden">
                        <img :src="ev.img" :alt="ev.name" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0)_40%,rgba(var(--chip-rgb),0.85)_100%)]"></div>
                        <h3 class="absolute left-5 bottom-3.5 m-0 font-display font-semibold text-[25px] text-ivory">{{ ev.name }}</h3>
                    </div>
                    <div class="pt-5 px-[22px] pb-6 flex flex-col gap-3.5 flex-1">
                        <p class="m-0 text-sm leading-[1.6] text-ink-200 flex-1">{{ ev.desc }}</p>
                        <div class="flex flex-wrap gap-[7px]">
                            <span v-for="s in ev.services" :key="s" class="px-3 py-[5px] rounded-full bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.25)] text-[11.5px] text-gold-400">{{ s }}</span>
                        </div>
                        <NuxtLink to="/quote" class="text-[11.5px] tracking-[0.16em] uppercase text-gold-300 flex items-center gap-2 w-fit no-underline hover:text-gold-200">
                            Plan this event
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Don't see your occasion?" desc="If it deserves a celebration, it deserves a moment. Tell us what you're planning.">
                <UiButton to="/booking" size="lg">Book Your Event</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
