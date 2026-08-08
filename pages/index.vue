<script setup>
import { testimonials, img } from '~/data/site.js';

const testimonialsPreview = testimonials.slice(0, 3);
const faqPreview = [
    { q: 'Are cold sparklers actually safe indoors?', a: 'Yes. Cold spark machines produce a spark effect at low temperature — no open flame, no smoke, minimal residue. They\u2019re the industry standard for indoor use, operated by our trained technicians only.' },
    { q: 'How far in advance should I book?', a: 'For weddings and peak-season dates, 3–6 months ahead is ideal. Birthdays and corporate events can often be arranged within 2–4 weeks — and always ask about last-minute availability.' },
    { q: 'What do you need from my venue?', a: 'Usually just standard power and a point of contact. We coordinate insurance, floor plans, and timing directly with your venue — you never have to play messenger.' },
];

const tickerItems = ['Weddings', 'Proposals', 'Birthdays', 'Corporate Events', 'Grand Openings', 'Graduations', 'Festivals', 'Private Celebrations'];

const particles = [
    { left: '8%', s: 5, c: 'rgba(174,202,164,0.7)', g: 'rgba(var(--accent-rgb),0.8)', d: '13s', delay: '-2s' },
    { left: '18%', s: 3, c: 'rgba(var(--line-rgb),0.6)', g: 'rgba(var(--line-rgb),0.5)', d: '17s', delay: '-9s' },
    { left: '29%', s: 6, c: 'rgba(var(--accent-rgb),0.55)', g: 'rgba(var(--accent-rgb),0.7)', d: '15s', delay: '-5s' },
    { left: '41%', s: 4, c: 'rgba(242,168,119,0.55)', g: 'rgba(224,125,67,0.6)', d: '19s', delay: '-12s' },
    { left: '52%', s: 3, c: 'rgba(var(--line-rgb),0.55)', g: 'rgba(var(--line-rgb),0.5)', d: '14s', delay: '-7s' },
    { left: '63%', s: 5, c: 'rgba(174,202,164,0.65)', g: 'rgba(var(--accent-rgb),0.75)', d: '18s', delay: '-3s' },
    { left: '74%', s: 4, c: 'rgba(242,168,119,0.5)', g: 'rgba(224,125,67,0.55)', d: '16s', delay: '-10s' },
    { left: '85%', s: 6, c: 'rgba(var(--accent-rgb),0.5)', g: 'rgba(var(--accent-rgb),0.65)', d: '13.5s', delay: '-6s' },
    { left: '93%', s: 3, c: 'rgba(var(--line-rgb),0.5)', g: 'rgba(var(--line-rgb),0.45)', d: '20s', delay: '-14s' },
];

const featured = [
    { to: '/booking', kicker: 'Signature', title: 'Signature Entertainment', desc: 'Transformer robots, a giant gorilla, and LED performers who pull every phone out of every pocket.', img: '/images/led-robot-performer.jpeg' },
    { to: '/booking', kicker: 'Atmosphere', title: 'Special Effects', desc: 'Clouds, cold sparks, fog effects — cinematic moments, venue-safe.', img: '/images/first-dance-clouds.jpeg' },
    { to: '/booking', kicker: 'Statement', title: 'Marquee Rentals', desc: 'MARRY ME, names, numbers — four feet tall and glowing.', img: '/images/marry-me-rooftop.jpeg' },
];

const signature = [
    { n: '01', title: 'Dancing on the Clouds', desc: 'A knee-deep sea of soft white cloud rolls across the dance floor as you take your first dance. It photographs like a dream sequence — because it is one.', link: '/gallery', linkLabel: 'View in Gallery', img: '/images/wedding-ballroom-production.jpeg', flip: false },
    { n: '02', title: 'Cold Sparkler Fountains', desc: 'Indoor-safe spark fountains that erupt on cue — for entrances, first kisses, cake cuttings, and the drop of the night. No flame, no smoke, all drama.', link: '/gallery', linkLabel: 'View in Gallery', img: '/images/cold-spark-fountains.jpeg', flip: true },
    { n: '03', title: 'Transformer Robot Entrances', desc: 'A ten-foot robot rolls in, transforms, and greets your guests by name. Kids scream, adults film, and your event becomes the one everyone compares the rest to.', link: '/gallery', linkLabel: 'View in Gallery', img: '/images/led-robot-performer.jpeg', flip: false },
];

