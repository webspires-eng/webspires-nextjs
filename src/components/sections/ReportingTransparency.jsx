const features = [
    {
        title: 'GA4 tracking',
        why: 'Real traffic, conversions and user behaviour not vanity metrics.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 20V10M12 20V4M18 20v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Google Search Console',
        why: 'Keyword visibility, clicks, impressions and indexing issues.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'PPC dashboards',
        why: 'Spend, conversions, cost per lead and ROAS at a glance.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 19V9M19 19V5M12 19v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'CRM tracking',
        why: 'Which leads turn into real opportunities and revenue.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
                <path d="M3.5 19a5.5 5.5 0 0111 0M16 7a3 3 0 010 6M15.5 13.5a5.5 5.5 0 014.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Monthly strategy call',
        why: 'What happened, why it happened and what comes next.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15.5 13.5l-2 2a14 14 0 01-5-5l2-2-2.5-5L4 4C4 13 11 20 20 20l.5-4-4-2.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Action roadmap',
        why: 'Completed tasks and upcoming priorities always visible.',
        icon: (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6h12M9 12h12M9 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 5.5l1.3 1.3L8 4M4 11.5l1.3 1.3L8 10M4 17.5l1.3 1.3L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
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
                                <div className="flex items-center gap-2.5 mb-2">
                                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        {f.icon}
                                    </span>
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
