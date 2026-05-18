const items = [
    {
        title: 'Strategy Roadmap',
        copy: 'A clear monthly plan based on your business goals, competitors and search demand.',
        icon: 'M9 3h6M12 3v4M5 21h14a1 1 0 001-1V9a1 1 0 00-1-1H5a1 1 0 00-1 1v11a1 1 0 001 1zM8 13h8M8 17h5',
    },
    {
        title: 'SEO & Content Plan',
        copy: 'Keyword mapping, service-page improvements, blog strategy and technical recommendations.',
        icon: 'M4 6h16M4 12h10M4 18h7M16 14l5 5M18.5 14a3.5 3.5 0 100 7 3.5 3.5 0 000-7z',
    },
    {
        title: 'Paid Ads Setup',
        copy: 'Google Ads, Meta Ads, retargeting, conversion tracking and landing-page optimisation.',
        icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 100 8 4 4 0 000-8z',
    },
    {
        title: 'Website Improvements',
        copy: 'UX, speed, mobile, forms, CTAs and conversion-focused page updates.',
        icon: 'M3 5h18v12H3zM3 9h18M8 21h8M12 17v4',
    },
    {
        title: 'Tracking Setup',
        copy: 'GA4, Search Console, ad tracking, CRM tracking and lead-source attribution.',
        icon: 'M5 19V9M12 19V5M19 19v-7M3 21h18',
    },
    {
        title: 'Monthly Reporting',
        copy: 'Clear reporting showing what was done, what improved and what happens next.',
        icon: 'M7 4h10a1 1 0 011 1v15l-6-3-6 3V5a1 1 0 011-1zM9 9h6M9 12h4',
    },
];

export default function WhatYouGet() {
    return (
        <section
            aria-labelledby="deliverables-heading"
            className="bg-white py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                        Clear deliverables
                    </span>
                    <h2
                        id="deliverables-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight"
                    >
                        What You Get With Our Digital Marketing Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((it) => (
                        <div
                            key={it.title}
                            className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <svg
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d={it.icon}
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-[17px] font-extrabold text-[#1a1a2e] mb-2">
                                {it.title}
                            </h3>
                            <p className="text-[14px] text-gray-500 leading-relaxed">
                                {it.copy}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
