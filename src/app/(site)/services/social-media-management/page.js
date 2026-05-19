import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Social Media Management Services UK | Webspires',
    description: 'If you are looking for professional social media management services, Webspires is here to help your business connect and engage with a greater audience.',
    alternates: { canonical: 'https://webspires.co.uk/services/social-media-management/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function SocialMediaManagementPage() {
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
                            <li className="text-gray-200 font-medium">Social Media Management</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Social Media Management Services
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Social Media <span style={{ color: pageColor }}>Management</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                If you are looking for professional social media management services, Webspires is here to help your business connect and engage with a greater audience. Our team consists of expert social media managers who have customized strategies that align with your business.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=smm"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    Transform Your Socials
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="tel:+441615241569"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5">
                                    Call Us Now
                                </a>
                            </div>
                        </div>

                        {/* Visual Right Side - Decorative Graphic */}
                        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px]">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden glassmorphism border border-white/10 p-6 flex flex-col gap-4 shadow-2xl relative bg-white/[0.03] backdrop-blur-md">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <SmartphoneIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="flex-1 flex flex-col gap-4 relative z-10 w-full h-full pb-0 mt-6 lg:mt-8 px-2 lg:px-4">
                                    {/* Mockup phone UI */}
                                    <div className="mx-auto w-[240px] h-full bg-white rounded-t-3xl border-8 border-b-0 border-gray-800 shadow-2xl overflow-hidden relative">
                                        <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">W</div>
                                                <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                            </div>
                                        </div>
                                        <div className="w-full aspect-square bg-gradient-to-br from-primary to-primary/80"></div>
                                        <div className="p-4 space-y-3">
                                            <div className="flex gap-3 text-primary">
                                                <HeartIcon className="w-5 h-5" />
                                                <MessageCircleIcon className="w-5 h-5 text-gray-400" />
                                                <SendIcon className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                                                <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                                                <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTRO CONTENT ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1a1a2e] leading-tight mb-6">
                                Social Media Management Services
                            </h2>
                            <div className="text-gray-500 text-[16px] leading-relaxed space-y-5">
                                <p>
                                    Social media is an ever-changing landscape with altering algorithms and topical trends; to keep your competitive edge, you must prioritise your social media management strategy to keep your competitive edge.
                                    Do you see your social media as just an administrative task? Do you often scramble to put a post together at the last minute after realising you haven’t posted in a few weeks? Perhaps no matter what you post, you can’t seem to achieve the results you want to see?
                                </p>
                                <p>
                                    If you are looking for a more strategic approach and one that delivers results, we can help. Our marketing experts are fully experienced in all social media platforms and will devise an optimised strategy that underpins a regular schedule for engaging content across your social media channels.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 bg-[#faf9f7] rounded-[32px] p-8 lg:p-12 border border-gray-100">
                            <h3 className="text-[22px] font-extrabold text-[#1a1a2e] mb-4">
                                Need Of Social Media Management Agency
                            </h3>
                            <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                                In today’s fast-paced world, it is very important to engage with a greater audience within less time. this can only be possible if digital tools are used properly such as having social media management services. Multiple skilled social media managers grow the engagement of the brand with their audience. Webspires is the leading social media marketing agency UK.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── YOUR SOCIAL MEDIA MANAGER (BENEFITS) ── */}
            <section className="py-20 lg:py-24 bg-[#1a1a2e] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>

                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="mb-14 text-center">
                        <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                            Your Manager
                        </span>
                        <h3 className="text-[28px] sm:text-[38px] font-extrabold leading-tight mb-6 max-w-2xl mx-auto">
                            Webspires - Your Social Media Manager
                        </h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed max-w-3xl mx-auto">
                            As a leading social media marketing agency in the UK, Webspires simplifies social media management for you. Our experts handle the complexities, allowing you to focus on growing your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold mb-2">Tailored Strategy</h4>
                                <p className="text-[14px] text-gray-400">Aligned with your brand and audience for maximum impact.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold mb-2">Consistent, High-Quality Content</h4>
                                <p className="text-[14px] text-gray-400">Stand out from competitors with engaging posts.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                <TrendingUpIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold mb-2">Data-Driven Insights</h4>
                                <p className="text-[14px] text-gray-400">Track engagement, followers, and performance metrics.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                <UsersIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold mb-2">Audience Engagement</h4>
                                <p className="text-[14px] text-gray-400">Foster growth through active interaction and response.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR SOCIAL MEDIA MANAGEMENT SERVICES (GRID) ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7] border-y border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Our Social Media Management Services
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Webspires offers full social media manager packages to handle every aspect of your brand on social media. Following is the set of services offered by Webspires.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <CompassIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Strategy And Plan</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Our campaign begins with a solid strategy. Our team offers personalized social media strategy. We provide:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Selecting the best platform</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Planning and developing detailed content</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Identify target audience</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Analyze the behavior and preferences of the target audience.</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <PenToolIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Content Creation</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires team of social media manager UK is an expert in creating content and engaging audiences. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Graphic Designing</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Video production</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Schedule of posting</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Automation of posting</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Deliver a cohesive brand message</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <MessageCircleIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Community Engagement</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Our social media manager services ensure active community engagement. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Active interaction</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Building community online</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Collaborating with influencers to enhance brand visibility</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300 lg:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <GlobeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">SMM</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires expands the brand’s reach with social media marketing (SMM) services. We effectively run campaigns that align with your business goals:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium grid sm:grid-cols-2">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Targeting ideal audience</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Optimization of campaigns</li>
                                <li className="flex items-start gap-2 lg:col-span-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Analysing performance for detailed reporting</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Analytics And Reporting</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires social media management services provide detailed reports of performance with insights. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Comprehensive monthly reports</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Adjustments based on analytice</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Tracking goals and measuring metrics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── SEARCHING FOR AGENCY / WHY CHOOSE US ── */}
             <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    
                    <div className="bg-primary text-white rounded-[32px] p-8 lg:p-12 mb-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                        <h4 className="text-[22px] sm:text-[28px] font-extrabold leading-tight mb-6 relative z-10">
                            Are you searching for the Best Social media Marketing Agency near me?
                        </h4>
                        <ul className="space-y-4 text-[16px] font-medium relative z-10">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> local expertise in social media manager UK.</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> Specialized and experienced team</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> Focus on results by delivering measurable results.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <h4 className="text-[28px] sm:text-[34px] font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                                Why Choose Us As Your Social Media Management Agency?
                            </h4>
                            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
                                We create tailored content that seamlessly integrates with your brand’s social voice, encouraging engaged audiences, boosting post reach and ROI through maximized engagement and follower growth.
                            </p>
                            <div className="bg-[#faf9f7] p-8 rounded-3xl border border-gray-100 mb-6">
                                <p className="text-[16px] text-[#1a1a2e] font-bold mb-4">
                                    Our recommended starting point is 15 hours per month minimum to see consistent, measurable improvements in key metrics. This includes:
                                </p>
                                <ul className="space-y-3 text-[15px] text-gray-600">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Weekly content creation and calendar</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Post scheduling across major apps</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Engagement with your fan base</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Insights, 1:1 time each month to review engagement</li>
                                </ul>
                            </div>
                            <p className="text-[16px] text-gray-500 leading-relaxed">
                                While consistency is crucial, the right budget allowing your content frequency, bandwidth & message delivery tailored to your goals drives growth – helping you harness your brand’s full potential.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h4 className="text-[28px] sm:text-[34px] font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                                Who Creates The Assets?
                            </h4>
                            <div className="space-y-6 text-[16px] text-gray-500 leading-relaxed">
                                <p>
                                    Our team will work in collaboration with any existing assets that are available to create new content in line with your branding to inspire, provoke, and engage with your audience by any means.
                                </p>
                                <p>
                                    We also want your business to feel apart and engaged with the content we produce; we are happy to spend the day in your work environment/office to create content alongside your team to involve them as much as possible to highlight your company culture.
                                </p>
                                <p>
                                    Our expert’s proactive approach ensures that we capitalise on all key marketing and public holidays to boost engagement with your followers and join in on social media trends, breaking news, and pop culture moments reactively so that your brand is always a part of the conversation.
                                </p>
                                <p>
                                    Our team is at your disposal to give you the extra helping hand with your creative legwork to consistently produce interactive, branded content to help your organic social media growth and give you the competitive edge to stand out and get the following & recognition you deserve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── WHY WORK WITH US (AGENCY PERKS) ── */}
             <section className="py-20 lg:py-24 bg-[#faf9f7] border-t border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h3 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Why Work With Us?
                        </h3>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            We know there are plenty of Social Media Management Agencies to choose from, here’s why our clients love us;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <UsersIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">Dedicated Account Managers</h4>
                            <p className="text-[15px] text-gray-500">Receive support and guidance from our specialist account managers who take on your visions and goals as if they are their own.</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <ClockIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">One Day Response Time</h4>
                            <p className="text-[15px] text-gray-500">No one likes to be kept waiting, which is why we always endeavour to respond to any queries within one working day.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <ZapIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">Proactive Agency</h4>
                            <p className="text-[15px] text-gray-500">We take the lead from conducting initial analysis to thorough reporting, staying in regular contact throughout the entire process.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <PenToolIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">In-House Creative Team</h4>
                            <p className="text-[15px] text-gray-500">Maximise social media opportunities with scroll-stopping creative from images to video, all created by our in-house specialists.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <SearchIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">Transparent Approach</h4>
                            <p className="text-[15px] text-gray-500">Gone are the days of being left in the dark by your social media management agency - you’ll be updated on everything from your latest successes to areas for improvement.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
                                <StarIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-[18px] font-extrabold text-[#1a1a2e] mb-3">Your Success is Our Success</h4>
                            <p className="text-[15px] text-gray-500">We work as an extension of your team, putting your needs first and constantly playing the field to spotlight & capitalise on new opportunities that will benefit your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="bg-primary py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
                    <h4 className="text-[32px] sm:text-[42px] font-extrabold text-white leading-tight mb-6">
                        Webspires - Trusted Social Media Agency UK
                    </h4>
                    <p className="text-white/90 text-[18px] mb-10 max-w-[700px] mx-auto leading-relaxed">
                        If you want to enhance your social media presence online, reach out to the leading social media marketing agency UK and discover social media management services in Webspires. Elevate and take your brand to the next level with Webspires.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://call.webspires.co.uk?utm_source=smmcta"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-bold text-[16px] px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                            Contact Us Today
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <OtherServicesSection currentSlug="social-media-management" />
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
function Database(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    )
}
function MessageCircleIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
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
function TargetIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
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
function ClockIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
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
function SearchIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    )
}
function StarIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 6.91 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
    )
}
function SmartphoneIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
    )
}
function HeartIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
    )
}
function SendIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
    )
}
