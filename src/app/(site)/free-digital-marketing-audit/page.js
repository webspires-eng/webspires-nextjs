import Link from 'next/link'

export const metadata = {
    title: 'Free Digital Marketing Audit for UK Businesses | Webspires',
    description: 'Get a free digital marketing audit. Webspires reviews your SEO, Google Ads, website, tracking, and competitors, then gives you a prioritised growth plan.',
    alternates: { canonical: 'https://webspires.co.uk/free-digital-marketing-audit/' },
    openGraph: {
        title: 'Free Digital Marketing Audit | Webspires',
        description: 'A free, no-obligation review of your SEO, ads, website, and tracking — with a clear, prioritised action plan.',
        url: 'https://webspires.co.uk/free-digital-marketing-audit/',
    },
}

const audited = [
    { title: 'SEO & Visibility', desc: 'Rankings, indexation, technical issues, and the gaps competitors are exploiting.' },
    { title: 'Google Ads', desc: 'Wasted spend, account structure, tracking accuracy, and quick efficiency wins.' },
    { title: 'Website & Conversion', desc: 'Speed, mobile experience, and where visitors drop off before enquiring.' },
    { title: 'Tracking & Analytics', desc: 'Whether your data is reliable enough to make good marketing decisions.' },
    { title: 'Competitors', desc: 'What better-performing competitors do that you currently do not.' },
    { title: 'Channel Mix', desc: 'Where your budget is best spent next for the strongest return.' },
]

const receive = [
    { title: 'Scorecard', desc: 'A clear snapshot of how your digital marketing performs right now.' },
    { title: 'Opportunity List', desc: 'The specific issues and missed opportunities, ranked by impact.' },
    { title: 'Competitor Insight', desc: 'How you compare and where the realistic gains are.' },
    { title: 'Prioritised Roadmap', desc: 'What to fix first, next, and later — usable with us or without us.' },
]

const framework = [
    { step: '01', title: 'Visibility', desc: 'Are the right people finding you in search and ads?' },
    { step: '02', title: 'Traffic Quality', desc: 'Are you attracting visitors who can actually become customers?' },
    { step: '03', title: 'Conversion', desc: 'Does your site turn that attention into enquiries and sales?' },
    { step: '04', title: 'Tracking', desc: 'Can you trust your data to know what is really working?' },
    { step: '05', title: 'Competitors', desc: 'Where are rivals winning, and how do you close the gap?' },
]

const faqs = [
    { q: 'Is the audit really free?', a: 'Yes. It is a genuine, no-obligation review. There is no charge and no requirement to work with us afterwards.' },
    { q: 'How long does it take?', a: 'We usually deliver findings within a few working days of getting access to the relevant accounts.' },
    { q: 'What do you need from me?', a: 'A short call to understand your goals, plus read-only access to analytics and ad accounts where relevant.' },
    { q: 'What happens after the audit?', a: 'You get a clear action plan. You can implement it yourself, or ask us to. Either is fine.' },
    { q: 'Who is it best for?', a: 'Businesses already spending on marketing or a website but unsure whether it is delivering the results it should.' },
]

export default function FreeAuditPage() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    }

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#1a1a2e] pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #EE314F 0%, transparent 70%)' }} aria-hidden="true" />
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-[13px] text-gray-500">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li className="text-gray-300 font-medium">Free Digital Marketing Audit</li>
                        </ol>
                    </nav>
                    <div className="max-w-[760px]">
                        <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                            No Obligation • UK-Based Team
                        </span>
                        <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-extrabold text-white leading-[1.05] mb-5">
                            Free Digital Marketing Audit{' '}
                            <span className="text-primary">for UK Businesses</span>
                        </h1>
                        <p className="text-gray-400 text-[17px] leading-relaxed mb-8 max-w-[620px]">
                            Find out exactly where your marketing budget is being wasted — and what
                            to do about it. We review your SEO, ads, website, and tracking, then give
                            you a clear, prioritised plan.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://call.webspires.co.uk?utm_source=freeaudit"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                                Request My Free Audit
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="tel:+441615241569"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] px-8 py-4 rounded-xl border border-white/20 transition-all duration-200">
                                +44 161 524 1569
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-14 h-1 w-full" style={{ background: 'linear-gradient(90deg, #EE314F, transparent)' }} aria-hidden="true" />
            </section>

            {/* WHAT WE AUDIT */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="max-w-[640px] mb-12">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            What We Audit
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e] leading-tight">
                            A Full Review of Your Digital Marketing
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {audited.map((a, i) => (
                            <div key={i} className="bg-[#faf9f7] rounded-2xl p-6 border border-gray-100">
                                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-1.5">{a.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT YOU RECEIVE */}
            <section className="bg-[#faf9f7] py-16 lg:py-24">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="max-w-[640px] mb-12">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            What You Receive
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e] leading-tight">
                            Clear Findings You Can Act On
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {receive.map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <p className="text-[12px] font-extrabold uppercase tracking-widest mb-2 text-primary">0{i + 1}</p>
                                <h3 className="text-[16px] font-extrabold text-[#1a1a2e] mb-2">{r.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUDIT FRAMEWORK */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center max-w-[620px] mx-auto mb-14">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            Our Framework
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e] leading-tight">
                            How We Assess Your Growth
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {framework.map((f, i) => (
                            <div key={i} className="bg-[#faf9f7] rounded-2xl p-6 border border-gray-100">
                                <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center font-extrabold text-white text-[14px] mb-4">
                                    {f.step}
                                </div>
                                <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-1.5">{f.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR */}
            <section className="bg-[#1a1a2e] py-16 lg:py-20">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
                    <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                        Who It&apos;s For
                    </span>
                    <h2 className="text-[24px] sm:text-[32px] font-extrabold text-white leading-snug mb-5">
                        Best for Businesses Spending on Marketing But Unsure It&apos;s Working
                    </h2>
                    <p className="text-gray-400 text-[16px] leading-relaxed">
                        If you are investing in SEO, ads, or a website but cannot clearly see the
                        return — the audit shows you what is working, what is wasted, and what to
                        prioritise next. Honest answers, no jargon, no obligation.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            FAQ
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e]">
                            Free Audit Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[#faf9f7] rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-2 flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[11px] font-extrabold mt-0.5">
                                        {i + 1}
                                    </span>
                                    {faq.q}
                                </h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="bg-[#1a1a2e] py-16 lg:py-20 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #EE314F 0%, transparent 70%)' }} aria-hidden="true" />
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
                    <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold text-white leading-tight mb-4">
                        Get Your Free Digital Marketing Audit
                    </h2>
                    <p className="text-gray-400 text-[16px] mb-8 max-w-[520px] mx-auto leading-relaxed">
                        No cost, no obligation. Just an honest review and a clear plan for growth.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://call.webspires.co.uk?utm_source=freeauditcta"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                            Request My Free Audit
                        </a>
                        <a href="tel:+441615241569"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] px-8 py-4 rounded-xl border border-white/20 transition-all duration-200">
                            +44 161 524 1569
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
