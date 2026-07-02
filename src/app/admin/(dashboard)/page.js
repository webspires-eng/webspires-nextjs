import Link from 'next/link';
import { FileText, CheckCircle2, PencilLine, Eye, PlusCircle } from 'lucide-react';
import { getDashboardStats, getAllPostsAdmin } from '@/lib/blog';
import DbErrorNotice from '@/components/admin/DbErrorNotice';

export const dynamic = 'force-dynamic';

const cards = [
    { key: 'total', label: 'Total Posts', icon: FileText, color: 'text-slate-700 bg-slate-100' },
    { key: 'published', label: 'Published', icon: CheckCircle2, color: 'text-green-700 bg-green-100' },
    { key: 'drafts', label: 'Drafts', icon: PencilLine, color: 'text-amber-700 bg-amber-100' },
    { key: 'views', label: 'Total Views', icon: Eye, color: 'text-primary bg-primary/10' },
];

export default async function AdminDashboard() {
    let stats = { total: 0, published: 0, drafts: 0, views: 0 };
    let posts = [];
    let dbError = false;
    try {
        [stats, posts] = await Promise.all([
            getDashboardStats(),
            getAllPostsAdmin(),
        ]);
    } catch {
        dbError = true;
    }
    const recent = posts.slice(0, 6);

    return (
        <div>
            {dbError && <DbErrorNotice />}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">
                        Dashboard
                    </h1>
                    <p className="text-sm text-slate-500">
                        Overview of your blog content
                    </p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:opacity-90"
                >
                    <PlusCircle size={18} /> New Post
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {cards.map(({ key, label, icon: Icon, color }) => (
                    <div
                        key={key}
                        className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                        <div
                            className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
                        >
                            <Icon size={20} />
                        </div>
                        <p className="text-3xl font-extrabold text-slate-900">
                            {stats[key]}
                        </p>
                        <p className="text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900">
                        Recent posts
                    </h2>
                    <Link
                        href="/admin/posts"
                        className="text-sm font-semibold text-primary hover:underline"
                    >
                        View all →
                    </Link>
                </div>

                {recent.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
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
                                    <th className="px-5 py-3">Status</th>
                                    <th className="px-5 py-3">Updated</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {recent.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50">
                                        <td className="px-5 py-3">
                                            <Link
                                                href={`/admin/posts/${p.id}/edit`}
                                                className="font-semibold text-slate-800 hover:text-primary"
                                            >
                                                {p.title}
                                            </Link>
                                        </td>
                                        <td className="px-5 py-3">
                                            <StatusBadge status={p.status} />
                                        </td>
                                        <td className="px-5 py-3 text-slate-500">
                                            {new Date(
                                                p.updatedAt
                                            ).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const published = status === 'published';
    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                published
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
            }`}
        >
            {published ? 'Published' : 'Draft'}
        </span>
    );
}
