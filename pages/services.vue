<script setup>
useHead({ title: 'Services — SLP Events' });

const families = [
    {
        to: '/booking', kicker: '01 — PERFORMERS', title: 'Signature Entertainment',
        desc: 'Ten-foot Transformer robots, a giant gorilla with impeccable comedic timing, and LED robot performers with fog cannons. Interactive, photogenic, unforgettable.',
        chips: ['Transformer Robot', 'Giant Gorilla', 'LED Robots'],
        linkLabel: 'Book Your Event',
        img: '/images/led-robot-performer.jpeg', alt: 'LED robot performer lighting up a ballroom crowd', flip: false,
    },
    {
        to: '/booking', kicker: '02 — ATMOSPHERE', title: 'Special Effects',
        desc: 'Dancing on the clouds, cold sparkler fountains, fog jets, haze and bubbles — cinematic effects, all indoor-safe and venue-approved.',
        chips: ['Clouds', 'Cold Sparklers', 'Fog'],
        linkLabel: 'Book Your Event',
        img: '/images/cold-spark-fountains.jpeg', alt: 'Cold spark fountains lining a ballroom aisle', flip: true,
    },
    {
        to: '/booking', kicker: '03 — STATEMENT PIECES', title: 'Marquee Rentals',
        desc: 'Four-foot light-up letters and numbers. MARRY ME, LOVE, names, ages, initials — delivered, styled, and glowing before guests arrive.',
        chips: ['MARRY ME', 'Letters', 'Numbers'],
        linkLabel: 'Book Your Event',
        img: '/images/marry-me-marquee.jpeg', alt: 'MARRY ME marquee letters at a candlelit proposal', flip: false,
    },
];

const addons = [
    { title: 'Fog & Haze Ambiance', desc: 'A whisper of atmosphere that makes every beam of light — and every photo — cinematic.' },
    { title: 'Extra Performance Hour', desc: 'Keep the performers, sparks, and energy going long after the scheduled finale.' },
    { title: 'On-Cue Show Calling', desc: 'A dedicated show-caller syncing every effect with your DJ, MC, and photographer.' },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>Our Services</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Pick your kind of <em class="italic text-gold-300">spectacular</em></h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Four families of experiences — mix and match, or let us curate. Every one arrives with our crew, our insurance, and our obsession with timing.</p>
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
                <div class="relative min-h-[420px] max-md:aspect-[3/4]" :class="f.flip ? 'order-2' : ''">
                    <img :src="f.img" :alt="f.alt" class="absolute inset-0 w-full h-full object-cover object-[50%_30%]" loading="lazy">
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
            <div v-reveal class="rounded-2xl border border-subtle bg-ink-850 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))]">
                <div class="p-[clamp(28px,4vw,48px)] flex flex-col gap-3.5 justify-center">
                    <span class="font-mono text-xs text-gold-600 tracking-[0.12em]">04 — FINISHING TOUCHES</span>
                    <h2 class="m-0 font-display font-semibold text-[clamp(26px,3vw,36px)] text-ivory">Add-On Services</h2>
                    <p class="m-0 text-[15px] leading-[1.75] text-ink-200 max-w-[42ch]">Layer these onto any experience for extra polish — quoted alongside your booking and run by the same crew.</p>
                    <div class="mt-2"><UiButton to="/booking">Book Your Event</UiButton></div>
                </div>
                <div class="flex flex-col justify-center border-t md:border-t-0 md:border-l border-[rgba(var(--line-rgb),0.1)]">
                    <div
                        v-for="(a, i) in addons"
                        :key="a.title"
                        class="flex items-start gap-5 px-[clamp(24px,3vw,40px)] py-[26px]"
                        :class="i > 0 ? 'border-t border-[rgba(var(--line-rgb),0.1)]' : ''"
                    >
                        <span class="font-mono text-[13px] text-gold-600 pt-0.5">0{{ i + 1 }}</span>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-base font-semibold text-ivory">{{ a.title }}</span>
                            <span class="text-[13.5px] leading-[1.65] text-ink-300 max-w-[48ch]">{{ a.desc }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Not sure what fits your event?" desc="Tell us the occasion and the vibe — we'll recommend the perfect combination.">
                <UiButton to="/booking">Book Your Event</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
