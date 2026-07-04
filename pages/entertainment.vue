<script setup>
import { img } from '~/data/site.js';

useHead({ title: 'Signature Entertainment — SLP Events' });

const check = 'M20 6L9 17l-5-5';

const performers = [
    {
        n: '01', title: 'Transformer Robot',
        desc: "Ten feet of chrome rolls in, transforms mid-floor, and works the crowd — dance battles, photo ops, and birthday call-outs by name. A professional performer is inside every suit, reading the room the whole time.",
        features: ['Grand entrances & meet-and-greets', 'LED lighting + sound effects built in', 'Indoor & outdoor, 45–60 min sets'],
        tags: ['Birthdays', 'Grand Openings', 'Corporate', 'School Events'],
        img: img('1485827404703-89b55fcc595e', 1200), alt: 'Robot performer',
        badge: 'Most Booked', flip: false,
    },
    {
        n: '02', title: 'Giant Gorilla Performer',
        desc: 'Part mascot, part comedian, all chaos — in the best way. Our gorilla crashes the dance floor, photobombs the guest of honor, and leaves the whole room crying with laughter. Family-friendly and endlessly filmable.',
        features: ['Surprise entrances & pranks on cue', 'Choreographed dance numbers', 'Gentle mode for younger guests'],
        tags: ['Birthdays', 'Festivals', 'Baby Showers', 'Private Parties'],
        img: img('1519741347686-c1e0aadf4611', 1200), alt: 'Dramatic performer mid-set in low light',
        caption: 'Performance still — gorilla photos on request', flip: true,
    },
    {
        n: '03', title: 'LED Robot Performers',
        desc: 'Glowing armor, synced light shows, and hand-held CO₂ cannons. Our LED robots arrive when the dance floor needs a second wind — and deliver a nightclub-grade spectacle wherever they stand.',
        features: ['Light shows synced to your DJ', 'CO₂ cannon crowd moments', 'Solo or duo, multiple sets per night'],
        tags: ['Weddings', 'Nightlife', 'Corporate', 'Holiday Parties'],
        img: img('1574391884720-bbc3740c59d1', 1200), alt: 'Dancers under purple light and fog', flip: false,
    },
];

const faqs = [
    { q: 'How long do performers stay?', a: 'Standard sets run 45–60 minutes with structured moments — entrance, crowd work, photos. Multiple sets and extended hours are available as add-ons.' },
    { q: 'Can performers do a surprise reveal?', a: 'Our favorite request. We coordinate secretly with your planner or a designated guest, stage out of sight, and enter on your cue — song drop, lights down, or a spoken line.' },
    { q: 'Do performers work outdoors?', a: 'Yes, weather permitting. For summer dates we schedule shorter outdoor sets with shaded breaks — the suits are a workout.' },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative min-h-[72vh] flex items-end overflow-hidden bg-ink-950">
            <img :src="img('1535378917042-10a22c95931a', 2000)" alt="Futuristic robot performer" class="absolute inset-0 w-full h-full object-cover opacity-45 [animation:kenburns_24s_ease-in-out_infinite_alternate]">
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0.7)_0%,rgba(var(--scrim-rgb),0.3)_45%,var(--c-bg)_100%)]"></div>
            <div class="relative max-w-[1240px] mx-auto w-full px-6 pt-[clamp(150px,18vw,220px)] pb-[clamp(48px,6vw,72px)] flex flex-col gap-5">
                <UiEyebrow>Signature Entertainment</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,88px)] leading-[1.04] text-ivory max-w-[14ch] [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Performers that <em class="italic text-gold-300">stop</em> the room</h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Interactive characters that greet, dance, pose, and perform — built for the moment every phone comes out.</p>
            </div>
        </section>

        <!-- PERFORMERS -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] flex flex-col gap-[clamp(56px,7vw,84px)]">
            <div
                v-for="p in performers"
                :key="p.n"
                v-reveal
                class="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-[clamp(28px,4vw,64px)] items-center"
            >
                <div class="relative rounded-2xl overflow-hidden border border-subtle aspect-[4/3]" :class="p.flip ? 'order-2' : ''">
                    <img :src="p.img" :alt="p.alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    <span v-if="p.badge" class="absolute left-4 top-4 px-3.5 py-1.5 rounded-full bg-[rgba(var(--scrim-rgb),0.7)] backdrop-blur-lg text-[11px] tracking-[0.18em] uppercase text-gold-300 border border-[rgba(var(--accent-rgb),0.4)]">{{ p.badge }}</span>
                    <span v-if="p.caption" class="absolute left-4 bottom-3.5 px-3.5 py-1.5 rounded-full bg-[rgba(var(--scrim-rgb),0.7)] backdrop-blur-lg text-[11px] tracking-[0.14em] uppercase text-ink-300">{{ p.caption }}</span>
                </div>
                <div class="flex flex-col gap-4" :class="p.flip ? 'order-1' : ''">
                    <span class="font-mono text-[13px] text-gold-600 tracking-[0.12em]">{{ p.n }}</span>
                    <h2 class="m-0 font-display font-semibold text-[clamp(30px,3.6vw,46px)] text-ivory">{{ p.title }}</h2>
                    <p class="m-0 text-[15.5px] leading-[1.8] text-ink-200 max-w-[54ch]">{{ p.desc }}</p>
                    <div class="flex flex-col gap-[9px] mt-0.5">
                        <div v-for="f in p.features" :key="f" class="flex items-center gap-2.5 text-ivory-dim text-sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path :d="check"></path></svg>
                            {{ f }}
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-1.5">
                        <span v-for="t in p.tags" :key="t" class="px-3.5 py-1.5 rounded-full bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.3)] text-xs text-gold-300">{{ t }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- VIDEO SHOWCASE -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
                <div v-reveal class="group relative rounded-[20px] overflow-hidden border border-subtle aspect-[16/7] min-h-[280px] cursor-pointer hover:border-[rgba(var(--accent-rgb),0.5)] transition-colors duration-300">
                    <img :src="img('1470229722913-7c0e2dbbafd3', 1800)" alt="Stage performance under warm light" class="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy">
                    <div class="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(var(--scrim-rgb),0.15)_0%,rgba(var(--scrim-rgb),0.7)_100%)] flex flex-col items-center justify-center gap-[18px]">
                        <div class="w-[84px] h-[84px] rounded-full bg-[rgba(var(--accent-rgb),0.14)] border border-[rgba(var(--accent-rgb),0.5)] backdrop-blur-lg flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-[1.06]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--c-gold100)"><path d="M7 4l13 8-13 8z"></path></svg>
                        </div>
                        <span class="text-xs tracking-[0.2em] uppercase text-ivory-dim">Watch the performers reel · 90 sec</span>
                        <span class="text-[11px] text-ink-400">Video placeholder — drop in your highlight reel</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PERFORMER FAQ -->
        <section class="max-w-[840px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-9">
                <UiEyebrow>Performer FAQ</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(30px,4vw,48px)] text-ivory">Before you <em class="italic text-gold-300">book</em></h2>
            </div>
            <div v-reveal class="flex flex-col gap-3">
                <UiAccordion v-for="f in faqs" :key="f.q" :title="f.q">
                    <p class="m-0 text-[14.5px] leading-[1.7] text-ink-200">{{ f.a }}</p>
                </UiAccordion>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Give your guests a story to tell." desc="Check your date — performers book out fast in peak season.">
                <UiButton to="/booking" size="lg">Book a Performer</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
