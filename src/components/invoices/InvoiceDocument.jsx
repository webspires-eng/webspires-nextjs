/* eslint-disable @next/next/no-img-element */
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { formatDate } from '@/lib/format';
import {
    computeTotals,
    displayStatus,
    formatMoney,
    formatDay,
    formatNumber,
    lines,
    STATUS_LABELS,
} from '@/lib/invoiceSchema';

/*
 * The invoice "paper" — an A4 sheet (794 × 1123 CSS px = 595 × 842 pt).
 *
 * Used by the admin preview, the public share page AND the PDF export
 * (dompdf.js renders this exact DOM to vector PDF in the browser). For that
 * reason it is styled with inline styles and plain hex colours only — no
 * Tailwind (v4 emits oklch() colours) and a standard PDF font stack, so the
 * PDF matches what's on screen. Pure + presentational: safe in server and
 * client components.
 */

// Webspires brand tokens (mirrors --ink-900 / --signal in globals.css).
const INK = '#090A12';
const INK_SOFT = '#1C1E2B';
const SIGNAL = '#EE314F'; // brand red
const MUTED = '#5B5F6E';
const FAINT = '#8A8E9C';
const LINE = '#E6E7EC';
const ZEBRA = '#F7F7F9';
const FONT = 'Helvetica, Arial, sans-serif';

// dompdf.js ignores CSS text-transform, so uppercase in JS instead.
const up = (s) => String(s ?? '').toUpperCase();

export const A4_WIDTH = 794;
// 1122 not 1123: A4 is 842pt = 1122.67px, and a sheet even a fraction taller
// spills a blank second page in the PDF.
export const A4_HEIGHT = 1122;

const PILL = {
    draft: { bg: '#EEF0F4', fg: '#4A4F5E' },
    unpaid: { bg: '#FDE3E8', fg: '#C6213C' },
    overdue: { bg: '#C6213C', fg: '#FFFFFF' },
    paid: { bg: '#DDF5E6', fg: '#137A3D' },
    cancelled: { bg: '#EEF0F4', fg: '#8A8E9C' },
};

// Corner ribbon text per status (none for a normal unpaid invoice).
const RIBBON = {
    draft: { text: 'DRAFT', bg: INK },
    paid: { text: 'PAID', bg: '#16A34A' },
    cancelled: { text: 'VOID', bg: '#6B7280' },
};

/*
 * The diagonal corner ribbon is an SVG *image* (data URL): dompdf.js ignores
 * CSS transforms and doesn't paint inline-SVG fills/text reliably, but it
 * rasterises <img> sources faithfully. Rendered at 3x for a crisp PDF.
 */
function ribbonSrc({ text, bg }) {
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="330" height="330" viewBox="0 0 110 110">` +
        `<path d="M30 0H56L110 54V80Z" fill="${bg}"/>` +
        `<text x="77" y="34" transform="rotate(45 77 34)" text-anchor="middle" dominant-baseline="central" ` +
        `fill="#fff" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="2">${text}</text>` +
        `</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const label = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.2,
    color: MUTED,
};

function ContactItem({ icon: Icon, children }) {
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon size={11} color={SIGNAL} strokeWidth={2.4} aria-hidden="true" />
            {children}
        </span>
    );
}

