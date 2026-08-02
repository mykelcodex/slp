<script setup>
import { img } from '~/data/site.js';

useHead({ title: 'About Us — SLP Events' });

const values = [
    { icon: 'sparkles', title: 'In-house everything', desc: 'Performers, technicians, and gear are ours — no subcontracted surprises on your big day.' },
    { icon: 'shield', title: 'Safety as standard', desc: 'Fully insured, venue-approved equipment, and technicians trained on every effect we run.' },
    { icon: 'calendar', title: 'Choreographed to the second', desc: 'Every effect fires on a cue sheet we build with your DJ, planner, and photographer.' },
    { icon: 'users', title: "You're the VIP", desc: 'One point of contact from first call to final cue. We answer fast and show up early.' },
];

const timeline = [
    { year: '2025', title: 'The first spark', desc: 'Two cold spark machines, one borrowed van, and a wedding that changed everything.' },
    { year: '2025', title: 'Performers join the family', desc: 'The first Transformer robot suit arrives — and books out three months in one week.' },
    { year: '2026', title: 'Full production house', desc: 'Clouds, fog effects, marquee letters — the complete SLP experience under one roof.' },
    { year: 'Today', title: 'No. 1 event rental service', desc: 'Weddings, festivals, corporate launches — every one treated like the only event on the calendar.', last: true },
];

</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(70px,9vw,110px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>About SLP Events</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">We don't do events.<br>We do <em class="italic text-gold-300">moments</em>.</h1>
                <p class="m-0 max-w-[60ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Stay Lit Party started as a promise between friends: nobody leaves our parties early. It became a company that keeps that promise for hundreds of clients a year.</p>
            </div>
        </section>

        <!-- STORY -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)] grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-[clamp(32px,5vw,72px)] items-center">
            <div v-reveal class="flex flex-col gap-[18px]">
                <UiEyebrow>The Story</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(32px,4vw,50px)] leading-[1.1] text-ivory">Born at a party that <em class="italic text-gold-300">refused</em> to end</h2>
                <p class="m-0 text-[15.5px] leading-[1.8] text-ink-200">It began with a single pair of cold spark machines and a borrowed van. The first wedding we lit, the couple's first dance stopped the room — phones up, jaws down. The next morning, three of their guests called us.</p>
                <p class="m-0 text-[15.5px] leading-[1.8] text-ink-200">Word of mouth built SLP Events into a full production house: interactive performers, luxury effects, marquee letters, and a team that treats a backyard birthday with the same reverence as a ballroom gala. The van is nicer now. The promise hasn't changed.</p>
            </div>
            <div v-reveal class="grid grid-cols-2 gap-3.5">
                <img :src="img('1511285560929-80b456fea0bc', 800)" alt="Sparks during a first dance" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle" loading="lazy">
                <img :src="img('1527529482837-4698179dc6ce', 800)" alt="Guests toasting at a dark party" class="w-full aspect-[3/4] object-cover rounded-xl border border-subtle mt-9" loading="lazy">
            </div>
        </section>

        <!-- MISSION / VISION -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
                <div v-reveal class="px-8 py-[34px] rounded-xl bg-ink-850 border border-[rgba(var(--accent-rgb),0.35)] shadow-[0_0_32px_rgba(var(--accent-rgb),0.08)] flex flex-col gap-3.5">
                    <span class="text-[11px] tracking-[0.22em] uppercase text-gold-400">Our Mission</span>
                    <p class="m-0 font-display font-medium text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-ink-100">To transform ordinary celebrations into unforgettable experiences through premium entertainment, special effects, and exceptional service.</p>
                </div>
                <div v-reveal class="px-8 py-[34px] rounded-xl bg-ink-850 border border-subtle flex flex-col gap-3.5">
                    <span class="text-[11px] tracking-[0.22em] uppercase text-gold-400">Our Vision</span>
                    <p class="m-0 font-display font-medium text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-ink-100">To be known for delivering spectacular moments that guests remember for a lifetime — and compare every other event to.</p>
                </div>
            </div>
        </section>

        <!-- WHY SLP -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <div v-reveal class="flex flex-col gap-3.5 mb-[50px] max-w-[640px]">
                <UiEyebrow>Why SLP</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(32px,4.2vw,52px)] leading-[1.1] text-ivory">What "premium" means <em class="italic text-gold-300">here</em></h2>
            </div>
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
                <div v-for="v in values" :key="v.title" class="px-[26px] py-7 border border-subtle rounded-xl bg-ink-800 flex flex-col gap-3">
                    <svg v-if="v.icon === 'sparkles'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"></path></svg>
                    <svg v-else-if="v.icon === 'shield'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.7 8.9a2 2 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    <svg v-else-if="v.icon === 'calendar'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18M8 2v4M16 2v4"></path></svg>
                    <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M3 20a6 6 0 0 1 12 0"></path><path d="M16 5.5a3 3 0 0 1 0 5.8M21 20a6 6 0 0 0-4-5.6"></path></svg>
                    <h3 class="m-0 text-[17px] font-bold text-ivory">{{ v.title }}</h3>
                    <p class="m-0 text-sm leading-[1.65] text-ink-200">{{ v.desc }}</p>
                </div>
            </div>
        </section>

        <!-- TIMELINE -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[900px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
                <div v-reveal class="flex flex-col gap-3.5 mb-[50px]">
                    <UiEyebrow>The Journey</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(32px,4.2vw,52px)] leading-[1.1] text-ivory">From two machines to <em class="italic text-gold-300">main stage</em></h2>
                </div>
                <div class="flex flex-col">
                    <div v-for="t in timeline" :key="t.year" v-reveal class="grid grid-cols-[clamp(46px,9vw,80px)_20px_1fr] gap-x-[18px]" :class="t.last ? '' : 'pb-9'">
                        <span class="font-mono text-sm text-gold-400 pt-0.5">{{ t.year }}</span>
                        <div class="flex flex-col items-center">
                            <span v-if="t.last" class="w-[11px] h-[11px] rotate-45 bg-gold-300 shadow-[0_0_14px_rgba(var(--accent-rgb),0.6)] flex-none mt-[5px]"></span>
                            <span v-else class="w-[9px] h-[9px] rotate-45 bg-gold-500 flex-none mt-1.5"></span>
                            <span v-if="!t.last" class="w-px flex-1 bg-[rgba(var(--line-rgb),0.12)] mt-2"></span>
                        </div>
                        <div>
                            <h3 class="m-0 mb-1.5 text-[17px] font-bold text-ivory">{{ t.title }}</h3>
                            <p class="m-0 text-[14.5px] leading-[1.7] text-ink-200">{{ t.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHILOSOPHY -->
        <section class="max-w-[900px] mx-auto px-6 py-[clamp(72px,9vw,110px)] text-center">
            <div v-reveal class="flex flex-col items-center gap-[22px]">
                <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold500)"></path></svg>
                <p class="m-0 font-display font-medium italic text-[clamp(24px,3.4vw,38px)] leading-[1.4] text-ink-100">"A celebration should have a moment the whole room shares —<br>our job is to build it, hide it, and release it at the perfect second."</p>
                <span class="text-xs tracking-[0.2em] uppercase text-ink-300">The SLP Event Philosophy</span>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Come see what the fuss is about." desc="Browse the gallery, or skip ahead and tell us about your event.">
                <UiButton to="/gallery" variant="ghost">The Gallery</UiButton>
                <UiButton to="/booking">Book Your Event</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
