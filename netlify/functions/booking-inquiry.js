import { Resend } from 'resend';

const ADMIN_EMAIL = 'slpeventsinfo@gmail.com';
const DEFAULT_FROM = 'SLP Events <onboarding@resend.dev>';

const json = (statusCode, body) => ({
    statusCode,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
});

const escapeHtml = (value = '') =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const clean = (value = '') => String(value).trim().slice(0, 1200);

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validatePayload = (payload) => {
    const missing = [];
    const requiredFields = [
        ['eventType', 'Event type'],
        ['date', 'Event date'],
        ['startTime', 'Start time'],
        ['endTime', 'End time'],
        ['venue', 'Venue'],
        ['city', 'City'],
        ['notes', 'Describe your event'],
        ['consultationDate', 'Consultation date'],
        ['consultationTime', 'Consultation time'],
        ['name', 'Your name'],
        ['email', 'Email'],
        ['phone', 'Phone'],
    ];

    requiredFields.forEach(([field, label]) => {
        if (!payload[field]) missing.push(label);
    });

    if (payload.services.length === 0) missing.push('Choose your experience');
    if (payload.email && !isEmail(payload.email)) missing.push('Valid email');

    return missing;
};

const listText = (items) => {
    if (!Array.isArray(items) || items.length === 0) return 'Not selected yet';
    return items.map(clean).filter(Boolean).join(', ');
};

const eventTiming = (payload) => {
    if (payload.startTime && payload.endTime) return `${payload.startTime} to ${payload.endTime}`;
    if (payload.startTime) return `Starts ${payload.startTime}`;
    if (payload.endTime) return `Ends ${payload.endTime}`;
    return 'Not provided';
};

const detailRow = (label, value) => `
    <tr>
        <td style="padding:14px 0;border-bottom:1px solid #eadfca;color:#7c6f5c;font-size:12px;text-transform:uppercase;letter-spacing:.12em;">${label}</td>
        <td style="padding:14px 0;border-bottom:1px solid #eadfca;color:#211c16;font-size:15px;font-weight:700;text-align:right;">${escapeHtml(value || 'Not provided')}</td>
    </tr>
`;

const emailShell = ({ eyebrow, title, intro, children }) => `
<!doctype html>
<html>
    <body style="margin:0;background:#f7f1e6;padding:0;font-family:Manrope,Inter,Arial,sans-serif;color:#211c16;">
        <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(intro)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f1e6;padding:32px 14px;">
            <tr>
                <td align="center">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#fffaf0;border:1px solid #e7d5b8;border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(39,29,15,.13);">
                        <tr>
                            <td style="background:#15120f;padding:34px 32px 30px;border-bottom:4px solid #d5a847;">
                                <div style="color:#d5a847;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;">${escapeHtml(eyebrow)}</div>
                                <h1 style="margin:12px 0 0;color:#fff7e8;font-family:Georgia,'Times New Roman',serif;font-size:36px;line-height:1.05;font-weight:600;">${escapeHtml(title)}</h1>
                                <p style="margin:14px 0 0;color:#d9cbb8;font-size:16px;line-height:1.65;">${escapeHtml(intro)}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px 32px 34px;">
                                ${children}
                            </td>
                        </tr>
                    </table>
                    <p style="margin:18px 0 0;color:#8a7b68;font-size:12px;line-height:1.6;">SLP Events · Premium event entertainment and special effects</p>
                </td>
            </tr>
        </table>
    </body>
</html>
`;

const inquiryTable = (payload) => `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        ${detailRow('Client', payload.name)}
        ${detailRow('Email', payload.email)}
        ${detailRow('Phone', payload.phone)}
        ${detailRow('Event Type', payload.eventType)}
        ${detailRow('Event Date', payload.date)}
        ${detailRow('Event Time', eventTiming(payload))}
        ${detailRow('Venue', payload.venue)}
        ${detailRow('City', payload.city)}
        ${detailRow('Experiences', listText(payload.services))}
        ${detailRow('Consultation', [payload.consultationDate, payload.consultationTime].filter(Boolean).join(' at '))}
    </table>
    <div style="margin-top:24px;padding:20px;background:#17130f;border-radius:14px;border:1px solid #d5a847;">
        <div style="color:#d5a847;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;">Event Notes</div>
        <p style="margin:10px 0 0;color:#fff7e8;font-size:15px;line-height:1.7;">${escapeHtml(payload.notes || 'No extra notes provided.')}</p>
    </div>
`;

const adminEmail = (payload) =>
    emailShell({
        eyebrow: 'New Booking Inquiry',
        title: `${payload.name || 'A client'} is planning ${payload.eventType || 'an event'}`,
        intro: 'A new SLP Events inquiry was submitted from the booking page. Reply directly to continue the conversation.',
        children: inquiryTable(payload),
    });

const confirmationEmail = (payload) =>
    emailShell({
        eyebrow: 'Inquiry Received',
        title: 'Your moment is in motion',
        intro: 'Thank you for contacting SLP Events. We received your inquiry and will follow up with a custom proposal within 24 hours.',
        children: `
            <p style="margin:0 0 20px;color:#4c4236;font-size:16px;line-height:1.7;">Hi ${escapeHtml(payload.name)},</p>
            <p style="margin:0 0 22px;color:#4c4236;font-size:16px;line-height:1.7;">Here is a polished copy of the details you sent us. Our team will review your event date, selected experiences, and consultation preferences before reaching out.</p>
            ${inquiryTable(payload)}
            <div style="margin-top:26px;padding:18px 20px;border-radius:14px;background:#f0e3c9;border:1px solid #ddc48f;">
                <p style="margin:0;color:#3f352b;font-size:14px;line-height:1.65;"><strong>What happens next:</strong> We will confirm availability, shape the best entertainment plan for your venue, and send proposal details to this email.</p>
            </div>
        `,
    });

const sendEmail = async ({ to, subject, html, replyTo }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error('Missing RESEND_API_KEY');
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
        from: process.env.SLP_FROM_EMAIL || DEFAULT_FROM,
        to,
        subject,
        html,
        replyTo,
    });

    if (response.error) {
        throw new Error(`Resend failed: ${JSON.stringify(response.error)}`);
    }

    return response.data;
};

export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return json(405, { message: 'Method not allowed' });
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return json(400, { message: 'Invalid request body.' });
    }

    const payload = {
        eventType: clean(body.eventType),
        date: clean(body.date),
        startTime: clean(body.startTime),
        endTime: clean(body.endTime),
        venue: clean(body.venue),
        city: clean(body.city),
        notes: clean(body.notes),
        services: Array.isArray(body.services) ? body.services.map(clean).filter(Boolean).slice(0, 30) : [],
        consultationDate: clean(body.consultationDate),
        consultationTime: clean(body.consultationTime),
        name: clean(body.name),
        email: clean(body.email).toLowerCase(),
        phone: clean(body.phone),
    };

    const missing = validatePayload(payload);
    if (missing.length > 0) {
        return json(422, { message: `Please complete: ${missing.join(', ')}.` });
    }

    try {
        await Promise.all([
            sendEmail({
                to: [ADMIN_EMAIL],
                subject: `New SLP booking inquiry from ${payload.name}`,
                html: adminEmail(payload),
                replyTo: payload.email,
            }),
            sendEmail({
                to: [payload.email],
                subject: 'SLP Events received your booking inquiry',
                html: confirmationEmail(payload),
                replyTo: ADMIN_EMAIL,
            }),
        ]);

        return json(200, { ok: true });
    } catch (error) {
        console.error(error);
        return json(500, { message: 'We could not send your inquiry right now. Please try again.' });
    }
};
