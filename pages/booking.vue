<script setup>
import { computed, reactive, ref } from 'vue';
import { img, serviceOptions } from '~/data/site.js';

useHead({ title: 'Book Your Event — SLP Events' });

const eventTypes = ['Wedding', 'Proposal', 'Engagement', 'Birthday', 'Anniversary', 'Graduation', 'Baby Shower / Gender Reveal', 'Corporate Event', 'Grand Opening', 'Holiday Party', 'Other Celebration'];

const steps = [
    { n: 1, label: 'Your Event' },
    { n: 2, label: 'Experiences' },
    { n: 3, label: 'Contact' },
];

const consultationWindows = [
    { label: '5-7 PM', times: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'] },
    { label: '7-9 PM', times: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'] },
];
const eventTimeOptions = [
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
    '12:00 AM',
];

const step = ref(1);
const submitted = ref(false);
const isSending = ref(false);
const error = ref('');
const bk = reactive({ eventType: '', date: '', startTime: '', endTime: '', venue: '', city: '', notes: '', services: [], consultationDate: '', consultationTime: '', name: '', email: '', phone: '' });
const errors = reactive({});

const toggle = (list, v) => {
    const i = list.indexOf(v);
    if (i === -1) list.push(v);
    else list.splice(i, 1);
    errors.services = '';
};

const requiredMessage = (label) => `${label} is required.`;
const isBlank = (value) => !String(value || '').trim();
const clearError = (field) => { errors[field] = ''; };
const clearErrors = () => {
    Object.keys(errors).forEach((field) => { errors[field] = ''; });
};

const validateStep = (targetStep = step.value) => {
    clearErrors();

    if (targetStep === 1) {
        if (isBlank(bk.eventType)) errors.eventType = requiredMessage('Event type');
        if (isBlank(bk.date)) errors.date = requiredMessage('Event date');
        if (isBlank(bk.startTime)) errors.startTime = requiredMessage('Start time');
        if (isBlank(bk.endTime)) errors.endTime = requiredMessage('End time');
        if (isBlank(bk.venue)) errors.venue = requiredMessage('Venue');
        if (isBlank(bk.city)) errors.city = requiredMessage('City');
        if (isBlank(bk.notes)) errors.notes = requiredMessage('Describe your event');
    }

    if (targetStep === 2 && bk.services.length === 0) {
        errors.services = 'Choose at least one experience.';
    }

    if (targetStep === 3) {
        if (isBlank(bk.consultationDate)) errors.consultationDate = requiredMessage('Consultation date');
        if (isBlank(bk.consultationTime)) errors.consultationTime = requiredMessage('Consultation time');
        if (isBlank(bk.name)) errors.name = requiredMessage('Your name');
        if (isBlank(bk.email)) errors.email = requiredMessage('Email');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bk.email.trim())) errors.email = 'Enter a valid email address.';
        if (isBlank(bk.phone)) errors.phone = requiredMessage('Phone');
    }

    const hasErrors = Object.values(errors).some(Boolean);
    error.value = hasErrors ? 'Please complete the highlighted fields.' : '';
    return !hasErrors;
};

const nextLabel = computed(() => (step.value === 3 ? 'Send Inquiry' : 'Continue'));
const eventTiming = computed(() => {
    if (bk.startTime && bk.endTime) return `${bk.startTime} to ${bk.endTime}`;
    if (bk.startTime) return `Starts ${bk.startTime}`;
    if (bk.endTime) return `Ends ${bk.endTime}`;
    return '';
});
const summary = computed(() => {
    const details = [bk.eventType || 'Your event', bk.date, eventTiming.value].filter(Boolean).join(' · ');
    return `${details} · ${bk.services.length} experience${bk.services.length === 1 ? '' : 's'}`;
});

