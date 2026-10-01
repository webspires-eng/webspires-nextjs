import 'server-only';
import { cache } from 'react';
import { randomBytes } from 'node:crypto';
import { headers } from 'next/headers';
import QRCode from 'qrcode';
import { getSupabase, isValidId } from '@/lib/supabase';
import {
    businessFromSettings,
    mergeInvoiceSettings,
    displayStatus,
    isoDate,
} from '@/lib/invoiceSchema';

/* Invoices live in the `invoices` table (see supabase/invoices.sql). */

// Invoice branding/defaults reuse the `content` table as a singleton row,
// like the global site settings (type = 'settings', slug = 'invoice').
const SETTINGS_TYPE = 'settings';
const SETTINGS_SLUG = 'invoice';

/** PostgREST / Postgres codes for "the invoices table doesn't exist yet". */
/** PostgREST code when a column (e.g. `business`) hasn't been added yet. */
export function isMissingColumnError(err) {
    return err?.code === 'PGRST204' || err?.code === '42703';
}

export function isMissingTableError(err) {
    return err?.code === 'PGRST205' || err?.code === '42P01';
}

function serialize(row) {
    if (!row) return null;
    return {
        id: String(row.id),
        number: row.number || '',
        shareToken: row.share_token || '',
        status: row.status || 'draft',
        currency: row.currency || 'GBP',
        issueDate: row.issue_date || '',
        dueDate: row.due_date || '',
        clientName: row.client_name || '',
        clientCompany: row.client_company || '',
        clientEmail: row.client_email || '',
        clientPhone: row.client_phone || '',
        clientAddress: row.client_address || '',
        items: Array.isArray(row.items) ? row.items : [],
        discount: Number(row.discount) || 0,
        taxRate: Number(row.tax_rate) || 0,
        taxLabel: row.tax_label || 'VAT',
        subtotal: Number(row.subtotal) || 0,
        total: Number(row.total) || 0,
        notes: row.notes || '',
        terms: row.terms || '',
        paymentDetails: row.payment_details || '',
        business:
            row.business && typeof row.business === 'object' ? row.business : {},
        paidAt: row.paid_at ? new Date(row.paid_at).toISOString() : null,
        createdAt: row.created_at
            ? new Date(row.created_at).toISOString()
            : null,
        updatedAt: row.updated_at
            ? new Date(row.updated_at).toISOString()
            : null,
    };
}

/** Map the camelCase invoice shape to table columns. */
export function invoiceToRow(inv) {
    return {
        number: inv.number,
        status: inv.status,
        currency: inv.currency,
        issue_date: inv.issueDate,
        due_date: inv.dueDate || null,
        client_name: inv.clientName,
        client_company: inv.clientCompany,
        client_email: inv.clientEmail,
        client_phone: inv.clientPhone,
        client_address: inv.clientAddress,
        items: inv.items,
        discount: inv.discount,
        tax_rate: inv.taxRate,
        tax_label: inv.taxLabel,
        subtotal: inv.subtotal,
        total: inv.total,
        notes: inv.notes,
        terms: inv.terms,
        payment_details: inv.paymentDetails,
        business: inv.business || {},
    };
}

/** 24-char URL-safe random token (144 bits) for the public share link. */
export function newShareToken() {
    return randomBytes(18).toString('base64url');
}

export function isValidShareToken(token) {
    return typeof token === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(token);
}

/**
 * True once supabase/invoices.sql's `business` column exists. Without it,
 * invoices can't keep their own business details and fall back to settings.
 */
export async function hasBusinessColumn() {
    try {
        const { error } = await getSupabase()
            .from('invoices')
            .select('business')
            .limit(1);
        return !isMissingColumnError(error);
    } catch {
        return true; // DB unreachable — other notices cover that
    }
}

/**
 * One-time backfill: invoices created before the `business` column existed
 * have an empty snapshot and would keep following Invoice Settings. Freeze
 * them with the details they currently show, so settings changes from now
 * on only affect NEW invoices. Runs once per server process (every save
 * writes a snapshot, so no new empty rows appear afterwards).
 */
