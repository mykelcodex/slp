<script setup>
import { computed, ref } from 'vue';
import { img } from '~/data/site.js';

useHead({ title: 'Marquee Rentals — SLP Events' });

const marqueeText = ref('MARRY ME');

const letters = computed(() =>
    marqueeText.value
        .toUpperCase()
        .slice(0, 14)
        .split('')
        .map((ch, i) => ({ ch, i, space: ch === ' ' }))
);

const letterStyle = (i) => ({
    animation: `twinkle ${2.2 + (i % 4) * 0.35}s ease-in-out ${i * 0.18}s infinite`,
});

const collection = [
    { title: 'MARRY ME', desc: 'The proposal classic — with petals, candles, and sparkler timing available.', img: img('1605100804763-247f67b3557e', 800), alt: 'Engagement ring on dark velvet', signature: true },
    { title: 'LOVE & Initials', desc: 'LOVE, MR & MRS, or your monograms — the reception backdrop that anchors the room.', img: img('1519167758481-83f550bb49b3', 800), alt: 'Ballroom with warm lights' },
    { title: 'Light-up Numbers', desc: 'Sweet 16, 30, 50, 2026 — milestone numbers that glow through every photo of the night.', img: img('1530103862676-de8c9debad1d', 800), alt: 'Birthday balloons' },
    { title: 'Custom Phrases', desc: 'Names, brand words, ONE for a first birthday — if we can spell it, we can light it.', img: img('1464366400600-7168b8af9bc3', 800), alt: 'Styled event table' },
];

const customization = [
    { strong: 'Warm or cool bulbs', rest: ' — soft champagne glow or crisp white, dimmable on site.' },
    { strong: 'Floral & balloon styling', rest: ' — we coordinate with your florist or bring our styling partners.' },
    { strong: 'Placement design', rest: ' — head table, entrance, lawn, or stage; we scout the photo angle first.' },
    { strong: 'Delivery, setup & pickup', rest: ' — always included. You never touch a letter.' },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative min-h-[66vh] flex items-end overflow-hidden bg-ink-950">
            <img :src="img('1518199266791-5375a83190b7', 2000)" alt="Warm glowing lights bokeh" class="absolute inset-0 w-full h-full object-cover opacity-[0.42] [animation:kenburns_24s_ease-in-out_infinite_alternate]">
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0.7)_0%,rgba(var(--scrim-rgb),0.3)_45%,var(--c-bg)_100%)]"></div>
            <div class="relative max-w-[1240px] mx-auto w-full px-6 pt-[clamp(150px,18vw,220px)] pb-[clamp(48px,6vw,72px)] flex flex-col gap-5">
                <UiEyebrow>Marquee Rentals</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,88px)] leading-[1.04] text-ivory max-w-[14ch] [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Say it in <em class="italic text-gold-300">lights</em></h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Four-foot light-up letters and numbers, delivered and styled. The backdrop every photo deserves.</p>
            </div>
        </section>

        <!-- INTERACTIVE PREVIEW -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-10">
                <UiEyebrow>Try It</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(30px,4vw,50px)] leading-[1.1] text-ivory">Preview <em class="italic text-gold-300">your</em> phrase</h2>
                <p class="m-0 max-w-[52ch] text-[15px] leading-[1.7] text-ink-200">Type a name, a word, an age — see it glow. Up to 14 characters per row on site.</p>
            </div>
            <div v-reveal class="rounded-[20px] border border-subtle bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(var(--accent-rgb),0.1)_0%,var(--c-bg3)_60%)] p-[clamp(32px,5vw,56px)] flex flex-col items-center gap-9">
                <div class="flex flex-wrap gap-[clamp(6px,1vw,12px)] justify-center min-h-[clamp(48px,7.6vw,90px)] items-center">
                    <template v-for="l in letters" :key="l.i">
                        <span v-if="l.space" class="w-[clamp(10px,2vw,24px)]"></span>
                        <span
                            v-else
                            class="flex items-center justify-center min-w-[clamp(34px,5.4vw,64px)] h-[clamp(48px,7.6vw,90px)] px-1.5 rounded-md bg-[linear-gradient(180deg,#1f1f2a_0%,#101017_100%)] border border-[rgba(116,160,102,0.4)] font-display text-[clamp(26px,4.4vw,52px)] text-gold-100 [text-shadow:0_0_18px_rgba(174,202,164,0.9),0_0_40px_rgba(116,160,102,0.5)] shadow-[0_0_22px_rgba(116,160,102,0.18),inset_0_1px_0_rgba(246,242,233,0.08)]"
                            :style="letterStyle(l.i)"
                        >{{ l.ch }}</span>
                    </template>
                </div>
                <div class="w-full max-w-[420px]">
                    <UiInput v-model="marqueeText" label="Your phrase" :maxlength="14" hint="Letters, numbers & hearts available"></UiInput>
                </div>
            </div>
        </section>

        <!-- COLLECTION -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
                <div v-reveal class="flex flex-col gap-3.5 mb-11 max-w-[640px]">
                    <UiEyebrow>The Collection</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(30px,3.8vw,48px)] leading-[1.1] text-ivory">Most requested <em class="italic text-gold-300">arrangements</em></h2>
                </div>
                <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
                    <div
                        v-for="c in collection"
                        :key="c.title"
                        class="rounded-xl overflow-hidden bg-ink-800 flex flex-col"
                        :class="c.signature ? 'border border-[rgba(var(--accent-rgb),0.35)] shadow-[0_0_32px_rgba(var(--accent-rgb),0.08)]' : 'border border-subtle'"
                    >
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <img :src="c.img" :alt="c.alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                            <span v-if="c.signature" class="absolute left-3.5 top-3.5 px-3 py-[5px] rounded-full bg-[rgba(var(--scrim-rgb),0.72)] backdrop-blur-lg border border-[rgba(var(--accent-rgb),0.4)] text-[10.5px] tracking-[0.18em] uppercase text-gold-300">Signature</span>
                        </div>
                        <div class="p-[22px] flex flex-col gap-2">
                            <h3 class="m-0 font-display font-semibold text-[22px] text-ivory">{{ c.title }}</h3>
                            <p class="m-0 text-[13.5px] leading-[1.6] text-ink-200">{{ c.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CUSTOMIZATION -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[clamp(32px,5vw,64px)] items-center">
            <div v-reveal class="flex flex-col gap-4">
                <UiEyebrow>Make It Yours</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(30px,3.8vw,48px)] leading-[1.1] text-ivory">Styled to your <em class="italic text-gold-300">palette</em></h2>
                <div class="flex flex-col gap-3 mt-1">
                    <div v-for="c in customization" :key="c.strong" class="flex items-start gap-3">
                        <span class="w-[7px] h-[7px] rotate-45 bg-gold-500 flex-none mt-[7px]"></span>
                        <p class="m-0 text-[14.5px] leading-[1.7] text-ink-200"><strong class="text-ivory-dim">{{ c.strong }}</strong>{{ c.rest }}</p>
                    </div>
                </div>
            </div>
            <div v-reveal class="grid grid-cols-2 gap-3.5">
                <img :src="img('1469371670807-013ccf25f16a', 800)" alt="Ceremony aisle at dusk" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle" loading="lazy">
                <img :src="img('1519225421980-715cb0215aed', 800)" alt="Outdoor wedding reception" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle mt-9" loading="lazy">
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Reserve your letters." desc="Tell us the phrase and the date — we'll confirm availability within hours.">
                <UiButton to="/booking" size="lg">Check Availability</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
