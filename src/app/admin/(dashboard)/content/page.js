import Link from 'next/link';
import { Database, ChevronRight, Sparkles } from 'lucide-react';
import { CONTENT_TYPES, CONTENT_TYPE_KEYS } from '@/lib/contentSchemas';
import { getContentCounts, seedCount } from '@/lib/content';
import { seedAllContent } from '@/app/actions/content';

export const dynamic = 'force-dynamic';

export default async function ContentOverviewPage() {
    let counts = {};
    try {
        counts = await getContentCounts();
    } catch {
        counts = {};
    }

    const totalInDb = Object.values(counts).reduce((a, b) => a + (b || 0), 0);

    return (
        <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">
                        Site Content
                    </h1>
                    <p className="text-sm text-slate-500">
                        Manage the editable content behind your marketing pages.
                    </p>
                </div>
                {totalInDb === 0 && (
                    <form action={seedAllContent}>
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                        >
                            <Sparkles size={16} /> Seed all default content
                        </button>
                    </form>
                )}
            </div>

            {totalInDb === 0 && (
                <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                    Nothing in the database yet — your pages are currently served
                    from the built-in defaults. Click{' '}
                    <strong>Seed all default content</strong> to import them so
                    you can edit, add, and remove items.
                </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CONTENT_TYPE_KEYS.map((key) => {
                    const cfg = CONTENT_TYPES[key];
                    const count = counts[key] || 0;
                    return (
                        <Link
                            key={key}
                            href={`/admin/content/${key}`}
                            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-primary/40 hover:shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        {cfg.label}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {count > 0
                                            ? `${count} ${
                                                  count === 1 ? 'item' : 'items'
                                              }`
                                            : `${seedCount(key)} defaults available`}
                                    </p>
                                </div>
                            </div>
                            <ChevronRight
                                size={18}
                                className="text-slate-300 group-hover:text-primary"
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
