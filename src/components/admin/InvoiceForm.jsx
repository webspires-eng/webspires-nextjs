'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, ArrowUp, ArrowDown, Save, Check, Loader2, AlertCircle, CloudUpload } from 'lucide-react';
import { autosaveInvoice, saveInvoice } from '@/app/actions/invoices';
import ClientSuggestInput from '@/components/admin/ClientSuggestInput';
import {
    CURRENCIES,
    INVOICE_STATUSES,
    addDays,
    BUSINESS_FORM_FIELDS,
    computeTotals,
    formatMoney,
} from '@/lib/invoiceSchema';

const inputCls =
    'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

function Field({ label, hint, className = '', children }) {
    return (
        <div className={className}>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                {label}
            </label>
            {children}
            {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
        </div>
    );
}

function Card({ title, children, action }) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-base font-bold text-slate-900">{title}</h2>
                {action}
            </div>
            {children}
        </section>
    );
}

const emptyItem = () => ({ description: '', details: '', qty: '1', rate: '' });

/** Invoice (or new-invoice defaults) → editable form state (numbers as strings). */
function toFormState(initial) {
    return {
        ...initial,
        items: initial.items?.length
            ? initial.items.map((it) => ({
                  ...it,
                  qty: String(it.qty ?? ''),
                  rate: String(it.rate ?? ''),
              }))
            : [emptyItem()],
        business: { ...(initial.business || {}) },
        discount: String(initial.discount ?? ''),
        taxRate: String(initial.taxRate ?? ''),
    };
}

/**
 * Create / edit an invoice. `initial` is a full invoice (edit) or the
 * defaults for a new one. Totals are recomputed live with the same
 * computeTotals() the server uses on save.
 */
// What autosave compares: everything except the id (which autosave itself
// assigns to a new invoice).
const snapshotOf = (v) => JSON.stringify({ ...v, id: undefined });

// Don't create a draft row just because the "New invoice" page was opened.
const hasContent = (v) =>
    Boolean(
        v.clientName.trim() ||
            v.clientCompany.trim() ||
            v.items.some((it) => it.description.trim() || String(it.rate).trim())
    );

const AUTOSAVE_DELAY = 1500;

