'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ faqs = [] }) {
    const [open, setOpen] = useState(0);

    if (!faqs.length) return null;

    return (
        <section
            aria-labelledby="faq-heading"
            className="mt-14 border-t border-gray-100 pt-12"
        >
            <h2
                id="faq-heading"
                className="mb-7 text-[24px] font-extrabold text-[#1a1a2e] sm:text-[28px]"
            >
                Frequently Asked Questions
            </h2>

            <div className="space-y-3">
                {faqs.map((f, i) => {
                    const isOpen = open === i;
                    return (
                        <div
                            key={i}
                            className="overflow-hidden rounded-xl border border-gray-100 bg-[#faf9f7]"
                        >
                            <h3>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpen(isOpen ? -1 : i)}
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
                                        {isOpen ? (
                                            <Minus size={15} />
                                        ) : (
                                            <Plus size={15} />
                                        )}
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
        </section>
    );
}
