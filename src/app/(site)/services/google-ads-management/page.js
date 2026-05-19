import Link from 'next/link';
import OtherServicesSection from '@/components/sections/OtherServicesSection';

export const metadata = {
    title: 'Google Ads Management Services UK | Webspires',
    description: 'Google ads management services are designed to help you grow your business online. Google Ads marketing Agency helps to achieve measurable results.',
    alternates: { canonical: 'https://webspires.co.uk/services/google-ads-management/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function GoogleAdsManagementPage() {
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
                            <li className="text-gray-200 font-medium">Google Ads Management</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-primary border-primary/40 bg-primary/10">
                                Google Ads Manager Services
                            </span>
                            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                Google Ads Management <span style={{ color: pageColor }}>Services</span>
                            </h1>
                            <p className="text-gray-400 text-[17px] leading-relaxed mb-9 max-w-[560px]">
                                Google ads management services are designed to help you grow your business online. Google Ads marketing Agency helps to achieve measurable results. Google Ads Agency specializes in creating, managing, and optimizing campaigns to achieve business goals and enhance returns on investment.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://call.webspires.co.uk?utm_source=googleads"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ backgroundColor: pageColor }}>
                                    Start Your Campaign
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="tel:+441615241569"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5">
                                    Call Us Now
                                </a>
                            </div>
                        </div>

                        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px]">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden glassmorphism border border-white/10 p-8 flex flex-col justify-center gap-4 shadow-2xl relative bg-white/[0.03] backdrop-blur-md">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <TargetIcon className="w-40 h-40 text-white" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <TrendingUpIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Grow Your Business with Google</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        In today’s digital landscape, visibility is paramount. At Webspires, we leverage the power of Google Ads to elevate your business’s online presence, driving targeted traffic and converting leads into loyal customers with precision and professionalism.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY USE GOOGLE ADS ── */}
            <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Why Use Google Ads?
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Achieve top rankings in Google’s search results to maximize your website’s traffic, boost inquiries, and increase in-store visits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Measurable Outcome</h4>
                            <p className="text-[15px] text-gray-500">With tools like Google Analytics, you can measure the success of your SEO efforts by tracking rankings, traffic, conversions, and other key metrics.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <TargetIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Targeted Advertising</h4>
                            <p className="text-[15px] text-gray-500">By targeting specific keywords, SEO attracts visitors who are actively searching for your products or services.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <CreditCardIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Cost-Effective</h4>
                            <p className="text-[15px] text-gray-500">Compared to paid advertising, SEO is a cost-effective way to drive long-term, organic traffic to your website.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 lg:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <ZapIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Competitive Edge</h4>
                            <p className="text-[15px] text-gray-500">A strong SEO strategy can set you apart from your competitors and position you as an authority in your industry.</p>
                        </div>
                        <div className="bg-[#faf9f7] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                                <EyeIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[19px] font-extrabold text-[#1a1a2e] mb-3">Increased Visibility</h4>
                            <p className="text-[15px] text-gray-500">SEO helps your website rank higher in search engine results, making it more visible to potential customers.</p>
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
                            Webspires - Your Google Ads Management Services Agency
                        </h2>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-8 max-w-2xl">
                            As one of the leading Google ads agency UK, Webspires manages campaigns to make you stand out in the market. We are a trusted Google ads marketing agency in the UK. Our team consists of Google Ads experts who offer performance-driven solutions. Our Google Ads management services benefit by;
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Create targeted campaigns based on audience demographics and search intent</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Maximized returns on investment in campaigns</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Track and provide detailed reports and insights</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Personalized Google Ads services that align with business needs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── GOOGLE ADS AGENCY SERVICES ── */}
            <section className="py-20 lg:py-24 bg-[#faf9f7]">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Webspires Google Ads Agency Services
                        </h2>
                        <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
                            Webspires as a Google Ads marketing agency covers each step of the Google Ads campaign. From developing strategies to tracking results, our Google Ads experts handle everything and ensure an effective campaign.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CompassIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Google Ads Strategy</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Google Ads Management services begin with creating a targeted Google Ads strategy and planning process. This includes:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Understanding competitor analysis</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Identifying performing keywords</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Defining objectives</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <PenToolIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Creating Campaign And Setup</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires is a specialized Google Ads Agency that creates ads that bring into line with the targeted audience. Our campaign services include:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Copywriting Ads</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Add extensions to Ads</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Optimizing landing pages for high conversion rates.</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <UsersIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Remarketing Strategies</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Webspires Google advertising agency implements different strategies to get more reach. It uses a remarketing strategy to re-engage visitors. This ensures your brand remains in the mind of the targeted audience:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> It customizes ads by segmenting the audience</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> It shows relevant ads to users.</li>
                            </ul>
                        </div>

                        {/* Service Item */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <TrendingUpIcon className="w-7 h-7" />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-3">Creating Campaign And Setup (Monitoring & Optimization)</h4>
                            <p className="text-[15px] text-gray-500 mb-5">Our Google Ads experts continuously monitor and optimize performance by using advanced tools. Webspires Google Ads management services comprise of:</p>
                            <ul className="space-y-2 text-[14px] text-gray-600 font-medium">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Managing and adjusting bids</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> A/B testing</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> Tracking and regulating performance metrics</li>
                            </ul>
                        </div>

                        {/* Service Item - Spans Across Bottom */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 md:col-span-2 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <BarChart3 className="w-8 h-8" />
                                </div>
                                <h4 className="text-[20px] font-extrabold text-[#1a1a2e] mb-2">Comprehensive Analytics</h4>
                                <p className="text-[14px] text-gray-500">Webspires Google Ads management services work with transparency by providing detailed analytics and reports.</p>
                            </div>
                            <div className="w-full md:w-2/3">
                                <ul className="space-y-4 text-[15px] text-gray-600 font-medium bg-[#faf9f7] p-6 rounded-2xl">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> It provides performance reports every month</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> It provides insights and recommendations for future</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> It monitors progress and track goals.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERT PROCESS ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] max-w-3xl leading-tight">
                            Our Google Ads Experts Ensure Your Paid Search Campaign's Success
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="relative pl-0 lg:pl-10">
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100">
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                            </div>
                            <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Keyword Research & Competitor Ads Analysis</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Selecting the perfect keywords is fundamental to your success. Our meticulous keyword research and competition analysis ensure your Google Ads campaign drives sales and delivers a positive ROI.</p>
                        </div>
                        <div className="relative pl-0 lg:pl-10">
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100">
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                            </div>
                            <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Campaign Creation & Ad Copy Creation</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">We manage every aspect of your Ads campaign, from setup and ad copy creation to configuring settings. We craft multiple ad variations, continually refining them to maximize conversion rates.</p>
                        </div>
                        <div className="relative pl-0 lg:pl-10">
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100">
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                            </div>
                            <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Detailed Reporting & Team Meetings</h4>
                            <p className="text-[15px] text-gray-500 leading-relaxed">Receive a comprehensive monthly report detailing Ads Manager activities and the upcoming month's plan. Additionally, schedule a review call with our team and yours for further discussion</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── EXPECTATIONS ── */}
             <section className="py-20 lg:py-24 bg-[#faf9f7] border-t border-gray-100">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1a1a2e] mb-4">
                            Some Of What You Can Expect…
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Full Marketing Audit</h4>
                            <p className="text-[14px] text-gray-500">Gain a comprehensive overview of your current marketing strategies and performance. Identify strengths, weaknesses, and opportunities for growth, ensuring your business stays ahead in a competitive landscape.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Strategy Creation</h4>
                            <p className="text-[14px] text-gray-500">Develop tailored marketing strategies that align with your business goals. Our expert team will craft a detailed plan to guide your marketing efforts and drive measurable results.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Creative Design</h4>
                            <p className="text-[14px] text-gray-500">Bring your brand to life with visually stunning and engaging designs. From logos to marketing materials, our creative team will ensure your brand stands out and resonates with your target audience.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">A/B Testing</h4>
                            <p className="text-[14px] text-gray-500">Optimize your marketing campaigns through rigorous A/B testing. Identify the most effective strategies and elements, ensuring you achieve the highest conversion rates and ROI.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Accurate Tracking</h4>
                            <p className="text-[14px] text-gray-500">Utilize precise tracking tools to monitor your marketing campaigns' performance. Gain valuable insights into customer behavior and campaign effectiveness, enabling data-driven decision-making.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Performance Reporting</h4>
                            <p className="text-[14px] text-gray-500">Receive detailed and transparent reports on your marketing activities. Understand the impact of your campaigns with clear metrics and insights, helping you make informed decisions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Improved ROI / ROAS</h4>
                            <p className="text-[14px] text-gray-500">Increase your return on investment (ROI) and return on ad spend (ROAS) with targeted and efficient marketing strategies. Our approach ensures every dollar spent delivers the highest possible returns.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-3">Conversion Rate Optimisation</h4>
                            <p className="text-[14px] text-gray-500">Enhance your website and marketing efforts to maximize conversion rates. Our specialists will identify and implement strategies to turn more visitors into customers, boosting your bottom line.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARTNER WITH US ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-primary text-white rounded-[32px] p-10 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3"></div>
                        
                        <div className="w-full lg:w-1/2 relative z-10">
                            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border-white/40 bg-white/10">
                                Partner With Us - Google Ads Agency Near Me
                            </span>
                            <h2 className="text-[32px] sm:text-[42px] font-extrabold leading-tight mb-6">
                                Why Choose Us
                            </h2>
                            <p className="text-white/90 text-[18px] leading-relaxed mb-8">
                                Webspires is a leading and trusted Google Ads agency UK that your business should choose because:
                            </p>
                            <ul className="space-y-4 text-[16px] font-medium">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> It is a local Google ads agency in the UK</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> It has Google Ads, expert team</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-white/80" /> A committed Google Ads manager team with proven results</li>
                            </ul>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <h3 className="text-[28px] font-bold mb-4">READY TO GROW YOUR BUSINESS?</h3>
                            <p className="text-white/80 mb-8 max-w-sm mx-auto">Contact Us to work with a result-given Digital marketing agency</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://call.webspires.co.uk?utm_source=googleads"
                                    target="_blank" rel="noopener noreferrer"
                                    className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                    Book Your Demo
                                </a>
                                <a href="tel:+441615241569" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                                    +44 161 524 1569
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OtherServicesSection currentSlug="google-ads-management" />
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
function ZapIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
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
function EyeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
    )
}
