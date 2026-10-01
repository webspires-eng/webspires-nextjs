import { AlertTriangle } from 'lucide-react';

/**
 * Shown while the `invoices.business` column is missing. Until it exists,
 * existing invoices follow Invoice Settings instead of keeping their own copy.
 */
export default function InvoicesMigrationNotice() {
    return (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-900">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-red-500" />
            <div className="min-w-0">
                <p className="font-bold">
                    Action needed: existing invoices are still following Invoice Settings
                </p>
                <p className="mt-1 leading-relaxed text-red-800">
                    Open Supabase → <strong>SQL Editor</strong> → New query, paste
                    this, click <strong>Run</strong>, then refresh:
                </p>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-white px-3 py-2 font-mono text-xs text-slate-800 ring-1 ring-red-200">
                    {`alter table public.invoices\n  add column if not exists business jsonb not null default '{}'::jsonb;`}
                </pre>
            </div>
        </div>
    );
}
