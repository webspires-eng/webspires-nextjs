import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { getLatestPosts } from '@/lib/blog';

const fallback = [
    {
        title: 'How to Know If Your Website Is Losing Leads',
        href: '/services/seo',
    },
    {
        title: 'SEO vs PPC: Which Should Your Business Start With?',
        href: '/services/google-ads-management',
    },
    {
        title: 'What Should Be Included in a Digital Marketing Audit?',
        href: '/services/web-design',
    },
];

export default async function LatestInsights() {
    let posts = [];
    try {
        posts = await getLatestPosts(3);
    } catch {
        posts = [];
    }

    return (
        <section
            aria-labelledby="insights-heading"
            className="bg-white py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                            Insights
                        </span>
                        <h2
                            id="insights-heading"
                            className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight"
                        >
                            Latest Digital Marketing Insights
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 self-start rounded-xl border border-gray-200 px-6 py-3 text-[13px] font-bold text-[#1a1a2e] transition-colors hover:border-primary hover:text-primary"
                    >
                        View all articles
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {posts.map((p) => (
                            <BlogCard key={p.id} post={p} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fallback.map((f) => (
                            <Link
                                key={f.title}
                                href={f.href}
                                className="group flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
                            >
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">
                                    Guide
                                </span>
                                <h3 className="text-[17px] font-extrabold text-[#1a1a2e] leading-snug mb-4 flex-1 group-hover:text-primary transition-colors">
                                    {f.title}
                                </h3>
                                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                                    Read more
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
