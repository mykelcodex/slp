// Site-wide content data, extracted 1:1 from the design.

export const WHATSAPP_NUMBER = '15550000000';
export const SERVICE_AREA = 'Serving the Tri-State Area & beyond';

export const whatsappHref = (text = "Hi SLP Events! I'd love to plan something unforgettable.") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const phoneDisplay = () =>
    '+' + WHATSAPP_NUMBER.replace(/(\d)(\d{3})(\d{3})(\d{4})$/, '$1 ($2) $3-$4');

export const img = (id, w = 900) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
];

export const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'entertainment', label: 'Signature Entertainment' },
    { id: 'effects', label: 'Special Effects' },
    { id: 'marquee', label: 'Marquee Rentals' },
    { id: 'packages', label: 'Event Packages' },
    { id: 'events', label: 'Events We Serve' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'quote', label: 'Custom Quote' },
    { id: 'contact', label: 'Contact' },
];

export const footerExplore = [
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events We Serve' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'booking', label: 'Book Your Event' },
];

export const footerServices = [
    { id: 'entertainment', label: 'Signature Entertainment' },
    { id: 'effects', label: 'Special Effects' },
    { id: 'marquee', label: 'Marquee Rentals' },
    { id: 'packages', label: 'Event Packages' },
    { id: 'quote', label: 'Custom Quote' },
];

export const serviceOptions = [
    'Transformer Robot',
    'Giant Gorilla Performer',
    'LED Robot Performers',
    'Dancing on the Clouds',
    'Cold Sparklers',
    'CO₂ Effects',
    'Confetti Cannons',
    'Marquee Letters',
];

export const budgets = ['Under $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+', 'Not sure yet'];

export const addons = [
    'Fog & Haze',
    'Bubble Effects',
    'Extra performance hour',
    'Custom marquee phrase',
    'Balloon styling partner',
];

export const testimonials = [
    { quote: 'When the cold sparklers hit during our first dance, the entire room gasped. Our photographer said she has never captured anything like it. Worth every penny — and then some.', name: 'Amara & David O.', event: 'Wedding · The Grandview', cat: 'Wedding', img: img('1511285560929-80b456fea0bc', 700) },
    { quote: 'The Transformer robot walked into my son’s birthday and forty kids lost their minds. Parents were filming everything. SLP made me the coolest mom of the year.', name: 'Keisha M.', event: '10th Birthday Party', cat: 'Birthday', img: img('1530103862676-de8c9debad1d', 700) },
    { quote: 'She said yes before I even finished asking. The MARRY ME letters, the petals, the sparks timed to the exact second — SLP choreographed the whole thing like a film.', name: 'Marcus T.', event: 'Rooftop Proposal', cat: 'Proposal', img: img('1605100804763-247f67b3557e', 700) },
    { quote: 'Our product launch needed wow-factor and SLP delivered CO₂ blasts synced to the reveal. The clip did numbers on LinkedIn for weeks.', name: 'Priya S., Head of Events', event: 'Tech Product Launch', cat: 'Corporate', img: img('1514525253161-7a46d19cd819', 700) },
    { quote: 'Dancing on the clouds felt like a dream sequence. Our guests still bring it up a year later — that photo is framed in three houses now.', name: 'Sofia & James R.', event: 'Wedding · Lakeside Manor', cat: 'Wedding', img: img('1519741497674-611481863552', 700) },
    { quote: 'The LED robots turned our gala from a dinner into a party in about ninety seconds. Professional, punctual, and completely unforgettable.', name: 'Daniel K.', event: 'Charity Gala', cat: 'Corporate', img: img('1574391884720-bbc3740c59d1', 700) },
    { quote: 'Grand opening day: gorilla performer out front, confetti at the ribbon cutting. We had a line around the block and local news coverage. Best marketing spend we made.', name: 'Rosa L., Owner', event: 'Restaurant Grand Opening', cat: 'Grand Opening', img: img('1429962714451-bb934ecdc4ec', 700) },
    { quote: 'They handled everything with our venue directly — insurance, floor plans, timing. As a planner, that is the highest compliment I can give a vendor.', name: 'Whitney A., Event Planner', event: 'Estate Wedding', cat: 'Wedding', img: img('1519167758481-83f550bb49b3', 700) },
    { quote: 'My daughter’s graduation party ended with a confetti storm and happy tears. SLP treats a backyard party with the same care as a ballroom.', name: 'The Nguyen Family', event: 'Graduation Celebration', cat: 'Graduation', img: img('1541339907198-e08756dedf3f', 700) },
];

