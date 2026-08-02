<script setup>
import { img } from '~/data/site.js';

useHead({ title: 'Special Effects — SLP Events' });

const effects = [
    { title: 'Dancing on the Clouds', desc: 'Dry-ice cloud that hugs the floor — the signature first-dance effect. No smoke alarms, no residue.', best: 'Best for: first dances · proposals', img: img('1511285560929-80b456fea0bc'), alt: 'Dancing on the clouds' },
    { title: 'Cold Sparklers', desc: 'Indoor-safe spark fountains, 6–15 ft tall, fired on cue. The most requested effect we carry.', best: 'Best for: entrances · first kiss · cake cutting', img: img('1467810563316-b5476525c0f9'), alt: 'Cold sparkler' },
    { title: 'Fog Effects', desc: 'Concert-grade fog jets and handheld cannons. Instant energy for drops, reveals, and dance sets.', best: 'Best for: dance floors · launches · reveals', img: img('1514525253161-7a46d19cd819'), alt: 'Fog jets over a crowd' },
    { title: 'Fog & Haze', desc: 'A whisper of haze makes every beam of light visible — the secret behind every cinematic photo.', best: 'Best for: photography · ambiance · light shows', img: img('1504680177321-2e6a879aac86'), alt: 'Fog and haze' },
    { title: 'Bubble Effects', desc: 'Cascades of bubbles — with optional fog-filled "ghost bubbles" — for daytime magic and kids\u2019 moments.', best: 'Best for: baby showers · daytime events · kids', img: img('1513151233558-d860c5398176'), alt: 'Floating shimmer in the air' },
];

const safety = [
    { icon: 'shield', title: 'Fully insured', desc: 'Certificates provided to every venue' },
    { icon: 'users', title: 'Trained operators', desc: 'A technician on every effect, all night' },
    { icon: 'flame', title: 'No open flame', desc: 'Cold-spark tech, low temperature' },
    { icon: 'check', title: 'Venue-approved', desc: 'Spec sheets sent ahead — approval on us' },
];

