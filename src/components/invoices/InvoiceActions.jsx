'use client';

import { useState } from 'react';
import { Download, Link2, Check, Mail, Loader2 } from 'lucide-react';

/** WhatsApp glyph (lucide has no brand icons). */
function WhatsAppIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.6l6-1.57a11.33 11.33 0 0 0 5.46 1.39h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03z" />
        </svg>
    );
}

const btn =
    'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-60';

/**
 * Download / share toolbar. The PDF is generated in the browser by
 * dompdf.js from the rendered <InvoiceDocument> (vector text, selectable),
 * so what you see is exactly what's downloaded.
 */
export default function InvoiceActions({
    number,
    shareUrl,
    clientName = '',
    clientEmail = '',
    clientPhone = '',
    totalLabel = '',
    companyName = 'Webspires',
    documentId = 'invoice-document',
    showShare = true,
}) {
    const [busy, setBusy] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');

    const message =
        `Hi ${clientName || 'there'}, here is invoice ${number}` +
        (totalLabel ? ` for ${totalLabel}` : '') +
        ` from ${companyName}. View or download it here: ${shareUrl}`;

    const phoneDigits = String(clientPhone).replace(/\D/g, '');
    const whatsappHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
    const mailHref =
        `mailto:${encodeURIComponent(clientEmail)}` +
        `?subject=${encodeURIComponent(`Invoice ${number} from ${companyName}`)}` +
        `&body=${encodeURIComponent(message)}`;

    const downloadPdf = async () => {
        const el = document.getElementById(documentId);
        if (!el) return;
        setError('');
        setBusy(true);
        const root = document.documentElement;
        try {
            const { exportPDF } = await import('dompdf.js');
            // Render at true A4 size (undo InvoicePaper's phone scaling),
            // then wait two frames for layout before dompdf.js measures.
            root.setAttribute('data-invoice-exporting', '');
            await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
            const blob = await exportPDF(el, {
                format: 'a4',
                // Paginate long invoices, but without dompdf.js's default
                // 50px header + "1/2" footer bands (the sheet is already A4).
                pagination: true,
                pageConfig: {
                    header: { content: '', height: 0 },
                    footer: { content: '', height: 0 },
                },
                backgroundColor: '#ffffff',
                useCORS: true,
                compress: true,
                putOnlyUsedFonts: true,
                metadata: {
                    title: `Invoice ${number}`,
                    author: companyName,
                    subject: `Invoice ${number}`,
                },
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${number || 'invoice'}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 30_000);
        } catch (err) {
            console.error(err);
            setError('Could not generate the PDF. Please try again.');
        } finally {
            root.removeAttribute('data-invoice-exporting');
            setBusy(false);
        }
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
        } catch {
            window.prompt('Copy this link:', shareUrl);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col items-end gap-1.5">
            <div className="flex flex-wrap items-center justify-end gap-2">
                {showShare ? (
                    <>
                        <button
                            type="button"
                            onClick={copyLink}
                            className={`${btn} border border-slate-300 bg-white text-slate-700`}
                        >
                            {copied ? <Check size={16} /> : <Link2 size={16} />}
                            {copied ? 'Copied!' : 'Copy link'}
                        </button>
                        <a
                            href={mailHref}
                            className={`${btn} border border-slate-300 bg-white text-slate-700`}
                        >
                            <Mail size={16} /> Email
                        </a>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${btn} bg-[#25D366] text-white`}
                        >
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </>
                ) : null}
                <button
                    type="button"
                    onClick={downloadPdf}
                    disabled={busy}
                    className={`${btn} bg-primary text-white`}
                >
                    {busy ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                    {busy ? 'Generating…' : 'Download PDF'}
                </button>
            </div>
            {error ? <p className="text-xs text-red-600">{error}</p> : null}
        </div>
    );
}
