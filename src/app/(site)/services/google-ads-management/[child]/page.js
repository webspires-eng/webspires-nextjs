import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getContentItems, getContentItem } from '@/lib/content'

const ACCENT = '#f97316'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
    const items = await getContentItems('googleAdsChildren')
    return items.map((c) => ({ child: c.slug }))
}

export async function generateMetadata({ params }) {
    const { child } = await params
    const svc = await getContentItem('googleAdsChildren', child)
    if (!svc) return {}
    return {
        title: svc.metaTitle,
        description: svc.metaDescription,
        alternates: { canonical: `https://webspires.co.uk/services/google-ads-management/${svc.slug}/` },
        openGraph: {
            title: svc.metaTitle,
            description: svc.metaDescription,
            url: `https://webspires.co.uk/services/google-ads-management/${svc.slug}/`,
        },
    }
}

export default async function GoogleAdsChildPage({ params }) {
    const { child } = await params
    const items = await getContentItems('googleAdsChildren')
    const svc = items.find((c) => c.slug === child)
    if (!svc) notFound()

    const siblings = items.filter((c) => c.slug !== svc.slug)

    const included = svc.included || []
    const faqs = svc.faqs || []

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
            />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#1a1a2e] pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }} aria-hidden="true" />
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li><Link href="/services/google-ads-management" className="hover:text-primary transition-colors">Google Ads Management</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li className="text-gray-300 font-medium">{svc.name}</li>
                        </ol>
                    </nav>
                    <div className="max-w-[760px]">
                        <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                            style={{ color: ACCENT, borderColor: `${ACCENT}44`, background: `${ACCENT}14` }}>
                            {svc.category}
                        </span>
                        <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-white leading-[1.06] mb-5">
                            {svc.heroHeading}
                        </h1>
                        <p className="text-gray-400 text-[17px] leading-relaxed mb-8 max-w-[620px]">
                            {svc.heroSub}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://call.webspires.co.uk?utm_source=googleadschild"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                                Get a Free Proposal
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="tel:+441615241569"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200">
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-14 h-1 w-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} aria-hidden="true" />
            </section>

            {/* ── INTRO ── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <h2 className="text-[24px] sm:text-[30px] font-extrabold text-[#1a1a2e] leading-tight mb-5">
                        Why {svc.name} Matters
                    </h2>
                    <p className="text-gray-500 text-[16px] leading-relaxed">{svc.intro}</p>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="bg-[#faf9f7] py-16 lg:py-24">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="max-w-[640px] mb-12">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                            style={{ color: ACCENT, background: `${ACCENT}14` }}>
                            What&apos;s Included
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e] leading-tight">
                            How We Deliver {svc.name}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {included.map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${ACCENT}18` }}>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={ACCENT}
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-1.5">{f.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                            style={{ color: ACCENT, background: `${ACCENT}14` }}>
                            FAQ
                        </span>
                        <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e]">
                            {svc.name} Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[#faf9f7] rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-2 flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold mt-0.5"
                                        style={{ background: ACCENT }}>
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

            {/* ── SIBLING SERVICES ── */}
            <section className="bg-[#faf9f7] py-16 lg:py-20 border-t border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[22px] font-extrabold text-[#1a1a2e]">More Google Ads Services</h2>
                        <Link href="/services/google-ads-management" className="text-[13px] font-bold text-primary hover:underline">
                            Google Ads Management →
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/services/google-ads-management/${s.slug}`}
                                className="inline-flex items-center gap-2 bg-white hover:bg-primary hover:text-white text-[#1a1a2e] font-bold text-[14px] px-5 py-3 rounded-xl border border-gray-100 transition-all duration-200 no-underline">
                                {s.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="bg-[#1a1a2e] py-16 lg:py-20 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }} aria-hidden="true" />
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
                    <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold text-white leading-tight mb-4">
                        Improve Your Google Ads Results
                    </h2>
                    <p className="text-gray-400 text-[16px] mb-8 max-w-[520px] mx-auto leading-relaxed">
                        Book a free strategy call. We&apos;ll review your account and show you the
                        fastest opportunities no obligation.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://call.webspires.co.uk?utm_source=googleadschildcta"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                            Book a Free Call
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
