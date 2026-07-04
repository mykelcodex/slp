<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { gallery, galleryFilters } from '~/data/site.js';

useHead({ title: 'Gallery — SLP Events' });

const filter = ref('All');
const lightbox = ref(-1);

const filtered = computed(() => (filter.value === 'All' ? gallery : gallery.filter((g) => g.cat === filter.value)));
const current = computed(() => (lightbox.value >= 0 && lightbox.value < filtered.value.length ? filtered.value[lightbox.value] : null));

const setFilter = (f) => { filter.value = f; lightbox.value = -1; };
const next = () => { lightbox.value = (lightbox.value + 1) % filtered.value.length; };
const prev = () => { lightbox.value = (lightbox.value - 1 + filtered.value.length) % filtered.value.length; };

const onKey = (e) => {
    if (lightbox.value < 0) return;
    if (e.key === 'Escape') lightbox.value = -1;
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
};
onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,210px)] pb-[clamp(56px,7vw,84px)] flex flex-col items-center text-center gap-[22px]">
                <UiEyebrow>The Portfolio</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(42px,7vw,86px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Proof of <em class="italic text-gold-300">magic</em></h1>
                <p class="m-0 max-w-[52ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Real moments from real events. Tap any image to view it full-size.</p>
            </div>
        </section>

        <!-- FILTERS + MASONRY -->
        <section class="max-w-[1240px] mx-auto px-6 pt-[clamp(36px,5vw,56px)] pb-[clamp(72px,9vw,110px)]">
            <div class="flex flex-wrap gap-2.5 justify-center mb-10">
                <button
                    v-for="f in galleryFilters"
                    :key="f"
                    class="cursor-pointer px-[18px] py-[9px] rounded-full text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 border"
                    :class="f === filter ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.12)] text-gold-300' : 'border-hairline bg-transparent text-ink-300 hover:text-ink-200'"
                    @click="setFilter(f)"
                >{{ f }}</button>
            </div>
            <div class="[columns:300px_3] [column-gap:18px]">
                <div
                    v-for="(g, i) in filtered"
                    :key="g.label"
                    class="group relative [break-inside:avoid] mb-[18px] rounded-xl overflow-hidden border border-subtle cursor-zoom-in transition-colors duration-300 hover:border-gold-line"
                    @click="lightbox = i"
                >
                    <img :src="g.img" :alt="g.label" loading="lazy" class="w-full block object-cover" :style="{ aspectRatio: g.ratio }">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0)_55%,rgba(var(--scrim-rgb),0.78)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-[18px]">
                        <span class="font-display font-medium text-[17px] text-ivory">{{ g.label }}</span>
                        <span class="text-[10.5px] tracking-[0.18em] uppercase text-gold-400 mt-1">{{ g.cat }}</span>
                    </div>
                </div>
            </div>
            <p class="mt-8 mb-0 text-center text-[13px] text-ink-400">Photography shown is representative — swap in your own event captures anytime.</p>
        </section>

        <!-- LIGHTBOX -->
        <Teleport to="body">
            <div
                v-if="current"
                class="fixed inset-0 z-[150] bg-[rgba(var(--scrim-rgb),0.92)] backdrop-blur-xl flex items-center justify-center p-[clamp(16px,4vw,48px)] [animation:fadeIn_220ms_ease_both] cursor-zoom-out"
                @click="lightbox = -1"
            >
                <div class="relative max-w-[1080px] w-full cursor-default" @click.stop>
                    <img :src="current.big" :alt="current.label" class="w-full max-h-[78vh] object-contain rounded-xl block">
                    <div class="flex items-center justify-between gap-4 mt-4">
                        <div>
                            <div class="font-display font-medium text-xl text-ivory">{{ current.label }}</div>
                            <div class="text-[11px] tracking-[0.18em] uppercase text-gold-400 mt-1">{{ current.cat }}</div>
                        </div>
                        <div class="flex gap-2.5">
                            <button aria-label="Previous" class="w-11 h-11 rounded-full border border-[rgba(var(--line-rgb),0.2)] bg-[rgba(var(--line-rgb),0.05)] text-ivory cursor-pointer flex items-center justify-center hover:border-gold-line hover:text-gold-300 transition-colors" @click="prev">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M11 18l-6-6 6-6"></path></svg>
                            </button>
                            <button aria-label="Next" class="w-11 h-11 rounded-full border border-[rgba(var(--line-rgb),0.2)] bg-[rgba(var(--line-rgb),0.05)] text-ivory cursor-pointer flex items-center justify-center hover:border-gold-line hover:text-gold-300 transition-colors" @click="next">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                            </button>
                            <button aria-label="Close" class="w-11 h-11 rounded-full border border-[rgba(var(--line-rgb),0.2)] bg-[rgba(var(--line-rgb),0.05)] text-ivory cursor-pointer flex items-center justify-center hover:border-gold-line hover:text-gold-300 transition-colors" @click="lightbox = -1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </main>
</template>
