import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Google Guarantee Services UK | Webspires',
    description: 'Webspires provides Google Guarantee Services to businesses for their growth. A Google Guaranteed business attracts more customers since it is the most reliable service available locally.',
    alternates: { canonical: 'https://webspires.co.uk/google-guarantee-services/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function GoogleGuaranteeServicesPage() {
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
                            <li className="text-gray-200 font-medium">Google Guarantee</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Google Guaranteed
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Webspires Google Guarantee <span style={{ color: pageColor }}>Services</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                Webspires provides Google Guarantee Services to businesses for their growth. A Google Guaranteed business attracts more customers since it is the most reliable service available locally. Become Google Guaranteed to showcase the legitimacy of your business.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=googleguarantee"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    GET STARTED TODAY
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
                                    <ShieldCheckIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <BadgeCheckIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Unlock the Power of Google Guarantee</h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        Boost your business with Google Guarantee, the latest in consumer protection. Designed for Local Services Ads, this badge showcases your dedication to excellence and customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY BENEFITS OF GOOGLE GUARANTEE ── */}
            <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Why It matters</span>
                            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                                Why Google Guarantee is a Game-Changer for Your Business:
                            </h2>
                            <p className="text-[16px] text-gray-500 mb-8 leading-relaxed">
                                Elevate your advertising campaign and earn the trust of new customers with the power of Google Guarantee. It’s not just a badge; it’s a promise of quality, reliability, and customer satisfaction.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <ShieldCheckIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">Boosted Consumer Confidence</h4>
                                        <p className="text-[15px] text-gray-500">The Google Guarantee badge is a mark of trust, offering potential customers the peace of mind they need to choose your services.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <EyeIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">Enhanced Visibility</h4>
                                        <p className="text-[15px] text-gray-500">Stand out in a crowded market with a prominent badge that highlights your business’s credibility.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <TrendingUpIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">Increased Lead Generation</h4>
                                        <p className="text-[15px] text-gray-500">Attract more leads by showcasing your Google Guarantee status, a symbol of reliability and quality.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-[#faf9f7] rounded-[32px] p-8 lg:p-12 border border-gray-100">
                                <div className="mb-8">
                                    <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3 flex items-center gap-3">
                                        <BadgeCheckIcon className="w-6 h-6 text-green-600" />
                                        Verified Badge
                                    </h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        Google Guarantee businesses boast a green badge with a white checkmark, symbolizing a trusted and reliable service for your customers.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3 flex items-center gap-3">
                                        <UsersIcon className="w-6 h-6 text-blue-600" />
                                        More Visitors
                                    </h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        With the Google Guarantee, your business gets a 15-second rotation in search results, leading to increased site visitors and more exposure for your services.
                                    </p>
                                </div>
                                <div className="">
                                    <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3 flex items-center gap-3">
                                        <TrendingUpIcon className="w-6 h-6 text-orange-500" />
                                        More Customers
                                    </h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        Obtaining the Google Guarantee for your new business can significantly boost website traffic and encourage more customers to reach out to you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── CORE INFORMATION ── */}
             <section className="py-20 lg:py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* What is it */}
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-12">
                            <h3 className="text-[24px] sm:text-[28px] font-extrabold leading-tight mb-6">
                                What Is Meant By Google Guaranteed?
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                                Google Guaranteed is a program that helps local service providers and businesses to get verified and become legitimate so that local consumers can find them on Google search and Google Maps. This feature enhances:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Trust of customers</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Visibility on search engine</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Protection to customers by reimbursements</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cost */}
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-12">
                            <h3 className="text-[24px] sm:text-[28px] font-extrabold leading-tight mb-6">
                                Understanding Google Guaranteed Cost
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                                Google Guaranteed Cost varies from business to business. It also depends on several factors such as location, industry, landscape, etc. Webspires help in managing Google Guaranteed Cost with the following considerations:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Controlling Budget</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Charges per-lead</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-300 font-medium">Optimisation of cost with the right budget</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── HOW TO GET GUARANTEED & BENEFITS ── */}
             <section className="py-20 lg:py-24 bg-[#faf9f7]">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1a1a2e] mb-8 leading-tight">
                                How To Get Google Guaranteed?
                            </h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                                
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                        <p className="text-gray-600 font-medium text-[15px]">Check your eligibility and confirm that it meets the specific requirements.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                        <p className="text-gray-600 font-medium text-[15px]">Submit applications with the assistance of team Webspires.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                        <p className="text-gray-600 font-medium text-[15px]">Businesses to pass background checks and ensure all the requirements are met.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">4</div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                                        <p className="text-gray-600 font-medium text-[15px]">Fulfill the payment requirements with the assistance of our Google Guaranteed services team.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <GlobeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-[24px] font-extrabold text-[#1a1a2e] mb-4">Benefits Of Google Guaranteed UK Services</h3>
                                <p className="text-[16px] text-gray-500 mb-6 leading-relaxed">
                                    If you want to become a Google Guaranteed UK business, Webspires will help you and guide you through potential benefits with its Google Guaranteed UK services. You can experience the following across the UK as a Google Guaranteed UK business:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-[#1a1a2e] font-semibold">Become a trustworthy service provider</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-[#1a1a2e] font-semibold">Get a priority placement on Google search</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-[#1a1a2e] font-semibold">Become a reliable choice for customers by satisfying your customers’ trust level</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── FAQ SECTION ── */}
             <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            FAQs About Google Guaranteed
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">1. What is it?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">A program offered by Google for businesses that advertise through Local Services Ads. It provides a badge of trust indicating the business has passed screening.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">2. How to join?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Undergo a background check, provide proof of licensing and insurance, and meet eligibility requirements.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">3. Benefits?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Increased visibility, boost in consumer trust, and customer protection (refunds for unsatisfactory services).</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">4. Cost?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">No direct cost to become guaranteed, but requires running Local Services Ads (pay-per-lead).</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">5. Customer Assurances?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Adds assurance of hiring a reputable provider. Claims can be filed for unsatisfactory service for potential refunds up to a lifetime limit.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">6. Eligibility?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Available for certain service categories and locations.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-6 lg:p-8 border border-gray-100">
                            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-3">7. Maintenance?</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Badge remains as long as eligibility criteria are met and participation in Ads continues.</p>
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
                                Trusted Google Guarantee Experts
                            </span>
                            <h2 className="text-[32px] sm:text-[42px] font-extrabold leading-tight mb-6">
                                Why Choose Us?
                            </h2>
                            <p className="text-white/90 text-[18px] leading-relaxed mb-6">
                                Webspires provides Google Guaranteed services to UK-based businesses by providing an extensive explanation of how to get Google Guaranteed and explaining the Google Guaranteed Cost in a very simplified way.
                            </p>
                            <p className="text-white font-bold text-[18px] leading-relaxed">
                                It provides expert guidance and continuous support for better performance.
                            </p>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <h3 className="text-[28px] font-bold mb-4">GET STARTED TODAY</h3>
                            <p className="text-white/80 mb-8 max-w-sm mx-auto">Get started with Webspires Google Guaranteed Services today, get local recognition, and build the trust of customers.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://call.webspires.co.uk?utm_source=googleguaranteecta"
                                    target="_blank" rel="noopener noreferrer"
                                    className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                    Become Guaranteed
                                </a>
                                <a href="tel:+441615241569" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                                    +44 161 524 1569
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OtherServicesSection currentSlug="google-guarantee-services" />
        </main>
    );
}

// Inline Icon Components
function ShieldCheckIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
        </svg>
    )
}
function BadgeCheckIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>
        </svg>
    )
}
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
function EyeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
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
function GlobeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
    )
}
