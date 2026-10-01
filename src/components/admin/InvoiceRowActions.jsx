import Link from 'next/link';
import { Eye, Pencil, CheckCircle2 } from 'lucide-react';
import { setInvoiceStatusAction } from '@/app/actions/invoices';
import DeleteInvoiceButton from '@/components/admin/DeleteInvoiceButton';

export default function InvoiceRowActions({ invoice, back = '/admin/invoices' }) {
    return (
        <div className="flex items-center justify-end gap-1.5">
            <Link
                href={`/admin/invoices/${invoice.id}`}
                title="View"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-primary"
            >
                <Eye size={16} />
            </Link>
            <Link
                href={`/admin/invoices/${invoice.id}/edit`}
                title="Edit"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-primary"
            >
                <Pencil size={16} />
            </Link>

            {invoice.status !== 'paid' ? (
                <form action={setInvoiceStatusAction}>
                    <input type="hidden" name="id" value={invoice.id} />
                    <input type="hidden" name="status" value="paid" />
                    <input type="hidden" name="back" value={back} />
                    <button
                        type="submit"
                        title="Mark as paid"
                        className="rounded-md p-2 text-slate-500 hover:bg-green-50 hover:text-green-600"
                    >
                        <CheckCircle2 size={16} />
                    </button>
                </form>
            ) : null}

            <DeleteInvoiceButton invoice={invoice} />
        </div>
    );
}
