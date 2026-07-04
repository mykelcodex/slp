/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js}',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.js',
        './data/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                // All theme-aware tokens resolve to CSS variables set in assets/css/main.css
                // (:root = light, [data-theme="dark"] = dark).
                ink: {
                    950: 'var(--c-bg)',
                    900: 'var(--c-bg3)',
                    850: 'var(--c-surface)',
                    800: 'var(--c-surface2)',
                    700: 'var(--c-surface3)',
                    600: 'var(--c-ink600)',
                    500: 'var(--c-ink500)',
                    400: 'var(--c-fg5)',
                    300: 'var(--c-fg4)',
                    200: 'var(--c-fg3)',
                    100: 'var(--c-fg2)',
                },
                ivory: { DEFAULT: 'var(--c-fg)', dim: 'var(--c-fg2)' },
                // Lavender-green "gold" primary accent
                gold: {
                    100: 'var(--c-gold100)',
                    200: 'var(--c-gold200)',
                    300: 'var(--c-gold300)',
                    400: 'var(--c-gold400)',
                    500: 'var(--c-gold500)',
                    600: 'var(--c-gold600)',
                    700: 'var(--c-gold700)',
                },
                'on-accent': 'var(--c-on-accent)',
                wine: { 200: '#bd6577', 300: '#a44a5c', 500: '#7c2639', 700: '#551826' },
                ember: { 300: '#f2a877', 500: '#e07d43' },
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'serif'],
                sans: ['Manrope', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
                'gold-grad': 'var(--gold-grad)',
                spotlight: 'var(--spotlight)',
            },
            boxShadow: {
                glow: 'var(--glow)',
                'gold-card': 'var(--shadow-gold-card)',
            },
            borderColor: {
                subtle: 'rgba(var(--line-rgb),0.08)',
                hairline: 'rgba(var(--line-rgb),0.14)',
                'gold-line': 'rgba(var(--accent-rgb),0.55)',
            },
            transitionTimingFunction: {
                entrance: 'cubic-bezier(0.16,1,0.3,1)',
            },
        },
    },
    plugins: [],
};
