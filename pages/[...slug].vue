<script setup>
import { img } from '~/data/site.js';

useHead({ title: 'Page Not Found — SLP Events' });
</script>

<template>
    <main>
        <section class="relative min-h-svh flex items-center justify-center overflow-hidden bg-ink-950">
            <img :src="img('1533174072545-7a4b6ad7a6c3', 2000)" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover opacity-25 [animation:kenburns_26s_ease-in-out_infinite_alternate]">
            <div class="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.16)_0%,rgba(var(--scrim-rgb),0.6)_60%),linear-gradient(180deg,rgba(var(--scrim-rgb),0.7)_0%,var(--c-bg)_100%)]"></div>
            <div class="relative z-[2] max-w-[720px] mx-auto px-6 pt-[140px] pb-[100px] flex flex-col items-center text-center gap-[22px]">
                <span class="font-display text-[clamp(110px,22vw,220px)] leading-[0.9] text-gold-300 [text-shadow:0_0_60px_rgba(var(--accent-rgb),0.4)] [animation:flicker_4s_linear_infinite]">404</span>
                <h1 class="m-0 font-display font-normal text-[clamp(28px,4.4vw,44px)] leading-[1.1] text-ivory">Looks like this page left <em class="italic text-gold-300">before the finale</em>.</h1>
                <p class="m-0 max-w-[44ch] text-base leading-[1.7] text-ink-200">Let's get you back to the party.</p>
                <div class="flex flex-wrap gap-3.5 justify-center">
                    <UiButton to="/" size="lg">Back to Home</UiButton>
                    <UiButton to="/booking" size="lg" variant="ghost">Book Your Event</UiButton>
                </div>
            </div>
        </section>
    </main>
</template>
