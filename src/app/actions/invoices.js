'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getAdminOrNull } from '@/lib/auth';
import { getSupabase, isValidId, UNIQUE_VIOLATION } from '@/lib/supabase';
import {
    getInvoice,
    getInvoiceSettings,
    invoiceToRow,
    isMissingColumnError,
    isMissingTableError,
    newShareToken,
    nextInvoiceNumber,
    saveInvoiceSettingsRow,
} from '@/lib/invoices';
import {
    addDays,
    cleanDate,
    cleanInvoiceSettings,
    cleanBusiness,
    invoiceBusiness,
    cleanItems,
    computeTotals,
    isoDate,
    normaliseCurrency,
    normaliseStatus,
    round2,
} from '@/lib/invoiceSchema';

const MISSING_COLUMN_MSG =
    'One-time update needed: run the "alter table public.invoices add column if not exists business …" line from supabase/invoices.sql in the Supabase SQL Editor, then try again.';

const MISSING_TABLE_MSG =
    'The invoices table does not exist yet. Run supabase/invoices.sql in the Supabase SQL Editor, then try again.';

function str(v, max = 2000) {
    return String(v ?? '').trim().slice(0, max);
}

function revalidateInvoices(id) {
    revalidatePath('/admin/invoices');
    if (id) revalidatePath(`/admin/invoices/${id}`);
    revalidatePath('/invoice/[token]', 'page');
}

/**
 * Create or update an invoice. Used with useActionState — the form posts
 * its state as JSON in `data`. Returns `{ error }` on failure, redirects to
 * the invoice view on success.
 */
export async function saveInvoice(_prevState, formData) {
    const admin = await getAdminOrNull();
    if (!admin) return { error: 'Not authorized. Please sign in again.' };

    let raw;
    try {
        raw = JSON.parse(String(formData.get('data') || '{}'));
    } catch {
        return { error: 'Invalid form data.' };
    }
    if (!raw || typeof raw !== 'object') raw = {};

    const id = str(raw.id, 64);
    const items = cleanItems(raw.items);
    const clientName = str(raw.clientName, 200);
    const issueDate = cleanDate(raw.issueDate) || isoDate();
    const dueDate = cleanDate(raw.dueDate);

    if (!clientName) return { error: 'Client name is required.' };
    if (items.length === 0) return { error: 'Add at least one line item.' };
    if (items.some((it) => !it.description)) {
        return { error: 'Every line item needs a description.' };
    }
    if (dueDate && dueDate < issueDate) {
        return { error: 'Due date cannot be before the issue date.' };
    }

    const discount = round2(Math.max(0, parseFloat(raw.discount) || 0));
    const taxRate = round2(Math.min(100, Math.max(0, parseFloat(raw.taxRate) || 0)));
    const { subtotal, total } = computeTotals({ items, discount, taxRate });

    const settings = await getInvoiceSettings();
    let number = str(raw.number, 40).replace(/\s+/g, '-');
    if (!number) number = await nextInvoiceNumber(settings.numberPrefix);

    const status = normaliseStatus(raw.status);
    const invoice = {
        number,
        status,
        currency: normaliseCurrency(raw.currency),
        issueDate,
        dueDate,
        clientName,
        clientCompany: str(raw.clientCompany, 200),
        clientEmail: str(raw.clientEmail, 200),
        clientPhone: str(raw.clientPhone, 60),
        clientAddress: str(raw.clientAddress, 500),
        items,
        discount,
        taxRate,
        taxLabel: str(raw.taxLabel, 30) || 'VAT',
        subtotal,
        total,
        notes: str(raw.notes, 4000),
        terms: str(raw.terms, 4000),
        paymentDetails: str(raw.paymentDetails, 2000),
        business: cleanBusiness(raw.business),
    };

    const supabase = getSupabase();
    let savedId = id;
    try {
        if (isValidId(id)) {
            const existing = await getInvoice(id);
            if (!existing) return { error: 'Invoice not found.' };
            const row = invoiceToRow(invoice);
            // Track when it was paid; clear it if moved back out of "paid".
            if (status === 'paid' && !existing.paidAt) {
                row.paid_at = new Date().toISOString();
            } else if (status !== 'paid') {
                row.paid_at = null;
            }
            const { error } = await supabase
                .from('invoices')
                .update(row)
                .eq('id', id);
            if (error) throw error;
        } else {
            const row = {
                ...invoiceToRow(invoice),
                share_token: newShareToken(),
                paid_at: status === 'paid' ? new Date().toISOString() : null,
            };
            const { data, error } = await supabase
                .from('invoices')
                .insert(row)
                .select('id')
                .single();
            if (error) throw error;
            savedId = data.id;
        }
    } catch (err) {
        if (err?.code === UNIQUE_VIOLATION) {
            return { error: `Invoice number “${number}” is already in use.` };
        }
        if (isMissingTableError(err)) return { error: MISSING_TABLE_MSG };
        if (isMissingColumnError(err)) return { error: MISSING_COLUMN_MSG };
        return { error: `Could not save invoice: ${err.message}` };
    }

    revalidateInvoices(savedId);
    redirect(`/admin/invoices/${savedId}`);
}

