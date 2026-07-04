<script setup>
import { computed, reactive, ref } from 'vue';
import { img, serviceOptions, budgets, addons, whatsappHref, WHATSAPP_NUMBER } from '~/data/site.js';

useHead({ title: 'Book Your Event — SLP Events' });

const eventTypes = ['Wedding', 'Proposal', 'Engagement', 'Birthday', 'Anniversary', 'Graduation', 'Baby Shower / Gender Reveal', 'Corporate Event', 'Grand Opening', 'Holiday Party', 'Other Celebration'];

const steps = [
    { n: 1, label: 'Your Event' },
    { n: 2, label: 'Experiences' },
    { n: 3, label: 'Budget' },
    { n: 4, label: 'Contact' },
];

const step = ref(1);
const submitted = ref(false);
const error = ref('');
const bk = reactive({ eventType: '', date: '', guests: '', venue: '', services: [], budget: '', addons: [], name: '', email: '', phone: '', notes: '' });

const toggle = (list, v) => {
    const i = list.indexOf(v);
    if (i === -1) list.push(v);
    else list.splice(i, 1);
};

const nextLabel = computed(() => (step.value === 4 ? 'Send Inquiry' : 'Continue'));
const summary = computed(() => `${bk.eventType || 'Your event'}${bk.date ? ' · ' + bk.date : ''} · ${bk.services.length} experience${bk.services.length === 1 ? '' : 's'}`);
const waBooking = computed(() =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi SLP Events! I just sent a booking inquiry for ${bk.eventType || 'my event'}${bk.date ? ' on ' + bk.date : ''}. Excited to plan!`)}`
);

