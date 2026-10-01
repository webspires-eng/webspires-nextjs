import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getClientDirectory, getInvoiceSettings, nextInvoiceNumber } from '@/lib/invoices';
import { addDays, businessFromSettings, isoDate } from '@/lib/invoiceSchema';
import InvoiceForm from '@/components/admin/InvoiceForm';

export const dynamic = 'force-dynamic';

export default async function NewInvoicePage() {
    const [settings, clients] = await Promise.all([
        getInvoiceSettings(),
        getClientDirectory(),
    ]);
    const issueDate = isoDate();

    const initial = {
        id: '',
        number: await nextInvoiceNumber(settings.numberPrefix),
        status: 'draft',
        currency: settings.currency,
        issueDate,
        dueDate: addDays(issueDate, settings.dueDays),
        clientName: '',
        clientCompany: '',
        clientEmail: '',
        clientPhone: '',
        clientAddress: '',
        items: [],
        discount: '',
        taxRate: settings.taxRate,
        taxLabel: settings.taxLabel,
        notes: '',
        terms: settings.terms,
        paymentDetails: settings.paymentDetails,
        business: businessFromSettings(settings),
    };

    return (
        <div>
            <Link
                href="/admin/invoices"
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary"
            >
                <ArrowLeft size={16} /> Back to invoices
            </Link>
            <h1 className="mb-6 text-2xl font-extrabold text-slate-900">New invoice</h1>
            <InvoiceForm initial={initial} clients={clients} dueDays={parseInt(settings.dueDays, 10) || 0} />
        </div>
    );
}
