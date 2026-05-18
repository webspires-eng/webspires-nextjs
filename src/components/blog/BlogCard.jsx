import Link from 'next/link';
import Cover from '@/components/blog/Cover';
import { formatDate } from '@/lib/format';

export default function BlogCard({ post, priority = false }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
            <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/9] overflow-hidden bg-slate-100"
                aria-label={post.title}
            >
                <Cover
                    src={post.coverImage}
                    alt={post.coverImageAlt || post.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={priority}
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                        {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                        {post.readingTime} min read
                    </span>
                </div>

                <h2 className="mb-2 text-[18px] font-extrabold leading-snug text-[#1a1a2e]">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-primary"
                    >
                        {post.title}
                    </Link>
                </h2>

                <p className="mb-5 line-clamp-3 flex-1 text-[14px] leading-relaxed text-gray-500">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">
                        {post.author}
                    </span>
                    <time dateTime={post.publishedAt || post.createdAt}>
                        {formatDate(post.publishedAt || post.createdAt)}
                    </time>
                </div>
            </div>
        </article>
    );
}
