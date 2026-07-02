import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 *
 * All DB access in this app happens on the server (server components,
 * server actions, route handlers), and admin auth is env-based (not
 * Supabase Auth), so a single service-role client is the simplest
 * correct setup. The service role bypasses RLS never import this
 * from a Client Component, and never expose the key to the browser.
 *
 * The client is created lazily and cached, mirroring the old
 * connectToDatabase() pattern: a missing env var only throws when a
 * query actually runs, so it never breaks `next build` for pages that
 * fall back to seed data (e.g. /sitemap.xml, content pages).
 */
let cached = global._supabase;
if (!cached) cached = global._supabase = { client: null };

export function getSupabase() {
    if (cached.client) return cached.client;

    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceKey) {
        throw new Error(
            'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment ' +
                'variable. Add them to .env.local'
        );
    }

    cached.client = createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
    });
    return cached.client;
}

/** Accepts a UUID (Postgres primary key). Replaces the old ObjectId check. */
export function isValidId(id) {
    return (
        typeof id === 'string' &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
            id
        )
    );
}

/** Postgres unique-violation error code (duplicate slug). */
export const UNIQUE_VIOLATION = '23505';
