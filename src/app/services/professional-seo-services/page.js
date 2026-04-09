import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Professional SEO Services UK | Webspires',
    description: 'Webspires specializes in providing customized search engine optimisation services to elevate your online visibility and drive organic traffic.',
    alternates: { canonical: 'https://webspires.co.uk/professional-seo-services/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function SEOServicesPage() {
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
                            <li className="text-gray-200 font-medium">Professional SEO Services</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Professional SEO Services
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Elevate Your Online Visibility with Professional <span style={{ color: pageColor }}>SEO Services</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                Webspires specializes in providing customized search engine optimisation services. It is the best SEO company in UK. The expert team provides professional SEO services. The expert team uses advanced techniques with continuous optimization to enhance online presence and drive organic traffic.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=seo"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    START NOW
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
                                    <SearchIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <TrendingUpIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Dominate Search Results</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Outrank your competitors with data-driven SEO strategies that connect your brand with users actively searching for your products or services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY INVEST IN SEO ── */}
            <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Why Invest in SEO?</span>
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Maximize Your Online Potential: Invest in SEO
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <TargetIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Targeted Advertising</h4>
                            <p className="text-[15px] text-gray-500">Google Ads ensures precise targeting, reaching your ideal audience effectively with your message</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Measurable Results</h4>
                            <p className="text-[15px] text-gray-500">Maximize your ROI with Google Ads by tracking campaign performance in real time and adjusting your strategy accordingly</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <CreditCardIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Cost-Effective</h4>
                            <p className="text-[15px] text-gray-500">Google Ads' PPC model is cost-effective, as you only pay for clicks, driving traffic and generating leads efficiently</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-1 border-t-4 border-t-primary">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <ZapIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Competitive Advantage</h4>
                            <p className="text-[15px] text-gray-500">Stay ahead in the digital marketplace with Google Ads, using innovative tools to outperform competitors</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 lg:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <GlobeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Broad Visibility</h4>
                            <p className="text-[15px] text-gray-500">Utilize Google's extensive network to boost your brand's presence and attract a wider audience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR AGENCY ── */}
            <section className="py-20 lg:py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
                    <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                        Our Agency
                    </span>
                    <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-tight mb-8">
                        Webspires – Leading SEO Company in the UK
                    </h2>
                    <p className="text-gray-400 text-[18px] leading-relaxed max-w-3xl mx-auto">
                        Webspires is a top-rated SEO agency with a proven track record of success. Our team of experienced SEO experts use data-driven strategies to enhance your online visibility. We provide ongoing support, detailed analysis, and timely reports to ensure measurable results for your business.
                    </p>
                </div>
            </section>

            {/* ── OUR PROFESSIONAL SEO SERVICES ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7]">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Our Professional SEO Services
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Webspires SEO Services enhance the online presence of the business by reaching out to the right audience. They offer professional SEO services that set them apart from other SEO services providers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CompassIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">SEO Strategy</h4>
                            <p className="text-[15px] text-gray-500 mb-5">As the best SEO agencies, Webspires develop a solid strategy, implement it, and then analyze the results very clearly. It ensures that the strategy aligns with your goals and provides business growth. It conducts:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Website analysis</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Competitor analysis</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Keyword search</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <PenToolIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">On-Page SEO</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Our search engine optimisation services ensure the optimisation of the website by using a defined structure and quality content. It includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Upgrading Meta tags and meta descriptions</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> High-quality content creation</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> SEO friendly URLs</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CodeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Technical SEO</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires is the best SEO agencies UK, provides technical SEO services to enhance the performance of the website. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Improving Site Speed</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Enhancing mobile responsiveness</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Implementing XML Sitemaps and Robots.txt files</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-primary/30">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <ShareIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Off-Page SEO</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires’ SEO Services include a link-building strategy. It enhances credibility and improves rankings. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Acquiring backlinks</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Usage of social media signals</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Local SEO citation</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-primary/30">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <ShoppingCartIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">E-Commerce SEO</h4>
                            <p className="text-[15px] text-gray-500 mb-5">The best UK SEO agency, Webspires provides professional SEO services for the upgradation of online stores. It uses unique techniques for E-Commerce sites. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Optimising product page</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Creating categories for SEO</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Usage of structured data to display ratings</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-primary/30">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <MapPinIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Local SEO</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Reach your nearby audience with the best UK SEO company. Webspires is a trusted SEO agency near me that focuses on strong local SEO. It helps in the following way:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Optimising Google My Business profile</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Managing accurate local listings</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Targeting local-specific keywords</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARTNER WITH US / WHY CHOOSE WEBSPIRES ── */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-primary text-white rounded-[32px] p-10 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3"></div>
                        
                        <div className="w-full lg:w-1/2 relative z-10">
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border-white/40 bg-white/10">
                                Partner With Us - The Best SEO Company in UK
                            </span>
                            <h2 className="text-[32px] sm:text-[42px] font-extrabold leading-tight mb-6">
                                Why Choose Webspires
                            </h2>
                            <p className="text-white/90 text-[18px] leading-relaxed mb-8">
                                If you are looking for the best SEO agency near me, you should go for Webspires professional SEO services as it is recognized as one of the best SEO agencies UK. Webspires provide:
                            </p>
                            <ul className="space-y-4 text-[16px] font-medium">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> Customized Search engine optimisation services</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> Monitor and improve continuously</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> Cover all aspects of SEO by delivering comprehensive services</li>
                            </ul>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <h3 className="text-[28px] font-bold mb-4">Elevate Your Search Rankings</h3>
                            <p className="text-white/80 mb-8 max-w-sm mx-auto">Partner with the best UK SEO agency for reliable search engine optimisation services.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://call.webspires.co.uk?utm_source=seocta"
                                    target="_blank" rel="noopener noreferrer"
                                    className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                    Book Your Consultation
                                </a>
                                <a href="tel:+441615241569" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                                    +44 161 524 1569
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OtherServicesSection currentSlug="professional-seo-services" />
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
function SearchIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    )
}
function CreditCardIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
    )
}
function ZapIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    )
}
function CodeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
    )
}
function ShareIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
    )
}
function MapPinIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
    )
}
function ShoppingCartIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
    )
}
