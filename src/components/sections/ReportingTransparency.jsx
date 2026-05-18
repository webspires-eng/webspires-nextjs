const features = [
    {
        title: 'GA4 tracking',
        why: 'See real traffic, conversions and user behaviour — not vanity metrics.',
    },
    {
        title: 'Google Search Console',
        why: 'Keyword visibility, clicks, impressions and indexing issues.',
    },
    {
        title: 'PPC dashboards',
        why: 'Spend, conversions, cost per lead and ROAS at a glance.',
    },
    {
        title: 'CRM tracking',
        why: 'Which leads turn into real opportunities and revenue.',
    },
    {
        title: 'Monthly strategy call',
        why: 'What happened, why it happened and what comes next.',
    },
    {
        title: 'Action roadmap',
        why: 'Completed tasks and upcoming priorities — always visible.',
    },
];

export default function ReportingTransparency() {
    return (
        <section
            aria-labelledby="reporting-heading"
            className="bg-[#faf9f7] py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                            No guesswork
                        </span>
                        <h2
                            id="reporting-heading"
                            className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#1a1a2e] leading-tight mb-4"
                        >
                            Clear Reporting, No Hidden Dashboards
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Many clients fear agencies hiding behind vague
                            reports. You’ll always know what we did, what it
                            achieved and what’s next.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="rounded-2xl border border-gray-100 bg-white p-5"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <svg
                                        className="h-5 w-5 text-primary flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 3v18h18M7 14l4-4 3 3 5-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h3 className="text-[15px] font-extrabold text-[#1a1a2e]">
                                        {f.title}
                                    </h3>
                                </div>
                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    {f.why}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
