// Scroll-reveal + count-up directives (ported from the design's IntersectionObserver logic).
// Registered as a universal plugin; both directives are SSR-safe — all work happens in
// `mounted` (client-only), and `getSSRProps` keeps the server renderer happy.

let revealIO = null;
const getRevealIO = () => {
    revealIO ??= new IntersectionObserver(
        (entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.style.opacity = '1';
                    en.target.style.transform = 'translateY(0)';
                    revealIO.unobserve(en.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    return revealIO;
};

const reveal = {
    mounted(el) {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.88) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(28px)';
            el.style.transition =
                'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)';
            getRevealIO().observe(el);
        }
    },
    unmounted(el) {
        revealIO?.unobserve(el);
    },
    getSSRProps() {
        return {};
    },
};

let countIO = null;
const getCountIO = () => {
    countIO ??= new IntersectionObserver(
        (entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                const el = en.target;
                countIO.unobserve(el);
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const dec = el.dataset.count.includes('.') ? 1 : 0;
                const t0 = performance.now();
                const dur = 1500;
                const step = (t) => {
                    const p = Math.min(1, (t - t0) / dur);
                    const ease = 1 - Math.pow(1 - p, 3);
                    el.textContent = (target * ease).toFixed(dec) + suffix;
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
        },
        { threshold: 0.4 }
    );
    return countIO;
};

const countUp = {
    mounted(el, binding) {
        el.dataset.count = String(binding.value);
        if (binding.arg) el.dataset.suffix = binding.arg === 'star' ? '★' : binding.arg;
        getCountIO().observe(el);
    },
    unmounted(el) {
        countIO?.unobserve(el);
    },
    getSSRProps() {
        return {};
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('reveal', reveal);
    nuxtApp.vueApp.directive('count', countUp);
});
