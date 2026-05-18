'use client';

import { useEffect } from 'react';

export default function ViewTracker({ slug }) {
    useEffect(() => {
        if (!slug) return;
        const key = `viewed:${slug}`;
        try {
            if (sessionStorage.getItem(key)) return;
            sessionStorage.setItem(key, '1');
        } catch {
            // sessionStorage may be unavailable; still count the view.
        }
        const url = `/api/blog/${encodeURIComponent(slug)}/view`;
        fetch(url, { method: 'POST', keepalive: true }).catch(() => {});
    }, [slug]);

    return null;
}