export const faqs = [
    { cat: 'Booking', q: 'How far in advance should I book?', a: 'For weddings and peak-season dates (May–October), we recommend 3–6 months ahead. Birthdays and corporate events can often be arranged within 2–4 weeks — and we keep a small allowance for last-minute magic, so always ask.' },
    { cat: 'Booking', q: 'Can I book more than one experience for the same event?', a: 'Absolutely — most clients do. Cold sparklers with dancing on the clouds is our signature wedding pairing, and robots plus CO₂ effects own the dance floor. Bundled experiences are exactly what our packages are built for.' },
    { cat: 'Booking', q: 'How do I lock in my date?', a: 'A signed agreement and deposit reserve your date exclusively. Until then, dates are first come, first served — popular Saturdays go fast.' },
    { cat: 'Booking', q: 'Can I customize a package?', a: 'Every package is a starting point. Swap effects, add performers, extend hours — tell us the moment you want to create and we will build around it.' },
    { cat: 'Setup & Venue', q: 'What do you need from my venue?', a: 'Usually just standard power and a point of contact. We handle load-in, setup, operation, and teardown — and we coordinate directly with your venue and planner so you never have to relay logistics.' },
    { cat: 'Setup & Venue', q: 'How long does setup take?', a: 'Most single effects set up in 30–60 minutes. Multi-experience events are typically staged 2–3 hours before guests arrive, quietly and out of sight.' },
    { cat: 'Setup & Venue', q: 'Will the venue approve the effects?', a: 'Our cold spark machines, cloud machines, and haze are venue-friendly and widely approved for indoor use. We provide insurance certificates and spec sheets to your venue in advance — approval is on us, not you.' },
    { cat: 'Travel', q: 'Which areas do you serve?', a: 'We are based in the tri-state area and regularly travel beyond it. Travel within our core area is included; for destination events we quote travel transparently up front.' },
    { cat: 'Travel', q: 'Do you do destination weddings?', a: 'Yes — with enough lead time we can bring the full experience almost anywhere. Ask early so we can plan logistics and local compliance.' },
    { cat: 'Safety', q: 'Are cold sparklers actually safe indoors?', a: 'Yes. Cold spark machines use granulated composite that produces a spark effect at low temperature — no open flame, no smoke, minimal residue. They are the industry standard for indoor use, and ours are operated by trained technicians only.' },
    { cat: 'Safety', q: 'Are you insured?', a: 'Fully. We carry comprehensive liability insurance and provide certificates to venues on request — most already have us on file.' },
    { cat: 'Safety', q: 'Is the CO₂ or fog safe for guests?', a: 'Both are non-toxic and event-rated. Our cloud effect uses dry ice that hugs the floor and dissipates without setting off smoke alarms. We assess ventilation at every venue as part of setup.' },
    { cat: 'Payments', q: 'How does payment work?', a: 'A deposit secures your date, with the balance due before the event. We accept all major cards, bank transfer, and payment plans for larger productions.' },
    { cat: 'Payments', q: 'What is your cancellation policy?', a: 'Life happens. Reschedule up to 14 days out and we move your deposit to the new date, free. Cancellations are handled case by case — we would rather move your moment than lose it.' },
    { cat: 'Payments', q: 'When do I get my quote?', a: 'Within 24 hours of your inquiry — usually faster. Every quote is itemized, so you see exactly what each experience includes.' },
];

export const faqCategories = ['Booking', 'Setup & Venue', 'Travel', 'Safety', 'Payments'];

