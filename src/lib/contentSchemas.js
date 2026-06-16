// src/lib/contentSchemas.js
// Shared (client + server) field-schema descriptors for every editable
// content type. Pure data + pure helpers ONLY — no `server-only`, no
// mongoose, no DB imports — so the admin form (client) and the server
// actions can both import it.
//
// Field types:
//   text       — single line
//   textarea   — multi line
//   color      — hex colour (rendered with a swatch)
//   stringList — array of plain strings (one per line)
//   objectList — array of objects with `subfields`

/** Pure slugifier usable on client and server. */
export function slugify(input = '') {
    return String(input)
        .toLowerCase()
        .trim()
        .replace(/['"]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 90);
}

const FAQ_SUB = [
    { name: 'q', label: 'Question', type: 'text' },
    { name: 'a', label: 'Answer', type: 'textarea' },
];

const TITLE_DESC_SUB = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'desc', label: 'Description', type: 'textarea' },
];

const LINK_SUB = [
    { name: 'label', label: 'Label', type: 'text' },
    { name: 'href', label: 'Link (href)', type: 'text' },
];

export const CONTENT_TYPES = {
    services: {
        key: 'services',
        label: 'Services',
        singular: 'Service',
        titleField: 'title',
        slugRequired: true,
        slugFromField: 'title',
        basePath: '/services',
        indexPath: '/services',
        // Route-group-prefixed: required for revalidatePath(path, 'page')
        // because these pages live under the (site) route group.
        dynamicPath: '/(site)/services/[slug]',
        // Dedicated (hand-built) service pages that also cross-link via
        // OtherServicesSection — revalidated so their links stay fresh.
        extraPaths: [
            '/services/seo',
            '/services/google-ads-management',
            '/services/meta-ads-management',
            '/services/shopify-development',
            '/services/crm-development',
            '/services/social-media-management',
            '/services/google-guarantee',
        ],
        fields: [
            { name: 'title', label: 'Title', type: 'text', required: true },
            { name: 'shortTitle', label: 'Short title', type: 'text' },
            { name: 'tagline', label: 'Tagline', type: 'text' },
            { name: 'category', label: 'Category', type: 'text' },
            { name: 'color', label: 'Accent colour', type: 'color' },
            { name: 'bg', label: 'Background colour', type: 'color' },
            {
                name: 'iconPath',
                label: 'Icon SVG path',
                type: 'textarea',
                hint: 'The `d` attribute of a 24×24 SVG path.',
            },
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            {
                name: 'metaDescription',
                label: 'Meta description',
                type: 'textarea',
            },
            { name: 'heroHeading', label: 'Hero heading', type: 'text' },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea' },
            { name: 'intro', label: 'Intro paragraph', type: 'textarea' },
            {
                name: 'stats',
                label: 'Stats',
                type: 'objectList',
                subfields: [
                    { name: 'value', label: 'Value', type: 'text' },
                    { name: 'label', label: 'Label', type: 'text' },
                ],
            },
            {
                name: 'process',
                label: 'Process steps',
                type: 'objectList',
                subfields: [
                    { name: 'step', label: 'Step (e.g. 01)', type: 'text' },
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },
            {
                name: 'features',
                label: 'Features',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'faqs',
                label: 'FAQs',
                type: 'objectList',
                subfields: FAQ_SUB,
            },
        ],
    },

    industries: {
        key: 'industries',
        label: 'Industries',
        singular: 'Industry',
        titleField: 'name',
        slugRequired: true,
        slugFromField: 'name',
        basePath: '/industries',
        indexPath: '/industries',
        dynamicPath: '/(site)/industries/[slug]',
        fields: [
            { name: 'name', label: 'Name', type: 'text', required: true },
            { name: 'label', label: 'Label (plural)', type: 'text' },
            { name: 'category', label: 'Category', type: 'text' },
            { name: 'targetKeyword', label: 'Target keyword', type: 'text' },
            { name: 'color', label: 'Accent colour', type: 'color' },
            {
                name: 'iconPath',
                label: 'Icon SVG path',
                type: 'textarea',
                hint: 'The `d` attribute of a 24×24 SVG path.',
            },
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            {
                name: 'metaDescription',
                label: 'Meta description',
                type: 'textarea',
            },
            { name: 'heroHeading', label: 'Hero heading', type: 'text' },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea' },
            {
                name: 'painPoints',
                label: 'Pain points',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'channels',
                label: 'Recommended channels',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'platforms',
                label: 'Platforms (optional)',
                type: 'objectList',
                subfields: [
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },
            {
                name: 'searchOpportunities',
                label: 'Search opportunities',
                type: 'stringList',
            },
            {
                name: 'competitorInsight',
                label: 'Competitor insight',
                type: 'textarea',
            },
            {
                name: 'roadmap',
                label: '90-day roadmap',
                type: 'objectList',
                subfields: [
                    { name: 'phase', label: 'Phase', type: 'text' },
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },
            {
                name: 'servicesUsed',
                label: 'Services used',
                type: 'objectList',
                subfields: LINK_SUB,
            },
            {
                name: 'faqs',
                label: 'FAQs',
                type: 'objectList',
                subfields: FAQ_SUB,
            },
            {
                name: 'proofPoints',
                label: 'Proof points (optional override)',
                type: 'stringList',
                hint: 'Leave empty to use the shared default proof points.',
            },
            {
                name: 'pricingFactors',
                label: 'Pricing factors (optional override)',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
                hint: 'Leave empty to use the shared default pricing factors.',
            },
        ],
    },

    locations: {
        key: 'locations',
        label: 'Locations',
        singular: 'Location',
        titleField: 'city',
        slugRequired: true,
        slugFromField: 'city',
        basePath: '/locations',
        indexPath: '/locations',
        dynamicPath: '/(site)/locations/[slug]',
        fields: [
            { name: 'city', label: 'City', type: 'text', required: true },
            { name: 'region', label: 'Region', type: 'text' },
            {
                name: 'localAreas',
                label: 'Local areas',
                type: 'stringList',
            },
            { name: 'targetKeyword', label: 'Target keyword', type: 'text' },
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            {
                name: 'metaDescription',
                label: 'Meta description',
                type: 'textarea',
            },
            { name: 'heroHeading', label: 'Hero heading', type: 'text' },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea' },
            {
                name: 'localProblems',
                label: 'Local problems',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'localSeoAngle',
                label: 'Local SEO angle',
                type: 'textarea',
            },
            {
                name: 'localIndustries',
                label: 'Local industries',
                type: 'stringList',
            },
            {
                name: 'services',
                label: 'Services',
                type: 'objectList',
                subfields: LINK_SUB,
            },
            {
                name: 'faqs',
                label: 'FAQs',
                type: 'objectList',
                subfields: FAQ_SUB,
            },
        ],
    },

    caseStudyCategories: {
        key: 'caseStudyCategories',
        label: 'Case Study Categories',
        singular: 'Case Study Category',
        titleField: 'name',
        slugRequired: true,
        slugFromField: 'name',
        basePath: '/case-studies',
        indexPath: '/case-studies',
        dynamicPath: '/(site)/case-studies/[slug]',
        fields: [
            { name: 'name', label: 'Name', type: 'text', required: true },
            { name: 'category', label: 'Category', type: 'text' },
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            {
                name: 'metaDescription',
                label: 'Meta description',
                type: 'textarea',
            },
            { name: 'heroHeading', label: 'Hero heading', type: 'text' },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea' },
            { name: 'intro', label: 'Intro paragraph', type: 'textarea' },
            {
                name: 'approach',
                label: 'Approach',
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'measured',
                label: 'What we measure',
                type: 'stringList',
            },
            {
                name: 'relatedServices',
                label: 'Related services',
                type: 'objectList',
                subfields: LINK_SUB,
            },
            {
                name: 'faqs',
                label: 'FAQs',
                type: 'objectList',
                subfields: FAQ_SUB,
            },
        ],
    },

    googleAdsChildren: {
        key: 'googleAdsChildren',
        label: 'Google Ads Services',
        singular: 'Google Ads Service',
        titleField: 'name',
        slugRequired: true,
        slugFromField: 'name',
        basePath: '/services/google-ads-management',
        indexPath: '/services/google-ads-management',
        dynamicPath: '/(site)/services/google-ads-management/[child]',
        paramName: 'child',
        fields: [
            { name: 'name', label: 'Name', type: 'text', required: true },
            { name: 'category', label: 'Category', type: 'text' },
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            {
                name: 'metaDescription',
                label: 'Meta description',
                type: 'textarea',
            },
            { name: 'heroHeading', label: 'Hero heading', type: 'text' },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea' },
            { name: 'intro', label: 'Intro paragraph', type: 'textarea' },
            {
                name: 'included',
                label: "What's included",
                type: 'objectList',
                subfields: TITLE_DESC_SUB,
            },
            {
                name: 'faqs',
                label: 'FAQs',
                type: 'objectList',
                subfields: FAQ_SUB,
            },
        ],
    },

    servicePages: {
        key: 'servicePages',
        label: 'Service Pages',
        singular: 'Service Page',
        titleField: 'h1',
        slugRequired: true,
        slugFromField: 'h1',
        basePath: '/services',
        // Bespoke pages are revalidated by their concrete path on edit.
        indexPath: '/services/crm-development',
        dynamicPath: null,
        fields: [
            { name: 'metaTitle', label: 'Meta title', type: 'text' },
            { name: 'metaDescription', label: 'Meta description', type: 'textarea' },
            { name: 'h1', label: 'H1 heading', type: 'text', required: true },
            { name: 'heroSub', label: 'Hero subheading', type: 'textarea', rows: 4 },
            { name: 'heroChips', label: 'Hero trust chips', type: 'stringList' },

            { name: 's2Heading', label: 'S2 — heading', type: 'text' },
            { name: 's2Definition', label: 'S2 — definition', type: 'textarea', rows: 4 },
            {
                name: 'buildRoutes',
                label: 'S2 — build routes',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },
            { name: 's2Adoption', label: 'S2 — adoption line', type: 'textarea' },

            { name: 's3Heading', label: 'S3 — heading', type: 'text' },
            { name: 's3Intro', label: 'S3 — intro', type: 'textarea' },
            {
                name: 'comparisonRows',
                label: 'S3 — comparison rows',
                type: 'objectList',
                subfields: [
                    { name: 'factor', label: 'Factor', type: 'text' },
                    { name: 'offTheShelf', label: 'Off-the-shelf', type: 'textarea' },
                    { name: 'bespoke', label: 'Bespoke build', type: 'textarea' },
                ],
            },
            { name: 's3Verdict', label: 'S3 — verdict', type: 'textarea', rows: 4 },

            { name: 's4Heading', label: 'S4 — heading', type: 'text' },
            { name: 's4Intro', label: 'S4 — intro', type: 'textarea' },
            {
                name: 'outgrownSigns',
                label: 'S4 — signs',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's5Heading', label: 'S5 — heading', type: 'text' },
            {
                name: 'services',
                label: 'S5 — services',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's6Heading', label: 'S6 — heading', type: 'text' },
            {
                name: 'features',
                label: 'S6 — features',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Feature', type: 'text' },
                    { name: 'outcome', label: 'Outcome', type: 'textarea' },
                ],
            },

            { name: 's7Heading', label: 'S7 — heading', type: 'text' },
            { name: 's7Body', label: 'S7 — body', type: 'textarea', rows: 5 },
            { name: 'integrations', label: 'S7 — integrations', type: 'stringList' },

            { name: 's8Heading', label: 'S8 — heading', type: 'text' },
            { name: 's8Intro', label: 'S8 — intro', type: 'textarea' },
            {
                name: 'migrationSteps',
                label: 'S8 — migration steps',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's9Heading', label: 'S9 — heading', type: 'text' },
            { name: 's9Intro', label: 'S9 — intro', type: 'textarea' },
            {
                name: 'securityPoints',
                label: 'S9 — security points',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's10Heading', label: 'S10 — heading', type: 'text' },
            { name: 's10Intro', label: 'S10 — intro', type: 'textarea' },
            {
                name: 'processSteps',
                label: 'S10 — process steps',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's11Heading', label: 'S11 — heading', type: 'text' },
            {
                name: 'industries',
                label: 'S11 — industries',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Use case', type: 'textarea' },
                    { name: 'href', label: 'Link (optional)', type: 'text' },
                ],
            },

            { name: 's12Heading', label: 'S12 — heading', type: 'text' },
            { name: 's12Intro', label: 'S12 — intro', type: 'textarea' },
            {
                name: 'costDrivers',
                label: 'S12 — cost drivers',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },
            {
                name: 'pricingBands',
                label: 'S12 — pricing bands',
                type: 'objectList',
                hint: 'Set the Range to a validated £ band (e.g. “£4,000 to £9,000”) when ready.',
                subfields: [
                    { name: 'name', label: 'Tier name', type: 'text' },
                    { name: 'range', label: 'Range / price', type: 'text' },
                    { name: 'includes', label: 'Includes', type: 'textarea' },
                ],
            },
            { name: 's12Note', label: 'S12 — note', type: 'textarea' },

            { name: 's13Heading', label: 'S13 — heading', type: 'text' },
            {
                name: 'whyChoose',
                label: 'S13 — edges',
                type: 'objectList',
                subfields: [
                    { name: 'title', label: 'Title', type: 'text' },
                    { name: 'desc', label: 'Description', type: 'textarea' },
                ],
            },

            { name: 's14Heading', label: 'S14 — heading', type: 'text' },
            { name: 'caseProblem', label: 'S14 — problem', type: 'textarea' },
            { name: 'caseSolution', label: 'S14 — solution', type: 'textarea' },
            { name: 'caseOutcome', label: 'S14 — outcome', type: 'textarea' },
            { name: 'caseMetric', label: 'S14 — highlighted metric (optional)', type: 'text' },
            { name: 'caseNote', label: 'S14 — note', type: 'textarea' },

            { name: 's15Heading', label: 'S15 — CTA heading', type: 'text' },
            { name: 's15Body', label: 'S15 — CTA body', type: 'textarea' },

            { name: 'faqHeading', label: 'FAQ — heading', type: 'text' },
            {
                name: 'faqs',
                label: 'FAQ — items',
                type: 'objectList',
                subfields: [
                    { name: 'q', label: 'Question', type: 'text' },
                    { name: 'a', label: 'Answer', type: 'textarea' },
                ],
            },
        ],
    },

    homeFaqs: {
        key: 'homeFaqs',
        label: 'Home FAQs',
        singular: 'Home FAQ',
        titleField: 'question',
        slugRequired: false,
        slugFromField: 'question',
        basePath: null,
        indexPath: '/',
        dynamicPath: null,
        fields: [
            {
                name: 'question',
                label: 'Question',
                type: 'text',
                required: true,
            },
            {
                name: 'answer',
                label: 'Answer',
                type: 'textarea',
                required: true,
                rows: 4,
            },
        ],
    },
};

export const CONTENT_TYPE_KEYS = Object.keys(CONTENT_TYPES);

export function getContentType(key) {
    return CONTENT_TYPES[key] || null;
}

/**
 * Build a clean `data` object from raw form values, keeping only the
 * fields declared in the descriptor and coercing each to the right
 * shape. Empty optional lists are omitted so falsy checks on the page
 * (e.g. `ind.platforms && …`) keep working.
 */
export function cleanContentData(typeKey, raw = {}) {
    const cfg = CONTENT_TYPES[typeKey];
    if (!cfg) return {};
    const out = {};

    for (const f of cfg.fields) {
        const v = raw[f.name];

        if (f.type === 'stringList') {
            const arr = (Array.isArray(v) ? v : [])
                .map((s) => String(s ?? '').trim())
                .filter(Boolean);
            if (arr.length) out[f.name] = arr;
        } else if (f.type === 'objectList') {
            const rows = (Array.isArray(v) ? v : [])
                .map((row) => {
                    const o = {};
                    for (const sf of f.subfields) {
                        o[sf.name] = String(row?.[sf.name] ?? '').trim();
                    }
                    return o;
                })
                .filter((row) => f.subfields.some((sf) => row[sf.name]));
            if (rows.length) out[f.name] = rows;
        } else {
            // text / textarea / color
            out[f.name] = String(v ?? '').trim();
        }
    }

    return out;
}

/** The human-readable title for a stored item (for admin lists). */
export function contentItemTitle(typeKey, data = {}) {
    const cfg = CONTENT_TYPES[typeKey];
    if (!cfg) return '';
    return String(data[cfg.titleField] || data.title || data.name || '').trim();
}
