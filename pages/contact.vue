<script setup>
import { reactive, ref, computed } from 'vue';
import { whatsappHref, phoneDisplay, SERVICE_AREA } from '~/data/site.js';

useHead({ title: 'Contact — SLP Events' });

const form = reactive({ name: '', email: '', msg: '' });
const sent = ref(false);
const firstName = computed(() => (form.name || 'friend').split(' ')[0]);
const submit = () => { sent.value = true; };
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,200px)] pb-[clamp(48px,6vw,72px)] flex flex-col items-center text-center gap-5">
                <UiEyebrow>Contact</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,76px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Talk to a <em class="italic text-gold-300">human</em></h1>
                <p class="m-0 max-w-[52ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Questions, dates, wild ideas — we answer fast, seven days a week.</p>
            </div>
        </section>

        <section class="max-w-[1140px] mx-auto px-6 pt-[clamp(48px,6vw,72px)] pb-[clamp(72px,9vw,110px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[clamp(24px,4vw,48px)] items-start">
            <!-- CHANNELS -->
            <div v-reveal class="flex flex-col gap-4">
                <a :href="whatsappHref()" target="_blank" rel="noopener" class="flex items-center gap-4 px-6 py-[22px] rounded-2xl border border-[rgba(var(--line-rgb),0.1)] bg-ink-850 no-underline transition-[border-color,transform] duration-200 hover:border-[rgba(var(--accent-rgb),0.5)] hover:-translate-y-0.5">
                    <div class="w-12 h-12 rounded-full bg-[rgba(29,168,81,0.14)] flex items-center justify-center flex-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"></path></svg>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-[15px] font-bold text-ivory">WhatsApp</span>
                        <span class="text-[13px] text-ink-300">Fastest reply — usually within the hour</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="ml-auto"><path d="M7 17L17 7"></path><path d="M8 7h9v9"></path></svg>
                </a>
                <div class="flex items-center gap-4 px-6 py-[22px] rounded-2xl border border-[rgba(var(--line-rgb),0.1)] bg-ink-850">
                    <div class="w-12 h-12 rounded-full bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center flex-none">
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-[15px] font-bold text-ivory">{{ phoneDisplay() }}</span>
                        <span class="text-[13px] text-ink-300">Call or text · 9am–9pm, 7 days</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 px-6 py-[22px] rounded-2xl border border-[rgba(var(--line-rgb),0.1)] bg-ink-850">
                    <div class="w-12 h-12 rounded-full bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center flex-none">
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 7l10 6 10-6"></path></svg>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-[15px] font-bold text-ivory">hello@slpevents.com</span>
                        <span class="text-[13px] text-ink-300">Proposals, contracts &amp; press</span>
                    </div>
                </div>
                <div class="px-6 py-[26px] rounded-2xl border border-[rgba(var(--line-rgb),0.1)] bg-ink-850 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold400)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span class="text-xs tracking-[0.18em] uppercase text-gold-400">Service Area</span>
                    </div>
                    <p class="m-0 text-[14.5px] leading-[1.7] text-ivory-dim">{{ SERVICE_AREA }}</p>
                    <p class="m-0 text-[13px] leading-[1.65] text-ink-300">Destination events welcome with advance notice — travel quoted transparently.</p>
                    <div class="h-px bg-[rgba(var(--line-rgb),0.08)]"></div>
                    <div class="flex items-center justify-between">
                        <span class="text-xs tracking-[0.18em] uppercase text-gold-400">Follow the sparks</span>
                        <div class="flex gap-3.5 text-ink-300">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"></circle></svg>
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FORM -->
            <div v-reveal class="rounded-[20px] border border-[rgba(var(--line-rgb),0.1)] bg-ink-850 p-[clamp(24px,4vw,44px)]">
                <div v-if="!sent" class="flex flex-col gap-5">
                    <div>
                        <h2 class="m-0 mb-1.5 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Quick inquiry</h2>
                        <p class="m-0 text-[13.5px] text-ink-300">Two minutes now saves a week of back-and-forth later.</p>
                    </div>
                    <UiInput v-model="form.name" label="Your name" placeholder="First & last name"></UiInput>
                    <UiInput v-model="form.email" label="Email" type="email" placeholder="you@email.com"></UiInput>
                    <UiTextarea v-model="form.msg" label="Your message" placeholder="Tell us the occasion, the date, and the moment you're imagining…" :rows="5"></UiTextarea>
                    <UiButton size="lg" full-width @click="submit">Send Message</UiButton>
                    <p class="m-0 text-center text-xs text-ink-400">We reply within 24 hours — usually much faster.</p>
                </div>
                <div v-else class="flex flex-col items-center text-center gap-[18px] py-[clamp(24px,4vw,48px)] px-2">
                    <div class="w-20 h-20 rounded-full bg-[rgba(var(--accent-rgb),0.12)] border border-[rgba(var(--accent-rgb),0.5)] flex items-center justify-center shadow-glow">
                        <svg width="32" height="32" viewBox="0 0 64 64"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold300)"></path></svg>
                    </div>
                    <h2 class="m-0 font-display font-semibold text-[clamp(26px,3.2vw,36px)] text-ivory">Message received, {{ firstName }}.</h2>
                    <p class="m-0 max-w-[40ch] text-[15px] leading-[1.7] text-ink-200">We're on it. Keep an eye on your inbox — and your phone, if it's urgent.</p>
                    <UiButton to="/" variant="ghost">Back to Home</UiButton>
                </div>
            </div>
        </section>
    </main>
</template>
