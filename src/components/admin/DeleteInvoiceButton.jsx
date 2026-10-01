'use client';

import { Trash2 } from 'lucide-react';
import { deleteInvoiceAction } from '@/app/actions/invoices';

/** Delete form with a confirm prompt. `label` renders a text button. */
export default function DeleteInvoiceButton({ invoice, label = '' }) {
    return (
        <form
            action={deleteInvoiceAction}
            onSubmit={(e) => {
                if (
                    !window.confirm(
                        `Delete invoice ${invoice.number}? Its share link will stop working. This cannot be undone.`
                    )
                ) {
                    e.preventDefault();
                }
            }}
        >
            <input type="hidden" name="id" value={invoice.id} />
            <button
                type="submit"
                title="Delete"
                className={
                    label
                        ? 'inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50'
                        : 'rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-600'
                }
            >
                <Trash2 size={label ? 15 : 16} />
                {label}
            </button>
        </form>
    );
}
