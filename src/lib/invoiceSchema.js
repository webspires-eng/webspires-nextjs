// src/lib/invoiceSchema.js
// Pure (client + server) invoice constants and helpers. No `server-only`,
// no DB imports — the admin InvoiceForm (client) imports this for live
// totals, and the server uses the same maths when saving. Mirrors the
// settingsSchema.js pattern.

export const INVOICE_STATUSES = [
    { value: 'draft', label: 'Draft' },
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'paid', label: 'Paid' },
    { value: 'cancelled', label: 'Cancelled' },
];

const STATUS_VALUES = INVOICE_STATUSES.map((s) => s.value);

/**
 * Supported currencies. Symbols are limited to characters the PDF's
 * standard fonts can render (so e.g. PKR uses "Rs", AED uses the code).
 */
export const CURRENCIES = [
    { code: 'GBP', symbol: '£', label: 'GBP — British Pound' },
    { code: 'USD', symbol: '$', label: 'USD — US Dollar' },
    { code: 'EUR', symbol: '€', label: 'EUR — Euro' },
    { code: 'PKR', symbol: 'Rs ', label: 'PKR — Pakistani Rupee' },
    { code: 'AED', symbol: 'AED ', label: 'AED — UAE Dirham' },
    { code: 'SAR', symbol: 'SAR ', label: 'SAR — Saudi Riyal' },
    { code: 'CAD', symbol: 'CA$', label: 'CAD — Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', label: 'AUD — Australian Dollar' },
];

const CURRENCY_CODES = CURRENCIES.map((c) => c.code);

/** Round to 2dp without float drift (0.1 + 0.2 style). */
export function round2(n) {
    return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

function toNumber(value, fallback = 0) {
    const n = parseFloat(String(value ?? '').replace(/,/g, ''));
    return Number.isFinite(n) ? n : fallback;
}

/** "1,152,000.00" — plain number, no symbol. */
export function formatNumber(value) {
    return toNumber(value).toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

/** "£1,152.00" / "Rs 1,152,000.00" (negative → "-£10.00"). */
export function formatMoney(value, currency = 'GBP') {
    const n = toNumber(value);
    const symbol =
        CURRENCIES.find((c) => c.code === currency)?.symbol ?? `${currency} `;
    return `${n < 0 ? '-' : ''}${symbol}${formatNumber(Math.abs(n))}`;
}

/** Whitelist + coerce raw line items; drops fully-empty rows. */
export function cleanItems(raw) {
    if (!Array.isArray(raw)) return [];
    return raw
        .map((it) => ({
            description: String(it?.description ?? '').trim(),
            details: String(it?.details ?? '').trim(),
            qty: round2(Math.max(0, toNumber(it?.qty, 0))),
            rate: round2(toNumber(it?.rate, 0)),
        }))
        .filter((it) => it.description || it.rate);
}

/** Subtotal → discount → tax → total. Safe on raw (string) form values. */
export function computeTotals({ items = [], discount = 0, taxRate = 0 } = {}) {
    const lines = (items || []).map((it) =>
        round2(toNumber(it?.qty) * toNumber(it?.rate))
    );
    const subtotal = round2(lines.reduce((a, b) => a + b, 0));
    const discountAmount = round2(
        Math.min(Math.max(0, toNumber(discount)), subtotal)
    );
    const taxable = round2(subtotal - discountAmount);
    const taxAmount = round2((taxable * Math.max(0, toNumber(taxRate))) / 100);
    const total = round2(taxable + taxAmount);
    return { lines, subtotal, discountAmount, taxAmount, total };
}

export function normaliseStatus(value) {
    return STATUS_VALUES.includes(value) ? value : 'draft';
}

export function normaliseCurrency(value) {
    return CURRENCY_CODES.includes(value) ? value : 'GBP';
}

/** "YYYY-MM-DD" in local time (for <input type="date"> defaults). */
export function isoDate(date = new Date()) {
    const d = new Date(date);
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function addDays(isoDay, days) {
    const d = new Date(`${isoDay}T00:00:00`);
    d.setDate(d.getDate() + (parseInt(days, 10) || 0));
    return isoDate(d);
}

/**
 * "30 September 2026" from "YYYY-MM-DD", parsed as a LOCAL calendar day
 * (new Date('2026-09-30') is UTC midnight and can shift a day west of UTC).
 */
export function formatDay(isoDay) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(isoDay || ''));
    if (!m) return '';
    return new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

/** Valid "YYYY-MM-DD" or ''. */
export function cleanDate(value) {
    const s = String(value ?? '').trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s))
        ? s
        : '';
}

