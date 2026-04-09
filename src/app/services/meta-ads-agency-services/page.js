import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Meta Ads Agency Services UK | Webspires',
    description: 'If you want a powerful platform to engage with the targeted audience, Meta ads are the solution.',
    alternates: { canonical: 'https://webspires.co.uk/meta-ads-agency-services/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function MetaAdsAgencyPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#1a1a2e] pt-28 pb-20 lg:pt-32 lg:pb-32">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, ${pageColor} 0%, transparent 70%)` }} aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
                    style={{ background: `radial-gradient(circle, ${pageColor} 0%, transparent 70%)` }} aria-hidden="true" />

                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-[13px] text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li className="text-gray-200 font-medium">Meta Ads Agency</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Meta Ads Agency
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Meta Ads <span style={{ color: pageColor }}>Agency</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                If you want a powerful platform to engage with the targeted audience, Meta ads are the solution. In the digitally connected world, Meta Ads Agency creates an impactful ad campaign on platforms such as Facebook and Instagram. Webspires is a trusted Meta advertising agency in the UK. We provide customized solutions according to brands' needs for business growth.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=metaads"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    Book Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="tel:+441615241569"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5">
                                    Call Us Now
                                </a>
                            </div>
                        </div>

                        {/* Visual Right Side */}
                        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px]">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden glassmorphism border border-white/10 p-8 flex flex-col justify-center gap-4 shadow-2xl relative bg-white/[0.03] backdrop-blur-md">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <UsersIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <LayersIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Dominate the Timeline</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We specialize in scroll-stopping ad creatives and data-driven targeting that puts your brand exactly where your ideal customers hang out online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── META ADS DRIVING RESULTS ── */}
            <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Meta Ads that drive new customers at a profitable cost
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            We’re a Facebook (Meta) ad agency in London with 10 years’ experience in Facebook advertising from the early ad product days to today’s post-iOS14 era. By the way, we don’t boost posts over here!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <TrendingUpIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">1. Drive sales, leads & downloads</h4>
                            <p className="text-[15px] text-gray-500">Having worked with the Facebook advertising algorithm for the last 6+ years, we have proven experience in driving ROI-positive sales, leads and downloads at scale.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <TargetIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">2. Increase ROAS & lower acquisition costs (CPA)</h4>
                            <p className="text-[15px] text-gray-500">By implementing effective strategy and creating engaging web pages, we help brands increase ROAS and lower existing customer acquisition costs.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">3. Facebook ads that scale profitably</h4>
                            <p className="text-[15px] text-gray-500">Having spent millions on Facebook Ads, we are equipped with the proven strategies required to scale profitably without ad fatigue.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-1">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <ImageIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">4. Ad creatives that deliver ROI</h4>
                            <p className="text-[15px] text-gray-500">We create scroll-stopping ad creatives at every stage of the customer journey to increase ROAS and lower acquisition costs, which maintain at scale.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 lg:col-span-2 md:col-span-1 border-t-4 border-t-primary">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <GlobeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">5. Web pages that convert</h4>
                            <p className="text-[15px] text-gray-500">We get the maximum out of advertising by creating bespoke landing pages, as well as optimising existing web pages to drive consistent results from Facebook Ads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR AGENCY ── */}
            <section className="py-20 lg:py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                            Our Agency
                        </span>
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-tight mb-6 max-w-2xl">
                            Webspires As Meta Ads Agency
                        </h2>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-8 max-w-2xl">
                            Webspires as Meta Ads services in UK offers management of campaigns on meta platforms. This is a platform for extensive advertising. Webspires Meta Ads agency will help in building brand awareness, boosting conversions, and driving traffic to the website. Webspires Meta Advertising Agency provides:
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Planning of campaign</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Expert ad creation as a meta-creative agency</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Reach ideal customers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── OUR META ADS SERVICES ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7]">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Our Meta Ads Services
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Webspires Meta Ads agency services creative comprehensive campaigns to ensure the efficiency of Meta Ads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <SearchIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Strategy And Audience Research</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Meta Ads agency begins the campaign with proper research and crafted strategy by experts. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Insights of the target audience</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Ads placement</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Allocating budget efficiently</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <PenToolIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Meta Creative Agency</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires creates and designs Ads as a top Meta Creative agency. It creates preferable quality Ads. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Copywriting of Ad</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Ads with various formats</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> A/B Testing</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CompassIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Facebook Ads Agency UK</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires is a skilled Facebook marketing agency UK, that looks into every aspect of the campaign. Our Meta Ads agency UK services run Ads that meet organizational goals. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Budget allocation</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Segmenting potential audience</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Analysing KPI’s</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] lg:col-span-1 md:col-span-1">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <UsersIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Remarketing Facebook Ads</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires fb Ads agency implements strategies that reconnect you with the target audience and make sure you are at the top of their mind. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Advertising dynamically</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Target custom audience</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Targeting similar audiences</li>
                            </ul>
                        </div>

                        {/* Service Item - Comprehensive Reporting */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] lg:col-span-2 md:col-span-2 border-t-4 border-t-primary flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <BarChart3 className="w-8 h-8" />
                                </div>
                                <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-2">Comprehensive Reporting</h4>
                                <p className="text-[14px] text-gray-500">Webspires as a Meta Advertising agency offers detailed insights and analytics to ensure transparency of campaigns.</p>
                            </div>
                            <div className="w-full md:w-2/3 flex items-center">
                                <ul className="space-y-4 text-[15px] text-gray-600 font-medium bg-[#faf9f7] w-full p-6 rounded-2xl">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> In-depth reports of performance</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> Recommendations for the future based on data</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> Monitoring and tracking goals</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── STANDOUT RESULTS ── */}
             <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-primary text-white rounded-[32px] p-10 lg:p-14 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3"></div>
                        
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border-white/40 bg-white/10">
                                Standout Facebook Ads results from the last 12+ months
                            </span>
                            <h2 className="text-[32px] sm:text-[42px] font-extrabold leading-tight mb-6">
                                Webspires - Your Trusted Meta Advertising Agency
                            </h2>
                            <p className="text-white/90 text-[18px] leading-relaxed mb-0">
                                Webspires is a leading Meta Ads Agency, dedicated to delivering impactful results. Our team specialises in Google and Meta Ads, leveraging data-driven strategies to optimise campaigns for maximum performance. With in-depth analysis and continuous refinement, we ensure your ads reach the right audience. Trusted by businesses across the UK, Webspires is your go-to partner for Meta advertising success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARTNER WITH US ── */}
            <section className="bg-[#faf9f7] py-20 relative overflow-hidden border-t border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
                    <h4 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a1a2e] leading-tight mb-6">
                        Partner With Us - Your Trusted Facebook Marketing Agency UK
                    </h4>
                    <p className="text-gray-500 text-[18px] mb-10 max-w-[700px] mx-auto leading-relaxed">
                        Partner with us for Meta Ads management services as we are the leading Facebook marketing agency UK. We have a dedicated Meta ads agency team that runs successful campaigns for your business growth and brand awareness. Enhance your presence online with Webspires.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://call.webspires.co.uk?utm_source=metaadscta"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 font-bold text-[16px] px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                            START NOW
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <OtherServicesSection currentSlug="meta-ads-agency-services" />
        </main>
    );
}

// Inline Icon Components
function TrendingUpIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
        </svg>
    )
}
function UsersIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    )
}
function CheckCircle2(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
        </svg>
    )
}
function ArrowRight(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
    )
}
function BarChart3(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
        </svg>
    )
}
function TargetIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
    )
}
function CompassIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
    )
}
function PenToolIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
        </svg>
    )
}
function GlobeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
    )
}
function ImageIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
    )
}
function LayersIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        </svg>
    )
}
function SearchIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    )
}