const back = () => { step.value = Math.max(1, step.value - 1); error.value = ''; clearErrors(); };
const goToStep = (targetStep) => {
    if (targetStep <= step.value || validateStep(step.value)) {
        step.value = targetStep;
        error.value = '';
        clearErrors();
    }
};
const next = async () => {
    if (step.value === 3) {
        if (!validateStep(3)) return;
        if (isSending.value) return;

        isSending.value = true;
        error.value = '';
        try {
            const response = await fetch('/.netlify/functions/booking-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    eventType: bk.eventType,
                    date: bk.date,
                    startTime: bk.startTime,
                    endTime: bk.endTime,
                    venue: bk.venue,
                    city: bk.city,
                    notes: bk.notes,
                    services: bk.services,
                    consultationDate: bk.consultationDate,
                    consultationTime: bk.consultationTime,
                    name: bk.name,
                    email: bk.email,
                    phone: bk.phone,
                }),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(result.message || 'Unable to send inquiry.');
            submitted.value = true;
        } catch (err) {
            error.value = err?.message || 'We could not send your inquiry right now. Please try again.';
        } finally {
            isSending.value = false;
        }
        return;
    }
    if (!validateStep(step.value)) return;
    step.value += 1;
    error.value = '';
    clearErrors();
};
const restart = () => {
    submitted.value = false;
    isSending.value = false;
    step.value = 1;
    error.value = '';
    clearErrors();
    Object.assign(bk, { eventType: '', date: '', startTime: '', endTime: '', venue: '', city: '', notes: '', services: [], consultationDate: '', consultationTime: '', name: '', email: '', phone: '' });
};
</script>