const back = () => { step.value = Math.max(1, step.value - 1); error.value = ''; };
const next = () => {
    if (step.value === 4) {
        if (!bk.name.trim() || !bk.email.trim()) { error.value = 'Please add your name and email so we can reach you.'; return; }
        submitted.value = true;
        error.value = '';
        return;
    }
    step.value += 1;
    error.value = '';
};
const restart = () => {
    submitted.value = false;
    step.value = 1;
    Object.assign(bk, { eventType: '', date: '', guests: '', venue: '', services: [], budget: '', addons: [], name: '', email: '', phone: '', notes: '' });
};
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,200px)] pb-[clamp(48px,6vw,72px)] flex flex-col items-center text-center gap-5">
                <UiEyebrow>Book Your Event</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,76px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Let's create your <em class="italic text-gold-300">moment</em></h1>
                <p class="m-0 max-w-[54ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Four quick steps. No payment now — we'll reply with a custom proposal within 24 hours.</p>
            </div>
        </section>

        <section class="max-w-[1140px] mx-auto px-6 pt-[clamp(48px,6vw,72px)] pb-[clamp(72px,9vw,110px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[clamp(24px,4vw,48px)] items-start">
            <!-- STICKY PITCH -->
            <div v-reveal class="flex flex-col gap-[18px] lg:sticky lg:top-[100px]">
                <div class="rounded-2xl overflow-hidden border border-subtle relative aspect-[4/3]">
                    <img :src="img('1492684223066-81342ee5ff30', 1000)" alt="Celebration finale with sparks" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--scrim-rgb),0)_40%,rgba(var(--scrim-rgb),0.8)_100%)] flex items-end p-[22px]">
                        <span class="font-display font-medium italic text-[19px] text-ivory">"The easiest vendor we worked with, start to finish."</span>
                    </div>
                </div>
                <div class="flex flex-col gap-3 p-6 border border-subtle rounded-2xl bg-ink-850">
                    <div v-for="reassurance in ['Reply within 24 hours', 'No deposit until you approve the plan', 'Date held for 5 days while you decide']" :key="reassurance" class="flex items-center gap-2.5 text-sm text-ivory-dim">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                        {{ reassurance }}
                    </div>
                    <div class="h-px bg-[rgba(var(--line-rgb),0.08)] my-1.5"></div>
                    <span class="text-[12.5px] text-ink-300">Prefer to chat?</span>
                    <a :href="whatsappHref()" target="_blank" rel="noopener" class="flex items-center gap-2.5 text-gold-400 no-underline text-sm font-semibold">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
                        Message us on WhatsApp
                    </a>
                </div>
            </div>

            <!-- WIZARD -->
            <div v-reveal class="rounded-[20px] border border-[rgba(var(--line-rgb),0.1)] bg-ink-850 p-[clamp(24px,4vw,44px)] flex flex-col gap-7">
                <template v-if="!submitted">
                    <!-- STEPPER -->
                    <div class="flex items-center gap-2.5 overflow-x-auto pb-1">
                        <div v-for="st in steps" :key="st.n" class="flex items-center gap-2.5 flex-1 min-w-fit">
                            <div
                                class="w-[38px] h-[38px] rounded-full flex items-center justify-center font-mono text-[13px] flex-none transition-all duration-300"
                                :class="st.n < step
                                    ? 'bg-gold-500 text-on-accent border border-gold-500'
                                    : st.n === step
                                        ? 'bg-[rgba(var(--accent-rgb),0.12)] text-gold-300 border border-gold-line shadow-[0_0_18px_rgba(var(--accent-rgb),0.25)]'
                                        : 'bg-transparent text-ink-400 border border-hairline'"
                            >{{ st.n }}</div>
                            <span class="text-[11px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-300" :class="st.n <= step ? 'text-ivory-dim' : 'text-ink-400'">{{ st.label }}</span>
                            <div class="flex-1 h-px min-w-[18px]" :class="st.n < step ? 'bg-gold-line' : 'bg-[rgba(var(--line-rgb),0.12)]'"></div>
                        </div>
                    </div>

                    <!-- STEP 1 -->
                    <div v-if="step === 1" class="flex flex-col gap-5">
                        <h2 class="m-0 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Tell us about the event</h2>
                        <UiSelect v-model="bk.eventType" label="Event type">
                            <option value="">Select an event type…</option>
                            <option v-for="t in eventTypes" :key="t" :value="t">{{ t }}</option>
                        </UiSelect>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                            <UiInput v-model="bk.date" label="Event date" type="date"></UiInput>
                            <UiInput v-model="bk.guests" label="Guest count" type="number" placeholder="e.g. 120"></UiInput>
                        </div>
                        <UiInput v-model="bk.venue" label="Venue / city" placeholder="Venue name or city — TBD is fine"></UiInput>
                    </div>

                    <!-- STEP 2 -->
                    <div v-else-if="step === 2" class="flex flex-col gap-5">
                        <div>
                            <h2 class="m-0 mb-1.5 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Choose your experiences</h2>
                            <p class="m-0 text-[13.5px] text-ink-300">Pick as many as you like — we'll choreograph them into one show.</p>
                        </div>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
                            <button
                                v-for="sv in serviceOptions"
                                :key="sv"
                                type="button"
                                class="cursor-pointer px-[18px] py-4 rounded-xl flex items-center gap-3 text-left transition-all duration-200 border"
                                :class="bk.services.includes(sv) ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.1)]' : 'border-[rgba(var(--line-rgb),0.12)] bg-ink-850 hover:border-hairline'"
                                @click="toggle(bk.services, sv)"
                            >
                                <span
                                    class="w-5 h-5 rounded-full flex-none flex items-center justify-center border"
                                    :class="bk.services.includes(sv) ? 'border-gold-500 bg-gold-500 text-on-accent' : 'border-[rgba(var(--line-rgb),0.25)] text-transparent'"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                                </span>
                                <span class="text-[14.5px] font-semibold" :class="bk.services.includes(sv) ? 'text-gold-100' : 'text-ink-200'">{{ sv }}</span>
                            </button>
                        </div>
                    </div>

                    <!-- STEP 3 -->
                    <div v-else-if="step === 3" class="flex flex-col gap-6">
                        <div>
                            <h2 class="m-0 mb-1.5 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Budget &amp; finishing touches</h2>
                            <p class="m-0 text-[13.5px] text-ink-300">A range helps us recommend the right scale — it's not a commitment.</p>
                        </div>
                        <div class="flex flex-col gap-3">
                            <span class="text-xs tracking-[0.14em] uppercase text-gold-400">Budget range</span>
                            <div class="flex flex-wrap gap-2.5">
                                <button
                                    v-for="b in budgets"
                                    :key="b"
                                    type="button"
                                    class="cursor-pointer px-5 py-3 rounded-full text-[13.5px] font-semibold transition-all duration-200 border"
                                    :class="bk.budget === b ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.12)] text-gold-300' : 'border-hairline bg-transparent text-ink-300 hover:text-ink-200'"
                                    @click="bk.budget = b"
                                >{{ b }}</button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <span class="text-xs tracking-[0.14em] uppercase text-gold-400">Add-ons (optional)</span>
                            <div class="flex flex-wrap gap-2.5">
                                <button
                                    v-for="a in addons"
                                    :key="a"
                                    type="button"
                                    class="cursor-pointer px-5 py-3 rounded-full text-[13.5px] font-semibold transition-all duration-200 border"
                                    :class="bk.addons.includes(a) ? 'border-gold-line bg-[rgba(var(--accent-rgb),0.12)] text-gold-300' : 'border-hairline bg-transparent text-ink-300 hover:text-ink-200'"
                                    @click="toggle(bk.addons, a)"
                                >{{ a }}</button>
                            </div>
                        </div>
                    </div>

                    <!-- STEP 4 -->
                    <div v-else class="flex flex-col gap-5">
                        <h2 class="m-0 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Where should we send the proposal?</h2>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                            <UiInput v-model="bk.name" label="Your name" placeholder="First & last name"></UiInput>
                            <UiInput v-model="bk.email" label="Email" type="email" placeholder="you@email.com"></UiInput>
                        </div>
                        <UiInput v-model="bk.phone" label="Phone (optional)" type="tel" placeholder="For quick questions only"></UiInput>
                        <UiTextarea v-model="bk.notes" label="Anything else we should know?" placeholder="Surprise entrance? Specific song cue? Venue quirks? Tell us everything." :rows="4"></UiTextarea>
                        <p v-if="error" class="m-0 text-[13.5px] text-[#c65a50]">{{ error }}</p>
                    </div>

                    <!-- NAV -->
                    <div class="flex justify-between gap-3 border-t border-subtle pt-[22px]">
                        <UiButton v-if="step > 1" variant="ghost" @click="back">Back</UiButton>
                        <div class="ml-auto">
                            <UiButton @click="next">{{ nextLabel }}</UiButton>
                        </div>
                    </div>
                </template>

                <!-- SUCCESS -->
                <div v-else class="flex flex-col items-center text-center gap-5 py-[clamp(24px,4vw,48px)] px-2">
                    <div class="w-[88px] h-[88px] rounded-full bg-[rgba(var(--accent-rgb),0.12)] border border-[rgba(var(--accent-rgb),0.5)] flex items-center justify-center shadow-glow">
                        <svg width="36" height="36" viewBox="0 0 64 64"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold300)"></path></svg>
                    </div>
                    <h2 class="m-0 font-display font-semibold text-[clamp(28px,3.6vw,40px)] text-ivory">Your moment is in motion.</h2>
                    <p class="m-0 max-w-[44ch] text-[15px] leading-[1.75] text-ink-200">Thank you! We've received your inquiry for <strong class="text-ivory-dim">{{ summary }}</strong>. Expect a custom proposal within 24 hours.</p>
                    <div class="flex flex-wrap gap-3 justify-center">
                        <a :href="waBooking" target="_blank" rel="noopener" class="flex items-center gap-2.5 px-6 h-12 rounded-full bg-[#1da851] text-ivory no-underline text-[13px] font-bold tracking-[0.06em] uppercase">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#f6f2e9"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
                            Fast-track on WhatsApp
                        </a>
                        <UiButton to="/gallery" variant="ghost">Browse the Gallery</UiButton>
                    </div>
                    <button class="bg-transparent border-none cursor-pointer text-ink-400 text-[12.5px] underline mt-1 hover:text-ink-300" @click="restart">Start a new inquiry</button>
                </div>
            </div>
        </section>
    </main>
</template>
