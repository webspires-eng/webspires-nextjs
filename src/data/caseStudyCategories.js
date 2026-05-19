// src/data/caseStudyCategories.js — case study category landing pages.
// NOTE: deliberately no fabricated client metrics. These pages explain the
// type of work, approach, and what we measure. Individual published case
// studies can be added per category as client permissions allow.

export const caseStudyCategories = [
    {
        slug: 'google-ads',
        name: 'Google Ads',
        category: 'Paid Media',
        metaTitle: 'Google Ads Case Studies | Webspires UK',
        metaDescription: 'How Webspires approaches Google Ads campaigns for UK businesses — the method, what we optimise, and the metrics we hold ourselves to.',
        heroHeading: 'Google Ads Results, Done the Honest Way',
        heroSub: 'How we approach Google Ads for UK businesses — and the metrics we measure ourselves against, not vanity numbers.',
        intro: 'We are building this section with verified, client-approved Google Ads results. Rather than publish inflated figures, this page explains exactly how we run paid campaigns and the outcomes we focus on — so you can judge the approach before you ever speak to us.',
        approach: [
            { title: 'Audit First', desc: 'We start by finding wasted spend, tracking gaps, and structural problems before changing anything.' },
            { title: 'Profit, Not Clicks', desc: 'Campaigns are structured around leads and revenue, not impressions or click volume.' },
            { title: 'Tight Tracking', desc: 'Accurate conversion tracking so every optimisation is based on real outcomes.' },
            { title: 'Continuous Optimisation', desc: 'Ongoing search term, bid, and landing page work to lower cost per lead over time.' },
        ],
        measured: ['Cost per lead', 'Conversion rate', 'Return on ad spend', 'Wasted spend reduced', 'Lead quality'],
        relatedServices: [
            { label: 'Google Ads Management', href: '/services/google-ads-management' },
            { label: 'Google Ads Audit', href: '/services/google-ads-management/google-ads-audit' },
            { label: 'Landing Page Optimisation', href: '/services/google-ads-management/landing-page-optimisation' },
            { label: 'Conversion Rate Optimisation', href: '/services/conversion-rate-optimisation' },
        ],
        faqs: [
            { q: 'Why no big numbers on this page?', a: 'We only publish results we can verify and that clients approve. We would rather show our method than inflated figures.' },
            { q: 'Can I see relevant examples?', a: 'Yes — on a call we can talk through relevant, anonymised examples for your sector where appropriate.' },
        ],
    },
    {
        slug: 'ecommerce',
        name: 'Ecommerce',
        category: 'Online Retail',
        metaTitle: 'Ecommerce Case Studies | Webspires UK',
        metaDescription: 'How Webspires grows UK ecommerce stores — the approach across SEO, paid media, and conversion, and the revenue metrics we focus on.',
        heroHeading: 'Ecommerce Growth, Measured by Revenue',
        heroSub: 'How we help UK online stores grow profitably across SEO, paid media, and conversion — and what we hold ourselves to.',
        intro: 'This section is being built with verified, client-approved ecommerce results. In the meantime, here is exactly how we approach store growth and the outcomes we measure — so the method speaks for itself.',
        approach: [
            { title: 'Revenue Focus', desc: 'Every channel is tied to profitable revenue, not traffic or vanity metrics.' },
            { title: 'Feed & Category Work', desc: 'Strong product feeds and category SEO that capture high-intent shoppers.' },
            { title: 'Conversion Lifts', desc: 'Faster pages, clearer products, and checkout improvements to raise conversion rate.' },
            { title: 'Retention', desc: 'Email and automation flows that recover carts and increase repeat purchases.' },
        ],
        measured: ['Revenue', 'Return on ad spend', 'Conversion rate', 'Average order value', 'Customer retention'],
        relatedServices: [
            { label: 'Shopify Development', href: '/services/shopify-development' },
            { label: 'Google Shopping Ads', href: '/services/google-ads-management/google-shopping-ads' },
            { label: 'SEO Services', href: '/services/seo' },
            { label: 'Conversion Rate Optimisation', href: '/services/conversion-rate-optimisation' },
        ],
        faqs: [
            { q: 'Which platforms do you support?', a: 'Mainly Shopify and WooCommerce, though the growth approach applies to most ecommerce platforms.' },
            { q: 'Do you focus on traffic or sales?', a: 'Profitable sales. Traffic only matters when it converts at a healthy return.' },
        ],
    },
    {
        slug: 'seo',
        name: 'SEO',
        category: 'Search & Organic',
        metaTitle: 'SEO Case Studies | Webspires UK',
        metaDescription: 'How Webspires builds sustainable organic growth for UK businesses — the SEO method and the metrics that actually matter.',
        heroHeading: 'SEO Growth That Compounds',
        heroSub: 'How we build durable organic visibility for UK businesses — and the metrics we judge success by.',
        intro: 'We are adding verified, client-approved SEO results to this section. For now, this page sets out our SEO method and the outcomes we measure, so you can assess the approach honestly.',
        approach: [
            { title: 'Technical Foundation', desc: 'Fix crawl, speed, and structure issues that quietly cap rankings.' },
            { title: 'Intent-Led Content', desc: 'Target the searches that lead to enquiries, not just high volume.' },
            { title: 'Authority Building', desc: 'Earn relevant links and topical depth that sustain rankings.' },
            { title: 'Measured Reporting', desc: 'Clear reporting on rankings, organic traffic, and leads — no jargon.' },
        ],
        measured: ['Organic traffic', 'Keyword rankings', 'Qualified leads', 'Visibility vs competitors', 'Conversions from organic'],
        relatedServices: [
            { label: 'SEO Services', href: '/services/seo' },
            { label: 'Conversion Rate Optimisation', href: '/services/conversion-rate-optimisation' },
            { label: 'Web Design', href: '/services/web-design' },
        ],
        faqs: [
            { q: 'How long does SEO take?', a: 'Meaningful gains typically build over 3–6 months and compound from there with consistent work.' },
            { q: 'Do you use white-hat methods only?', a: 'Yes. Every tactic is Google-compliant and built to last, not to risk a penalty.' },
        ],
    },
    {
        slug: 'local-business-growth',
        name: 'Local Business Growth',
        category: 'Local Marketing',
        metaTitle: 'Local Business Growth Case Studies | Webspires UK',
        metaDescription: 'How Webspires helps UK local businesses get more calls and enquiries — the local SEO and reviews method, and what we measure.',
        heroHeading: 'Local Growth That Drives Real Enquiries',
        heroSub: 'How we help UK local businesses win the map pack and turn local search into calls and bookings.',
        intro: 'Verified, client-approved local results are being added here. Until then, this page explains our local growth method and the outcomes we measure, so the approach is clear upfront.',
        approach: [
            { title: 'Profile & Listings', desc: 'Optimised Google Business Profile and consistent local listings.' },
            { title: 'Local SEO', desc: 'Ranking for "near me" and area searches with genuine local relevance.' },
            { title: 'Reviews System', desc: 'A simple, consistent way to earn and respond to real customer reviews.' },
            { title: 'Lead Capture', desc: 'Fast, trustworthy pages with clear calls that turn visits into enquiries.' },
        ],
        measured: ['Calls and enquiries', 'Map pack visibility', 'Local rankings', 'Review growth', 'Cost per enquiry'],
        relatedServices: [
            { label: 'SEO Services', href: '/services/seo' },
            { label: 'Google Guarantee', href: '/services/google-guarantee' },
            { label: 'Web Design', href: '/services/web-design' },
            { label: 'Google Ads Management', href: '/services/google-ads-management' },
        ],
        faqs: [
            { q: 'What is the fastest local win?', a: 'Usually Google Business Profile optimisation plus a steady flow of genuine reviews.' },
            { q: 'Do you work with businesses nationwide?', a: 'Yes — we help local businesses across the UK, tailored to each area served.' },
        ],
    },
];

export function getCaseStudyCategory(slug) {
    return caseStudyCategories.find((c) => c.slug === slug) || null;
}
