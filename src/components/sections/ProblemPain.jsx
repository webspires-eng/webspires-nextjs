const pains = [
    {
        problem: 'Website traffic is low',
        solution: 'SEO + content strategy',
    },
    {
        problem: 'Ads spend but don’t convert',
        solution: 'PPC audit + landing page optimisation',
    },
    {
        problem: 'Site looks good but gets no leads',
        solution: 'CRO + better UX',
    },
    {
        problem: 'Social media has no direction',
        solution: 'Content calendar + paid amplification',
    },
    {
        problem: 'No idea what is actually working',
        solution: 'GA4, Search Console & CRM tracking',
    },
    {
        problem: 'Competitors rank everywhere',
        solution: 'Competitor gap analysis',
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
                        what we usually find — and how we fix it.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pains.map((p) => (
                        <div
                            key={p.problem}
                            className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <p className="text-[15px] font-bold text-[#1a1a2e]">
                                    {p.problem}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 pl-10">
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
                                <p className="text-[13.5px] font-semibold text-gray-600">
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
