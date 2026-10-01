import 'server-only';
import { headers } from 'next/headers';

/*
 * Cloudflare Turnstile server-side validation (siteverify).
 *
 * Tokens are single-use and expire after 5 minutes; siteverify rejects
 * replays. Never call this from the browser — the secret lives only in
 * the server env (TURNSTILE_SECRET_KEY: .env.local locally, Vercel env in
 * production).
 */

const SITEVERIFY_URL =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// Hostnames the widget may legitimately be solved on. Extra hosts (e.g. a
// staging domain) can be added via TURNSTILE_ALLOWED_HOSTNAMES=a.com,b.com
const DEFAULT_HOSTNAMES = ['webspires.co.uk', 'www.webspires.co.uk', 'localhost'];

function allowedHostnames() {
    const extra = String(process.env.TURNSTILE_ALLOWED_HOSTNAMES || '')
        .split(',')
        .map((h) => h.trim().toLowerCase())
        .filter(Boolean);
    return new Set([...DEFAULT_HOSTNAMES, ...extra]);
}

async function clientIp() {
    const h = await headers();
    return (
        h.get('cf-connecting-ip') ||
        (h.get('x-forwarded-for') || '').split(',')[0].trim() ||
        h.get('x-real-ip') ||
        ''
    );
}

/**
 * Validate a Turnstile token. Returns `{ ok: true }` or
 * `{ ok: false, reason }`. Fails closed: a missing secret, network error,
 * wrong action or unexpected hostname all reject the submission.
 */
export async function verifyTurnstile(token, expectedAction) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        console.error('Turnstile: TURNSTILE_SECRET_KEY is not set.');
        return { ok: false, reason: 'not-configured' };
    }
    if (!token || typeof token !== 'string' || token.length > 2048) {
        return { ok: false, reason: 'missing-token' };
    }

    const body = new URLSearchParams({ secret, response: token });
    const ip = await clientIp();
    if (ip) body.set('remoteip', ip);

    let result;
    try {
        const res = await fetch(SITEVERIFY_URL, {
            method: 'POST',
            body,
            signal: AbortSignal.timeout(10_000),
        });
        result = await res.json();
    } catch (err) {
        console.error('Turnstile: siteverify request failed:', err);
        return { ok: false, reason: 'verify-unavailable' };
    }

    if (result?.success !== true) {
        return {
            ok: false,
            reason: (result?.['error-codes'] || []).join(',') || 'failed',
        };
    }
    if (expectedAction && result.action !== expectedAction) {
        return { ok: false, reason: 'action-mismatch' };
    }
    if (!allowedHostnames().has(String(result.hostname || '').toLowerCase())) {
        return { ok: false, reason: 'hostname-mismatch' };
    }
    return { ok: true };
}
