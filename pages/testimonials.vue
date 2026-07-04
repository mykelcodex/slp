<script setup>
import { testimonials, img } from '~/data/site.js';

useHead({ title: 'Testimonials — SLP Events' });
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>Client Stories</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">The reviews write<br><em class="italic text-gold-300">themselves</em></h1>
                <div class="flex items-center gap-3 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
                    <div class="flex gap-1 text-gold-400">
                        <svg v-for="i in 5" :key="i" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9z"></path></svg>
                    </div>
                    <span class="text-[13px] tracking-[0.12em] uppercase text-ink-300">5.0 average · 300+ reviews</span>
                </div>
            </div>
        </section>

        <!-- FEATURED STORY -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] rounded-[20px] overflow-hidden border border-[rgba(var(--accent-rgb),0.35)] bg-ink-850 shadow-[0_18px_48px_var(--shadow50)]">
                <div class="relative min-h-[340px]">
                    <img :src="img('1511285560929-80b456fea0bc', 1200)" alt="First dance surrounded by sparks" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                </div>
                <div class="p-[clamp(32px,5vw,56px)] flex flex-col gap-5 justify-center">
                    <span class="text-[11px] tracking-[0.22em] uppercase text-gold-400">Featured Story</span>
                    <p class="m-0 font-display font-medium italic text-[clamp(20px,2.4vw,28px)] leading-[1.5] text-ink-100">"When the cold sparklers hit during our first dance, the entire room gasped. Our photographer said she has never captured anything like it. Worth every penny — and then some."</p>
                    <div class="flex flex-col gap-1">
                        <span class="text-[15px] font-bold text-ivory">Amara &amp; David O.</span>
                        <span class="text-xs tracking-[0.12em] uppercase text-ink-300">Wedding · The Grandview · Dancing on the Clouds + Cold Sparklers</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- GRID -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
                <div class="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                    <div
                        v-for="t in testimonials"
                        :key="t.name"
                        v-reveal
                        class="bg-ink-800 border border-subtle rounded-xl overflow-hidden flex flex-col transition-[transform,border-color] duration-300 ease-entrance hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.4)]"
                    >
                        <div class="relative aspect-[16/7] overflow-hidden">
                            <img :src="t.img" :alt="t.event" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                            <span class="absolute left-3.5 top-3 px-3 py-[5px] rounded-full bg-[rgba(var(--scrim-rgb),0.72)] backdrop-blur-lg border border-[rgba(var(--accent-rgb),0.35)] text-[10.5px] tracking-[0.16em] uppercase text-gold-300">{{ t.cat }}</span>
                        </div>
                        <div class="p-6 flex flex-col gap-3.5 flex-1">
                            <div class="flex gap-[3px] text-gold-400">
                                <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9z"></path></svg>
                            </div>
                            <p class="m-0 text-[14.5px] leading-[1.7] text-ivory-dim flex-1">“{{ t.quote }}”</p>
                            <div class="flex flex-col gap-[3px]">
                                <span class="text-sm font-bold text-ivory">{{ t.name }}</span>
                                <span class="text-[11.5px] tracking-[0.1em] uppercase text-ink-300">{{ t.event }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <CtaBanner title="Your story could be next." desc="Every review above started with a two-minute inquiry.">
                <UiButton to="/booking" size="lg">Book Your Event</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
