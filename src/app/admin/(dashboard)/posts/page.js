import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { getAllPostsAdmin } from '@/lib/blog';
import PostRowActions from '@/components/admin/PostRowActions';
import DbErrorNotice from '@/components/admin/DbErrorNotice';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
    let posts = [];
    let dbError = false;
    try {
        posts = await getAllPostsAdmin();
    } catch {
        dbError = true;
    }

    return (
        <div>
            {dbError && <DbErrorNotice />}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">
                        All Posts
                    </h1>
                    <p className="text-sm text-slate-500">
                        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                    </p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                >
                    <PlusCircle size={18} /> New Post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                    <p className="text-slate-500">No posts yet.</p>
                    <Link
                        href="/admin/posts/new"
                        className="mt-3 inline-block text-sm font-bold text-primary hover:underline"
                    >
                        Write your first post
                    </Link>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-5 py-3">Title</th>
                                <th className="px-5 py-3">Category</th>
                                <th className="px-5 py-3">Status</th>
                                <th className="px-5 py-3">Views</th>
                                <th className="px-5 py-3">Updated</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {posts.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50">
                                    <td className="px-5 py-3">
                                        <Link
                                            href={`/admin/posts/${p.id}/edit`}
                                            className="font-semibold text-slate-800 hover:text-primary"
                                        >
                                            {p.title}
                                        </Link>
                                        {p.featured && (
                                            <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">
                                                Featured
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-5 py-3 text-slate-500">
                                        {p.category}
                                    </td>
                                    <td className="px-5 py-3">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                                p.status === 'published'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-amber-100 text-amber-700'
                                            }`}
                                        >
                                            {p.status === 'published'
                                                ? 'Published'
                                                : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-slate-500">
                                        {p.views}
                                    </td>
                                    <td className="px-5 py-3 text-slate-500">
                                        {new Date(
                                            p.updatedAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-5 py-3">
                                        <PostRowActions post={p} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