/**
 * Display status: an unpaid invoice past its due date shows as "overdue".
 * (Overdue is derived, never stored.)
 */
export function displayStatus(invoice, today = isoDate()) {
    if (
        invoice?.status === 'unpaid' &&
        invoice?.dueDate &&
        invoice.dueDate < today
    ) {
        return 'overdue';
    }
    return invoice?.status || 'draft';
}

export const STATUS_LABELS = {
    draft: 'Draft',
    unpaid: 'Unpaid',
    paid: 'Paid',
    cancelled: 'Cancelled',
    overdue: 'Overdue',
};

/* ── Invoice settings (branding + defaults) ───────────────────────── */

export const INVOICE_SETTINGS_SECTIONS = [
    {
        title: 'Business details (shown on every invoice)',
        fields: [
            { name: 'companyName', label: 'Company name', type: 'text' },
            {
                name: 'logo',
                label: 'Header logo',
                type: 'image',
                hint: 'Sits on the left of the red invoice header — a white/light logo works best.',
            },
            { name: 'address', label: 'Address', type: 'text' },
            { name: 'phone', label: 'Phone', type: 'text' },
            { name: 'email', label: 'Email', type: 'text' },
            { name: 'website', label: 'Website', type: 'text' },
            {
                name: 'registration',
                label: 'Company / VAT registration (optional)',
                type: 'text',
                hint: 'e.g. Company No. 12345678 · VAT GB123456789',
            },
        ],
    },
    {
        title: 'Signature block',
        fields: [
            { name: 'signatoryName', label: 'Signatory name', type: 'text' },
            { name: 'signatoryTitle', label: 'Signatory title', type: 'text' },
            {
                name: 'signatoryCompany',
                label: 'Company line under the signature',
                type: 'text',
            },
            {
                name: 'signature',
                label: 'Signature image (optional)',
                type: 'image',
                hint: 'A transparent PNG of the signature.',
            },
            {
                name: 'stamp',
                label: 'Company stamp / seal (optional)',
                type: 'image',
                hint: 'Transparent PNG shown above the signatory name.',
            },
        ],
    },
    {
        title: 'Defaults for new invoices',
        fields: [
            {
                name: 'numberPrefix',
                label: 'Invoice number prefix',
                type: 'text',
                hint: 'Numbers are generated as PREFIX-YEAR-001, e.g. WS-2026-001.',
            },
            { name: 'currency', label: 'Default currency', type: 'currency' },
            {
                name: 'dueDays',
                label: 'Payment due (days after issue)',
                type: 'number',
            },
            { name: 'taxLabel', label: 'Tax label', type: 'text', hint: 'e.g. VAT' },
            {
                name: 'taxRate',
                label: 'Default tax rate (%)',
                type: 'number',
                hint: 'Use 0 if you are not VAT registered.',
            },
            {
                name: 'paymentDetails',
                label: 'Payment details',
                type: 'textarea',
                hint: 'Bank name, account name, sort code, account number, IBAN…',
            },
            {
                name: 'terms',
                label: 'Terms (one per line)',
                type: 'textarea',
            },
        ],
    },
];

const INVOICE_SETTING_NAMES = INVOICE_SETTINGS_SECTIONS.flatMap((s) =>
    s.fields.map((f) => f.name)
);

