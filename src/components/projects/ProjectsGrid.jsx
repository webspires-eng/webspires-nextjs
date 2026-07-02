import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsGrid({ projects = [] }) {
    return (
        <section id="projects-grid" aria-labelledby="projects-grid-heading" className="bg-[#faf9f7] py-16 lg:py-24">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

                {/* Result count */}
                <div className="mb-8">
                    <h2 id="projects-grid-heading" className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">
                        Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
                    </h2>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.slug}
                            id={`project-${project.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                        >
                            {/* Project screenshot → detail page */}
                            <Link
                                href={`/projects/${project.slug}`}
                                aria-label={`View the ${project.title} case study`}
                                className="block relative h-48 overflow-hidden bg-gray-100"
                            >
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} website screenshot`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : null}
                                {/* Category badge */}
                                {project.category ? (
                                    <span className="absolute top-3 left-3 bg-[#1a1a2e]/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10 z-10">
                                        {project.category}
                                    </span>
                                ) : null}
                                {/* View overlay */}
                                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center z-10">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#1a1a2e] text-[12px] font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
                                        View Project
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </span>
                            </Link>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-[16px] font-extrabold text-[#1a1a2e] mb-2 leading-tight">
                                    <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors no-underline">
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                {project.tags?.length ? (
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                {/* Result + Location */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">Result</p>
                                        <p className="text-[13px] font-extrabold" style={{ color: project.resultColor || '#EE314F' }}>
                                            {project.result}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">Location</p>
                                        <p className="text-[12px] font-semibold text-gray-500">{project.location}</p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between pt-4 mt-1">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary hover:underline no-underline"
                                    >
                                        View project
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-400 hover:text-[#1a1a2e] transition-colors"
                                        >
                                            Live site
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-14 text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-gray-500 text-[15px]">
                            These are just a sample of our 500+ completed projects. Want to see work in your industry?
                        </p>
                        <a
                            id="projects-contact-link"
                            href="https://call.webspires.co.uk?utm_source=projectspage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[14px] tracking-wide px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Discuss Your Project
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
