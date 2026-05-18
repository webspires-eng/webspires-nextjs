'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm({ source = 'Contact Page' }) {
    const [state, action, pending] = useActionState(submitContact, null);

    if (state?.success) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <svg
                        className="w-8 h-8 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12l5 5L19 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#1a1a2e] mb-2">
                    Message Sent!
                </h3>
                <p className="text-gray-500 text-[15px] max-w-sm">
                    Thanks for reaching out. We&apos;ll get back to you within
                    24 hours.
                </p>
            </div>
        );
    }

    return (
        <form action={action} className="space-y-6">
            <input type="hidden" name="source" value={source} />
            {/* Honeypot — hidden from humans */}
            <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-[14px] font-bold text-[#1a1a2e]"
                    >
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#faf9f7] border border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-[14px] font-bold text-[#1a1a2e]"
                    >
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="example@mail.com"
                        className="w-full bg-[#faf9f7] border border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="phone"
                    className="text-[14px] font-bold text-[#1a1a2e]"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="0712 312 3456"
                    className="w-full bg-[#faf9f7] border border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="text-[14px] font-bold text-[#1a1a2e]"
                >
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full bg-[#faf9f7] border border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-y"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="file"
                    className="text-[14px] font-bold text-[#1a1a2e]"
                >
                    Attachment (optional, Max 10MB)
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl bg-[#faf9f7] hover:bg-gray-50 transition-colors p-6 flex flex-col items-center justify-center text-center cursor-pointer group">
                    <svg
                        className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors mb-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    <p className="text-[14px] text-gray-500">
                        <span className="font-semibold text-primary">
                            Click to upload
                        </span>{' '}
                        or drag and drop
                    </p>
                    <p className="text-[12px] text-gray-400 mt-1">
                        PDF, DOC, DOCX, PNG, JPG
                    </p>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                </div>
            </div>

            {state?.error && (
                <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-[14px] text-red-700"
                >
                    {state.error}
                </p>
            )}

            <button
                type="submit"
                disabled={pending}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-[16px] px-8 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-60"
            >
                {pending ? 'Sending…' : 'Send Message'}
                {!pending && (
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                )}
            </button>
            <p className="text-center text-[13px] text-gray-400 mt-4">
                By submitting this form, you agree to our{' '}
                <Link
                    href="/privacy-policy"
                    className="underline hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </form>
    );
}