export const eventTypes = [
    { name: 'Weddings', img: img('1519741497674-611481863552', 800), desc: 'Cold sparks on the first dance, clouds at your feet.', services: ['Dancing on the Clouds', 'Cold Sparklers', 'Marquee Letters'] },
    { name: 'Proposals', img: img('1605100804763-247f67b3557e', 800), desc: 'The question deserves a set design.', services: ['MARRY ME Letters', 'Cold Sparklers', 'Rose-petal styling'] },
    { name: 'Engagements', img: img('1520854221256-17451cc331bf', 800), desc: 'Keep the yes going all night.', services: ['Cold Sparklers', 'Confetti Cannons', 'Marquee Letters'] },
    { name: 'Anniversaries', img: img('1414235077428-338989a2e8c0', 800), desc: 'A milestone lit like the first night.', services: ['Dancing on the Clouds', 'Light-up Numbers', 'Fog & Haze'] },
    { name: 'Birthdays', img: img('1530103862676-de8c9debad1d', 800), desc: 'From first birthdays to fortieths — lit, literally.', services: ['LED Robots', 'Confetti Cannons', 'Light-up Numbers'] },
    { name: 'Graduations', img: img('1541339907198-e08756dedf3f', 800), desc: 'Four years. One unforgettable send-off.', services: ['Confetti Cannons', 'CO₂ Effects', 'Marquee Letters'] },
    { name: 'Baby Showers', img: img('1519689680058-324335c77eba', 800), desc: 'Soft clouds and glowing letters for the newest VIP.', services: ['Bubble Effects', 'Marquee Letters', 'Dancing on the Clouds'] },
    { name: 'Gender Reveals', img: img('1505236858219-8359eb29e329', 800), desc: 'The big answer, in full color.', services: ['Confetti Cannons', 'CO₂ Effects', 'Fog & Haze'] },
    { name: 'Corporate Events', img: img('1540575467063-178a50c2df87', 800), desc: 'Product launches and galas that trend internally — and externally.', services: ['Transformer Robot', 'CO₂ Effects', 'LED Robots'] },
    { name: 'School Events', img: img('1516450360452-9312f5e86fc7', 800), desc: 'Proms and pep rallies that go legendary.', services: ['LED Robots', 'Confetti Cannons', 'Fog & Haze'] },
    { name: 'Church Events', img: img('1438232992991-995b7058bbb3', 800), desc: 'Celebrations of faith, staged with reverence and joy.', services: ['Bubble Effects', 'Marquee Letters', 'Confetti Cannons'] },
    { name: 'Festivals', img: img('1506157786151-b8491531f063', 800), desc: 'Main-stage energy for main-street crowds.', services: ['Giant Gorilla', 'CO₂ Effects', 'Transformer Robot'] },
    { name: 'Grand Openings', img: img('1429962714451-bb934ecdc4ec', 800), desc: 'Open your doors with a moment nobody scrolls past.', services: ['Transformer Robot', 'Confetti Cannons', 'Cold Sparklers'] },
    { name: 'Holiday Parties', img: img('1513151233558-d860c5398176', 800), desc: 'End-of-year parties your team actually talks about.', services: ['LED Robots', 'Fog & Haze', 'Confetti Cannons'] },
    { name: 'Private Celebrations', img: img('1511795409834-ef04bbd61622', 800), desc: 'Any excuse to celebrate is a good one.', services: ['Cold Sparklers', 'Marquee Letters', 'Bubble Effects'] },
];

const g = (id, label, cat, ratio) => ({ img: img(id, 900), big: img(id, 1600), label, cat, ratio });
export const gallery = [
    g('1492684223066-81342ee5ff30', 'Grand finale — private gala', 'Effects', '4/5'),
    g('1511285560929-80b456fea0bc', 'First dance under cold sparks', 'Weddings', '4/3'),
    g('1485827404703-89b55fcc595e', 'Robot performer meet & greet', 'Performers', '3/4'),
    g('1583939003579-730e3918a45a', 'Confetti send-off', 'Weddings', '4/5'),
    g('1514525253161-7a46d19cd819', 'Corporate launch after-party', 'Corporate', '4/3'),
    g('1498931299472-f7a63a5a1cfa', 'Rooftop fireworks finale', 'Effects', '4/3'),
    g('1519167758481-83f550bb49b3', 'Ballroom reveal', 'Weddings', '4/3'),
    g('1574391884720-bbc3740c59d1', 'LED robots take the floor', 'Performers', '3/4'),
    g('1506157786151-b8491531f063', 'Festival main stage', 'Parties', '4/3'),
    g('1505236858219-8359eb29e329', 'Confetti cannon burst', 'Effects', '4/5'),
    g('1540575467063-178a50c2df87', 'Awards night', 'Corporate', '4/3'),
    g('1518199266791-5375a83190b7', 'Marquee glow', 'Weddings', '4/3'),
    g('1527529482837-4698179dc6ce', 'Birthday toast', 'Parties', '3/4'),
    g('1467810563316-b5476525c0f9', 'Cold sparkler, up close', 'Effects', '4/3'),
    g('1530103862676-de8c9debad1d', 'Golden birthday', 'Parties', '4/5'),
    g('1469371670807-013ccf25f16a', 'Ceremony aisle at dusk', 'Weddings', '4/3'),
    g('1519741347686-c1e0aadf4611', 'Powder performer, mid-set', 'Performers', '4/3'),
    g('1504680177321-2e6a879aac86', 'Fog & haze set design', 'Effects', '4/3'),
];
export const galleryFilters = ['All', 'Weddings', 'Performers', 'Effects', 'Corporate', 'Parties'];
