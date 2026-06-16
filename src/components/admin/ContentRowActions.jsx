'use client';

import Link from 'next/link';
import { Pencil, Trash2, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import { deleteContentItem, moveContentItem } from '@/app/actions/content';

export default function ContentRowActions({
    type,
    item,
    liveUrl,
    isFirst,
    isLast,
    title,
}) {
    return (
        <div className="flex items-center justify-end gap-1">
            {liveUrl && (
                <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live"
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                >
                    <Eye size={16} />
                </Link>
            )}

            <form action={moveContentItem}>
                <input type="hidden" name="type" value={type} />
                <input type="hidden" name="id" value={item.id} />
                <input type="hidden" name="direction" value="up" />
                <button
                    type="submit"
                    disabled={isFirst}
                    title="Move up"
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                >
                    <ArrowUp size={16} />
                </button>
            </form>

            <form action={moveContentItem}>
                <input type="hidden" name="type" value={type} />
                <input type="hidden" name="id" value={item.id} />
                <input type="hidden" name="direction" value="down" />
                <button
                    type="submit"
                    disabled={isLast}
                    title="Move down"
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                >
                    <ArrowDown size={16} />
                </button>
            </form>

            <Link
                href={`/admin/content/${type}/${item.id}/edit`}
                title="Edit"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-primary"
            >
                <Pencil size={16} />
            </Link>

            <form
                action={deleteContentItem}
                onSubmit={(e) => {
                    if (
                        !window.confirm(
                            `Delete “${title}”? This cannot be undone.`
                        )
                    ) {
                        e.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="type" value={type} />
                <input type="hidden" name="id" value={item.id} />
                <button
                    type="submit"
                    title="Delete"
                    className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
                >
                    <Trash2 size={16} />
                </button>
            </form>
        </div>
    );
}
