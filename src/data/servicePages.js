// src/data/servicePages.js -rich, bespoke service-page records.
// Seed + runtime fallback for the `servicePages` content type, which
// drives hand-built service pages (e.g. /services/crm-development) while
// staying fully editable from /admin/content. Each record is a flat
// object so it maps 1:1 to the contentSchemas descriptor fields.

export const servicePagesData = [
    {
        slug: 'crm-development',

        // Meta
        metaTitle:
            'Custom CRM Development Company UK | Bespoke CRM Software | Webspires',
        metaDescription:
            'Bespoke CRM development in the UK. We build custom CRM software you own outright, no per-seat fees, with integrations, migration, and GDPR-ready security. Book a free CRM consultation.',

        // Hero (Section 1)
        h1: 'Custom CRM Development Services for Growing UK Businesses',
        heroSub:
            'Run sales, marketing, and service from one system you own outright, with no per-seat fees and no rigid off-the-shelf limits. Webspires designs and builds bespoke CRM software around the way your team actually works, then migrates your data, integrates your existing tools, and supports the system long term. Our build moves faster through modern AI tooling, our pricing stays honest for SMEs, and the team that builds your CRM also drives the leads it captures.',
        heroChips: [
            'UK-based build team',
            'Full ownership, no per-seat fees',
            'GDPR-ready security',
            'Integrations and migration included',
        ],

        // Section 2 -definition
        s2Heading: 'What Custom CRM Development Means',
        s2Definition:
            'Custom CRM development is the process of designing and building customer relationship management software around one business’s specific sales, marketing, and service workflows, rather than forcing the business into a generic platform. The result is a tailored system that matches how a team sells, stores customer data in one place, and grows with the business.',
        buildRoutes: [
            {
                title: 'Fully bespoke build',
                desc: 'A system built from the ground up around your processes. Right for proprietary workflows that no off-the-shelf product matches.',
            },
            {
                title: 'Platform customisation',
                desc: 'Deep configuration and custom modules on Salesforce, HubSpot, or Microsoft Dynamics. Right when a mature platform covers most needs and you want to extend it.',
            },
            {
                title: 'Low-code or no-code assembly',
                desc: 'Faster assembly on a low-code foundation. Right for a lean first version that proves the model before a heavier investment.',
            },
        ],
        s2Adoption:
            'Across 2026, more UK SMEs move off shared spreadsheets and per-seat subscriptions toward owned systems that fit their data and their margins.',

        // Section 3 -build vs buy
        s3Heading:
            'Custom CRM vs Off-the-Shelf: Salesforce, HubSpot and Dynamics Compared',
        s3Intro:
            'Off-the-shelf platforms win for standard sales processes and a fast start. A bespoke build wins on fit, ownership, and cost at scale. Read the comparison, then judge against your own situation.',
        comparisonRows: [
            {
                factor: 'Cost model',
                offTheShelf:
                    'Per-seat subscription that recurs every month and grows with headcount.',
                bespoke: 'One-time build you own, with an optional fixed care plan.',
            },
            {
                factor: 'Fit to non-standard workflows',
                offTheShelf:
                    'Strong for standard sales processes, rigid for proprietary ones.',
                bespoke: 'Built around your exact workflow, not the other way round.',
            },
            {
                factor: 'Scalability cost',
                offTheShelf: 'Cost climbs with every new user and premium tier.',
                bespoke: 'Add users and modules without per-seat penalties.',
            },
            {
                factor: 'Data and source-code ownership',
                offTheShelf: 'Vendor holds the platform and the code.',
                bespoke: 'You own the data and the source code outright.',
            },
            {
                factor: 'Lock-in risk',
                offTheShelf:
                    'Switching means migration and retraining on the vendor’s terms.',
                bespoke: 'No vendor lock-in. The system stays yours.',
            },
        ],
        s3Verdict:
            'Choose off-the-shelf when your process is standard and you need to move now. Choose a bespoke build when workflows are proprietary, per-seat fees compound as the team grows, or the business needs full ownership and integration control. The break-even sits where recurring subscription and per-seat costs over three to four years pass the one-time cost of a system you own. Work out that line for your headcount, then decide.',

        // Section 4 -signs
        s4Heading: 'Signs Your Business Has Outgrown Off-the-Shelf CRM',
        s4Intro:
            'UK SMEs in 2026 face rising SaaS subscription costs and tighter expectations on how customer data gets handled. The symptoms below signal that a generic platform now costs more than it returns.',
        outgrownSigns: [
            {
                title: 'Disconnected spreadsheets',
                desc: 'Sales, leads, and customers live across separate sheets and apps. A bespoke CRM centralises every record into one source of truth.',
            },
            {
                title: 'Scattered customer data',
                desc: 'The same customer exists three times across three tools. A custom build deduplicates and unifies the record so the team works from one view.',
            },
            {
                title: 'Per-seat fees climbing',
                desc: 'Every new hire raises the monthly subscription. An owned system removes per-seat fees as the team grows.',
            },
            {
                title: 'Workflow mismatch',
                desc: 'Off-the-shelf stages fight the way your team actually sells. A bespoke build models your real pipeline instead.',
            },
            {
                title: 'Missing integrations',
                desc: 'The CRM does not talk to your ERP or accounting tools, so data gets re-keyed by hand. Custom integration closes that gap.',
            },
            {
                title: 'Poor pipeline visibility',
                desc: 'Forecasting relies on guesswork because deals sit in inboxes. A tailored dashboard surfaces every deal and its stage in real time.',
            },
        ],

        // Section 5 -services
        s5Heading: 'Our Custom CRM Software Development Services',
        services: [
            {
                title: 'Bespoke CRM design and build',
                desc: 'We map your sales, marketing, and service processes, then design and build CRM software around them. The result models your real pipeline, your record structure, and your reporting, so the team adopts it fast and works the way it already thinks.',
            },
            {
                title: 'CRM platform customisation',
                desc: 'We extend Salesforce, HubSpot, and Microsoft Dynamics with custom objects, fields, automations, and modules. The platform stays familiar while the parts that did not fit your business get rebuilt to match it.',
            },
            {
                title: 'CRM integration',
                desc: 'We connect the CRM to the tools you already run through secure APIs. Leads, invoices, orders, and calls flow into one record, so the team stops re-keying data and starts trusting a single source of truth.',
            },
            {
                title: 'CRM data migration',
                desc: 'We move your records from spreadsheets and legacy systems with field mapping, cleansing, and validation. A full backup and a phased cutover keep operations running while the data lands cleanly.',
            },
            {
                title: 'Mobile CRM for field and sales teams',
                desc: 'We build mobile access so field engineers and sales reps update deals, log calls, and check customer history on the move. Records stay current because updating them takes seconds, not a desk and a laptop.',
            },
            {
                title: 'CRM customisation and new modules',
                desc: 'As the business shifts, we add modules, automations, and reports on top of the live system. The CRM grows with you instead of forcing a rebuild every time the process changes.',
            },
            {
                title: 'Ongoing support and maintenance',
                desc: 'We run updates, monitoring, and fixes on an optional care plan. Day-to-day operations stay smooth, and a named team answers directly when something needs attention.',
            },
        ],

        // Section 6 -features
        s6Heading: 'Core Features We Build Into Every Custom CRM',
        features: [
            { title: 'Contact management', outcome: 'Every interaction sits on one record, so the team never loses context on a customer.' },
            { title: 'Lead management and lead scoring', outcome: 'Hot leads surface first, so reps work the prospects most likely to close.' },
            { title: 'Sales pipeline and deal tracking', outcome: 'Each deal shows its stage and value, so forecasting rests on data, not guesswork.' },
            { title: 'Workflow and task automation', outcome: 'Follow-ups and tasks trigger automatically, so leads stop slipping through the cracks.' },
            { title: 'Reporting and KPI dashboards', outcome: 'Live dashboards expose performance, so decisions land faster and with evidence.' },
            { title: 'Role-based access and permissions', outcome: 'Sensitive data stays restricted to the right roles, so customer information stays protected.' },
            { title: 'Multi-channel communication', outcome: 'Email, SMS, and calls log against the record, so the full conversation lives in one place.' },
            { title: 'Mobile access', outcome: 'Field and sales teams update records anywhere, so the data stays current in real time.' },
        ],

        // Section 7 -integrations
        s7Heading: 'CRM Integration With Your Existing Business Tools',
        s7Body:
            'We connect a custom CRM to the systems you already run through secure APIs, so data moves on its own instead of by hand. A lead from a website form lands in the pipeline with its source attached. An invoice raised in your accounting software reflects against the customer record. The result is one source of truth and no double entry. Common connections include the tools your team relies on every day.',
        integrations: [
            'ERP systems',
            'Accounting software (Xero, QuickBooks, Sage)',
            'Email and SMS platforms',
            'VoIP and call systems',
            'E-commerce platforms (Shopify, WooCommerce)',
            'Payment processors',
        ],

        // Section 8 -migration
        s8Heading: 'Safe CRM Data Migration From Spreadsheets and Legacy Systems',
        s8Intro:
            'The biggest fear in changing CRM is losing data or breaking operations during the switch. We control that risk with a backup, a parallel run, and validation at every step. Records move cleanly and the business keeps running.',
        migrationSteps: [
            { title: 'Export', desc: 'We pull a complete export from your current system or spreadsheets.' },
            { title: 'Field mapping', desc: 'We map every field to its new home so nothing lands in the wrong place.' },
            { title: 'Cleansing and de-duplication', desc: 'We remove duplicates and fix broken records before they reach the new system.' },
            { title: 'Validation', desc: 'We check counts and key records against the source so the data matches.' },
            { title: 'Backup', desc: 'We take a full backup so the original data stays safe throughout.' },
            { title: 'Phased cutover', desc: 'We switch over in stages with a parallel run, so operations keep moving with zero downtime.' },
        ],

        // Section 9 -security
        s9Heading: 'Secure, GDPR-Ready CRM With Role-Based Access',
        s9Intro:
            'UK buyers weigh data protection heavily, and 2026 expectations on customer data are tighter than ever. We build security into the system from the first sprint, not as an afterthought.',
        securityPoints: [
            { title: 'Role-based access', desc: 'Permission groups restrict each record and action to the roles that need it.' },
            { title: 'Data encryption', desc: 'Customer data stays encrypted in transit and at rest.' },
            { title: 'Audit logs', desc: 'Access and changes get logged, so every action has an accountable trail.' },
            { title: 'UK GDPR-aligned handling', desc: 'Data handling follows current UK GDPR practice, with consent and retention built in.' },
        ],

        // Section 10 -process
        s10Heading: 'Our Custom CRM Development Process, Step by Step',
        s10Intro:
            'Six clear stages take a CRM from first conversation to a system your team runs every day. Sprints move faster because we build with modern AI tooling, which shortens timelines without cutting quality.',
        processSteps: [
            { title: 'Discovery and requirements', desc: 'We learn your sales, service, and data processes, then agree the scope and goals. You leave with a clear picture of what the build delivers.' },
            { title: 'Workflow mapping and design', desc: 'We map your pipeline and design the structure, screens, and automations. You approve the blueprint before a line of code gets written.' },
            { title: 'Agile build in sprints', desc: 'We build in short sprints with modern AI tooling that shortens timelines without cutting quality. You see working software early and often.' },
            { title: 'Integration and testing', desc: 'We connect your tools and test every workflow against real scenarios. You review a system that behaves the way your business runs.' },
            { title: 'Deployment and team training', desc: 'We migrate your data, go live, and train your team. You start with people who know how to use the system from day one.' },
            { title: 'Post-launch support', desc: 'We monitor, fix, and improve the live system on a care plan. You keep a direct line to the team that built it.' },
        ],

        // Section 11 -industries
        s11Heading: 'Custom CRM Software by Industry',
        industries: [
            { title: 'Estate agents and lettings', desc: 'A lettings pipeline, property matching, and viewing follow-ups in one system.', href: '/industries/real-estate' },
            { title: 'Membership organisations', desc: 'Member portals, renewals, and communications managed against one member record.', href: '' },
            { title: 'Healthcare clinics', desc: 'Patient data, appointments, and recalls with compliance and access control built in.', href: '/industries/healthcare-clinics' },
            { title: 'Professional services', desc: 'Enquiries, proposals, and client matters tracked from first contact to delivery.', href: '/industries/professional-services' },
            { title: 'E-commerce', desc: 'Orders, customers, and support tickets synced from the store into one view.', href: '/industries/ecommerce' },
            { title: 'B2B sales', desc: 'Multi-stage pipelines, lead scoring, and forecasting for longer sales cycles.', href: '/industries/b2b-companies' },
        ],

        // Section 12 -cost
        s12Heading: 'How Much Custom CRM Development Costs in the UK',
        s12Intro:
            'Custom CRM pricing follows the scope, not a fixed sticker. Five drivers move the figure up or down. We price honestly against real delivery, so the number you get is one we stand behind.',
        costDrivers: [
            { title: 'Number of users and roles', desc: 'More roles and permission groups mean more screens, rules, and testing.' },
            { title: 'Integrations', desc: 'Each connected system, from accounting to VoIP, adds build and testing work.' },
            { title: 'Data migration complexity', desc: 'Messy or large legacy data takes more mapping, cleansing, and validation.' },
            { title: 'Custom modules', desc: 'Bespoke workflows beyond the core pipeline expand the scope.' },
            { title: 'Mobile access', desc: 'Field and mobile use adds build work on top of the core system.' },
        ],
        // Ranges left as a guide. Replace with validated £ bands from /admin/content when ready.
        pricingBands: [
            { name: 'Starter bespoke CRM', range: 'Priced after a free discovery call', includes: 'Single team, core pipeline, contacts, and automation.' },
            { name: 'Growth CRM', range: 'Priced after a free discovery call', includes: 'Multi-team, key integrations, reporting, and mobile access.' },
            { name: 'Advanced CRM', range: 'Priced after a free discovery call', includes: 'Complex workflows, ERP and accounting integration, role-based access, and custom modules.' },
            { name: 'Care plan', range: 'Priced after a free discovery call', includes: 'Optional ongoing support and maintenance.' },
        ],
        s12Note:
            'We give an indicative figure during a free consultation and confirm final pricing after a short discovery, once the scope is clear. No guessed quotes, no surprise invoices.',

        // Section 13 -why choose
        s13Heading: 'Why Growing Businesses Choose Webspires for Custom CRM',
        whyChoose: [
            { title: 'AI-accelerated build', desc: 'We build with modern AI tooling that shortens delivery and keeps pricing honest for SMEs, without cutting quality.' },
            { title: 'Full ownership, no per-seat fees', desc: 'You own the software and the source code outright. Add users and grow without a climbing subscription.' },
            { title: 'Direct access to the build team', desc: 'You talk to the people writing the code, not a layer of account managers between you and the work.' },
            { title: 'One partner for CRM and the leads that fill it', desc: 'The same team builds the CRM and runs the marketing that feeds it, so the system and the pipeline stay aligned.' },
        ],

        // Section 14 -case study
        s14Heading: 'A Custom CRM We Built: Problem, Solution, Outcome',
        caseProblem:
            'Our own lead and job management ran across spreadsheets, inboxes, and a calendar. Follow-ups slipped, the same enquiry got logged twice, and no one view showed where a job stood.',
        caseSolution:
            'We built an internal CRM with a single customer record, an automated follow-up sequence, a job pipeline, and a live dashboard. Website enquiries flow straight into the pipeline with their source attached.',
        caseOutcome:
            'Follow-ups stopped slipping, duplicate records disappeared, and every job now sits on one board with a clear stage. The team works from one source of truth instead of five.',
        caseMetric: '',
        caseNote:
            'We publish results we stand behind. As client CRM projects complete and the metrics gain approval, we add them here with named outcomes.',

        // Section 15 -CTA
        s15Heading: 'Book a Free CRM Consultation',
        s15Body:
            'On a short discovery call with the Webspires team you get a scoped understanding of your workflows, an honest build-vs-buy recommendation, and an indicative quote. No obligation, no hard sell.',

        // Section 16 -FAQ
        faqHeading: 'Custom CRM Development FAQs',
        faqs: [
            { q: 'What is custom CRM development?', a: 'Custom CRM development is the process of designing and building CRM software around one business’s specific sales, marketing, and service workflows. Rather than forcing a team into a generic platform, the system models your real pipeline, unifies customer data, and grows with the business.' },
            { q: 'How much does custom CRM development cost in the UK?', a: 'The cost depends on the number of users and roles, the integrations involved, data migration complexity, custom modules, and mobile access. We scope every project and give an indicative figure during a free consultation, with final pricing confirmed after discovery rather than guessed up front.' },
            { q: 'How long does it take to build a custom CRM?', a: 'A focused first version often takes a few weeks, while a multi-team system with integrations runs longer. Agile sprints and modern AI tooling shorten the timeline, and you see working software early instead of waiting for one large reveal at the end.' },
            { q: 'Should I build a custom CRM or use Salesforce or HubSpot?', a: 'Off-the-shelf platforms suit standard sales processes and a fast start. A bespoke build wins when workflows are proprietary, per-seat fees compound at scale, or you need full ownership and integration control. We give an honest recommendation during the consultation, even when the answer is off-the-shelf.' },
            { q: 'Who owns the CRM and the source code?', a: 'You do. With a bespoke build you own the software, the data, and the source code outright. No vendor holds your system hostage, and no per-seat subscription grows as you add people to the team.' },
            { q: 'How do you migrate data without downtime?', a: 'We export your records, map every field, cleanse duplicates, and validate against the source. A full backup and a phased cutover with a parallel run keep operations moving, so the switch happens with zero downtime and no lost data.' },
            { q: 'Is the CRM GDPR-compliant?', a: 'Yes. We build role-based access, encryption, and audit logs, and we follow current 2026 UK GDPR practice on consent and data retention. Sensitive customer data stays restricted to the right roles, and every access leaves an accountable trail.' },
            { q: 'Do you provide ongoing support and maintenance?', a: 'Yes. An optional care plan covers updates, monitoring, and fixes, and a named team answers directly. As your processes change, we add modules and reports to the live system rather than starting over.' },
        ],
    },
];

export function getServicePage(slug) {
    return servicePagesData.find((p) => p.slug === slug) || null;
}
