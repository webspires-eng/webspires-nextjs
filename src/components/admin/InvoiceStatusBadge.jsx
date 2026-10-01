import { displayStatus, STATUS_LABELS } from '@/lib/invoiceSchema';

const STYLES = {
    draft: 'bg-slate-100 text-slate-600',
    unpaid: 'bg-amber-100 text-amber-700',
    overdue: 'bg-red-100 text-red-700',
    paid: 'bg-green-100 text-green-700',
    cancelled: 'bg-slate-100 text-slate-400 line-through',
};

/** Admin status pill. Unpaid + past due renders as "Overdue". */
export default function InvoiceStatusBadge({ invoice }) {
    const s = displayStatus(invoice);
    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${STYLES[s]}`}
        >
            {STATUS_LABELS[s]}
        </span>
    );
}