export default function InvoiceDocument({
    invoice,
    settings,
    qrDataUrl = '',
    id = 'invoice-document',
}) {
    const status = displayStatus(invoice);
    const pill = PILL[status] || PILL.draft;
    const ribbon = RIBBON[invoice.status];
    const cur = invoice.currency;
    const { lines: lineTotals, subtotal, discountAmount, taxAmount, total } =
        computeTotals(invoice);
    const terms = lines(invoice.terms);

    const details = [
        ['Invoice number', invoice.number],
        ['Issue date', formatDay(invoice.issueDate)],
        invoice.dueDate ? ['Due date', formatDay(invoice.dueDate)] : null,
    ].filter(Boolean);

    const sep = <span style={{ color: '#C4C6CF' }}>•</span>;

    return (
        <div
            id={id}
            style={{
                width: A4_WIDTH,
                minHeight: A4_HEIGHT,
                background: '#FFFFFF',
                color: INK,
                fontFamily: FONT,
                fontSize: 12,
                lineHeight: 1.45,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}
        >
            {/* ── Header band ─────────────────────────────── */}
            <div
                style={{
                    background: SIGNAL,
                    borderBottom: `4px solid ${INK}`,
                    padding: '18px 56px',
                    minHeight: 96,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {settings.logo ? (
                    <img
                        src={settings.logo}
                        alt={settings.companyName}
                        style={{ height: 64, width: 'auto' }}
                    />
                ) : null}
            </div>

            {ribbon ? (
                <img
                    src={ribbonSrc(ribbon)}
                    alt={ribbon.text}
                    width={110}
                    height={110}
                    style={{ position: 'absolute', top: 0, right: 0, width: 110, height: 110 }}
                />
            ) : null}

            {/* Flex column so the QR + signature row can sit at the bottom, on the footer */}
            <div style={{ padding: '26px 56px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* ── Title + status ──────────────────────── */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 700,
                            letterSpacing: 2,
                            color: INK,
                        }}
                    >
                        INVOICE
                    </div>
                    <div
                        style={{
                            background: pill.bg,
                            color: pill.fg,
                            borderRadius: 999,
                            padding: '5px 16px',
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: 1.5,
                        }}
                    >
                        {up(STATUS_LABELS[status])}
                    </div>
                </div>

                {/* ── From / bill to / details panel ──────── */}
                <div
                    style={{
                        display: 'flex',
                        marginTop: 22,
                        border: `1px solid ${LINE}`,
                        borderRadius: 10,
                        background: '#FAFAFC',
                        breakInside: 'avoid',
                    }}
                >
                    <PartyColumn
                        title="FROM"
                        name={settings.companyName}
                        address={settings.address}
                        email={settings.email}
                        phone={settings.phone}
                    />
                    <PartyColumn
                        title="BILL TO"
                        name={invoice.clientName}
                        company={invoice.clientCompany}
                        address={invoice.clientAddress}
                        email={invoice.clientEmail}
                        phone={invoice.clientPhone}
                        divider
                    />
                    <div
                        style={{
                            width: 196,
                            padding: '16px 20px',
                            borderLeft: `1px solid ${LINE}`,
                            boxSizing: 'border-box',
                        }}
                    >
                        <div style={{ ...label, color: SIGNAL }}>INVOICE DETAILS</div>
                        {details.map(([k, v]) => (
                            <div key={k} style={{ marginTop: 9 }}>
                                <div style={{ fontSize: 10, color: FAINT }}>{k}</div>
                                <div style={{ fontSize: 12.5, fontWeight: 700, color: INK, marginTop: 1 }}>
                                    {v}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Line items ──────────────────────────── */}
                <table
                    style={{
                        width: '100%',
                        marginTop: 20,
                        borderCollapse: 'collapse',
                    }}
                >
                    <thead>
                        <tr style={{ background: INK, color: '#FFFFFF' }}>
                            {[
                                ['#', 'left', 34],
                                ['Description', 'left'],
                                ['Qty', 'right', 60],
                                ['Rate', 'right', 110],
                                ['Amount', 'right', 120],
                            ].map(([h, align, w]) => (
                                <th
                                    key={h}
                                    style={{
                                        textAlign: align,
                                        width: w,
                                        padding: '8px 12px',
                                        fontSize: 10,
                                        fontWeight: 700,
                                        letterSpacing: 1.2,
                                        color: h === '#' ? '#A9ACB9' : '#FFFFFF',
                                    }}
                                >
                                    {up(h)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items.length === 0 ? (
                            <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                                <td
                                    colSpan={5}
                                    style={{ padding: '18px 12px', textAlign: 'center', color: FAINT, fontSize: 11 }}
                                >
                                    No line items yet
                                </td>
                            </tr>
                        ) : null}
                        {invoice.items.map((it, i) => (
                            <tr
                                key={i}
                                style={{
                                    background: i % 2 ? ZEBRA : '#FFFFFF',
                                    borderBottom: `1px solid ${LINE}`,
                                }}
                            >
                                <td style={{ padding: '8px 12px', color: FAINT, verticalAlign: 'top' }}>
                                    {i + 1}
                                </td>
                                <td style={{ padding: '8px 12px', verticalAlign: 'top' }}>
                                    <div style={{ color: INK, fontWeight: 700 }}>
                                        {it.description}
                                    </div>
                                    {it.details ? (
                                        <div
                                            style={{
                                                color: MUTED,
                                                fontSize: 11,
                                                marginTop: 2,
                                                whiteSpace: 'pre-line',
                                            }}
                                        >
                                            {it.details}
                                        </div>
                                    ) : null}
                                </td>
                                <td style={{ padding: '8px 12px', textAlign: 'right', verticalAlign: 'top' }}>
                                    {Number(it.qty).toLocaleString('en-GB')}
                                </td>
                                <td style={{ padding: '8px 12px', textAlign: 'right', verticalAlign: 'top' }}>
                                    {formatNumber(it.rate)}
                                </td>
                                <td
                                    style={{
                                        padding: '8px 12px',
                                        textAlign: 'right',
                                        verticalAlign: 'top',
                                        fontWeight: 700,
                                    }}
                                >
                                    {formatNumber(lineTotals[i])}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* ── Payment details + totals ────────────── */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 32,
                        marginTop: 18,
                    }}
                >
                    <div style={{ flex: 1, minWidth: 0 }}>
                        {invoice.paymentDetails ? (
                            <>
                                <div style={{ ...label, color: SIGNAL }}>
                                    PAYMENT DETAILS
                                </div>
                                <div
                                    style={{
                                        marginTop: 6,
                                        whiteSpace: 'pre-line',
                                        color: INK_SOFT,
                                    }}
                                >
                                    {invoice.paymentDetails}
                                </div>
                            </>
                        ) : null}
                    </div>

                    <div style={{ width: 300 }}>
                        <TotalRow k="Subtotal" v={formatMoney(subtotal, cur)} />
                        {discountAmount > 0 ? (
                            <TotalRow k="Discount" v={`-${formatMoney(discountAmount, cur)}`} />
                        ) : null}
                        {invoice.taxRate > 0 ? (
                            <TotalRow
                                k={`${invoice.taxLabel || 'VAT'} (${invoice.taxRate}%)`}
                                v={formatMoney(taxAmount, cur)}
                            />
                        ) : null}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderTop: `2px solid ${INK}`,
                                borderBottom: `2px solid ${INK}`,
                                padding: '10px 0',
                                marginTop: 6,
                                fontSize: 16,
                                fontWeight: 700,
                            }}
                        >
                            <span>{invoice.status === 'paid' ? 'Total paid' : 'Total due'}</span>
                            <span style={{ color: SIGNAL }}>{formatMoney(total, cur)}</span>
                        </div>
                        {invoice.status === 'paid' && invoice.paidAt ? (
                            <div style={{ textAlign: 'right', color: '#137A3D', fontSize: 11, marginTop: 6 }}>
                                Paid on {formatDate(invoice.paidAt)}
                            </div>
                        ) : null}
                    </div>
                </div>

                {/* ── Notes + terms ───────────────────────── */}
                {invoice.notes ? (
                    <div style={{ marginTop: 18 }}>
                        <div style={{ ...label, color: SIGNAL }}>NOTES</div>
                        <div style={{ marginTop: 6, whiteSpace: 'pre-line', color: INK_SOFT }}>
                            {invoice.notes}
                        </div>
                    </div>
                ) : null}

                {/* ── Bottom group: terms + QR + signature ────
                    marginTop: auto pushes the whole group down onto the
                    footer; paddingTop keeps a gap when the page is full. */}
                <div style={{ marginTop: 'auto', paddingTop: 20 }}>
                {terms.length ? (
                    <div>
                        <div style={{ ...label, color: SIGNAL }}>TERMS</div>
                        <div style={{ marginTop: 6, color: INK_SOFT, fontSize: 11 }}>
                            {terms.map((t, i) => (
                                <div key={i} style={{ marginTop: 2 }}>
                                    {i + 1}. {t}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                {/* ── Verify QR + signature ───────────────── */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginTop: 18,
                        marginBottom: 18,
                        breakInside: 'avoid',
                    }}
                >
                    <div style={{ textAlign: 'center', width: 110 }}>
                        {qrDataUrl ? (
                            <>
                                <img
                                    src={qrDataUrl}
                                    alt="QR code linking to this invoice online"
                                    style={{ width: 84, height: 84, display: 'block', margin: '0 auto' }}
                                />
                                <div
                                    style={{
                                        marginTop: 6,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        color: INK,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 4,
                                    }}
                                >
                                    <ShieldCheck size={11} color={SIGNAL} strokeWidth={2.4} aria-hidden="true" />
                                    Scan to verify
                                </div>
                            </>
                        ) : null}
                    </div>

                    {/* Stamp, name, title and company centred under each other */}
                    <div style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                                minHeight: 20,
                            }}
                        >
                            {settings.stamp ? (
                                <img
                                    src={settings.stamp}
                                    alt="Company stamp"
                                    style={{ width: 100, height: 100, objectFit: 'contain' }}
                                />
                            ) : null}
                            {settings.signature ? (
                                <img
                                    src={settings.signature}
                                    alt="Signature"
                                    style={{ height: 56, width: 'auto', maxWidth: 160 }}
                                />
                            ) : null}
                        </div>
                        <div style={{ marginTop: 8, fontWeight: 700, fontSize: 13 }}>
                            {settings.signatoryName}
                        </div>
                        {settings.signatoryTitle ? (
                            <div style={{ color: MUTED, fontSize: 11 }}>
                                {settings.signatoryTitle}
                            </div>
                        ) : null}
                        <div
                            style={{
                                color: SIGNAL,
                                fontWeight: 700,
                                fontSize: 11,
                                letterSpacing: 0.6,
                                marginTop: 2,
                            }}
                        >
                            {up(settings.signatoryCompany)}
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────── */}
            <div
                style={{
                    borderTop: `3px solid ${INK}`,
                    breakInside: 'avoid',
                    padding: '12px 56px 16px',
                    textAlign: 'center',
                    color: MUTED,
                    fontSize: 11,
                }}
            >
                {settings.address ? (
                    <div>
                        <ContactItem icon={MapPin}>{settings.address}</ContactItem>
                    </div>
                ) : null}
                <div
                    style={{
                        marginTop: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 8,
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        settings.phone && <ContactItem key="p" icon={Phone}>{settings.phone}</ContactItem>,
                        settings.email && <ContactItem key="e" icon={Mail}>{settings.email}</ContactItem>,
                        settings.website && <ContactItem key="w" icon={Globe}>{settings.website}</ContactItem>,
                    ]
                        .filter(Boolean)
                        .flatMap((el, i) => (i ? [<span key={`s${i}`}>{sep}</span>, el] : [el]))}
                </div>
                {settings.registration ? (
                    <div style={{ marginTop: 4, color: FAINT, fontSize: 10 }}>
                        {settings.registration}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

/**
 * Address lines for display. Multi-line addresses are kept as typed; a
 * single-line "Street, Town Postcode, Country" is split after the first
 * comma so it reads as a tidy two-line block instead of wrapping mid-way.
 */
function addressLines(address) {
    const s = String(address || '').trim();
    if (!s) return [];
    if (/\n/.test(s)) return s.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const i = s.indexOf(',');
    if (i === -1) return [s];
    return [s.slice(0, i + 1).trim(), s.slice(i + 1).trim()];
}

/** One party in the info panel (FROM / BILL TO). */
function PartyColumn({ title, name, company, address, email, phone, divider = false }) {
    return (
        <div
            style={{
                flex: 1,
                minWidth: 0,
                padding: '16px 20px',
                borderLeft: divider ? `1px solid ${LINE}` : 'none',
                boxSizing: 'border-box',
            }}
        >
            <div style={{ ...label, color: SIGNAL }}>{title}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginTop: 9 }}>
                {name || '—'}
            </div>
            {company ? (
                <div style={{ fontSize: 11.5, fontWeight: 700, color: INK_SOFT, marginTop: 1 }}>
                    {company}
                </div>
            ) : null}
            <div style={{ fontSize: 11, color: MUTED, marginTop: 6, lineHeight: 1.55 }}>
                {addressLines(address).map((l, i) => (
                    <div key={i}>{l}</div>
                ))}
                {email ? <div style={{ marginTop: 4 }}>{email}</div> : null}
                {phone ? <div>{phone}</div> : null}
            </div>
        </div>
    );
}

function TotalRow({ k, v }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
                borderBottom: `1px solid ${LINE}`,
                color: INK_SOFT,
            }}
        >
            <span>{k}</span>
            <span>{v}</span>
        </div>
    );
}
