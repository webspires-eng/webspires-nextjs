import Link from 'next/link';

const results = [
    {
        metric: '+180%',
        title: 'Organic traffic',
        detail: 'Local service business · SEO + content · 6 months',
    },
    {
        metric: '3.7x',
        title: 'Return on ad spend',
        detail: 'Ecommerce brand · Google & Meta Ads · 4 months',
    },
    {
        metric: '+42%',
        title: 'Conversion rate',
        detail: 'B2B website · web design + CRO · 3 months',
    },
    {
        metric: '120+',
        title: 'Qualified leads',
        detail: 'Professional services · SEO + PPC · 6 months',
    },
];

export default function ResultsSnapshot() {
    return (
        <section
            aria-labelledby="results-heading"
            className="bg-[#1a1a2e] py-16 lg:py-20 relative overflow-hidden"
        >
            <div
                className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
                style={{
                    background:
                        'radial-gradient(circle, #EE314F 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/15 px-4 py-1.5 rounded-full mb-4">
                        Proof, not just activity
                    </span>
                    <h2
                        id="results-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-white leading-tight"
                    >
                        Real Growth Results, Not Just Marketing Activity
                    </h2>
                    <p className="text-gray-400 text-[15px] mt-4 max-w-[560px] mx-auto">
                        Representative outcomes from recent engagements. Every
                        number is tied to a service, an industry and a
                        timeframe.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {results.map((r) => (
                        <div
                            key={r.title}
                            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
                        >
                            <p className="text-[34px] font-extrabold text-primary leading-none mb-3">
                                {r.metric}
                            </p>
                            <p className="text-[15px] font-bold text-white mb-2">
                                {r.title}
                            </p>
                            <p className="text-[12.5px] text-gray-400 leading-relaxed mb-4">
                                {r.detail}
                            </p>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary hover:gap-2.5 transition-all"
                            >
                                View case study
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