export async function deleteInvoiceAction(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = str(formData.get('id'), 64);
    if (isValidId(id)) {
        await getSupabase().from('invoices').delete().eq('id', id);
    }
    revalidateInvoices();
    redirect('/admin/invoices');
}

/** Quick status change (e.g. "Mark as paid") from the list or view page. */
export async function setInvoiceStatusAction(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = str(formData.get('id'), 64);
    const status = normaliseStatus(str(formData.get('status'), 20));
    const back = str(formData.get('back'), 200);

    if (isValidId(id)) {
        await getSupabase()
            .from('invoices')
            .update({
                status,
                paid_at: status === 'paid' ? new Date().toISOString() : null,
            })
            .eq('id', id);
    }
    revalidateInvoices(id);
    redirect(back.startsWith('/admin/') ? back : `/admin/invoices/${id}`);
}

/** Issue a fresh share token — the old public link stops working. */
export async function regenerateShareLinkAction(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = str(formData.get('id'), 64);
    if (isValidId(id)) {
        await getSupabase()
            .from('invoices')
            .update({ share_token: newShareToken() })
            .eq('id', id);
    }
    revalidateInvoices(id);
    redirect(`/admin/invoices/${id}`);
}

/** Copy an invoice as a new draft with the next number and today's dates. */
export async function duplicateInvoiceAction(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = str(formData.get('id'), 64);
    const source = await getInvoice(id).catch(() => null);
    if (!source) redirect('/admin/invoices');

    const settings = await getInvoiceSettings();
    const issueDate = isoDate();
    const copy = {
        ...source,
        number: await nextInvoiceNumber(settings.numberPrefix),
        status: 'draft',
        issueDate,
        dueDate: addDays(issueDate, settings.dueDays),
        business: invoiceBusiness(source, settings),
    };

    const { data, error } = await getSupabase()
        .from('invoices')
        .insert({
            ...invoiceToRow(copy),
            share_token: newShareToken(),
            paid_at: null,
        })
        .select('id')
        .single();
    if (error) redirect(`/admin/invoices/${id}`);

    revalidateInvoices();
    redirect(`/admin/invoices/${data.id}/edit`);
}

/** Save invoice branding/defaults. Used with useActionState. */
export async function saveInvoiceSettings(_prevState, formData) {
    const admin = await getAdminOrNull();
    if (!admin) return { error: 'Not authorized. Please sign in again.' };

    let raw;
    try {
        raw = JSON.parse(String(formData.get('data') || '{}'));
    } catch {
        return { error: 'Invalid form data.' };
    }

    try {
        await saveInvoiceSettingsRow(cleanInvoiceSettings(raw));
    } catch (err) {
        return { error: `Could not save settings: ${err.message}` };
    }

    revalidatePath('/admin/invoices', 'layout');
    revalidatePath('/invoice/[token]', 'page');
    return { success: true };
}
