import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';


export const metadata = {
    title: 'CRM Development Services UK | Webspires',
    description: 'Empowering Your Business with CRM Development Services. Full suite platform for CRM development, data migration, analytics, and more.',
    alternates: { canonical: 'https://webspires.co.uk/services/crm-services/' }
};

const crmColor = '#EE314F';

export default function CrmDevelopmentServicesPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#1a1a2e] pt-28 pb-20 lg:pt-32 lg:pb-32">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, ${crmColor} 0%, transparent 70%)` }} aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
                    style={{ background: `radial-gradient(circle, ${crmColor} 0%, transparent 70%)` }} aria-hidden="true" />

                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-[13px] text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li className="text-gray-200 font-medium">CRM Development Services</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                                style={{ color: crmColor, borderColor: `${crmColor}44`, background: `${crmColor}14` }}>
                                Solutions & Automation
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Empowering Your Business with <span style={{ color: crmColor }}>CRM Development Services</span>.
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                Webspires provides end-to-end CRM solutions in the UK. We team up with you to streamline workflows, increase productivity, and gain valuable insights from customer data.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=crm"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                                    Get Started
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
                            {/* Dashboard Mockup Graphic Container */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden glassmorphism border border-white/10 p-6 flex flex-col gap-4 shadow-2xl relative bg-white/[0.03] backdrop-blur-md">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Database className="w-32 h-32 text-white" />
                                </div>
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex flex-center items-center justify-center">
                                        <BarChart3 className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="h-4 w-24 bg-white/20 rounded mb-1"></div>
                                        <div className="h-3 w-16 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 rounded-xl p-4 flex flex-col justify-end">
                                        <div className="w-8 h-8 rounded bg-green-500/20 mb-3 flex items-center justify-center">
                                            <TrendingUpIcon className="text-green-400 w-4 h-4" />
                                        </div>
                                        <div className="h-6 w-16 bg-white/20 rounded mb-2"></div>
                                        <div className="h-3 w-20 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4 flex flex-col justify-end">
                                        <div className="w-8 h-8 rounded bg-blue-500/20 mb-3 flex items-center justify-center">
                                            <UsersIcon className="text-blue-400 w-4 h-4" />
                                        </div>
                                        <div className="h-6 w-16 bg-white/20 rounded mb-2"></div>
                                        <div className="h-3 w-20 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-primary/20 to-transparent border border-primary/10 rounded-xl p-4 mt-2">
                                        <div className="h-4 w-1/3 bg-white/20 rounded mb-4"></div>
                                        <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                                        <div className="h-2 w-5/6 bg-white/10 rounded mb-2"></div>
                                        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR CRM SERVICES UK INCLUDE ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1a1a2e] mb-4">
                            Our CRM Services UK Include
                        </h2>
                        <p className="text-gray-500 text-[16px] max-w-[700px] mx-auto">
                            Design your CRM solutions to support business requirements. We provide expert advice, data migration, and complete support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Puzzle className="w-7 h-7" />
                            </div>
                            <h3 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">CRM Development Services</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                Have our expert advice to build tailored systems to achieve your business goals effectively.
                            </p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">CRM Consulting</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                Strategy and consulting to design CRM solutions that perfectly support your ongoing business requirements.
                            </p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-500/10 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-7 h-7" />
                            </div>
                            <h3 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">CRM Data Migration</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                Migrate your data from your existing CRM system safely and securely with zero downtime.
                            </p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-purple-500/10 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">CRM Analytics & Reporting</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                Get clear insights, understand customer behaviours and grow your business with detailed reporting.
                            </p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group lg:col-span-2">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-orange-500/10 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                <HeadphonesIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">CRM Support & Maintenance</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
                                We provide ongoing support for updates, troubleshooting, and ensuring smooth, uninterrupted daily operations. Your success is our mission.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT WE CONTRIBUTE ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7] border-y border-gray-100 relative overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                                style={{ color: crmColor, background: `${crmColor}14` }}>
                                Value & Impact
                            </span>
                            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] leading-tight mb-6">
                                What Do We Contribute?
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-2 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            1
                                        </div>
                                        Generate Leads and Automatically Follow up
                                    </h4>
                                    <p className="text-gray-500 text-[15px] leading-relaxed pl-11">
                                        Say goodbye to missed follow-ups. Webspires helps in scheduling personalized follow-ups that adapt to each prospect, seamlessly turning them into loyal customers.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-2 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            2
                                        </div>
                                        Automated Appointment and Reminders
                                    </h4>
                                    <p className="text-gray-500 text-[15px] leading-relaxed pl-11">
                                        Schedule your appointments or follow-up calls flawlessly. Ensure you and your client stay on schedule with customizable timings, reducing no-shows and increasing efficiency.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-2 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            3
                                        </div>
                                        Manage Your Online Presence
                                    </h4>
                                    <p className="text-gray-500 text-[15px] leading-relaxed pl-11">
                                        Maintain your online presence across all accounts from a single place. Track interactions, gain audience insights, and plan strategy in advance from an easy-to-manage dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100">
                                <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-6 border-b pb-4">
                                    Why Choose Webspires
                                </h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500 text-[14px] font-medium strike-through">Lengthy contracts: 3-4 months</span>
                                        <span className="text-primary font-bold text-[15px] flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" /> No Contracts
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500 text-[14px] font-medium strike-through">Zero trial period</span>
                                        <span className="text-primary font-bold text-[15px] flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" /> 7-Day Free Trial
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500 text-[14px] font-medium strike-through">Expensive: £2,000+/month</span>
                                        <span className="text-primary font-bold text-[15px] flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" /> Affordable: £349/month
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500 text-[14px] font-medium">Standard Lead generation</span>
                                        <span className="text-primary font-bold text-[15px] flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" /> Appointment Generation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PLATFORM CAPABILITIES ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[40px] font-extrabold text-[#1a1a2e] leading-tight mx-auto max-w-3xl">
                            A Full Suite Platform for Seamless Booking & Lead Management
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Block */}
                        <div className="flex flex-col h-full rounded-3xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all bg-[#faf9f7] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                            <Globe className="w-10 h-10 text-primary mb-6 relative z-10" />
                            <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-4 relative z-10">Capture New Leads</h3>
                            <p className="text-gray-500 text-[15px] mb-6 flex-grow relative z-10">
                                Whether you're running Facebook, Google, or using a 3rd party generator. Manage full websites, funnels, capture leads through surveys, and know exactly where each lead came from. Built-in calendar captures all sales setups.
                            </p>
                        </div>
                        
                        {/* Feature Block */}
                        <div className="flex flex-col h-full rounded-3xl p-8 border border-gray-100 hover:border-blue-500/30 hover:shadow-xl transition-all bg-[#faf9f7] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                            <MessageSquare className="w-10 h-10 text-blue-500 mb-6 relative z-10" />
                            <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-4 relative z-10">Nurture Leads Into Customers</h3>
                            <p className="text-gray-500 text-[15px] mb-6 flex-grow relative z-10">
                                Easily customize multi-channel follow-up campaigns. Connect via Phone, Voicemail Drops, SMS/MMS, Emails, GMB Messages, and FB Messenger. Two-way communication on any device via our mobile app.
                            </p>
                        </div>

                        {/* Feature Block */}
                        <div className="flex flex-col h-full rounded-3xl p-8 border border-gray-100 hover:border-green-500/30 hover:shadow-xl transition-all bg-[#faf9f7] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                            <Calendar className="w-10 h-10 text-green-500 mb-6 relative z-10" />
                            <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-4 relative z-10">Fully Automated Booking</h3>
                            <p className="text-gray-500 text-[15px] mb-6 flex-grow relative z-10">
                                Automatically book leads and prospects on your calendar without lifting a finger. Leverage AI and Machine Learning to manage the conversation efficiently and customize messaging heavily.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── COMPANY VALUES ── */}
             <section className="py-20 lg:py-24 bg-[#1a1a2e] text-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                                style={{ color: crmColor,  background: `${crmColor}20` }}>
                                Our Pillars
                        </span>
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-tight mb-4 text-white">
                            Why Clients Trust Webspires
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Committed to delivering scalable solutions to empower growth. Uninterrupted communication, prompt data-driven decisions, and supreme customer satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                            <h4 className="text-[18px] font-bold mb-2">Customization</h4>
                            <p className="text-[14px] text-gray-400">Meeting your specific requirements by incorporating features that genuinely support your needs.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                            <HeadphonesIcon className="w-8 h-8 text-blue-400 mb-4" />
                            <h4 className="text-[18px] font-bold mb-2">Training & Support</h4>
                            <p className="text-[14px] text-gray-400">Robust training sessions for your team to ensure smooth operations and continuous business growth.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                            <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
                            <h4 className="text-[18px] font-bold mb-2">Data Analytics</h4>
                            <p className="text-[14px] text-gray-400">Delivering insights for data-driven impactful decision-making, optimizing strategies at each stage.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                            <Database className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-[18px] font-bold mb-2">Seamless Implementation</h4>
                            <p className="text-[14px] text-gray-400">Integrating CRM with existing software like ERP and accounting tools to create an efficient workflow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="bg-primary py-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
                    <h2 className="text-[32px] sm:text-[42px] font-extrabold text-white leading-tight mb-6">
                        Ready to level up your customer relationships?
                    </h2>
                    <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
                        Contact us today to learn more about our CRM development services and discover how we can help your business thrive.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://call.webspires.co.uk?utm_source=crmcta"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-bold text-[16px] px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                            Book Your Free Demo
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
            <OtherServicesSection currentSlug="crm-services" />
        </main>
    );
}

// Inline Icon Components missing in generic react-lucide
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
function ChevronRight(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
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
function Database(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    )
}
function HeadphonesIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
        </svg>
    )
}
function Puzzle(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611c-.941.941-2.468.941-3.408 0l-1.569-1.568a1.226 1.226 0 0 1-.288-.878c.07-.47.48-.802.925-.968a2.5 2.5 0 1 0-3.215-3.214c-.165-.445-.497-.854-.967-.924a.98.98 0 0 1-.837-.276L2.7 13.916c-.941-.941-.941-2.468 0-3.408l1.569-1.568a1.226 1.226 0 0 1 .878-.288c.47.07.802.48.968.924a2.501 2.501 0 1 0 3.214-3.214c-.445-.165-.854-.497-.924-.967a.979.979 0 0 1 .276-.837l1.61-1.611c.94-.941 2.468-.941 3.407 0l1.57 1.568c.229.23.337.555.287.878-.07.47-.48.802-.924.968a2.5 2.5 0 1 0 3.214 3.214c.166.446.497.855.968.925z"/>
        </svg>
    )
}
function Zap(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    )
}
function MessageSquare(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    )
}
function Calendar(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
    )
}
function Globe(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
    )
}
