import Link from 'next/link'
import { getContentItems } from '@/lib/content'

export default async function OtherServicesSection({ currentSlug }) {
    // Exclude current slug and take the top 3 remaining services to cross-link
    const servicesData = await getContentItems('services')
    const otherServices = servicesData.filter(s => s.slug !== currentSlug && s.slug !== 'web-design').slice(0, 3)

    return (
        <section className="bg-[#faf9f7] py-16 lg:py-20 border-t border-gray-100">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[22px] font-extrabold text-[#1a1a2e]">Explore Other Services</h2>
                    <Link href="/services" className="text-[13px] font-bold text-primary hover:underline tracking-wide">
                        View All →
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {otherServices.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`}
                            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 no-underline">
                            <p className="text-[11px] font-extrabold uppercase tracking-widest mb-1" style={{ color: s.color }}>
                                {s.category}
                            </p>
                            <h3 className="text-[15px] font-extrabold text-[#1a1a2e] mb-1.5 group-hover:text-primary transition-colors duration-200">
                                {s.title}
                            </h3>
                            <p className="text-[13px] text-gray-400">{s.tagline}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
