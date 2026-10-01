import Link from 'next/link';
import { Receipt, PlusCircle, Settings, Search, Wallet, AlertCircle, CheckCircle2 } from 'lucide-react';
import { listInvoices, invoiceStats, isMissingTableError, getInvoiceSettings, hasBusinessColumn } from '@/lib/invoices';
import { displayStatus, formatDay, formatMoney } from '@/lib/invoiceSchema';
import InvoiceRowActions from '@/components/admin/InvoiceRowActions';
import InvoiceStatusBadge from '@/components/admin/InvoiceStatusBadge';
import InvoicesSetupNotice from '@/components/admin/InvoicesSetupNotice';
import InvoicesMigrationNotice from '@/components/admin/InvoicesMigrationNotice';
import DbErrorNotice from '@/components/admin/DbErrorNotice';

export const dynamic = 'force-dynamic';

const TABS = [
    { value: 'all', label: 'All' },
    { value: 'draft', label: 'Drafts' },
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'overdue', label: 'Overdue' },
    { value: 'paid', label: 'Paid' },
    { value: 'cancelled', label: 'Cancelled' },
];

export default async function InvoicesPage({ searchParams }) {
    const sp = await searchParams;
    const tab = TABS.some((t) => t.value === sp?.status) ? sp.status : 'all';
    const q = String(sp?.q || '').trim().toLowerCase();

    let invoices = [];
    let missingTable = false;
    let dbError = false;
    try {
        invoices = await listInvoices();
    } catch (err) {
        if (isMissingTableError(err)) missingTable = true;
        else dbError = true;
    }
    const settings = await getInvoiceSettings();
    const needsMigration = !missingTable && !(await hasBusinessColumn());

    const stats = invoiceStats(invoices);
    // Outstanding/paid sums are only meaningful per currency; show the
    // default currency's figures (other currencies are still listed below).
    const inDefault = invoices.filter((i) => i.currency === settings.currency);
    const money = invoiceStats(inDefault);

    const filtered = invoices.filter((inv) => {
        if (tab === 'overdue' && displayStatus(inv) !== 'overdue') return false;
        if (tab === 'unpaid' && inv.status !== 'unpaid') return false;
        if (!['all', 'overdue', 'unpaid'].includes(tab) && inv.status !== tab) return false;
        if (!q) return true;
        return [inv.number, inv.clientName, inv.clientCompany, inv.clientEmail]
            .join(' ')
            .toLowerCase()
            .includes(q);
    });

    const cards = [
        { label: 'Invoices', value: stats.count, icon: Receipt, color: 'text-slate-700 bg-slate-100' },
        { label: `Outstanding (${settings.currency})`, value: formatMoney(money.outstanding, settings.currency), icon: Wallet, color: 'text-amber-700 bg-amber-100' },
        { label: 'Overdue', value: stats.overdue, icon: AlertCircle, color: 'text-red-700 bg-red-100' },
        { label: `Paid (${settings.currency})`, value: formatMoney(money.paid, settings.currency), icon: CheckCircle2, color: 'text-green-700 bg-green-100' },
    ];

    return (
        <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">Invoices</h1>
                    <p className="text-sm text-slate-500">
                        Create, share and track client invoices
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href="/admin/invoices/settings"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                        <Settings size={17} /> Invoice settings
                    </Link>
                    <Link
                        href="/admin/invoices/new"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                    >
                        <PlusCircle size={18} /> New invoice
                    </Link>
                </div>
            </div>

            {missingTable && <InvoicesSetupNotice />}
            {needsMigration && <InvoicesMigrationNotice />}
            {dbError && <DbErrorNotice />}

            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {cards.map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                            <Icon size={20} />
                        </div>
                        <p className="text-2xl font-extrabold text-slate-900">{value}</p>
                        <p className="text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <nav className="flex flex-wrap gap-1 rounded-xl bg-white p-1 ring-1 ring-slate-200">
                    {TABS.map((t) => {
                        const params = new URLSearchParams();
                        if (t.value !== 'all') params.set('status', t.value);
                        if (q) params.set('q', q);
                        const qs = params.toString();
                        return (
                            <Link
                                key={t.value}
                                href={`/admin/invoices${qs ? `?${qs}` : ''}`}
                                className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                                    tab === t.value
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                {t.label}
                            </Link>
                        );
                    })}
                </nav>
                <form className="relative" action="/admin/invoices">
                    {tab !== 'all' && <input type="hidden" name="status" value={tab} />}
                    <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        name="q"
                        defaultValue={q}
                        placeholder="Search number or client…"
                        className="w-64 rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                </form>
            </div>

            {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                    <Receipt size={32} className="mx-auto mb-3 text-slate-300" />
                    <p className="text-slate-500">
                        {invoices.length ? 'No invoices match this filter.' : 'No invoices yet.'}
                    </p>
                    {!invoices.length && !missingTable ? (
                        <Link
                            href="/admin/invoices/new"
                            className="mt-3 inline-block text-sm font-bold text-primary hover:underline"
                        >
                            Create your first invoice
                        </Link>
                    ) : null}
                </div>
            ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-5 py-3">Number</th>
                                <th className="px-5 py-3">Client</th>
                                <th className="px-5 py-3">Issued</th>
                                <th className="px-5 py-3">Due</th>
                                <th className="px-5 py-3 text-right">Total</th>
                                <th className="px-5 py-3">Status</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((inv) => (
                                <tr key={inv.id} className="hover:bg-slate-50">
                                    <td className="px-5 py-3">
                                        <Link
                                            href={`/admin/invoices/${inv.id}`}
                                            className="font-mono font-semibold text-slate-800 hover:text-primary"
                                        >
                                            {inv.number}
                                        </Link>
                                    </td>
                                    <td className="px-5 py-3">
                                        <p className="font-semibold text-slate-800">{inv.clientName}</p>
                                        {inv.clientCompany ? (
                                            <p className="text-xs text-slate-400">{inv.clientCompany}</p>
                                        ) : null}
                                    </td>
                                    <td className="px-5 py-3 text-slate-500">{formatDay(inv.issueDate)}</td>
                                    <td className="px-5 py-3 text-slate-500">{formatDay(inv.dueDate) || '—'}</td>
                                    <td className="px-5 py-3 text-right font-bold text-slate-900">
                                        {formatMoney(inv.total, inv.currency)}
                                    </td>
                                    <td className="px-5 py-3">
                                        <InvoiceStatusBadge invoice={inv} />
                                    </td>
                                    <td className="px-5 py-3">
                                        <InvoiceRowActions invoice={inv} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