<template>
    <main>
        <!-- HERO -->
        <section class="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(var(--accent-rgb),0.18)_0%,rgba(var(--scrim-rgb),0)_60%),var(--c-bg)] border-b border-subtle">
            <div class="max-w-[900px] mx-auto px-6 pt-[clamp(150px,18vw,200px)] pb-[clamp(48px,6vw,72px)] flex flex-col items-center text-center gap-5">
                <UiEyebrow>Book Your Event</UiEyebrow>
                <h1 class="m-0 font-display font-semibold text-[clamp(40px,6.4vw,76px)] leading-[1.04] text-ivory [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_both]">Let's create your <em class="italic text-gold-300">moment</em></h1>
                <p class="m-0 max-w-[54ch] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-ink-200 [animation:riseUp_900ms_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Three quick steps. No payment now — we'll reply with a custom proposal within 24 hours.</p>
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
                </div>
            </div>

            <!-- WIZARD -->
            <div v-reveal class="rounded-xl border border-[rgba(var(--line-rgb),0.12)] bg-[linear-gradient(180deg,rgba(var(--chip-rgb),0.72),rgba(var(--chip-rgb),0.52))] overflow-hidden">
                <template v-if="!submitted">
                    <div class="px-[clamp(22px,4vw,40px)] pt-[clamp(22px,4vw,36px)] pb-5 border-b border-subtle bg-[rgba(var(--scrim-rgb),0.16)]">
                        <div class="flex items-start justify-between gap-5 mb-6">
                            <div>
                                <p class="m-0 text-[11px] tracking-[0.18em] uppercase text-gold-400">Inquiry Form</p>
                                <h2 class="m-0 mt-2 font-display font-semibold text-[clamp(26px,3.2vw,36px)] text-ivory">{{ steps[step - 1].label }}</h2>
                            </div>
                            <div class="px-3 py-2 rounded-md border border-hairline bg-ink-900 text-[11px] tracking-[0.14em] uppercase text-ink-300 whitespace-nowrap">
                                Step {{ step }} of 3
                            </div>
                        </div>
                        <!-- STEPPER -->
                        <div class="grid grid-cols-3 gap-2">
                            <button
                                v-for="st in steps"
                                :key="st.n"
                                type="button"
                                class="h-1.5 rounded-full border-0 p-0 transition-colors duration-300"
                                :class="st.n <= step ? 'bg-gold-500' : 'bg-[rgba(var(--line-rgb),0.14)]'"
                                :aria-label="st.label"
                                @click="goToStep(st.n)"
                            ></button>
                        </div>
                    </div>

                    <div class="p-[clamp(22px,4vw,40px)] flex flex-col gap-7">

                    <!-- STEP 1 -->
                    <div v-if="step === 1" class="flex flex-col gap-6">
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                            <UiSelect v-model="bk.eventType" label="Event type *" :error="errors.eventType" @update:modelValue="clearError('eventType')">
                                <option value="">Select an event type...</option>
                                <option v-for="t in eventTypes" :key="t" :value="t">{{ t }}</option>
                            </UiSelect>
                            <UiInput v-model="bk.date" label="Event date *" type="date" :error="errors.date" @update:modelValue="clearError('date')"></UiInput>
                        </div>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
                            <UiSelect v-model="bk.startTime" label="Start time *" :error="errors.startTime" @update:modelValue="clearError('startTime')">
                                <option value="">Select start time...</option>
                                <option v-for="time in eventTimeOptions" :key="'start-' + time" :value="time">{{ time }}</option>
                            </UiSelect>
                            <UiSelect v-model="bk.endTime" label="End time *" :error="errors.endTime" @update:modelValue="clearError('endTime')">
                                <option value="">Select end time...</option>
                                <option v-for="time in eventTimeOptions" :key="'end-' + time" :value="time">{{ time }}</option>
                            </UiSelect>
                        </div>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                            <UiInput v-model="bk.venue" label="Venue *" placeholder="Venue name — TBD is fine" :error="errors.venue" @update:modelValue="clearError('venue')"></UiInput>
                            <UiInput v-model="bk.city" label="City *" placeholder="City or service area" :error="errors.city" @update:modelValue="clearError('city')"></UiInput>
                        </div>
                        <UiTextarea v-model="bk.notes" label="Describe your event *" placeholder="Surprise entrance? Specific song cue? Venue quirks? Tell us everything." :rows="4" :error="errors.notes" @update:modelValue="clearError('notes')"></UiTextarea>
                    </div>

                    <!-- STEP 2 -->
                    <div v-else-if="step === 2" class="flex flex-col gap-5">
                        <div>
                            <h2 class="m-0 mb-1.5 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Choose your experiences</h2>
                            <p class="m-0 text-[13.5px] text-ink-300">Pick as many as you like — we'll choreograph them into one show.</p>
                            <p v-if="errors.services" class="m-0 mt-2 text-[13.5px] text-[#e08a80]">{{ errors.services }}</p>
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
                    <div v-else class="flex flex-col gap-5">
                        <h2 class="m-0 font-display font-semibold text-[clamp(24px,3vw,32px)] text-ivory">Where should we send the proposal?</h2>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                            <UiInput v-model="bk.consultationDate" label="Consultation date *" type="date" :error="errors.consultationDate" @update:modelValue="clearError('consultationDate')"></UiInput>
                            <UiSelect v-model="bk.consultationTime" label="Consultation time *" :error="errors.consultationTime" @update:modelValue="clearError('consultationTime')">
                                <option value="">Select a time...</option>
                                <optgroup v-for="window in consultationWindows" :key="window.label" :label="window.label">
                                    <option v-for="time in window.times" :key="time" :value="time">{{ time }}</option>
                                </optgroup>
                            </UiSelect>
                        </div>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                            <UiInput v-model="bk.name" label="Your name *" placeholder="First & last name" :error="errors.name" @update:modelValue="clearError('name')"></UiInput>
                            <UiInput v-model="bk.email" label="Email *" type="email" placeholder="you@email.com" :error="errors.email" @update:modelValue="clearError('email')"></UiInput>
                        </div>
                        <UiInput v-model="bk.phone" label="Phone *" type="tel" placeholder="For quick questions only" :error="errors.phone" @update:modelValue="clearError('phone')"></UiInput>
                        <p v-if="error" class="m-0 text-[13.5px] text-[#c65a50]">{{ error }}</p>
                    </div>

                    <!-- NAV -->
                    <div class="flex justify-between gap-3 border-t border-subtle pt-[22px]">
                        <UiButton v-if="step > 1" variant="ghost" @click="back">Back</UiButton>
                        <div class="ml-auto">
                            <UiButton :disabled="isSending" :class="isSending ? 'opacity-70 cursor-wait' : ''" @click="next">{{ isSending ? 'Sending...' : nextLabel }}</UiButton>
                        </div>
                    </div>
                    </div>
                </template>

                <!-- SUCCESS -->
                <div v-else class="flex flex-col items-center text-center gap-5 py-[clamp(24px,4vw,48px)] px-2">
                    <div class="w-[88px] h-[88px] rounded-full bg-[rgba(var(--accent-rgb),0.12)] border border-[rgba(var(--accent-rgb),0.5)] flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 64 64"><path d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z" fill="var(--c-gold300)"></path></svg>
                    </div>
                    <h2 class="m-0 font-display font-semibold text-[clamp(28px,3.6vw,40px)] text-ivory">Your moment is in motion.</h2>
                    <p class="m-0 max-w-[44ch] text-[15px] leading-[1.75] text-ink-200">Thank you! We've received your inquiry for <strong class="text-ivory-dim">{{ summary }}</strong>. Expect a custom proposal within 24 hours.</p>
                    <div class="flex flex-wrap gap-3 justify-center">
                        <UiButton to="/gallery" variant="ghost">Browse the Gallery</UiButton>
                    </div>
                    <button class="bg-transparent border-none cursor-pointer text-ink-400 text-[12.5px] underline mt-1 hover:text-ink-300" @click="restart">Start a new inquiry</button>
                </div>
            </div>
        </section>
    </main>
</template>