export default function InvoiceForm({ initial, clients = [], dueDays = 7 }) {
    const [state, formAction, pending] = useActionState(saveInvoice, null);
    const [inv, setInv] = useState(() => toFormState(initial));

    /* ── Autosave ─────────────────────────────────────────── */
    // lastSaved: state for rendering the badge, ref for the async logic.
    const [lastSaved, setLastSaved] = useState(() => snapshotOf(toFormState(initial)));
    const [saveState, setSaveState] = useState({ status: 'idle', at: null, error: '' });
    const lastSavedRef = useRef(lastSaved);
    const invRef = useRef(inv);
    const timerRef = useRef(null);
    const savingRef = useRef(false);
    const queuedRef = useRef(false);
    const submittingRef = useRef(false);

    // Only reads refs + stable setters, so any render's copy is safe to call later.
    const runAutosave = async () => {
        if (submittingRef.current) return;
        if (savingRef.current) {
            queuedRef.current = true; // save the latest once this one finishes
            return;
        }
        const current = invRef.current;
        const snap = snapshotOf(current);
        if (snap === lastSavedRef.current) return;
        if (!current.id && !hasContent(current)) return;

        savingRef.current = true;
        setSaveState((s) => ({ ...s, status: 'saving', error: '' }));
        let res;
        try {
            res = await autosaveInvoice(current);
        } catch {
            res = { error: 'Network error — will retry on your next change.' };
        }
        savingRef.current = false;

        if (res?.error) {
            setSaveState({ status: 'error', at: null, error: res.error });
        } else {
            lastSavedRef.current = snap;
            setLastSaved(snap);
            if (!current.id) {
                // First save of a new invoice: it now exists as a draft. Point
                // the URL at its edit page so a refresh / coming back resumes it.
                setInv((p) => ({ ...p, id: res.id }));
                window.history.replaceState(null, '', `/admin/invoices/${res.id}/edit`);
            }
            setSaveState({ status: 'saved', at: res.savedAt, error: '' });
        }

        if (queuedRef.current) {
            queuedRef.current = false;
            runAutosave();
        }
    };

    useEffect(() => {
        invRef.current = inv;
        if (snapshotOf(inv) === lastSavedRef.current) return;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(runAutosave, AUTOSAVE_DELAY);
        return () => clearTimeout(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- runAutosave only touches refs/setters
    }, [inv]);

    // A failed "Create / Save" re-enables autosave.
    useEffect(() => {
        submittingRef.current = false;
    }, [state]);

    const dirty = snapshotOf(inv) !== lastSaved;

    // Warn before leaving with changes that haven't been autosaved yet.
    useEffect(() => {
        if (!dirty) return;
        const onBeforeUnload = (e) => e.preventDefault();
        window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [dirty]);

    const onSubmit = () => {
        // The full save takes over — stop a pending autosave from racing it
        // (which could otherwise insert a second copy of a new invoice).
        clearTimeout(timerRef.current);
        submittingRef.current = true;
    };

    /* ── Field helpers ────────────────────────────────────── */
    const setValue = (key) => (value) => setInv((p) => ({ ...p, [key]: value }));
    const pickClient = (c) =>
        setInv((p) => ({
            ...p,
            clientName: c.clientName,
            clientCompany: c.clientCompany,
            clientEmail: c.clientEmail,
            clientPhone: c.clientPhone,
            clientAddress: c.clientAddress,
        }));

    const set = (key) => (e) => setInv((p) => ({ ...p, [key]: e.target.value }));
    const setBiz = (key) => (e) =>
        setInv((p) => ({ ...p, business: { ...p.business, [key]: e.target.value } }));

    const setItem = (i, key, value) =>
        setInv((p) => ({
            ...p,
            items: p.items.map((it, j) => (j === i ? { ...it, [key]: value } : it)),
        }));
    const addItem = () => setInv((p) => ({ ...p, items: [...p.items, emptyItem()] }));
    const removeItem = (i) =>
        setInv((p) => ({
            ...p,
            items: p.items.length > 1 ? p.items.filter((_, j) => j !== i) : [emptyItem()],
        }));
    const moveItem = (i, dir) =>
        setInv((p) => {
            const j = i + dir;
            if (j < 0 || j >= p.items.length) return p;
            const items = [...p.items];
            [items[i], items[j]] = [items[j], items[i]];
            return { ...p, items };
        });

    // Changing the issue date keeps the payment window (unless edited).
    const onIssueDate = (e) => {
        const issueDate = e.target.value;
        setInv((p) => ({
            ...p,
            issueDate,
            dueDate:
                !p.dueDate || p.dueDate === addDays(p.issueDate, dueDays)
                    ? addDays(issueDate, dueDays)
                    : p.dueDate,
        }));
    };

    const totals = computeTotals(inv);
    const money = (n) => formatMoney(n, inv.currency);
    const isEdit = Boolean(inv.id);

    return (
        <form action={formAction} onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="data" value={JSON.stringify(inv)} />

            {state?.error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {state.error}
                </div>
            ) : null}

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card title="Client">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Client name *">
                                <ClientSuggestInput
                                    value={inv.clientName}
                                    onChange={setValue('clientName')}
                                    onPick={pickClient}
                                    clients={clients}
                                    className={inputCls}
                                    required
                                />
                            </Field>
                            <Field
                                label="Company"
                                hint={clients.length ? 'Start typing to find a previous client.' : undefined}
                            >
                                <ClientSuggestInput
                                    value={inv.clientCompany}
                                    onChange={setValue('clientCompany')}
                                    onPick={pickClient}
                                    clients={clients}
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Email">
                                <input
                                    type="email"
                                    value={inv.clientEmail}
                                    onChange={set('clientEmail')}
                                    className={inputCls}
                                />
                            </Field>
                            <Field
                                label="Phone / WhatsApp"
                                hint="Include the country code (e.g. +44…) for WhatsApp sharing."
                            >
                                <input
                                    value={inv.clientPhone}
                                    onChange={set('clientPhone')}
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Address" className="sm:col-span-2">
                                <textarea
                                    rows={2}
                                    value={inv.clientAddress}
                                    onChange={set('clientAddress')}
                                    className={inputCls}
                                />
                            </Field>
                        </div>
                    </Card>

                    <Card
                        title="Line items"
                        action={
                            <button
                                type="button"
                                onClick={addItem}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Plus size={15} /> Add item
                            </button>
                        }
                    >
                        <div className="space-y-3">
                            <div className="hidden grid-cols-12 gap-3 px-1 text-xs font-bold uppercase tracking-wide text-slate-400 md:grid">
                                <span className="col-span-6">Description</span>
                                <span className="col-span-1 text-right">Qty</span>
                                <span className="col-span-2 text-right">Rate</span>
                                <span className="col-span-2 text-right">Amount</span>
                                <span className="col-span-1" />
                            </div>
                            {inv.items.map((it, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-12 gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3"
                                >
                                    <div className="col-span-12 space-y-2 md:col-span-6">
                                        <input
                                            value={it.description}
                                            onChange={(e) => setItem(i, 'description', e.target.value)}
                                            placeholder="e.g. Website design & build"
                                            className={inputCls}
                                        />
                                        <textarea
                                            rows={1}
                                            value={it.details}
                                            onChange={(e) => setItem(i, 'details', e.target.value)}
                                            placeholder="Optional details (shown under the description)"
                                            className={`${inputCls} text-xs`}
                                        />
                                    </div>
                                    <input
                                        inputMode="decimal"
                                        value={it.qty}
                                        onChange={(e) => setItem(i, 'qty', e.target.value)}
                                        aria-label="Quantity"
                                        className={`${inputCls} col-span-3 h-fit text-right md:col-span-1 md:px-2`}
                                    />
                                    <input
                                        inputMode="decimal"
                                        value={it.rate}
                                        onChange={(e) => setItem(i, 'rate', e.target.value)}
                                        placeholder="0.00"
                                        aria-label="Rate"
                                        className={`${inputCls} col-span-4 h-fit text-right md:col-span-2`}
                                    />
                                    <div className="col-span-3 pt-2.5 text-right text-sm font-bold text-slate-800 md:col-span-2">
                                        {money(totals.lines[i] || 0)}
                                    </div>
                                    <div className="col-span-2 flex items-start justify-end gap-0.5 md:col-span-1">
                                        <div className="flex flex-col">
                                            <button
                                                type="button"
                                                onClick={() => moveItem(i, -1)}
                                                disabled={i === 0}
                                                title="Move up"
                                                className="rounded p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-30"
                                            >
                                                <ArrowUp size={14} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => moveItem(i, 1)}
                                                disabled={i === inv.items.length - 1}
                                                title="Move down"
                                                className="rounded p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-30"
                                            >
                                                <ArrowDown size={14} />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(i)}
                                            title="Remove item"
                                            className="rounded-md p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 ml-auto max-w-sm space-y-3 border-t border-slate-100 pt-5">
                            <div className="grid grid-cols-2 gap-3">
                                <Field label="Discount (amount)">
                                    <input
                                        inputMode="decimal"
                                        value={inv.discount}
                                        onChange={set('discount')}
                                        placeholder="0.00"
                                        className={inputCls}
                                    />
                                </Field>
                                <Field label="Tax rate (%)">
                                    <input
                                        inputMode="decimal"
                                        value={inv.taxRate}
                                        onChange={set('taxRate')}
                                        placeholder="0"
                                        className={inputCls}
                                    />
                                </Field>
                            </div>
                            <dl className="space-y-1.5 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <dt>Subtotal</dt>
                                    <dd>{money(totals.subtotal)}</dd>
                                </div>
                                {totals.discountAmount > 0 ? (
                                    <div className="flex justify-between text-slate-600">
                                        <dt>Discount</dt>
                                        <dd>-{money(totals.discountAmount)}</dd>
                                    </div>
                                ) : null}
                                {totals.taxAmount > 0 ? (
                                    <div className="flex justify-between text-slate-600">
                                        <dt>
                                            {inv.taxLabel || 'VAT'} ({inv.taxRate}%)
                                        </dt>
                                        <dd>{money(totals.taxAmount)}</dd>
                                    </div>
                                ) : null}
                                <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-extrabold text-slate-900">
                                    <dt>Total</dt>
                                    <dd className="text-primary">{money(totals.total)}</dd>
                                </div>
                            </dl>
                        </div>
                    </Card>

                    <Card title="Notes, payment & terms">
                        <div className="space-y-4">
                            <Field
                                label="Payment details"
                                hint="Bank details shown on the invoice. Defaults come from Invoice Settings."
                            >
                                <textarea
                                    rows={4}
                                    value={inv.paymentDetails}
                                    onChange={set('paymentDetails')}
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Notes (optional)">
                                <textarea
                                    rows={3}
                                    value={inv.notes}
                                    onChange={set('notes')}
                                    placeholder="e.g. Thank you for your business!"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Terms (one per line)">
                                <textarea
                                    rows={5}
                                    value={inv.terms}
                                    onChange={set('terms')}
                                    className={inputCls}
                                />
                            </Field>
                        </div>
                    </Card>

                    <Card title="Your business details (on this invoice)">
                        <p className="-mt-3 mb-4 text-xs text-slate-400">
                            Pre-filled from Invoice Settings. Changes here apply to
                            this invoice only — and later settings changes won’t
                            alter it.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {BUSINESS_FORM_FIELDS.map((f) => (
                                <Field
                                    key={f.name}
                                    label={f.label}
                                    className={f.wide ? 'sm:col-span-2' : ''}
                                >
                                    <input
                                        value={inv.business[f.name] ?? ''}
                                        onChange={setBiz(f.name)}
                                        className={inputCls}
                                    />
                                </Field>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card title="Invoice details">
                        <div className="space-y-4">
                            <Field
                                label="Invoice number"
                                hint={isEdit ? undefined : 'Auto-generated — you can change it.'}
                            >
                                <input
                                    value={inv.number}
                                    onChange={set('number')}
                                    className={`${inputCls} font-mono`}
                                />
                            </Field>
                            <Field label="Status">
                                <select
                                    value={inv.status}
                                    onChange={set('status')}
                                    className={inputCls}
                                >
                                    {INVOICE_STATUSES.map((s) => (
                                        <option key={s.value} value={s.value}>
                                            {s.label}
                                        </option>
                                    ))}
                                </select>
                            </Field>
                            <div className="grid grid-cols-2 gap-3">
                                <Field label="Issue date">
                                    <input
                                        type="date"
                                        value={inv.issueDate}
                                        onChange={onIssueDate}
                                        className={inputCls}
                                    />
                                </Field>
                                <Field label="Due date">
                                    <input
                                        type="date"
                                        value={inv.dueDate}
                                        onChange={set('dueDate')}
                                        className={inputCls}
                                    />
                                </Field>
                            </div>
                            <Field label="Currency">
                                <select
                                    value={inv.currency}
                                    onChange={set('currency')}
                                    className={inputCls}
                                >
                                    {CURRENCIES.map((c) => (
                                        <option key={c.code} value={c.code}>
                                            {c.label}
                                        </option>
                                    ))}
                                </select>
                            </Field>
                            <Field label="Tax label">
                                <input
                                    value={inv.taxLabel}
                                    onChange={set('taxLabel')}
                                    className={inputCls}
                                />
                            </Field>
                        </div>
                    </Card>

                    <div className="sticky top-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
                        <div className="flex items-baseline justify-between">
                            <span className="text-sm font-semibold text-slate-500">Total</span>
                            <span className="text-2xl font-extrabold text-slate-900">
                                {money(totals.total)}
                            </span>
                        </div>
                        <AutosaveStatus saveState={saveState} dirty={dirty} isEdit={isEdit} />
                        <button
                            type="submit"
                            // Wait for a new invoice's first autosave so the
                            // submit updates that draft instead of inserting a copy.
                            disabled={pending || (saveState.status === 'saving' && !inv.id)}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90 disabled:opacity-60"
                        >
                            <Save size={16} />
                            {pending ? 'Saving…' : isEdit ? 'Save & view invoice' : 'Create invoice'}
                        </button>
                        <Link
                            href={isEdit ? `/admin/invoices/${inv.id}` : '/admin/invoices'}
                            className="block text-center text-sm font-semibold text-slate-500 hover:text-primary"
                        >
                            {isEdit ? 'Close' : 'Cancel'}
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

/** "Saving… / All changes saved · 14:05 / Autosave failed" badge. */
function AutosaveStatus({ saveState, dirty, isEdit }) {
    const time = saveState.at
        ? new Date(saveState.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : '';

    let icon = <CloudUpload size={14} />;
    let text = isEdit ? 'Changes save automatically' : 'Autosaves as a draft once you start typing';
    let cls = 'text-slate-400';

    if (saveState.status === 'saving') {
        icon = <Loader2 size={14} className="animate-spin" />;
        text = 'Saving…';
        cls = 'text-slate-500';
    } else if (saveState.status === 'error') {
        icon = <AlertCircle size={14} />;
        text = `Autosave failed: ${saveState.error}`;
        cls = 'text-red-600';
    } else if (dirty) {
        icon = <CloudUpload size={14} />;
        text = 'Unsaved changes…';
        cls = 'text-amber-600';
    } else if (saveState.status === 'saved') {
        icon = <Check size={14} />;
        text = `All changes saved${time ? ` · ${time}` : ''}`;
        cls = 'text-green-600';
    }

    return (
        <p className={`flex items-start gap-1.5 text-xs font-medium ${cls}`} aria-live="polite">
            <span className="mt-px shrink-0">{icon}</span>
            {text}
        </p>
    );
}
