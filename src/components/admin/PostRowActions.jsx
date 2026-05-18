'use client';

import Link from 'next/link';
import { Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import { deletePost, togglePublish } from '@/app/actions/posts';

export default function PostRowActions({ post }) {
    const published = post.status === 'published';

    return (
        <div className="flex items-center justify-end gap-1.5">
            {published && (
                <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live"
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                >
                    <Eye size={16} />
                </Link>
            )}

            <Link
                href={`/admin/posts/${post.id}/edit`}
                title="Edit"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-primary"
            >
                <Pencil size={16} />
            </Link>

            <form action={togglePublish}>
                <input type="hidden" name="id" value={post.id} />
                <button
                    type="submit"
                    title={published ? 'Unpublish' : 'Publish'}
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-amber-600"
                >
                    {published ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </form>

            <form
                action={deletePost}
                onSubmit={(e) => {
                    if (
                        !window.confirm(
                            `Delete “${post.title}”? This cannot be undone.`
                        )
                    ) {
                        e.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="id" value={post.id} />
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
