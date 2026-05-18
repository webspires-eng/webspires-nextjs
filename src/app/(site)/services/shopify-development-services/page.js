import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Shopify Development Services UK | Webspires',
    description: 'Webspires provides Shopify development services through an experienced team of Shopify developers and Shopify experts to give your customers a remarkable online shopping experience.',
    alternates: { canonical: 'https://webspires.co.uk/shopify-development-services/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function ShopifyServicesPage() {
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
                            <li className="text-gray-200 font-medium">Shopify Development</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Shopify Development Services
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Webspires Shopify Development <span style={{ color: pageColor }}>Services</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                Webspires provides Shopify development services through an experienced team of Shopify developers and Shopify experts. Since a user-friendly online store is crucial for the success of a business, we ensure that your customers get a remarkable online shopping experience from your store. Webspires is the best Shopify website designer in the UK.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=shopify"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    Get A Free Quote
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
                                    <ShoppingCartIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <TrendingUpIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">The Ultimate eCommerce Solution for Businesses of All Sizes</h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        Shopify simplifies online selling for businesses of all sizes, offering an intuitive platform to manage products, inventory, orders, shipping, payments, and customer interactions all in one place. Whether starting fresh or optimizing your store, Shopify provides the perfect foundation for success. At Webspires Agency, we design, develop, and optimize Shopify websites to help you grow.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT BENEFITS WE PROVIDE ── */}
            <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Set Up Your Store and Start Selling Online</span>
                            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                                What Benefits We Provide?
                            </h2>
                            <p className="text-[16px] text-gray-500 mb-8 leading-relaxed">
                                At Webspires, our Shopify store design services offer:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <PenToolIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">Custom-Built Stores</h4>
                                        <p className="text-[15px] text-gray-500">Expertly designed to match your brand and business needs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <UsersIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">Professional Shopify Designers</h4>
                                        <p className="text-[15px] text-gray-500">A skilled team delivering high-quality, conversion-focused stores.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <ShoppingCartIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-1">E-commerce Optimized Solutions</h4>
                                        <p className="text-[15px] text-gray-500">Seamless, user-friendly designs for a better shopping experience.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-[#faf9f7] rounded-[32px] p-8 lg:p-12 border border-gray-100">
                                <h3 className="text-[24px] font-extrabold text-[#1a1a2e] mb-6">Why Choose Webspires</h3>
                                <p className="text-gray-500 text-[16px] leading-relaxed">
                                    A successful online start starts with expert Shopify developers. At Webspires, we create tailored Shopify solutions based on industry needs and branding goals. With our expertise, e-commerce store can deliver performance, UX and UI, and future-proof Shopify store designed for success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR SHOPIFY DEVELOPMENT SERVICES ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7]">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Our Shopify Development Services
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Webspires Shopify development services have a wide range, which includes;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <PenToolIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Customized Shopify Store Design</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Shopify web designer designs a customized store that appeals to the customers and helps in building loyal customers. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Customized themes for brands</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Mobile phone responsiveness</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> User-friendly interface</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CodeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Setup And Configuration</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Shopify developer team handles every step and configuration of your online store. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Configuration of account</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Migrating existing stores to Shopify</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Integrating applications to the store</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <ZapIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Advanced Development</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Shopify developers are experienced in providing advanced development services. They customize the store so that it can meet any future updated requirements:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Development of unique features</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Enhancement of Shopify themes</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Integrating APIs</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <ShoppingCartIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Product Management</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Shopify web designers provide an organized listing of products for increasing organic traffic.</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Setting product details</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> SEO Optimisation</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Management of products</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] lg:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <SettingsIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Shopify Maintenance</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Shopify experts provide continuous support and maintenance for smooth operations of your online store. They provide:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium grid sm:grid-cols-2">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Store updates</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Track of performance</li>
                                <li className="flex items-start gap-2 sm:col-span-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Technical assistance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARTNER WITH US / BUILD YOUR STORE ── */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-primary text-white rounded-[32px] p-10 lg:p-14 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3"></div>
                        
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border-white/40 bg-white/10">
                                Build Your Shopify Store With Webspires
                            </span>
                            <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-tight mb-6">
                                Webspires delivers cutting edge Shopify solutions tailored to the evolving digital landscape.
                            </h2>
                            <p className="text-white/90 text-[18px] leading-relaxed mb-0">
                                Our expert developers create custom Shopify stores designed for seamless operations and increased sales.
                            </p>
                        </div>
                        
                        <div className="relative z-10 mt-10">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://call.webspires.co.uk?utm_source=shopifycta"
                                    target="_blank" rel="noopener noreferrer"
                                    className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                    Start Selling Today
                                </a>
                                <a href="tel:+441615241569" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                                    +44 161 524 1569
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OtherServicesSection currentSlug="shopify-development-services" />
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
function ArrowRight(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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
function PenToolIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
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
function CodeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
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
function SettingsIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
        </svg>
    )
}
