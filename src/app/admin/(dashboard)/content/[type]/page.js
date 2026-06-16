import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlusCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { CONTENT_TYPES, contentItemTitle } from '@/lib/contentSchemas';
import { getContentItemsAdmin, seedCount } from '@/lib/content';
import { seedContentType } from '@/app/actions/content';
import ContentRowActions from '@/components/admin/ContentRowActions';

export const dynamic = 'force-dynamic';

export default async function ContentTypeListPage({ params }) {
    const { type } = await params;
    const cfg = CONTENT_TYPES[type];
    if (!cfg) notFound();

    let items = [];
    try {
        items = await getContentItemsAdmin(type);
    } catch {
        items = [];
    }

    return (
        <div>
            <Link
                href="/admin/content"
                className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary"
            >
                <ArrowLeft size={15} /> All content
            </Link>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">
                        {cfg.label}
                    </h1>
                    <p className="text-sm text-slate-500">
                        {items.length}{' '}
                        {items.length === 1 ? 'item' : 'items'}
                    </p>
                </div>
                <Link
                    href={`/admin/content/${type}/new`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                >
                    <PlusCircle size={18} /> New {cfg.singular}
                </Link>
            </div>

            {items.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                    <p className="text-slate-500">
                        No {cfg.label.toLowerCase()} in the database yet.
                    </p>
                    {seedCount(type) > 0 && (
                        <form action={seedContentType} className="mt-4">
                            <input type="hidden" name="type" value={type} />
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                            >
                                <Sparkles size={16} /> Seed {seedCount(type)}{' '}
                                default {cfg.label.toLowerCase()}
                            </button>
                        </form>
                    )}
                    <p className="mt-4 text-sm text-slate-400">
                        or{' '}
                        <Link
                            href={`/admin/content/${type}/new`}
                            className="font-bold text-primary hover:underline"
                        >
                            add the first one manually
                        </Link>
                        .
                    </p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-5 py-3">Title</th>
                                <th className="px-5 py-3">Slug</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {items.map((item, i) => {
                                const title =
                                    contentItemTitle(type, item.data) ||
                                    item.slug ||
                                    'Untitled';
                                const liveUrl = cfg.basePath
                                    ? `${cfg.basePath}/${item.slug}`
                                    : cfg.indexPath || null;
                                return (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-slate-50"
                                    >
                                        <td className="px-5 py-3">
                                            <Link
                                                href={`/admin/content/${type}/${item.id}/edit`}
                                                className="font-semibold text-slate-800 hover:text-primary"
                                            >
                                                {title}
                                            </Link>
                                        </td>
                                        <td className="px-5 py-3 font-mono text-xs text-slate-500">
                                            {item.slug}
                                        </td>
                                        <td className="px-5 py-3">
                                            <ContentRowActions
                                                type={type}
                                                item={item}
                                                liveUrl={liveUrl}
                                                isFirst={i === 0}
                                                isLast={i === items.length - 1}
                                                title={title}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