let legacyFrozen = false;
async function freezeLegacyInvoices() {
    if (legacyFrozen) return;
    try {
        const settings = await getInvoiceSettings();
        const { error } = await getSupabase()
            .from('invoices')
            .update({ business: businessFromSettings(settings) })
            .eq('business', '{}');
        if (!error) legacyFrozen = true; // missing column → retry next time
    } catch {
        // non-fatal; legacy rows just fall back to settings for now
    }
}

/** Throws on DB error (incl. missing table) so pages can show a notice. */
export async function listInvoices() {
    await freezeLegacyInvoices();
    const supabase = getSupabase();
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(serialize);
}

export async function getInvoice(id) {
    if (!isValidId(id)) return null;
    await freezeLegacyInvoices();
    const supabase = getSupabase();
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    if (error) throw error;
    return serialize(data);
}

export async function getInvoiceByToken(token) {
    if (!isValidShareToken(token)) return null;
    await freezeLegacyInvoices();
    const supabase = getSupabase();
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('share_token', token)
        .maybeSingle();
    if (error) throw error;
    return serialize(data);
}

/**
 * Next sequential number for this year, e.g. WS-2026-004. Looks at every
 * existing number with the same PREFIX-YEAR- stem and takes max + 1.
 */
export async function nextInvoiceNumber(prefix = 'INV') {
    const stem = `${prefix}-${new Date().getFullYear()}-`;
    let max = 0;
    try {
        const supabase = getSupabase();
        const { data } = await supabase
            .from('invoices')
            .select('number')
            .like('number', `${stem}%`);
        for (const r of data || []) {
            const n = parseInt(String(r.number).slice(stem.length), 10);
            if (Number.isFinite(n) && n > max) max = n;
        }
    } catch {
        // fall through to 001
    }
    return `${stem}${String(max + 1).padStart(3, '0')}`;
}

/** Totals for the list header cards (excludes drafts + cancelled). */
export function invoiceStats(invoices) {
    const today = isoDate();
    const stats = { count: invoices.length, outstanding: 0, overdue: 0, paid: 0 };
    for (const inv of invoices) {
        const s = displayStatus(inv, today);
        if (s === 'paid') stats.paid += inv.total;
        if (s === 'unpaid' || s === 'overdue') stats.outstanding += inv.total;
        if (s === 'overdue') stats.overdue += 1;
    }
    return stats;
}

/* ── Settings ───────────────────────────────────────────────────── */

export const getInvoiceSettings = cache(async () => {
    try {
        const supabase = getSupabase();
        const { data: row, error } = await supabase
            .from('content')
            .select('data')
            .eq('type', SETTINGS_TYPE)
            .eq('slug', SETTINGS_SLUG)
            .maybeSingle();
        if (error) throw error;
        return mergeInvoiceSettings(row?.data);
    } catch {
        return mergeInvoiceSettings(null);
    }
});

export async function saveInvoiceSettingsRow(data) {
    const supabase = getSupabase();
    const { error } = await supabase.from('content').upsert(
        {
            type: SETTINGS_TYPE,
            slug: SETTINGS_SLUG,
            sort_order: 0,
            data,
        },
        { onConflict: 'type,slug' }
    );
    if (error) throw error;
}

/* ── Share URL ──────────────────────────────────────────────────── */

/**
 * Absolute origin of the current request (works on localhost, previews and
 * production without extra env config).
 */
export async function requestOrigin() {
    const h = await headers();
    const first = (v) => (v ? v.split(',')[0].trim() : '');
    const host =
        first(h.get('x-forwarded-host')) || h.get('host') || 'localhost:3000';
    const proto =
        first(h.get('x-forwarded-proto')) ||
        (host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'https');
    return `${proto}://${host}`;
}

export async function shareUrlFor(invoice) {
    return `${await requestOrigin()}/invoice/${invoice.shareToken}`;
}

/** PNG data-URL QR code ("Scan to verify") pointing at the share link. */
export async function qrDataUrlFor(url) {
    try {
        return await QRCode.toDataURL(url, {
            margin: 0,
            width: 240,
            errorCorrectionLevel: 'M',
            color: { dark: '#090A12', light: '#FFFFFF' },
        });
    } catch {
        return '';
    }
}
