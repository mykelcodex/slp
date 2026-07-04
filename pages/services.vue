<script setup>
import { img } from '~/data/site.js';

useHead({ title: 'Services — SLP Events' });

const families = [
    {
        to: '/entertainment', kicker: '01 — PERFORMERS', title: 'Signature Entertainment',
        desc: 'Ten-foot Transformer robots, a giant gorilla with impeccable comedic timing, and LED robot performers with CO₂ cannons. Interactive, photogenic, unforgettable.',
        chips: ['Transformer Robot', 'Giant Gorilla', 'LED Robots'],
        linkLabel: 'Meet the performers',
        img: img('1485827404703-89b55fcc595e', 1200), alt: 'Robot performer greeting guests', flip: false,
    },
    {
        to: '/effects', kicker: '02 — ATMOSPHERE', title: 'Special Effects',
        desc: 'Dancing on the clouds, cold sparkler fountains, CO₂ jets, fog & haze, confetti cannons and bubbles — cinematic effects, all indoor-safe and venue-approved.',
        chips: ['Clouds', 'Cold Sparklers', 'CO₂', 'Confetti'],
        linkLabel: 'Explore the effects',
        img: img('1492684223066-81342ee5ff30', 1200), alt: 'Sparks and confetti in a dark venue', flip: true,
    },
    {
        to: '/marquee', kicker: '03 — STATEMENT PIECES', title: 'Marquee Rentals',
        desc: 'Four-foot light-up letters and numbers. MARRY ME, LOVE, names, ages, initials — delivered, styled, and glowing before guests arrive.',
        chips: ['MARRY ME', 'Letters', 'Numbers', 'Custom Phrases'],
        linkLabel: 'See the letters',
        img: img('1518199266791-5375a83190b7', 1200), alt: 'Glowing lights bokeh', flip: false,
    },
    {
        to: '/packages', kicker: '04 — CURATED', title: 'Event Packages',
        desc: 'Our most-loved combinations, curated for weddings, proposals, birthdays, corporate events, and grand openings. One booking, a full show.',
        chips: [],
        linkLabel: 'Browse packages',
        img: img('1519167758481-83f550bb49b3', 1200), alt: 'Grand ballroom set for an event', flip: true,
    },
];

const addons = [
    'Fog & haze ambiance',
    'Bubble effects',
    'Extra performance hour',
    'Custom marquee phrases',
    'Balloon styling partner',
    'On-cue show calling',
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>Our Services</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Pick your kind of <em class="italic text-gold-300">spectacular</em></h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Five families of experiences — mix and match, or let us curate. Every one arrives with our crew, our insurance, and our obsession with timing.</p>
            </div>
        </section>

        <!-- SERVICE FAMILIES -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] flex flex-col gap-6">
            <NuxtLink
                v-for="f in families"
                :key="f.title"
                v-reveal
                :to="f.to"
                class="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] rounded-2xl overflow-hidden border border-subtle bg-ink-800 no-underline cursor-pointer transition-[transform,border-color,box-shadow] duration-300 ease-entrance hover:-translate-y-1 hover:border-gold-line hover:shadow-gold-card"
            >
                <div class="relative min-h-[300px]" :class="f.flip ? 'order-2' : ''">
                    <img :src="f.img" :alt="f.alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0" :class="f.flip ? 'bg-[linear-gradient(270deg,rgba(var(--scrim-rgb),0)_60%,rgba(var(--chip-rgb),0.9)_100%)]' : 'bg-[linear-gradient(90deg,rgba(var(--scrim-rgb),0)_60%,rgba(var(--chip-rgb),0.9)_100%)]'"></div>
                </div>
                <div class="p-[clamp(28px,4vw,48px)] flex flex-col gap-3.5 justify-center" :class="f.flip ? 'order-1' : ''">
                    <span class="font-mono text-xs text-gold-600 tracking-[0.12em]">{{ f.kicker }}</span>
                    <h2 class="m-0 font-display font-semibold text-[clamp(28px,3.4vw,42px)] text-ivory">{{ f.title }}</h2>
                    <p class="m-0 text-[15px] leading-[1.75] text-ink-200 max-w-[52ch]">{{ f.desc }}</p>
                    <div v-if="f.chips.length" class="flex flex-wrap gap-2 mt-0.5">
                        <span v-for="c in f.chips" :key="c" class="px-3.5 py-1.5 rounded-full border border-hairline text-xs text-ink-300">{{ c }}</span>
                    </div>
                    <span class="mt-2 text-xs tracking-[0.16em] uppercase text-gold-300 flex items-center gap-2">
                        {{ f.linkLabel }}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                    </span>
                </div>
            </NuxtLink>

            <!-- ADD-ONS -->
            <div v-reveal class="rounded-2xl border border-subtle bg-ink-850 p-[clamp(28px,4vw,48px)]">
                <div class="flex flex-wrap items-start justify-between gap-7">
                    <div class="flex flex-col gap-3 max-w-[46ch]">
                        <span class="font-mono text-xs text-gold-600 tracking-[0.12em]">05 — FINISHING TOUCHES</span>
                        <h2 class="m-0 font-display font-semibold text-[clamp(26px,3vw,36px)] text-ivory">Add-On Services</h2>
                        <p class="m-0 text-[15px] leading-[1.75] text-ink-200">Layer these onto any experience or package for extra polish.</p>
                    </div>
                    <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 flex-1 min-w-[min(420px,100%)]">
                        <div v-for="a in addons" :key="a" class="flex items-center gap-2.5 px-[18px] py-3.5 border border-[rgba(var(--line-rgb),0.1)] rounded-xl text-ivory-dim text-sm">
                            <span class="w-[7px] h-[7px] rotate-45 bg-gold-500 flex-none"></span>{{ a }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Not sure what fits your event?" desc="Tell us the occasion and the vibe — we'll recommend the perfect combination.">
                <UiButton to="/quote" variant="ghost">Request a Quote</UiButton>
                <UiButton to="/booking">Book Your Event</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
