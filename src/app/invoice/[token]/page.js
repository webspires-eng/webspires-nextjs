import { notFound } from 'next/navigation';
import {
    getInvoiceByToken,
    getInvoiceSettings,
    qrDataUrlFor,
    shareUrlFor,
} from '@/lib/invoices';
import { formatMoney, invoiceBusiness } from '@/lib/invoiceSchema';
import InvoiceDocument from '@/components/invoices/InvoiceDocument';
import InvoiceActions from '@/components/invoices/InvoiceActions';
import InvoicePaper from '@/components/invoices/InvoicePaper';

/*
 * Public, login-free invoice view reached via the unguessable share token
 * (/invoice/<token>). Lives outside the (site) group so it has no marketing
 * header/footer, and is never indexed.
 */

export const dynamic = 'force-dynamic';

async function load(token) {
    try {
        return await getInvoiceByToken(token);
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { token } = await params;
    const invoice = await load(token);
    const settings = await getInvoiceSettings();
    return {
        title: {
            absolute: invoice
                ? `Invoice ${invoice.number} — ${invoiceBusiness(invoice, settings).companyName}`
                : 'Invoice not found',
        },
        robots: { index: false, follow: false, nocache: true },
        referrer: 'no-referrer',
    };
}

export default async function PublicInvoicePage({ params }) {
    const { token } = await params;
    const invoice = await load(token);
    if (!invoice) notFound();

    const settings = await getInvoiceSettings();
    const business = invoiceBusiness(invoice, settings);
    const shareUrl = await shareUrlFor(invoice);
    const qrDataUrl = await qrDataUrlFor(shareUrl);

    return (
        <div className="min-h-screen bg-slate-200/70 px-3 py-6 sm:px-6 sm:py-10">
            <div className="mx-auto w-full max-w-[794px]">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold text-slate-500">
                            Invoice from {business.companyName}
                        </p>
                        <p className="text-lg font-extrabold text-slate-900">
                            {invoice.number} ·{' '}
                            {formatMoney(invoice.total, invoice.currency)}
                        </p>
                    </div>
                    <InvoiceActions
                        number={invoice.number}
                        shareUrl={shareUrl}
                        companyName={business.companyName}
                        showShare={false}
                    />
                </div>
            </div>

            {/* A4 sheet, scaled down to fit phones (PDF is always true A4) */}
            <div className="mx-auto max-w-[794px]">
                <InvoicePaper className="shadow-xl ring-1 ring-slate-900/5">
                    <InvoiceDocument invoice={invoice} settings={business} qrDataUrl={qrDataUrl} />
                </InvoicePaper>
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
                Questions about this invoice? Contact{' '}
                <a href={`mailto:${business.email}`} className="font-semibold text-slate-700 underline">
                    {business.email}
                </a>
                {business.phone ? ` or call ${business.phone}` : ''}.
            </p>
        </div>
    );
}
