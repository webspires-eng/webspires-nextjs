const certifications = [
    'Google Partner',
    'Meta Business Partner',
    'Shopify Partner',
    'WordPress Expert',
    'GA4 Certified',
    'SEMrush / Ahrefs',
];

const trustItems = [
    { value: '500+', label: 'Projects delivered' },
    { value: 'UK-based', label: 'Team & support' },
    { value: '20+', label: 'Industries served' },
    { value: '98%', label: 'Client satisfaction' },
];

export default function TrustBar() {
    return (
        <section
            aria-label="Trust and credibility"
            className="bg-white border-b border-gray-100 py-10"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <p className="text-center text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                    Trusted by UK businesses · Certified across the platforms that matter
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {trustItems.map((t) => (
                        <div
                            key={t.label}
                            className="text-center rounded-2xl bg-[#faf9f7] border border-gray-100 px-4 py-5"
                        >
                            <p className="text-[24px] sm:text-[28px] font-extrabold text-primary leading-none">
                                {t.value}
                            </p>
                            <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium mt-1.5">
                                {t.label}
                            </p>
                        </div>
                    ))}
                </div>

                <ul
                    className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
                    aria-label="Certifications and partnerships"
                >
                    {certifications.map((c) => (
                        <li
                            key={c}
                            className="flex items-center gap-2 text-[13px] font-semibold text-gray-500"
                        >
                            <svg
                                className="h-4 w-4 text-green-500 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