const setup = [
    { phase: 'BEFORE', desc: 'We coordinate with your venue, walk the floor plan, and stage equipment 2–3 hours ahead — hidden from guests.' },
    { phase: 'DURING', desc: 'A technician runs each effect on a cue sheet synced with your DJ and photographer. Nothing fires early. Nothing fires late.' },
    { phase: 'AFTER', desc: 'We tear down quietly and leave the venue exactly as we found it — full cleanup included, always.' },
];
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative min-h-[72vh] flex items-end overflow-hidden bg-ink-950">
            <img :src="img('1504680177321-2e6a879aac86', 2000)" alt="Stage bathed in fog and warm haze" class="absolute inset-0 w-full h-full object-cover opacity-50 [animation:kenburns_24s_ease-in-out_infinite_alternate]">
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0.7)_0%,rgba(var(--scrim-rgb),0.3)_45%,var(--c-bg)_100%)]"></div>
            <div class="relative max-w-[1240px] mx-auto w-full px-6 pt-[clamp(150px,18vw,220px)] pb-[clamp(48px,6vw,72px)] flex flex-col gap-5">
                <UiEyebrow>Luxury Special Effects</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,88px)] leading-[1.04] text-ivory max-w-[15ch] [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Atmosphere, on <em class="italic text-gold-300">cue</em></h1>
                <p class="m-0 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Five cinematic effects, each timed to the second and safe for indoor venues. This is how a moment becomes a scene.</p>
                <div class="flex items-center gap-2.5 text-xs tracking-[0.14em] uppercase text-ink-300 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.35s_both]">
                    <span>Indoor-safe</span><span class="text-gold-600">·</span><span>Fully insured</span><span class="text-gold-600">·</span><span>Venue-approved</span>
                </div>
            </div>
        </section>

        <!-- EFFECTS GRID -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                <div
                    v-for="e in effects"
                    :key="e.title"
                    class="rounded-xl overflow-hidden border border-subtle bg-ink-800 flex flex-col transition-[transform,border-color] duration-300 ease-entrance hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.5)]"
                >
                    <div class="relative aspect-[16/9] overflow-hidden">
                        <img :src="e.img" :alt="e.alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    </div>
                    <div class="p-6 flex flex-col gap-2.5 flex-1">
                        <h3 class="m-0 font-display font-semibold text-[23px] text-ivory">{{ e.title }}</h3>
                        <p class="m-0 text-sm leading-[1.65] text-ink-200 flex-1">{{ e.desc }}</p>
                        <span class="text-[11.5px] tracking-[0.14em] uppercase text-gold-400">{{ e.best }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SAFETY -->
        <section class="bg-ink-900 border-y border-subtle">
            <div class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[clamp(32px,5vw,64px)] items-center">
                <div v-reveal class="flex flex-col gap-4">
                    <UiEyebrow>Safety First, Always</UiEyebrow>
                    <h2 class="m-0 font-display font-semibold text-[clamp(30px,3.8vw,48px)] leading-[1.1] text-ivory">Spectacular doesn't mean <em class="italic text-gold-300">risky</em></h2>
                    <p class="m-0 text-[15px] leading-[1.75] text-ink-200 max-w-[56ch]">Every effect we run is chosen specifically because it's safe around guests. Cold spark machines produce sparks you could pass a hand through. Our clouds are food-grade dry ice. Our fog jets are non-toxic and event-rated.</p>
                    <p class="m-0 text-[15px] leading-[1.75] text-ink-200 max-w-[56ch]">We carry comprehensive liability insurance, provide certificates to your venue before the event, and staff a trained technician on every machine, all night.</p>
                </div>
                <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
                    <div v-for="s in safety" :key="s.title" class="px-5 py-[22px] border border-[rgba(var(--line-rgb),0.1)] rounded-xl bg-ink-850 flex flex-col gap-2">
                        <svg v-if="s.icon === 'shield'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.7 8.9a2 2 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        <svg v-else-if="s.icon === 'users'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M3 20a6 6 0 0 1 12 0"></path><path d="M16 5.5a3 3 0 0 1 0 5.8M21 20a6 6 0 0 0-4-5.6"></path></svg>
                        <svg v-else-if="s.icon === 'flame'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c1.5 0 1.5-1.5 1.5-3 0-3-1.5-4-.5-6z"></path></svg>
                        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                        <span class="text-[14.5px] font-bold text-ivory">{{ s.title }}</span>
                        <span class="text-[13px] leading-[1.55] text-ink-300">{{ s.desc }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SETUP PROCESS -->
        <section class="max-w-[1240px] mx-auto px-6 py-[clamp(64px,8vw,96px)]">
            <div v-reveal class="flex flex-col gap-3.5 mb-11 max-w-[640px]">
                <UiEyebrow>Setup, Invisible</UiEyebrow>
                <h2 class="m-0 font-display font-semibold text-[clamp(30px,3.8vw,48px)] leading-[1.1] text-ivory">You'll never see us <em class="italic text-gold-300">coming</em></h2>
            </div>
            <div v-reveal class="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
                <div v-for="p in setup" :key="p.phase" class="flex flex-col gap-3 px-6 py-[26px] border border-subtle rounded-xl bg-ink-800">
                    <span class="font-mono text-[13px] text-gold-600">{{ p.phase }}</span>
                    <p class="m-0 text-[14.5px] leading-[1.7] text-ink-200">{{ p.desc }}</p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="max-w-[1240px] mx-auto px-6 pb-[clamp(72px,9vw,110px)]">
            <CtaBanner title="Which effect fits your moment?" desc="Tell us the event and we'll recommend the perfect combination — most clients pair two.">
                <UiButton to="/booking">Book Effects</UiButton>
            </CtaBanner>
        </section>
    </main>
</template>
