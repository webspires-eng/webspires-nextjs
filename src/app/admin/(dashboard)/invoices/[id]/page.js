import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Pencil, Copy, RefreshCw, CheckCircle2, Send, Ban, ExternalLink } from 'lucide-react';
import {
    getInvoice,
    getInvoiceSettings,
    qrDataUrlFor,
    shareUrlFor,
} from '@/lib/invoices';
import { formatMoney, invoiceBusiness } from '@/lib/invoiceSchema';
import {
    duplicateInvoiceAction,
    regenerateShareLinkAction,
    setInvoiceStatusAction,
} from '@/app/actions/invoices';
import InvoiceDocument from '@/components/invoices/InvoiceDocument';
import InvoiceActions from '@/components/invoices/InvoiceActions';
import InvoicePaper from '@/components/invoices/InvoicePaper';
import InvoiceStatusBadge from '@/components/admin/InvoiceStatusBadge';
import DeleteInvoiceButton from '@/components/admin/DeleteInvoiceButton';

export const dynamic = 'force-dynamic';

const subtleBtn =
    'inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-50';

function StatusButton({ id, status, icon: Icon, children, className = subtleBtn }) {
    return (
        <form action={setInvoiceStatusAction}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="status" value={status} />
            <button type="submit" className={className}>
                <Icon size={15} /> {children}
            </button>
        </form>
    );
}

export default async function InvoiceViewPage({ params }) {
    const { id } = await params;
    const [invoice, settings] = await Promise.all([
        getInvoice(id).catch(() => null),
        getInvoiceSettings(),
    ]);
    if (!invoice) notFound();

    const business = invoiceBusiness(invoice, settings);
    const shareUrl = await shareUrlFor(invoice);
    const qrDataUrl = await qrDataUrlFor(shareUrl);

    return (
        <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                    href="/admin/invoices"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary"
                >
                    <ArrowLeft size={16} /> Back to invoices
                </Link>
                <InvoiceActions
                    number={invoice.number}
                    shareUrl={shareUrl}
                    clientName={invoice.clientName}
                    clientEmail={invoice.clientEmail}
                    clientPhone={invoice.clientPhone}
                    totalLabel={formatMoney(invoice.total, invoice.currency)}
                    companyName={business.companyName}
                />
            </div>

            <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_320px]">
                {/* Paper preview — A4, scaled to fit narrow screens */}
                <div className="rounded-2xl bg-slate-200/60 p-4 sm:p-8">
                    <InvoicePaper className="shadow-xl ring-1 ring-slate-900/5">
                        <InvoiceDocument invoice={invoice} settings={business} qrDataUrl={qrDataUrl} />
                    </InvoicePaper>
                </div>

                <aside className="space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="mb-3 flex items-center justify-between">
                            <h2 className="font-mono text-lg font-bold text-slate-900">{invoice.number}</h2>
                            <InvoiceStatusBadge invoice={invoice} />
                        </div>
                        <p className="text-sm text-slate-500">{invoice.clientName}</p>
                        <p className="mt-1 text-2xl font-extrabold text-slate-900">
                            {formatMoney(invoice.total, invoice.currency)}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <Link href={`/admin/invoices/${invoice.id}/edit`} className={subtleBtn}>
                                <Pencil size={15} /> Edit
                            </Link>
                            <form action={duplicateInvoiceAction}>
                                <input type="hidden" name="id" value={invoice.id} />
                                <button type="submit" className={subtleBtn}>
                                    <Copy size={15} /> Duplicate
                                </button>
                            </form>
                            <DeleteInvoiceButton invoice={invoice} label="Delete" />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                            {invoice.status === 'draft' ? (
                                <StatusButton id={invoice.id} status="unpaid" icon={Send}>
                                    Mark as sent (unpaid)
                                </StatusButton>
                            ) : null}
                            {invoice.status !== 'paid' ? (
                                <StatusButton
                                    id={invoice.id}
                                    status="paid"
                                    icon={CheckCircle2}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-bold text-white hover:opacity-90"
                                >
                                    Mark as paid
                                </StatusButton>
                            ) : (
                                <StatusButton id={invoice.id} status="unpaid" icon={RefreshCw}>
                                    Mark as unpaid
                                </StatusButton>
                            )}
                            {invoice.status !== 'cancelled' ? (
                                <StatusButton id={invoice.id} status="cancelled" icon={Ban}>
                                    Cancel
                                </StatusButton>
                            ) : null}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h3 className="text-sm font-bold text-slate-900">Shareable link</h3>
                        <p className="mt-1 text-xs text-slate-500">
                            Anyone with this link can view and download the invoice (no login).
                        </p>
                        <input
                            readOnly
                            value={shareUrl}
                            className="mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700"
                        />
                        <div className="mt-3 flex flex-wrap gap-2">
                            <a href={shareUrl} target="_blank" rel="noopener noreferrer" className={subtleBtn}>
                                <ExternalLink size={15} /> Open
                            </a>
                            <form action={regenerateShareLinkAction}>
                                <input type="hidden" name="id" value={invoice.id} />
                                <button
                                    type="submit"
                                    className={subtleBtn}
                                    title="Creates a new link — the old one stops working"
                                >
                                    <RefreshCw size={15} /> New link
                                </button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
