import 'server-only';
import nodemailer from 'nodemailer';

/**
 * SMTP mailer. Env is read lazily so a missing value never breaks
 * `next build` it only fails when an email is actually sent.
 */

let cachedTransporter = null;

function getConfig() {
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    // SMTP_SECURE=true for port 465 (implicit TLS); false for 587 (STARTTLS).
    const secure =
        String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' ||
        port === 465;
    const from =
        process.env.MAIL_FROM || 'Webspires Website <no-reply@webspires.co.uk>';
    const to = process.env.CONTACT_TO;

    const missing = [];
    if (!host) missing.push('SMTP_HOST');
    if (!user) missing.push('SMTP_USER');
    if (!pass) missing.push('SMTP_PASS');
    if (!to) missing.push('CONTACT_TO');

    return { host, port, user, pass, secure, from, to, missing };
}

function getTransporter(cfg) {
    if (cachedTransporter) return cachedTransporter;
    cachedTransporter = nodemailer.createTransport({
        host: cfg.host,
        port: cfg.port,
        secure: cfg.secure,
        auth: { user: cfg.user, pass: cfg.pass },
    });
    return cachedTransporter;
}

function esc(s = '') {
    return String(s).replace(
        /[&<>"]/g,
        (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])
    );
}

/**
 * Sends a contact enquiry to the admin inbox (CONTACT_TO).
 * @returns {Promise<{ok:true}>}
 */
export async function sendContactEmail({
    name,
    email,
    phone = '',
    service = '',
    message,
    attachment = null,
    source = 'Website',
}) {
    const cfg = getConfig();
    if (cfg.missing.length) {
        throw new Error(
            `Email is not configured. Missing env: ${cfg.missing.join(', ')}`
        );
    }

    const rows = [
        ['Name', name],
        ['Email', email],
        ['Phone', phone || ' '],
        ['Service', service || ' '],
        ['Source', source],
    ]
        .map(
            ([k, v]) =>
                `<tr><td style="padding:6px 14px 6px 0;color:#6b7280;font-weight:600">${k}</td><td style="padding:6px 0">${esc(
                    v
                )}</td></tr>`
        )
        .join('');

    const html = `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;color:#1a1a2e">
          <h2 style="color:#EE314F;margin:0 0 12px">New enquiry from ${esc(
              cfg.from && source ? source : 'the website'
          )}</h2>
          <table style="font-size:14px;border-collapse:collapse">${rows}</table>
          <h3 style="margin:20px 0 6px;font-size:14px;color:#6b7280">Message</h3>
          <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;background:#faf9f7;padding:14px;border-radius:8px">${esc(
              message
          )}</p>
        </div>`;

    const text =
        `New enquiry (${source})\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ' '}\n` +
        `Service: ${service || ' '}\n\nMessage:\n${message}\n`;

    const mail = {
        from: cfg.from,
        to: cfg.to,
        replyTo: email ? `${name} <${email}>` : undefined,
        subject: `New ${source} enquiry ${name}`,
        text,
        html,
    };

    if (attachment?.buffer?.length) {
        mail.attachments = [
            {
                filename: attachment.filename || 'attachment',
                content: attachment.buffer,
                contentType: attachment.contentType || undefined,
            },
        ];
    }

    const transporter = getTransporter(cfg);
    await transporter.sendMail(mail);
    return { ok: true };
}
