import 'server-only';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { timingSafeEqual } from 'node:crypto';
import { getSession } from '@/lib/session';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/** Constant-time string comparison to avoid timing attacks. */
function safeEqual(a = '', b = '') {
    const bufA = Buffer.from(String(a));
    const bufB = Buffer.from(String(b));
    if (bufA.length !== bufB.length) {
        // Still run a comparison to keep timing roughly constant.
        timingSafeEqual(bufA, bufA);
        return false;
    }
    return timingSafeEqual(bufA, bufB);
}

export function validateCredentials(username, password) {
    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
        throw new Error(
            'ADMIN_USERNAME / ADMIN_PASSWORD are not configured in .env.local'
        );
    }
    const okUser = safeEqual(username, ADMIN_USERNAME);
    const okPass = safeEqual(password, ADMIN_PASSWORD);
    return okUser && okPass;
}

/**
 * Verify the admin session. Memoised per render pass so multiple
 * components can call it without repeated work.
 */
export const verifyAdmin = cache(async () => {
    const session = await getSession();
    if (!session?.username || session.role !== 'admin') return null;
    return { username: session.username, role: session.role };
});

/** Use in admin pages/layouts — redirects to login if unauthenticated. */
export async function requireAdmin() {
    const admin = await verifyAdmin();
    if (!admin) redirect('/admin/login');
    return admin;
}

/** Use in Server Actions / Route Handlers — returns the admin or null. */
export async function getAdminOrNull() {
    return verifyAdmin();
}
