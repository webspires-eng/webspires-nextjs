const roles = [
    { name: 'SEO specialists', desc: 'Technical, on-page, content & local SEO.' },
    { name: 'Paid ads managers', desc: 'Google, Meta & retargeting campaigns.' },
    { name: 'Web designers', desc: 'Conversion-focused, on-brand UX/UI.' },
    { name: 'Developers', desc: 'Fast, scalable, SEO-ready builds.' },
    { name: 'Content strategists', desc: 'Topical authority & lead content.' },
    { name: 'CRM & automation experts', desc: 'Tracking, workflows & attribution.' },
];

const tools = [
    'Google Analytics 4',
    'Google Search Console',
    'Google Ads',
    'Meta Ads Manager',
    'Looker Studio',
    'WordPress',
    'Shopify',
    'HubSpot',
    'SEMrush / Ahrefs',
];

export default function TeamTools() {
    return (
        <section
            aria-labelledby="team-heading"
            className="bg-white py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                            The people behind the work
                        </span>
                        <h2
                            id="team-heading"
                            className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#1a1a2e] leading-tight mb-4"
                        >
                            A Data-Led Team Focused on Real Business Growth
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Not generalists guessing specialists in their
                            craft, working from the same evidence-based plan and
                            the tools that prove what’s working.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {roles.map((r) => (
                                <div
                                    key={r.name}
                                    className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5"
                                >
                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <svg
                                            className="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                cx="12"
                                                cy="8"
                                                r="3.4"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M5 20a7 7 0 0114 0"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-[14px] font-extrabold text-[#1a1a2e]">
                                        {r.name}
                                    </h3>
                                    <p className="text-[12.5px] text-gray-500 mt-0.5 leading-relaxed">
                                        {r.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                            Tools &amp; platforms we work in
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {tools.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-semibold text-gray-600"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
