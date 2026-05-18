'use client';

import { useState } from 'react';
import { homeFaqs } from '@/data/homeFaqs';

export default function FaqHome() {
    const [open, setOpen] = useState(0);

    return (
        <section
            aria-labelledby="home-faq-heading"
            className="bg-white py-16 lg:py-24"
        >
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                        FAQ
                    </span>
                    <h2
                        id="home-faq-heading"
                        className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-tight"
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-3">
                    {homeFaqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={f.question}
                                className="overflow-hidden rounded-xl border border-gray-100 bg-[#faf9f7]"
                            >
                                <h3>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() =>
                                            setOpen(isOpen ? -1 : i)
                                        }
                                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                                    >
                                        <span className="text-[15px] font-bold text-[#1a1a2e]">
                                            {f.question}
                                        </span>
                                        <span
                                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-white transition-colors ${
                                                isOpen
                                                    ? 'bg-primary'
                                                    : 'bg-[#1a1a2e]'
                                            }`}
                                        >
                                            <svg
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                aria-hidden="true"
                                            >
                                                {isOpen ? (
                                                    <path
                                                        d="M5 12h14"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                    />
                                                ) : (
                                                    <path
                                                        d="M12 5v14M5 12h14"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                    />
                                                )}
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    className={`grid transition-all duration-200 ${
                                        isOpen
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-[14px] leading-relaxed text-gray-600">
                                            {f.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
