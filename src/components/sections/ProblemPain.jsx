const pains = [
    {
        problem: 'Website traffic is low',
        desc: 'Great content, but it never reaches the right people.',
        solution: 'SEO + content strategy',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 5v14h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 9l4 4 3-3 5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 16v-3h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        problem: 'Ads spend but don’t convert',
        desc: 'Budget burns daily with little to show for the spend.',
        solution: 'PPC audit + landing page optimisation',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        problem: 'Site looks good but gets no leads',
        desc: 'Visitors land, look around, then leave without acting.',
        solution: 'CRO + better UX',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        problem: 'Social media has no direction',
        desc: 'Posting often, yet it drives no traffic or enquiries.',
        solution: 'Content calendar + paid amplification',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M15 9l-2 4-4 2 2-4 4-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        problem: 'No idea what is actually working',
        desc: 'Numbers everywhere, but no clear signal on what works.',
        solution: 'GA4, Search Console & CRM tracking',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M9.5 9a2.5 2.5 0 015 .3c0 1.7-2.5 2-2.5 3.7M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        problem: 'Competitors rank everywhere',
        desc: 'Rivals own the rankings you should be winning.',
        solution: 'Competitor gap analysis',
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 21h10M12 17v4M6 4h12v4a6 6 0 01-12 0V4zM6 6H3v2a3 3 0 003 3M18 6h3v2a3 3 0 01-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function ProblemPain() {
    return (
        <section
            aria-labelledby="problem-heading"
            className="bg-white py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="max-w-[720px] mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                        Sound familiar?
                    </span>
                    <h2
                        id="problem-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight mb-4"
                    >
                        Is Your Website Getting Traffic But Not Enough Leads?
                    </h2>
                    <p className="text-gray-500 text-[16px] leading-relaxed">
                        Most businesses don’t struggle online because they lack
                        a website. They struggle because their website, SEO,
                        ads, content and tracking aren’t working together. Here’s
                        what we usually find and how we fix it.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pains.map((p) => (
                        <div
                            key={p.problem}
                            className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 transition-colors duration-200 hover:border-primary/30"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                    {p.icon}
                                </span>
                                <p className="text-[15px] font-bold text-[#1a1a2e] pt-1.5">
                                    {p.problem}
                                </p>
                            </div>
                            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                                {p.desc}
                            </p>
                            <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                                <svg
                                    className="h-4 w-4 text-primary flex-shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12h14M13 6l6 6-6 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-[13.5px] font-semibold text-gray-700">
                                    {p.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
