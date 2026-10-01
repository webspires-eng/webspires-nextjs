'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/*
 * Cloudflare Turnstile widget (explicit render). Place it INSIDE a <form>:
 * it adds a hidden `cf-turnstile-response` input that the server action
 * validates with siteverify (src/lib/turnstile.js).
 *
 * Tokens are single-use, so pass the form's action state as `resetKey` —
 * every new server response (e.g. a validation error) gets a fresh token.
 */
export default function Turnstile({ action = 'contact', resetKey, theme = 'light', className = '' }) {
    const containerRef = useRef(null);
    const widgetIdRef = useRef(null);
    const [scriptReady, setScriptReady] = useState(false);

    useEffect(() => {
        if (!scriptReady || !SITE_KEY || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: SITE_KEY,
            action,
            theme,
            size: 'flexible',
            'response-field-name': 'cf-turnstile-response',
        });
        return () => {
            try {
                window.turnstile.remove(widgetIdRef.current);
            } catch {
                // already gone
            }
            widgetIdRef.current = null;
        };
    }, [scriptReady, action, theme]);

    useEffect(() => {
        if (resetKey && widgetIdRef.current != null && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
        }
    }, [resetKey]);

    if (!SITE_KEY) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set.');
        }
        return null;
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={() => setScriptReady(true)}
            />
            <div ref={containerRef} className={className} />
        </>
    );
}