const stats = [
    { value: 1, suffix: '', text: '1', star: true, label: 'Event rental service' },
    { value: '5.0', suffix: '', text: '5.0', star: true, label: 'Average client rating' },
    { value: 15, suffix: '', text: '15', label: 'Event types served' },
    { value: 12, suffix: '', text: '12', label: 'Signature experiences' },
];

const eventTiles = [
    { label: 'Weddings', img: '/images/first-dance-clouds.jpeg' },
    { label: 'Proposals', img: '/images/marry-me-rooftop.jpeg' },
    { label: 'Birthdays', img: img('1530103862676-de8c9debad1d', 700) },
    { label: 'Corporate', img: img('1540575467063-178a50c2df87', 700) },
    { label: 'Graduations', img: img('1541339907198-e08756dedf3f', 700) },
    { label: 'Festivals', img: img('1506157786151-b8491531f063', 700) },
];

const portfolio = [
    { img: '/images/marry-me-marquee.jpeg', alt: 'MARRY ME marquee setup' },
    { img: '/images/cold-spark-fountains.jpeg', alt: 'Cold spark fountains' },
    { img: '/images/led-robot-performer.jpeg', alt: 'LED robot performer' },
    { img: '/images/wedding-ballroom-production.jpeg', alt: 'Ballroom production glow' },
];

