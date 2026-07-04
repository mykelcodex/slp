<script setup>
import { computed, reactive, ref } from 'vue';
import { serviceOptions, budgets } from '~/data/site.js';

useHead({ title: 'Custom Quote — SLP Events' });

const eventTypes = ['Wedding', 'Proposal', 'Engagement', 'Birthday', 'Anniversary', 'Graduation', 'Baby Shower / Gender Reveal', 'Corporate Event', 'Grand Opening', 'Festival / Community', 'Other Celebration'];

const q = reactive({ type: '', date: '', venue: '', requests: '', budget: '', services: [], files: [] });
const sent = ref(false);

const toggleService = (name) => {
    const i = q.services.indexOf(name);
    if (i === -1) q.services.push(name);
    else q.services.splice(i, 1);
};

const onFiles = (e) => { q.files = Array.from(e.target.files || []).map((f) => f.name); };

const progress = computed(() => {
    const filled = [q.type, q.date, q.venue, q.requests, q.budget, q.services.length ? 'y' : ''].filter(Boolean).length;
    return Math.round((filled / 6) * 100);
});

const submit = () => { sent.value = true; };
const restart = () => {
    sent.value = false;
    Object.assign(q, { type: '', date: '', venue: '', requests: '', budget: '', services: [], files: [] });
};
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,200px)] pb-[clamp(48px,6vw,72px)] flex flex-col items-center text-center gap-5">
                <UiEyebrow>Custom Quote</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,76px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Build it <em class="italic text-gold-300">your</em> way</h1>
                <p class="m-0 max-w-[54ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Describe the event, pick your experiences, share your inspiration — we'll send an itemized quote within 24 hours.</p>
            </div>
        </section>

        <section class="max-w-[860px] mx-auto px-6 pt-[clamp(48px,6vw,72px)] pb-[clamp(72px,9vw,110px)]">
            <div v-reveal class="rounded-[20px] border border-[rgba(var(--line-rgb),0.1)] bg-ink-850 overflow-hidden">
                <template v-if="!sent">
                    <!-- PROGRESS -->
                    <div class="py-[18px] px-[clamp(24px,4vw,44px)] border-b border-subtle flex items-center gap-4">
                        <div class="flex-1 h-[5px] rounded-full bg-[rgba(var(--line-rgb),0.08)] overflow-hidden">
                            <div class="h-full rounded-full bg-[linear-gradient(90deg,var(--c-gold700),var(--c-gold500),var(--c-gold300))] transition-[width] duration-500 ease-entrance" :style="{ width: progress + '%' }"></div>
                        </div>
                        <span class="font-mono text-xs text-gold-400 whitespace-nowrap">{{ progress }}% complete</span>
                    </div>

                    <div class="p-[clamp(24px,4vw,44px)] flex flex-col gap-8">
                        <!-- 01 THE EVENT -->
                        <div class="flex flex-col gap-[18px]">
                            <div class="flex items-center gap-3">
                                <span class="font-mono text-xs text-gold-600">01</span>
                                <h2 class="m-0 font-display font-semibold text-[clamp(21px,2.6vw,27px)] text-ivory">The event</h2>
                            </div>
                            <UiSelect v-model="q.type" label="Event type">
                                <option value="">Select an event type…</option>
                                <option v-for="t in eventTypes" :key="t" :value="t">{{ t }}</option>
                            </UiSelect>
                            <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                                <UiInput v-model="q.date" label="Event date" type="date"></UiInput>
                                <UiInput v-model="q.venue" label="Venue / city" placeholder="TBD is fine"></UiInput>
                            </div>
                        </div>

                        <!-- 02 THE EXPERIENCES -->
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-3">
                                <span class="font-mono text-xs text-gold-600">02</span>
                                <h2 class="m-0 font-display font-semibold text-[clamp(21px,2.6vw,27px)] text-ivory">The experiences</h2>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button
                                    v-for="sv in serviceOptions"
                                    :key="sv"
                                    type="button"
                                    class="cursor-pointer px-[18px] py-[11px] rounded-full text-[13px] font-semibold transition-all duration-200 border"
                                    :class="q.services.includes(sv) ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.12)] text-gold-300' : 'border-hairline bg-transparent text-ink-300 hover:text-ink-200'"
                                    @click="toggleService(sv)"
                                >{{ sv }}</button>
                            </div>
                        </div>

                        <!-- 03 THE VISION -->
                        <div class="flex flex-col gap-[18px]">
                            <div class="flex items-center gap-3">
                                <span class="font-mono text-xs text-gold-600">03</span>
                                <h2 class="m-0 font-display font-semibold text-[clamp(21px,2.6vw,27px)] text-ivory">The vision</h2>
                            </div>
                            <UiTextarea v-model="q.requests" label="Special requests" placeholder="The entrance you're imagining, songs to sync to, colors, surprises — paint us the picture." :rows="4"></UiTextarea>
                            <div class="flex flex-col gap-2.5">
                                <span class="text-xs tracking-[0.14em] uppercase text-gold-400">Inspiration images (optional)</span>
                                <label class="flex flex-col items-center justify-center gap-2 px-5 py-7 border border-dashed border-[rgba(var(--line-rgb),0.2)] rounded-xl cursor-pointer transition-[border-color,background] duration-200 hover:border-[rgba(var(--accent-rgb),0.5)] hover:bg-[rgba(var(--accent-rgb),0.04)]">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path></svg>
                                    <span class="text-[13.5px] text-ink-200">Drop screenshots or tap to upload</span>
                                    <span class="text-[11.5px] text-ink-400">Pinterest boards, reels, photos — anything</span>
                                    <input type="file" multiple accept="image/*" class="hidden" @change="onFiles">
                                </label>
                                <p v-if="q.files.length" class="m-0 text-[12.5px] text-gold-400">Attached: {{ q.files.join(', ') }}</p>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <span class="text-xs tracking-[0.14em] uppercase text-gold-400">Budget range</span>
                                <div class="flex flex-wrap gap-2.5">
                                    <button
                                        v-for="b in budgets"
                                        :key="b"
                                        type="button"
                                        class="cursor-pointer px-[18px] py-[11px] rounded-full text-[13px] font-semibold transition-all duration-200 border"
                                        :class="q.budget === b ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.12)] text-gold-300' : 'border-hairline bg-transparent text-ink-300 hover:text-ink-200'"
                                        @click="q.budget = b"
                                    >{{ b }}</button>
                                </div>
                            </div>
                        </div>

                        <UiButton size="lg" full-width @click="submit">Send My Quote Request</UiButton>
                        <p class="-mt-4 mb-0 text-center text-xs text-ink-400">Itemized quote within 24 hours · no obligation</p>
                    </div>
                </template>

                <!-- SUCCESS -->
                <div v-else class="flex flex-col items-center text-center gap-5 py-[clamp(48px,7vw,80px)] px-6">
                    <div class="w-[88px] h-[88px] rounded-full bg-[rgba(var(--accent-rgb),0.12)] border border-[rgba(var(--accent-rgb),0.5)] flex items-center justify-center shadow-glow">
                        <svg width="36" height="36" viewBox="0 0 64 64"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold300)"></path></svg>
                    </div>
                    <h2 class="m-0 font-display font-semibold text-[clamp(28px,3.6vw,40px)] text-ivory">Quote request received.</h2>
                    <p class="m-0 max-w-[44ch] text-[15px] leading-[1.75] text-ink-200">Our producers are already sketching your show. Expect an itemized quote in your inbox within 24 hours.</p>
                    <div class="flex flex-wrap gap-3 justify-center">
                        <UiButton to="/gallery">Browse the Gallery</UiButton>
                        <UiButton variant="ghost" @click="restart">New Request</UiButton>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
