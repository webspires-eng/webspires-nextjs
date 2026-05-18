const industries = [
    { name: 'Local businesses', desc: 'Local SEO, Google Business Profile & lead generation.' },
    { name: 'Ecommerce brands', desc: 'Shopify, paid social, shopping ads & CRO.' },
    { name: 'B2B companies', desc: 'Demand generation, content & long sales-cycle nurture.' },
    { name: 'Startups', desc: 'Launch sites, growth experiments & rapid iteration.' },
    { name: 'Professional services', desc: 'Authority content, SEO & qualified enquiry generation.' },
    { name: 'Healthcare & clinics', desc: 'Local visibility, trust signals & compliant campaigns.' },
    { name: 'Real estate', desc: 'High-intent search, landing pages & lead capture.' },
    { name: 'Restaurants & hospitality', desc: 'Local search, bookings & social engagement.' },
];

export default function IndustrySolutions() {
    return (
        <section
            aria-labelledby="industry-heading"
            className="bg-white py-16 lg:py-20"
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                        Built around your business
                    </span>
                    <h2
                        id="industry-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight"
                    >
                        Digital Growth Solutions for Different Business Types
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {industries.map((ind) => (
                        <div
                            key={ind.name}
                            className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 hover:border-primary/30 transition-colors duration-200"
                        >
                            <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-2">
                                {ind.name}
                            </h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                {ind.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
