const cards = [
    {
        title: 'SERP Analysis',
        desc: 'We review the top-ranking pages for your target keywords to understand search intent, content depth, structure and ranking patterns.',
    },
    {
        title: 'Competitor Gap Analysis',
        desc: 'We compare your site against competitors for keywords, backlinks, content, UX, speed, authority and conversion paths.',
    },
    {
        title: 'Keyword Mapping',
        desc: 'We map commercial, informational, local and branded keywords to the right pages so nothing competes with itself.',
    },
    {
        title: 'Technical Audit',
        desc: 'We check crawlability, indexation, Core Web Vitals, schema, page speed, internal links and site architecture.',
    },
    {
        title: 'Conversion Tracking',
        desc: 'We set up GA4, Search Console, call tracking, forms, CRM tracking and campaign reporting before spending a penny.',
    },
    {
        title: 'Growth Roadmap',
        desc: 'You get a prioritised roadmap based on business impact — not a random list of marketing tasks.',
    },
];

export default function GrowthMethod() {
    return (
        <section
            aria-labelledby="method-heading"
            className="bg-[#faf9f7] py-16 lg:py-24"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="max-w-[760px] mb-14">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                        The Webspires Growth Audit
                    </span>
                    <h2
                        id="method-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight mb-4"
                    >
                        We Start With Competitor Research, Search Data &amp;
                        Market Gaps
                    </h2>
                    <p className="text-gray-500 text-[16px] leading-relaxed">
                        Before we build campaigns, we study your market, your
                        competitors, your search demand, your content gaps, your
                        technical issues and your conversion journey — a 6-step
                        audit that turns guesswork into a plan.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cards.map((c, i) => (
                        <div
                            key={c.title}
                            className="rounded-2xl border border-gray-100 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-200"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-[15px] font-extrabold text-primary">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-[16px] font-extrabold text-[#1a1a2e] mb-2">
                                {c.title}
                            </h3>
                            <p className="text-[13.5px] text-gray-500 leading-relaxed">
                                {c.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Get My Free Growth Audit
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12h14M12 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
