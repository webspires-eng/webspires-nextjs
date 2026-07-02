import { AlertTriangle } from 'lucide-react';

/**
 * Shown on admin pages when a database read fails (e.g. Supabase env
 * vars are missing in the hosting environment). Turns a raw 500 into a
 * clear, actionable message.
 */
export default function DbErrorNotice() {
    return (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-500" />
            <div>
                <p className="font-bold">Can’t reach the database</p>
                <p className="mt-1 leading-relaxed text-amber-800">
                    The app couldn’t connect to Supabase. If you just deployed,
                    set{' '}
                    <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">
                        SUPABASE_URL
                    </code>{' '}
                    and{' '}
                    <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">
                        SUPABASE_SERVICE_ROLE_KEY
                    </code>{' '}
                    in your hosting environment variables (Vercel → Settings →
                    Environment Variables), then redeploy. Locally, check{' '}
                    <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">
                        .env.local
                    </code>
                    .
                </p>
            </div>
        </div>
    );
}
