import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getInvoiceSettings, hasBusinessColumn } from '@/lib/invoices';
import InvoicesMigrationNotice from '@/components/admin/InvoicesMigrationNotice';
import InvoiceSettingsForm from '@/components/admin/InvoiceSettingsForm';

export const dynamic = 'force-dynamic';

export default async function InvoiceSettingsPage() {
    const settings = await getInvoiceSettings();
    const needsMigration = !(await hasBusinessColumn());

    return (
        <div className="max-w-4xl">
            <Link
                href="/admin/invoices"
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary"
            >
                <ArrowLeft size={16} /> Back to invoices
            </Link>
            <h1 className="text-2xl font-extrabold text-slate-900">Invoice settings</h1>
            <p className="mb-6 text-sm text-slate-500">
                Business details, signature and defaults copied into each NEW
                invoice. Existing invoices keep their own copy and are never
                changed by this page.
            </p>
            {needsMigration && <InvoicesMigrationNotice />}
            <InvoiceSettingsForm initial={settings} />
        </div>
    );
}
