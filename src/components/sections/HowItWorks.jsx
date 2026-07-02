const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We learn your business, goals, audience and market and what success actually looks like for you.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        color: '#EE314F',
    },
    {
        number: '02',
        title: 'Audit',
        description: 'We analyse your website, competitors, keywords, tracking and conversion path to find the highest-impact opportunities.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M5 5v22h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 19l5-5 4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: '#f59e0b',
    },
    {
        number: '03',
        title: 'Strategy',
        description: 'We build a prioritised roadmap based on business impact not a random list of marketing tasks.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M16 4l3 9h9l-7.3 5.3 2.8 8.7L16 21.5 9.5 27l2.8-8.7L5 13h9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: '#8b5cf6',
    },
    {
        number: '04',
        title: 'Build',
        description: 'We improve your website, campaigns, content, SEO and tracking foundation with clean, conversion-focused execution.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M10 10l-6 6 6 6M22 10l6 6-6 6M18 6l-4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: '#3b82f6',
    },
    {
        number: '05',
        title: 'Launch',
        description: 'We go live with clean tracking, proper targeting and conversion-focused assets zero downtime.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M16 4s7 3 7 12c0 4-3 8-7 11-4-3-7-7-7-11 0-9 7-12 7-12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="16" cy="14" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        color: '#10b981',
    },
    {
        number: '06',
        title: 'Optimise & Report',
        description: 'We test, refine and scale what works with clear monthly reporting on actions, results and next steps.',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M6 26V14M14 26V8M22 26v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 9l6-4 5 3 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: '#0ea5e9',
    },
]

export default function HowItWorks() {
    return (
        <section id="process" aria-labelledby="process-heading" className="bg-[#faf9f7] pt-12 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 lg:pb-28">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Our Process
                    </span>
                    <h2 id="process-heading" className="text-[28px] sm:text-[32px] lg:text-[44px] font-extrabold text-[#1a1a2e] leading-tight mb-4">
                        How We Turn Ideas Into<br />
                        <span className="text-primary">Measurable Results</span>
                    </h2>
                    <p className="text-gray-500 text-[15px] sm:text-[17px] max-w-[560px] mx-auto leading-relaxed">
                        A proven 6-step, data-led process that consistently delivers measurable outcomes for businesses of every size.
                    </p>
                </div>

                {/* Steps desktop: 3 across, mobile: stacked */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                id={`process-step-${i + 1}`}
                                className="group relative flex flex-col items-center text-center lg:items-center"
                            >
                                {/* Number circle */}
                                <div
                                    className="relative z-10 w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ background: step.color, color: 'white' }}
                                >
                                    {step.icon}
                                    {/* Step number badge */}
                                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1a1a2e] text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
                                        {i + 1}
                                    </span>
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 w-full">
                                    <p className="text-[11px] font-extrabold uppercase tracking-widest mb-2" style={{ color: step.color }}>
                                        Step {step.number}
                                    </p>
                                    <h3 className="text-[17px] font-extrabold text-[#1a1a2e] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-14 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d5e] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-[22px] lg:text-[26px] font-extrabold text-white mb-2">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-400 text-[15px]">
                            Get a free consultation and custom proposal no obligation.
                        </p>
                    </div>
                    <a
                        id="process-cta"
                        href="#contact"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm tracking-wide px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        Start Your Project
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
