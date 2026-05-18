import Link from 'next/link';
import { Search } from 'lucide-react';
import Cover from '@/components/blog/Cover';
import { formatDate } from '@/lib/format';

function Widget({ title, children }) {
    return (
        <section className="rounded-2xl border border-gray-100 bg-white p-6">
            <h2 className="mb-5 text-[16px] font-extrabold text-[#1a1a2e]">
                {title}
                <span className="mt-2 block h-1 w-10 rounded-full bg-primary" />
            </h2>
            {children}
        </section>
    );
}

export default function BlogSidebar({
    latestPosts = [],
    categories = [],
    tags = [],
}) {
    return (
        <aside className="space-y-6">
            {/* Search */}
            <form
                action="/blog"
                method="get"
                role="search"
                className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-2.5"
            >
                <input
                    type="search"
                    name="q"
                    aria-label="Search articles"
                    placeholder="Search…"
                    className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                />
                <button
                    type="submit"
                    aria-label="Search"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white hover:opacity-90"
                >
                    <Search size={16} />
                </button>
            </form>

            {/* Latest posts */}
            {latestPosts.length > 0 && (
                <Widget title="Latest Posts">
                    <ul className="space-y-5">
                        {latestPosts.map((p) => (
                            <li key={p.id} className="flex gap-3">
                                <Link
                                    href={`/blog/${p.slug}`}
                                    className="relative block h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100"
                                    aria-label={p.title}
                                >
                                    <Cover
                                        src={p.coverImage}
                                        alt={p.coverImageAlt || p.title}
                                        sizes="80px"
                                    />
                                </Link>
                                <div className="min-w-0">
                                    <span className="text-[11px] font-bold uppercase tracking-wide text-primary">
                                        {p.category}
                                    </span>
                                    <Link
                                        href={`/blog/${p.slug}`}
                                        className="mt-0.5 line-clamp-2 block text-[13.5px] font-bold leading-snug text-[#1a1a2e] hover:text-primary"
                                    >
                                        {p.title}
                                    </Link>
                                    <time
                                        dateTime={p.publishedAt || p.createdAt}
                                        className="text-[11px] text-gray-400"
                                    >
                                        {formatDate(
                                            p.publishedAt || p.createdAt
                                        )}
                                    </time>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Widget>
            )}

            {/* Categories */}
            {categories.length > 0 && (
                <Widget title="Categories">
                    <ul className="space-y-1">
                        {categories.map((c) => (
                            <li key={c.name}>
                                <Link
                                    href={`/blog?category=${encodeURIComponent(
                                        c.name
                                    )}`}
                                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-primary/[0.06] hover:text-primary"
                                >
                                    <span>{c.name}</span>
                                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#faf9f7] px-2 text-xs font-bold text-gray-500">
                                        {c.count}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Widget>
            )}

            {/* Tag cloud */}
            {tags.length > 0 && (
                <Widget title="Tag Cloud">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((t) => (
                            <Link
                                key={t.name}
                                href={`/blog?tag=${encodeURIComponent(t.name)}`}
                                className="rounded-full bg-[#faf9f7] px-3 py-1.5 text-[12px] font-semibold text-gray-600 transition-colors hover:bg-primary hover:text-white"
                            >
                                {t.name}
                            </Link>
                        ))}
                    </div>
                </Widget>
            )}

            {/* Brand CTA */}
            <section className="relative overflow-hidden rounded-2xl bg-[#1a1a2e] p-7 text-center">
                <div
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20"
                    style={{
                        background:
                            'radial-gradient(circle, #EE314F 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                />
                <p className="relative text-[17px] font-extrabold text-white">
                    Grow your business online
                </p>
                <p className="relative mt-2 text-[13px] leading-relaxed text-gray-400">
                    Free, no-obligation strategy call with the Webspires team.
                </p>
                <a
                    href="https://call.webspires.co.uk?utm_source=blogsidebar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                    Get a Free Proposal
                </a>
            </section>
        </aside>
    );
}