export const DEFAULT_INVOICE_SETTINGS = {
    companyName: 'Webspires Ltd',
    logo: '/images/webspires-logo-light.png',
    address: '39A Manchester Rd, Bolton BL3 2NZ, UK',
    phone: '+44 161 524 1569',
    email: 'info@webspires.co.uk',
    website: 'www.webspires.co.uk',
    registration: '',
    signatoryName: 'Webspires Team',
    signatoryTitle: 'Accounts',
    signatoryCompany: 'WEBSPIRES LTD',
    signature: '',
    // Optimised 300px copy of /webspires-stamp.png (the original is 1.2 MB).
    stamp: '/images/webspires-stamp-invoice.png',
    numberPrefix: 'WS',
    currency: 'GBP',
    dueDays: '7',
    taxLabel: 'VAT',
    taxRate: '0',
    paymentDetails: '',
    terms: [
        'Payment is due within 7 days of the invoice date unless otherwise agreed in writing.',
        'Work begins (or continues) on receipt of payment. Late payments may pause ongoing services.',
        'Third-party costs (ad spend, hosting, domains, licences) are billed separately unless stated.',
        'All fees are non-refundable once work on the relevant deliverable has started.',
    ].join('\n'),
};

export function mergeInvoiceSettings(data) {
    const d = data && typeof data === 'object' ? data : {};
    return { ...DEFAULT_INVOICE_SETTINGS, ...d };
}

export function cleanInvoiceSettings(raw = {}) {
    const out = {};
    for (const name of INVOICE_SETTING_NAMES) {
        out[name] = String(raw?.[name] ?? '').trim();
    }
    out.currency = normaliseCurrency(out.currency);
    out.numberPrefix =
        out.numberPrefix.replace(/[^A-Za-z0-9-]/g, '').slice(0, 12) || 'INV';
    return out;
}

/* ── Per-invoice business snapshot ───────────────────────────────── */

/**
 * Sender details frozen onto each invoice (`invoices.business`). Copied from
 * Invoice Settings when an invoice is created, then edited per invoice — so
 * changing the settings later never rewrites existing invoices.
 */
export const BUSINESS_FIELDS = [
    'companyName',
    'logo',
    'address',
    'phone',
    'email',
    'website',
    'registration',
    'signatoryName',
    'signatoryTitle',
    'signatoryCompany',
    'signature',
    'stamp',
];

/** Text fields shown in the create/edit invoice form. */
export const BUSINESS_FORM_FIELDS = [
    { name: 'address', label: 'Address', wide: true },
    { name: 'phone', label: 'Phone' },
    { name: 'email', label: 'Email' },
    { name: 'website', label: 'Website' },
    { name: 'registration', label: 'Company / VAT registration (optional)' },
    { name: 'signatoryName', label: 'Signatory name' },
    { name: 'signatoryTitle', label: 'Signatory title' },
    { name: 'signatoryCompany', label: 'Company line under signature' },
];

/** Business snapshot from (merged) invoice settings — for new invoices. */
export function businessFromSettings(settings) {
    const s = mergeInvoiceSettings(settings);
    const out = {};
    for (const k of BUSINESS_FIELDS) out[k] = String(s[k] ?? '');
    return out;
}

/** Whitelist + trim a business object coming from the form. */
export function cleanBusiness(raw) {
    const out = {};
    for (const k of BUSINESS_FIELDS) {
        out[k] = String(raw?.[k] ?? '').trim().slice(0, 500);
    }
    return out;
}

/**
 * The business details to render for an invoice: its own snapshot when it
 * has one, else (legacy invoices saved before snapshots) the current settings.
 */
export function invoiceBusiness(invoice, settings) {
    const snap = invoice?.business;
    if (snap && typeof snap === 'object' && Object.keys(snap).length) {
        return { ...businessFromSettings(null), ...snap };
    }
    return businessFromSettings(settings);
}

/** Split a multi-line text block into non-empty trimmed lines. */
export function lines(text) {
    return String(text || '')
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean);
}