const process = [
    { n: '01', title: 'Share your vision', desc: 'Tell us the event, the date, and the moment you\u2019re dreaming of — two minutes, tops.' },
    { n: '02', title: 'Get a custom proposal', desc: 'Within 24 hours you\u2019ll have an itemized plan — experiences, timing, and staging, tailored to your venue.' },
    { n: '03', title: 'We handle everything', desc: 'Venue coordination, insurance, load-in, rehearsal cues. You won\u2019t lift a finger — that\u2019s the point.' },
    { n: '04', title: 'Showtime', desc: 'The lights drop, the sparks rise, and your guests reach for their phones. This is the part we live for.', highlight: true },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section data-theme="dark" class="relative min-h-svh flex items-center justify-center overflow-hidden bg-ink-950">
            <div class="absolute inset-0 overflow-hidden">
                <img :src="img('1492684223066-81342ee5ff30', 2000)" alt="Sparks and light over a celebrating crowd" class="w-full h-full object-cover block opacity-[0.52] [animation:kenburns_26s_ease-in-out_infinite_alternate]">
            </div>
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0.62)_0%,rgba(var(--scrim-rgb),0.45)_40%,rgba(var(--scrim-rgb),0.88)_82%,var(--c-bg)_100%)]"></div>
            <div class="absolute inset-0 bg-spotlight"></div>
            <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <span
                    v-for="(p, i) in particles"
                    :key="i"
                    class="absolute bottom-[-12px] rounded-full"
                    :style="{ left: p.left, width: p.s + 'px', height: p.s + 'px', background: p.c, boxShadow: `0 0 ${p.s * 2.3}px ${p.g}`, animation: `floatUp ${p.d} linear infinite`, animationDelay: p.delay }"
                ></span>
            </div>

            <div class="relative z-[2] max-w-[1060px] mx-auto px-6 pt-[140px] pb-[110px] flex flex-col items-center text-center gap-[26px]">
                <div class="[animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
                    <UiEyebrow>Premium Event Entertainment · Est. to Dazzle</UiEyebrow>
                </div>
                <h1 class="m-0 font-display font-semibold text-[clamp(46px,8.4vw,108px)] leading-[1.02] tracking-[-0.01em] text-ivory [animation:riseUp_1000ms_cubic-bezier(0.16,1,0.3,1)_0.25s_both]">
                    Bring Your <em class="italic text-gold-300">Celebration</em><br>To Life
                </h1>
                <p class="m-0 max-w-[66ch] text-[clamp(15px,1.6vw,18px)] leading-[1.75] text-ink-200 [animation:riseUp_1000ms_cubic-bezier(0.16,1,0.3,1)_0.42s_both]">
                    From giant Transformer robots and gorilla performers to dancing on the clouds, cold sparklers, and stunning marquee letters — we create unforgettable moments your guests will talk about long after the event ends.
                </p>
                <div class="flex flex-wrap gap-3.5 justify-center [animation:riseUp_1000ms_cubic-bezier(0.16,1,0.3,1)_0.58s_both]">
                    <UiButton to="/booking" size="lg">Book Your Event</UiButton>
                    <UiButton to="/services" size="lg" variant="ghost">View Experiences</UiButton>
                </div>
                <div class="flex items-center gap-2.5 text-xs tracking-[0.14em] uppercase text-ink-300 [animation:riseUp_1000ms_cubic-bezier(0.16,1,0.3,1)_0.74s_both]">
                    <span>Indoor-safe</span><span class="text-gold-600">·</span><span>Fully insured</span><span class="text-gold-600">·</span><span>Venue-approved</span>
                </div>
            </div>

            <div class="absolute bottom-[26px] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2" aria-hidden="true">
                <span class="text-[10px] tracking-[0.24em] uppercase text-ink-400">Scroll</span>
                <div class="w-px h-11 bg-[rgba(var(--line-rgb),0.12)] overflow-hidden"><div class="w-px h-full bg-gold-500 [animation:cueDrop_2.2s_cubic-bezier(0.16,1,0.3,1)_infinite]"></div></div>
            </div>
        </section>

        <!-- TICKER -->
        <section class="border-y border-subtle py-[22px] overflow-hidden bg-ink-900" aria-hidden="true">
            <div class="flex w-max [animation:ticker_36s_linear_infinite]">
                <div v-for="half in 2" :key="half" class="flex items-center gap-[34px] pr-[34px]">
                    <template v-for="item in tickerItems" :key="item">
                        <span class="font-display font-medium italic text-[22px] text-ivory-dim whitespace-nowrap">{{ item }}</span>
                        <span class="text-gold-500 text-xs">◆</span>
                    </template>
                </div>
            </div>
        </section>

        <!-- FEATURED SERVICES -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-[54px]">
                <UiEyebrow>What We Do</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,56px)] leading-[1.08] text-ivory">Three ways to make the room <em class="italic text-gold-300">stop</em></h2>
                <p class="m-0 max-w-[58ch] text-base leading-[1.7] text-ink-200">Every experience is delivered by our team, end to end — designed, insured, and staged to feel effortless.</p>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                <NuxtLink
                    v-for="f in featured"
                    :key="f.title"
                    v-reveal
                    :to="f.to"
                    class="group relative rounded-xl overflow-hidden border border-subtle bg-ink-800 no-underline flex flex-col transition-[transform,border-color,box-shadow] duration-300 ease-entrance hover:-translate-y-[5px] hover:border-gold-line hover:shadow-gold-card"
                >
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img :src="f.img" :alt="f.title" class="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-500 ease-entrance group-hover:scale-[1.04]" loading="lazy">
                        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0)_55%,rgba(var(--scrim-rgb),0.45)_100%)]"></div>
                    </div>
                    <div class="flex flex-col gap-2.5 px-6 pt-[22px] pb-6 flex-1">
                        <span class="text-[11px] tracking-[0.22em] uppercase text-gold-400">{{ f.kicker }}</span>
                        <h3 class="m-0 font-display font-semibold text-2xl text-ivory">{{ f.title }}</h3>
                        <p class="m-0 text-sm leading-[1.6] text-ink-200 flex-1">{{ f.desc }}</p>
                        <span class="mt-1.5 text-xs tracking-[0.16em] uppercase text-gold-300 flex items-center gap-2">
                            Book Your Event
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                        </span>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- SIGNATURE EXPERIENCES -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)] flex flex-col gap-[clamp(56px,7vw,84px)]">
                <div v-reveal class="flex flex-col gap-3.5 max-w-[640px]">
                    <UiEyebrow>Signature Experiences</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,56px)] leading-[1.08] text-ivory">The moments guests <em class="italic text-gold-300">never</em> forget</h2>
                </div>
                <div
                    v-for="s in signature"
                    :key="s.n"
                    v-reveal
                    class="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-[clamp(28px,4vw,64px)] items-center"
                >
                    <div class="relative rounded-xl overflow-hidden border border-subtle aspect-[16/11]" :class="s.flip ? 'order-2' : ''">
                        <img :src="s.img" :alt="s.title" class="absolute inset-0 w-full h-full object-cover object-[50%_35%]" loading="lazy">
                    </div>
                    <div class="flex flex-col gap-4 py-2" :class="s.flip ? 'order-1' : ''">
                        <span class="font-mono text-[13px] text-gold-600 tracking-[0.12em]">{{ s.n }}</span>
                        <h3 class="m-0 font-display font-semibold text-[clamp(28px,3.2vw,40px)] text-ivory">{{ s.title }}</h3>
                        <p class="m-0 text-[15.5px] leading-[1.75] text-ink-200 max-w-[52ch]">{{ s.desc }}</p>
                        <NuxtLink :to="s.link" class="text-xs tracking-[0.16em] uppercase text-gold-300 flex items-center gap-2 w-fit no-underline hover:text-gold-200">
                            {{ s.linkLabel }}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- STATS -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(140px,100%),1fr))] gap-[clamp(20px,4vw,48px)] text-center">
                <div v-for="st in stats" :key="st.label" class="flex flex-col gap-2 p-3">
                    <span class="flex items-start justify-center gap-1 font-sans font-semibold text-[clamp(40px,5vw,64px)] leading-none text-gold-300">
                        <span v-count="st.value" :data-suffix="st.suffix">{{ st.text }}</span>
                        <span v-if="st.star" aria-hidden="true" class="text-[0.45em] mt-[0.08em] bg-[linear-gradient(135deg,#fbe9a6_0%,#f2cd6a_38%,#d9a437_68%,#f7e08b_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_0_12px_rgba(242,205,106,0.6))] [animation:twinkle_2.6s_ease-in-out_infinite]">★</span>
                    </span>
                    <span class="text-[11.5px] tracking-[0.2em] uppercase text-ink-300">{{ st.label }}</span>
                </div>
            </div>
        </section>

        <!-- ABOUT PREVIEW -->
        <section class="bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.1)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg2)] border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)] grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-[clamp(32px,5vw,72px)] items-center">
                <div v-reveal class="grid grid-cols-2 gap-3.5">
                    <img :src="img('1519741497674-611481863552', 800)" alt="Couple at a dark, warmly lit celebration" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle" loading="lazy">
                    <img :src="img('1478147427282-58a87a120781', 800)" alt="Guests with hands raised under warm light" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle mt-9" loading="lazy">
                </div>
                <div v-reveal class="flex flex-col gap-[18px]">
                    <UiEyebrow>Stay Lit Party</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,54px)] leading-[1.08] text-ivory">You're the VIP.<br>We handle the <em class="italic text-gold-300">magic</em>.</h2>
                    <p class="m-0 text-base leading-[1.75] text-ink-200 max-w-[56ch]">SLP Events began with one belief: an ordinary celebration is a missed opportunity. Today we design, stage, and perform the moments that turn a nice night into the story your guests tell for years.</p>
                    <div class="flex flex-wrap gap-6 mt-1">
                        <div v-for="check in ['Full-service, end to end', 'Insured & venue-approved', 'Performers on our team']" :key="check" class="flex items-center gap-2.5 text-ivory-dim text-sm">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                            {{ check }}
                        </div>
                    </div>
                    <div class="mt-2.5">
                        <UiButton to="/about" variant="ghost">Our Story</UiButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- EVENT CATEGORIES PREVIEW -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <div v-reveal class="flex flex-wrap items-end justify-between gap-[18px] mb-11">
                <div class="flex flex-col gap-3.5">
                    <UiEyebrow>Events We Serve</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,54px)] leading-[1.08] text-ivory">Any reason to celebrate<br>is <em class="italic text-gold-300">reason enough</em></h2>
                </div>
                <UiButton to="/events" variant="ghost">All 15 Event Types</UiButton>
            </div>
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-[clamp(10px,1.6vw,16px)]">
                <NuxtLink
                    v-for="t in eventTiles"
                    :key="t.label"
                    to="/events"
                    class="relative rounded-xl overflow-hidden aspect-[3/4] border border-subtle no-underline transition-[transform,border-color] duration-300 ease-entrance hover:-translate-y-1 hover:border-gold-line"
                >
                    <img :src="t.img" :alt="t.label" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0.05)_40%,rgba(var(--scrim-rgb),0.82)_100%)]"></div>
                    <span class="absolute left-4 bottom-3.5 font-display font-medium text-[21px] text-ivory">{{ t.label }}</span>
                </NuxtLink>
            </div>
        </section>

        <!-- PORTFOLIO PREVIEW -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
                <div v-reveal class="flex flex-wrap items-end justify-between gap-[18px] mb-11">
                    <div class="flex flex-col gap-3.5">
                        <UiEyebrow>The Portfolio</UiEyebrow>
                        <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,54px)] leading-[1.08] text-ivory">Moments we've <em class="italic text-gold-300">staged</em></h2>
                    </div>
                    <UiButton to="/gallery" variant="ghost">View Full Gallery</UiButton>
                </div>
                <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-[clamp(10px,1.6vw,16px)]">
                    <NuxtLink v-for="p in portfolio" :key="p.alt" to="/gallery" class="relative rounded-xl overflow-hidden aspect-[4/5] border border-subtle">
                        <img :src="p.img" :alt="p.alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS PREVIEW -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-[54px]">
                <UiEyebrow>Client Love</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,56px)] leading-[1.08] text-ivory">Don't take <em class="italic text-gold-300">our</em> word for it</h2>
            </div>
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                <div
                    v-for="t in testimonialsPreview"
                    :key="t.name"
                    class="bg-ink-800 border border-subtle rounded-xl px-7 py-[30px] flex flex-col gap-[18px] transition-[transform,border-color] duration-300 ease-entrance hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.4)]"
                >
                    <div class="flex gap-1 text-gold-400">
                        <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9z"></path></svg>
                    </div>
                    <p class="m-0 font-display font-medium text-lg leading-[1.55] text-ink-100 italic">“{{ t.quote }}”</p>
                    <div class="mt-auto flex flex-col gap-[3px]">
                        <span class="text-sm font-bold text-ivory">{{ t.name }}</span>
                        <span class="text-xs tracking-[0.1em] uppercase text-ink-300">{{ t.event }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROCESS -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
                <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-[60px]">
                    <UiEyebrow>How It Works</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,56px)] leading-[1.08] text-ivory">Four steps to <em class="italic text-gold-300">showtime</em></h2>
                </div>
                <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-[clamp(20px,3vw,36px)]">
                    <div
                        v-for="p in process"
                        :key="p.n"
                        class="flex flex-col gap-3.5 px-6 py-[26px] rounded-xl bg-ink-850"
                        :class="p.highlight ? 'border border-[rgba(var(--accent-rgb),0.4)] shadow-[0_0_32px_rgba(var(--accent-rgb),0.12)]' : 'border border-subtle'"
                    >
                        <span class="font-mono text-[13px]" :class="p.highlight ? 'text-gold-400' : 'text-gold-600'">{{ p.n }}</span>
                        <h3 class="m-0 font-display font-semibold text-[22px] text-ivory">{{ p.title }}</h3>
                        <p class="m-0 text-sm leading-[1.65] text-ink-200">{{ p.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ PREVIEW -->
        <section class="max-w-[840px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <div v-reveal class="flex flex-col items-center text-center gap-3.5 mb-11">
                <UiEyebrow>Good Questions</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(34px,4.4vw,54px)] leading-[1.08] text-ivory">Asked <em class="italic text-gold-300">often</em></h2>
            </div>
            <div v-reveal class="flex flex-col gap-3">
                <UiAccordion v-for="f in faqPreview" :key="f.q" :title="f.q">
                    <p class="m-0 text-[14.5px] leading-[1.7] text-ink-200">{{ f.a }}</p>
                </UiAccordion>
            </div>
        </section>

        <!-- FINAL CTA -->
        <section class="relative overflow-hidden border-t border-subtle">
            <div class="absolute inset-0">
                <img :src="img('1533174072545-7a4b6ad7a6c3', 2000)" alt="" aria-hidden="true" class="w-full h-full object-cover opacity-30" loading="lazy">
                <div class="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.22)_0%,rgba(var(--scrim-rgb),0.55)_60%),linear-gradient(180deg,var(--c-bg)_0%,rgba(var(--scrim-rgb),0.55)_30%,var(--c-bg)_100%)]"></div>
            </div>
            <div class="relative max-w-[860px] mx-auto px-6 py-[clamp(90px,12vw,150px)] flex flex-col items-center text-center gap-6">
                <div v-reveal><UiEyebrow>Your Turn</UiEyebrow></div>
                <h2 v-reveal class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,80px)] leading-[1.05] text-ivory">Let's create <em class="italic text-gold-300">your</em> moment.</h2>
                <p v-reveal class="m-0 max-w-[52ch] text-base leading-[1.7] text-ink-200">Dates book fast — especially Saturdays. Tell us what you're celebrating and we'll take it from there.</p>
                <div v-reveal class="flex flex-wrap gap-3.5 justify-center">
                    <UiButton to="/booking" size="lg">Start Planning</UiButton>
                </div>
            </div>
        </section>
    </main>
</template>
