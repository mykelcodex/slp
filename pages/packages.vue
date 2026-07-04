<script setup>
useHead({ title: 'Event Packages — SLP Events' });

const packages = [
    {
        kicker: 'For the big day', title: 'Wedding Enhancement', popular: true,
        includes: ['Dancing on the Clouds first dance', '4× cold sparkler fountains, two cues', 'LOVE or initials marquee letters', 'Cue-sheet sync with DJ & photographer'],
        addon: 'Add: LED robot send-off · fog & haze',
    },
    {
        kicker: 'For the question', title: 'Proposal Package',
        includes: ['MARRY ME marquee letters', 'Cold sparklers timed to the yes', 'Petal & candle styling', 'Hidden-photographer coordination'],
        addon: 'Add: violinist partner · cloud effect',
    },
    {
        kicker: 'For the milestone', title: 'Birthday Package',
        includes: ['Transformer robot or gorilla set', 'Light-up age numbers', 'Confetti moment for the cake', 'Birthday call-outs by name'],
        addon: 'Add: bubbles for kids · CO₂ for adults',
    },
    {
        kicker: 'For the brand', title: 'Corporate Package',
        includes: ['CO₂ jets synced to your reveal', 'LED robots for the after-party', 'Brand-word marquee letters', 'COI & venue compliance handled'],
        addon: 'Add: confetti in brand colors',
    },
    {
        kicker: 'For day one', title: 'Grand Opening',
        includes: ['Robot or gorilla drawing the crowd', 'Confetti at the ribbon cutting', 'Cold sparklers framing the doors', 'Social-ready photo moments'],
        addon: 'Add: business-name marquee',
    },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>Event Packages</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Curated. Choreographed.<br><em class="italic text-gold-300">Complete.</em></h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Our most-loved combinations, built from hundreds of events. Every package is a starting point — swap, add, and tailor freely. Pricing is quoted per event, always itemized.</p>
            </div>
        </section>

        <!-- PACKAGES -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[22px] items-stretch">
            <div
                v-for="p in packages"
                :key="p.title"
                v-reveal
                class="rounded-2xl bg-ink-850 flex flex-col overflow-hidden"
                :class="p.popular ? 'border border-[rgba(var(--accent-rgb),0.45)] shadow-gold-card' : 'border border-[rgba(var(--line-rgb),0.1)]'"
            >
                <div v-if="p.popular" class="p-2.5 bg-gold-grad text-center text-[11px] tracking-[0.22em] uppercase text-on-accent font-bold">Most Popular</div>
                <div class="px-[30px] py-8 flex flex-col gap-[18px] flex-1">
                    <div class="flex flex-col gap-1.5">
                        <span class="text-[11px] tracking-[0.2em] uppercase text-gold-400">{{ p.kicker }}</span>
                        <h2 class="m-0 font-display font-semibold text-[30px] text-ivory">{{ p.title }}</h2>
                        <span class="font-mono text-[13px] text-ink-300">Quoted per event · itemized</span>
                    </div>
                    <div class="h-px bg-[rgba(var(--line-rgb),0.1)]"></div>
                    <div class="flex flex-col gap-2.5 flex-1">
                        <div v-for="item in p.includes" :key="item" class="flex items-center gap-2.5 text-sm text-ivory-dim">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="flex-none"><path d="M20 6L9 17l-5-5"></path></svg>
                            {{ item }}
                        </div>
                        <div class="flex items-center gap-2.5 text-[13.5px] text-ink-300">
                            <span class="w-1.5 h-1.5 rotate-45 bg-ink-400 flex-none"></span>{{ p.addon }}
                        </div>
                    </div>
                    <UiButton to="/quote" :variant="p.popular ? 'primary' : 'ghost'" full-width>Request a Quote</UiButton>
                </div>
            </div>

            <!-- BUILD YOUR OWN -->
            <div v-reveal class="rounded-2xl border border-dashed border-[rgba(var(--line-rgb),0.2)] flex flex-col items-center justify-center text-center gap-4 px-[30px] py-10 min-h-[320px]">
                <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold500)"></path></svg>
                <h2 class="m-0 font-display font-semibold text-[26px] text-ivory">Something else in mind?</h2>
                <p class="m-0 text-sm leading-[1.7] text-ink-300 max-w-[34ch]">Build your own — pick any experiences and we'll choreograph them into one show.</p>
                <UiButton to="/quote">Build a Custom Quote</UiButton>
            </div>
        </section>

        <!-- FOOTNOTE -->
        <section class="max-w-[840px] mx-auto px-6 pb-[clamp(72px,9vw,110px)] text-center">
            <p v-reveal class="m-0 text-[13.5px] leading-[1.8] text-ink-400">Every package includes delivery, professional setup, trained operators, insurance certificates, and teardown.<br>No hidden fees — your quote is the number.</p>
        </section>
    </main>
</template>
