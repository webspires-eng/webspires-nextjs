import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getClientDirectory, getInvoice, getInvoiceSettings } from '@/lib/invoices';
import InvoiceForm from '@/components/admin/InvoiceForm';
import { invoiceBusiness } from '@/lib/invoiceSchema';

export const dynamic = 'force-dynamic';

export default async function EditInvoicePage({ params }) {
    const { id } = await params;
    const [invoice, settings, clients] = await Promise.all([
        getInvoice(id).catch(() => null),
        getInvoiceSettings(),
        getClientDirectory(),
    ]);
    if (!invoice) notFound();

    return (
        <div>
            <Link
                href={`/admin/invoices/${invoice.id}`}
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary"
            >
                <ArrowLeft size={16} /> Back to invoice
            </Link>
            <h1 className="mb-6 text-2xl font-extrabold text-slate-900">
                Edit invoice <span className="font-mono text-slate-500">{invoice.number}</span>
            </h1>
            <InvoiceForm
                initial={{ ...invoice, business: invoiceBusiness(invoice, settings) }}
                clients={clients}
                dueDays={parseInt(settings.dueDays, 10) || 0}
            />
        </div>
    );
}
