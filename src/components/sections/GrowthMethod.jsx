const steps = [
    {
        title: 'Website Audit',
        desc: 'Crawlability, indexation, Core Web Vitals, speed, schema, internal links and site architecture — every technical issue holding you back.',
    },
    {
        title: 'Competitor Research',
        desc: 'We benchmark you against the businesses ranking and converting now — content, backlinks, UX, authority and conversion paths.',
    },
    {
        title: 'Keyword Gap Analysis',
        desc: 'We map commercial, informational, local and branded keywords to the right pages so nothing competes with itself.',
    },
    {
        title: 'Tracking Review',
        desc: 'GA4, Search Console, call tracking, forms and CRM tracking set up correctly — so every result is measurable, not guessed.',
    },
    {
        title: 'Conversion Analysis',
        desc: 'We study the journey from click to enquiry and find the leaks losing you leads before you spend more on traffic.',
    },
    {
        title: 'Growth Roadmap',
        desc: 'A prioritised plan ordered by business impact — what to do first, why, and the result it should drive.',
    },
];

export default function GrowthMethod() {
    return (
        <section
            aria-labelledby="method-heading"
            className="relative overflow-hidden bg-[#1a1a2e] py-16 lg:py-24"
        >
            <div
                className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-10"
                style={{
                    background:
                        'radial-gradient(circle, #EE314F 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />
            <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Sticky framework intro */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5">
                                Our signature framework
                            </span>
                            <h2
                                id="method-heading"
                                className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] text-white mb-5"
                            >
                                The Webspires{' '}
                                <span className="text-primary">
                                    Growth Audit
                                </span>{' '}
                                Framework
                            </h2>
                            <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-8">
                                Before we touch a campaign, we run a structured
                                6-stage audit of your market, competitors,
                                search demand, technical health and conversion
                                journey. You get a plan built on evidence — not
                                a guess.
                            </p>
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

                    {/* Stepped methodology */}
                    <ol className="lg:col-span-7 relative space-y-0">
                        {/* Connector line */}
                        <span
                            className="absolute left-[23px] top-3 bottom-3 w-px bg-white/15"
                            aria-hidden="true"
                        />
                        {steps.map((s, i) => (
                            <li
                                key={s.title}
                                className="relative flex gap-6 pb-9 last:pb-0"
                            >
                                <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[16px] font-extrabold text-white ring-8 ring-[#1a1a2e]">
                                    {i + 1}
                                </span>
                                <div className="pt-1">
                                    <h3 className="text-[18px] font-extrabold text-white mb-1.5">
                                        {s.title}
                                    </h3>
                                    <p className="text-[14px] leading-relaxed text-gray-400">
                                        {s.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
