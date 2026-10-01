import { Database } from 'lucide-react';

/** Shown when the `invoices` table hasn't been created in Supabase yet. */
export default function InvoicesSetupNotice() {
    return (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <Database size={20} className="mt-0.5 shrink-0 text-amber-500" />
            <div>
                <p className="font-bold">One-time setup: create the invoices table</p>
                <p className="mt-1 leading-relaxed text-amber-800">
                    Open the Supabase dashboard → <strong>SQL Editor</strong>, paste
                    the contents of{' '}
                    <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">
                        supabase/invoices.sql
                    </code>{' '}
                    and click <strong>Run</strong>. Then refresh this page.
                </p>
            </div>
        </div>
    );
}
