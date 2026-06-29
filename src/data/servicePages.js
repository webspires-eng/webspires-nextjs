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

    {
        slug: 'social-media-management',

        // Meta
        metaTitle: 'Social Media Management Services UK | Webspires',
        metaDescription:
            'Performance-focused social media management in the UK. We tie content to leads and revenue, run your paid social and SEO under one roof, and price honestly. Book a free social media strategy call.',

        // Hero (Section 1)
        h1: 'Social Media Management Services for UK Businesses',
        heroSub:
            'Consistent, on-brand social media that drives enquiries and revenue, not just followers. Webspires runs your strategy, content, community, and paid social as one service, then reports against the leads it generates. The wedge is simple: performance focus over vanity metrics, AI-accelerated content produced faster at honest pricing, and one team that also runs your paid ads and SEO. Growing UK businesses get a social presence that earns its place in the marketing budget through measurable results in 2026, not follower counts that look good and sell nothing.',
        heroChips: [
            'Performance over vanity metrics',
            'Social, paid, and SEO under one team',
            'AI-accelerated content',
            'Honest UK pricing',
        ],

        // Section 2 -what it includes
        s2Heading: 'What Social Media Management Includes',
        s2Definition:
            'Social media management is the ongoing strategy, content creation, publishing, community management, and reporting that keeps a brand active and growing across social platforms. The work runs as a continuous cycle, not a one-off campaign, so the brand stays consistent and the results compound over time.',
        buildRoutes: [
            {
                title: 'Strategy',
                desc: 'A plan that ties each platform and content pillar to a business goal, so posting follows a purpose instead of a whim.',
            },
            {
                title: 'Content creation',
                desc: 'Graphics, captions, and short-form video built around your brand, produced at pace through AI-accelerated workflows.',
            },
            {
                title: 'Scheduling and publishing',
                desc: 'A managed calendar that keeps posts consistent and timed for when your audience actually engages.',
            },
            {
                title: 'Community management',
                desc: 'Replies, comments, and messages handled promptly, so engagement turns into conversations and conversations into enquiries.',
            },
            {
                title: 'Paid social support',
                desc: 'Boosted posts and targeted ad campaigns that extend reach to the right audience and feed measurable leads.',
            },
            {
                title: 'Analytics and reporting',
                desc: 'Monthly reporting tied to reach, engagement, and enquiries, so every decision rests on data.',
            },
        ],
        s2Adoption:
            'Through 2026, social shifted from simple posting to brand positioning and short-form video, so a scattered, post-when-you-remember approach no longer holds attention or earns reach.',

        // Section 3 -signs you need to outsource
        s4Heading: 'Signs Your Business Needs to Outsource Social Media',
        s4Intro:
            'UK SMEs in 2026 face rising content expectations and steady demand for short-form video that in-house teams struggle to sustain alongside running the business. The symptoms below signal that social media now needs a dedicated team.',
        outgrownSigns: [
            {
                title: 'Posting goes quiet for weeks',
                desc: 'Weeks pass between posts, and the account looks abandoned. A managed service keeps a steady, planned schedule so your brand stays visible.',
            },
            {
                title: 'Last-minute posts with no plan',
                desc: 'Content gets thrown together minutes before it goes live. A content calendar replaces the scramble with a strategy built around your goals.',
            },
            {
                title: 'Effort never turns into enquiries',
                desc: 'Hours go into posting, yet nothing reaches the sales pipeline. Performance-led management ties content to leads and tracks what actually converts.',
            },
            {
                title: 'No time alongside the day job',
                desc: 'Running the business leaves no room to run social well. A dedicated team takes the channel off your plate without losing your voice.',
            },
            {
                title: 'Inconsistent brand voice',
                desc: 'Posts read differently depending on who wrote them that day. One team holds a single, consistent voice across every platform.',
            },
            {
                title: 'No reporting, no idea what works',
                desc: 'Without reporting, nobody knows which posts earn reach or enquiries. Monthly analytics show what works and where the budget should go next.',
            },
        ],

        // Section 4 -our services
        s5Heading: 'Our Social Media Management Services',
        services: [
            {
                title: 'Social media strategy',
                desc: 'We audit your current presence, define content pillars, and match each platform to a clear business goal. The strategy sets the posting cadence, the tone, and the metrics that matter, so the work points at enquiries from day one. You approve the plan before any content goes live.',
            },
            {
                title: 'Content creation: graphics and short-form video',
                desc: 'Our team produces scroll-stopping graphics and short-form video built around your brand, the format that now drives the most reach. AI-accelerated workflows raise the volume and speed of production without dropping quality. The result is a steady stream of on-brand content that earns attention.',
            },
            {
                title: 'Scheduling and publishing',
                desc: 'We manage a content calendar and publish across your platforms at the times your audience engages most. Posts stay consistent and planned weeks ahead, not rushed out at the last minute. You see the calendar before anything ships.',
            },
            {
                title: 'Community management',
                desc: 'We reply to comments, messages, and mentions promptly, so engagement becomes conversation and conversation becomes enquiries. Active community management builds trust and surfaces leads that a quiet account would miss. Your audience gets a brand that responds.',
            },
            {
                title: 'Paid social management',
                desc: 'We plan and run paid social campaigns on Meta, TikTok, and LinkedIn, with targeting that puts spend in front of the right audience. Paid amplifies the organic content that already performs, so the budget follows proven winners. Every campaign reports against leads, not just impressions.',
            },
            {
                title: 'Analytics and reporting',
                desc: 'We track reach, engagement, and enquiries, then report monthly with plain insight and a clear next step. Reporting ties every action to a source, so you see which content drove results. The numbers guide the following month’s plan.',
            },
        ],

        // Section 5 -platforms we manage
        platformsHeading: 'Social Media Platforms We Manage',
        platformsIntro:
            'We recommend platforms by where your customers actually spend time, not by default. Each platform suits a different business type, and a focused presence on the right two or three beats a thin presence on all of them.',
        platforms: [
            {
                title: 'Instagram',
                desc: 'Visual and short-form content for consumer and local brands. Reels drive discovery, while Stories and posts keep an engaged audience close.',
            },
            {
                title: 'TikTok',
                desc: 'Short-form video built for reach and discovery. Right for brands ready to show personality and ride trends to a wider, younger audience.',
            },
            {
                title: 'LinkedIn',
                desc: 'B2B thought leadership and lead generation. The platform where decision-makers research suppliers, so it suits professional services and B2B sellers.',
            },
            {
                title: 'Facebook',
                desc: 'Local reach and community. Strong for local businesses, events, and groups, with a broad audience and mature targeting for paid.',
            },
            {
                title: 'YouTube',
                desc: 'Long-form video and search visibility. Right for brands with how-to, demo, or educational content that earns views for years.',
            },
            {
                title: 'Pinterest',
                desc: 'Visual discovery for ecommerce and lifestyle. Suits product brands in interiors, food, fashion, and weddings where people plan purchases.',
            },
        ],

        // Section 6 -organic vs paid
        orgPaidHeading: 'Organic vs Paid Social: How They Work Together',
        orgPaidIntro:
            'Organic and paid social do different jobs, and the strongest results come when one team runs both. Organic builds the audience and trust over time. Paid accelerates reach and enquiries on demand.',
        orgPaidPoints: [
            {
                title: 'Organic social',
                desc: 'Consistent content, community, and brand trust built steadily over time. Organic earns a loyal audience and proves which messages land before a penny of ad spend goes out.',
            },
            {
                title: 'Paid social',
                desc: 'Targeted reach and lead generation on Meta, TikTok, and LinkedIn. Paid puts your best content in front of the exact audience that matches your customers, and scales the winners fast.',
            },
            {
                title: 'Run together by one team',
                desc: 'Because the same team runs the content and the ad accounts, spend follows what already performs organically. No guesswork, no handover gap, no budget wasted on posts that never proved themselves.',
            },
        ],
        orgPaidVerdict:
            'Organic alone grows slowly. Paid alone burns budget on content that has not earned its place. Run together, they compound, and that is the gap pure-social agencies without paid expertise leave on the table.',

        // Section 7 -process
        s10Heading: 'Our Social Media Management Process, Step by Step',
        s10Intro:
            'Six stages take your social media from first audit to a channel that reports against leads. Production moves faster because we build content with AI-accelerated workflows, so you get more output at honest cost without a drop in quality.',
        processSteps: [
            {
                title: 'Audit and goals',
                desc: 'We review your current social presence, competitors, and audience, then agree the goals that define success. You leave with a clear baseline and targets tied to enquiries.',
            },
            {
                title: 'Strategy and content pillars',
                desc: 'We set the platforms, content pillars, and posting cadence that fit your brand and audience. You approve the strategy before production starts.',
            },
            {
                title: 'Content production',
                desc: 'Our team produces graphics and short-form video at pace through AI-accelerated workflows. You review content ahead of publishing, so nothing goes live without a check.',
            },
            {
                title: 'Scheduling and publishing',
                desc: 'We schedule and publish across your platforms at the times your audience engages most. Posts stay consistent and planned, never rushed.',
            },
            {
                title: 'Community engagement',
                desc: 'We reply to comments and messages, join relevant conversations, and act on trends while they matter. Your brand stays part of the conversation.',
            },
            {
                title: 'Reporting and optimisation',
                desc: 'We report monthly on reach, engagement, and enquiries, then adjust the plan around what works. Each month builds on the data from the last.',
            },
        ],

        // Section 8 -industries
        s11Heading: 'Social Media Management by Industry',
        industries: [
            {
                title: 'Ecommerce',
                desc: 'Product launches, user-generated content, and shoppable posts that turn followers into buyers across Instagram, TikTok, and Pinterest.',
                href: '/industries/ecommerce',
            },
            {
                title: 'Local businesses',
                desc: 'Community-led content, reviews, and local reach on Facebook and Instagram that bring nearby customers through the door.',
                href: '/industries/local-businesses',
            },
            {
                title: 'B2B companies',
                desc: 'LinkedIn thought leadership and lead generation that put your brand in front of decision-makers and feed the sales pipeline.',
                href: '/industries/b2b-companies',
            },
            {
                title: 'Healthcare clinics',
                desc: 'Trust-building, compliant content that informs patients and fills appointment books, with sensitivity to regulated claims.',
                href: '/industries/healthcare-clinics',
            },
            {
                title: 'Real estate',
                desc: 'Listing showcases, area guides, and short-form video tours that attract buyers, sellers, and landlords.',
                href: '/industries/real-estate',
            },
            {
                title: 'Professional services',
                desc: 'Authority-led content and LinkedIn presence that win trust and generate qualified enquiries for firms that sell expertise.',
                href: '/industries/professional-services',
            },
        ],

        // Section 9 -pricing
        s12Heading: 'Social Media Management Pricing in the UK',
        s12Intro:
            'Price follows scope, so the figure moves with what the work involves. The drivers below set where a package lands, and honest bands give you a guide before any call. Final pricing comes after a short strategy call, with ad spend always separate from the management fee.',
        costDrivers: [
            { title: 'Number of platforms', desc: 'More platforms mean more content, scheduling, and community work each month.' },
            { title: 'Content volume', desc: 'The number of posts per month sets much of the production workload.' },
            { title: 'Original video', desc: 'Short-form video and original shoots add production time on top of graphics.' },
            { title: 'Community management depth', desc: 'Light monitoring costs less than proactive, daily engagement and response.' },
            { title: 'Paid social', desc: 'Adding paid campaign management brings targeting, testing, and optimisation work.' },
            { title: 'Reporting depth', desc: 'Standard monthly reports cost less than detailed, lead-tracked reporting.' },
        ],
        pricingBands: [
            {
                name: 'Starter',
                range: '£500 to £900 per month',
                includes: 'Managed posting on 1 to 2 platforms, 8 to 12 posts per month, scheduling, light community management, and a monthly report.',
            },
            {
                name: 'Growth',
                range: '£900 to £1,800 per month',
                includes: 'Content-led management on 2 to 3 platforms, 12 to 20 posts per month, original graphics and short video, proactive community, and strategy.',
            },
            {
                name: 'Performance',
                range: '£1,800 to £3,000+ per month',
                includes: 'Full service across multiple platforms plus paid social management, content, and reporting tied to leads. Ad spend separate.',
            },
            {
                name: 'Add-ons',
                range: 'Priced on scope',
                includes: 'Paid ad management, video production days, and advanced reporting on top of any package.',
            },
        ],
        s12Note:
            'Rolling monthly or a short minimum term, with ad spend always separate from the management fee. You get an indicative figure on the strategy call and a confirmed price once the scope is clear. No guessed quotes, no surprise invoices.',

        // Section 10 -agency vs freelancer vs in-house vs software
        compHeading: 'Agency vs Freelancer vs In-House vs Software',
        compIntro:
            'Four ways exist to run social media, and the right one depends on budget, volume, and how much strategy you need. Read the comparison, then weigh it against your own situation.',
        comparisonTable: [
            {
                factor: 'Cost',
                agency: 'Mid-range monthly fee for a full team',
                freelancer: 'Low monthly fee for one person',
                inhouse: 'High: salary, tools, and training',
                software: 'Low licence fee, your time on top',
            },
            {
                factor: 'Consistency',
                agency: 'High: a team covers holidays and sick days',
                freelancer: 'Variable: one person, one point of failure',
                inhouse: 'High while the role is filled',
                software: 'Depends entirely on your team’s discipline',
            },
            {
                factor: 'Strategy depth',
                agency: 'Strong: strategists, creators, and analysts',
                freelancer: 'Varies with the individual',
                inhouse: 'Strong if you hire senior, limited if junior',
                software: 'None: tools schedule, they do not strategise',
            },
            {
                factor: 'Paid social capability',
                agency: 'Built in when the agency runs ads too',
                freelancer: 'Rare in one freelancer',
                inhouse: 'Needs a separate paid specialist',
                software: 'Not included: a tool, not a marketer',
            },
            {
                factor: 'Scalability',
                agency: 'Scales up or down with your needs',
                freelancer: 'Capped by one person’s hours',
                inhouse: 'Slow: more output means more hires',
                software: 'Scales only as far as your team’s time',
            },
        ],
        compVerdict:
            'Software suits DIY teams with time and discipline. A freelancer suits light, low-budget needs. An in-house hire suits high-volume brands that have the budget to employ. An agency suits businesses that want strategy, content, and paid handled together without hiring, which is where our integrated model fits. When an agency is not the right answer for your stage, we say so.',

        // Section 11 -why choose us
        s13Heading: 'Why Growing Businesses Choose Webspires for Social Media',
        whyChoose: [
            {
                title: 'Performance over vanity metrics',
                desc: 'We tie content to enquiries and revenue, not follower counts. Reporting shows the leads social generated, so the channel earns its budget.',
            },
            {
                title: 'One team for social, paid, and SEO',
                desc: 'The same team runs your organic social, your paid ads, and your SEO. Content, spend, and search pull in one direction instead of three.',
            },
            {
                title: 'AI-accelerated content at honest pricing',
                desc: 'Modern AI tooling raises content volume and speed without cutting quality, so SMEs get more output at a fair, transparent cost.',
            },
            {
                title: 'Direct access to the people doing the work',
                desc: 'You talk to the team running your account, not a layer of account managers. A UK base and a one working day response keep things moving.',
            },
        ],

        // Section 12 -case study
        s14Heading: 'Social Media Work That Drove Results',
        caseProblem:
            'Our own social channels ran in fits and starts. Posts went out when someone found a spare hour, the voice drifted between team members, and nothing tied the effort back to enquiries.',
        caseSolution:
            'We applied the same service we sell: a content calendar, defined pillars, short-form video produced through AI-accelerated workflows, proactive community management, and monthly reporting tied to leads.',
        caseOutcome:
            'Posting became consistent and planned weeks ahead, the brand voice held steady across platforms, and enquiries from social started landing in the pipeline with their source attached.',
        caseMetric: '',
        caseNote:
            'We publish results we stand behind. As client social campaigns complete and the metrics gain approval, we add them here with named outcomes.',

        // Section 13 -CTA
        s15Heading: 'Book a Free Social Media Strategy Call',
        s15Body:
            'On a short call, the Webspires team reviews your current social presence, recommends the platforms and content that fit your goals, and gives you an indicative quote. No obligation, no hard sell, just a clear next step.',

        // Section 14 -FAQ
        faqHeading: 'Social Media Management FAQs',
        faqs: [
            {
                q: 'What does social media management include?',
                a: 'Social media management includes strategy, content creation, scheduling and publishing, community management, paid social support, and monthly reporting. The work runs as an ongoing cycle that keeps your brand consistent across platforms and ties activity back to enquiries and revenue, rather than a one-off burst of posts.',
            },
            {
                q: 'How much does social media management cost in the UK?',
                a: 'UK social media management runs from roughly £500 per month for managed posting on one or two platforms to £1,800 and above for full service with paid social. Price depends on platforms, content volume, video, and reporting depth. Ad spend always sits separate from the management fee.',
            },
            {
                q: 'How many posts will you publish per month?',
                a: 'Most packages run between 8 and 20 posts per month, set by your plan and platforms. A Starter package covers 8 to 12 posts, while a content-led package runs 12 to 20 with original graphics and short-form video. We agree the exact volume on the strategy call.',
            },
            {
                q: 'Which platforms should my business be on?',
                a: 'The right platforms depend on where your customers spend time. Consumer and local brands tend to suit Instagram, TikTok, and Facebook, while B2B and professional services suit LinkedIn. We recommend a focused presence on the two or three platforms that match your audience, not all of them at once.',
            },
            {
                q: 'Do you handle paid social ads too?',
                a: 'Yes. The same team runs your organic content and your paid social on Meta, TikTok, and LinkedIn. Because one team handles both, paid spend follows the content that already performs organically, so the budget backs proven winners instead of guesses. Ad spend stays separate from the management fee.',
            },
            {
                q: 'How do you measure social media ROI?',
                a: 'We track reach and engagement, then go further and tie social activity to enquiries and revenue. Monthly reporting shows which content and campaigns generated leads, with sources attached. Performance, not follower counts, is the measure, so you see the return the channel delivers in plain numbers.',
            },
            {
                q: 'Is there a minimum contract?',
                a: 'We work on rolling monthly terms or a short minimum, depending on the package and goals. Social media needs a few months to build momentum and prove what works, so a short commitment gives the strategy time to land. We confirm the terms before you start.',
            },
            {
                q: 'Should I hire an agency, a freelancer, or use software?',
                a: 'Software suits DIY teams with time, a freelancer suits light and low-budget needs, and an in-house hire suits high-volume brands. An agency suits businesses that want strategy, content, and paid handled together without hiring. In 2026, with short-form video raising the workload, an integrated team often delivers the most for the budget.',
            },
        ],
    },

    {
        slug: 'google-ads-management',

        // Meta
        metaTitle: 'Google Ads Management Services UK | Webspires',
        metaDescription:
            'Performance-focused Google Ads management in the UK. We turn ad spend into qualified enquiries, with transparent flat-fee pricing, no markup on spend, and you own your account. Get a free Google Ads audit.',

        // Hero (Section 1)
        h1: 'Google Ads Management Services That Turn Spend Into Enquiries',
        heroSub:
            'More qualified enquiries at a lower cost per enquiry, not vanity clicks. Webspires builds, manages, and optimises your Google Ads, tracks every lead, and reports in plain English. The wedge sits in the first line: transparent flat-fee pricing, no markup on ad spend, you own your account, and one team that also runs your SEO and landing pages. UK businesses get paid search that answers to revenue in 2026, run by senior people who pick up the phone.',
        heroChips: [
            'UK-based ads team',
            '5-star rated',
            'You own your account',
            'No markup on ad spend',
        ],

        // Section 2 -what it includes
        s2Heading: 'What Google Ads Management Includes',
        s2Definition:
            'Google Ads management is the ongoing strategy, build, optimisation, tracking, and reporting that turns a Google Ads budget into measurable enquiries and sales. The work covers the whole account, from keyword selection and ad copy to bidding, conversion tracking, and the monthly reporting that proves what the spend returned.',
        buildRoutes: [
            { title: 'Account audit', desc: 'A full review of structure, spend, and tracking to find where budget leaks.' },
            { title: 'Keyword research', desc: 'The high-intent searches that signal real buying intent, not just volume.' },
            { title: 'Campaign build', desc: 'Clean, themed campaign structure so every pound stays relevant.' },
            { title: 'Ad copywriting', desc: 'Responsive search ads written to win qualified clicks and filter the rest.' },
            { title: 'Bid management', desc: 'Bid strategies aligned to cost per enquiry and profitable products.' },
            { title: 'Negative keywords', desc: 'Ongoing exclusion of irrelevant searches that drain the budget.' },
            { title: 'Conversion tracking', desc: 'Accurate measurement of calls, forms, and sales through GA4 and tags.' },
            { title: 'Reporting', desc: 'Plain-English monthly reporting tied to leads and cost per enquiry.' },
        ],
        s2Adoption:
            'Through 2026, automation and Performance Max reshaped what good management looks like, so the value now sits in tight tracking, strong creative, and human guardrails rather than leaving Google to spend on autopilot.',

        // Section 3 -why accounts waste money
        s4Heading: 'Why Most Google Ads Accounts Waste Money',
        s4Intro:
            'Most underperforming accounts leak budget in the same predictable places. In 2026, automation and Performance Max make tracking and guardrails more important than ever, because spend drains faster on Google’s defaults. The six mistakes below name the fix for each.',
        outgrownSigns: [
            { title: 'Broad keywords pulling clicks, not customers', desc: 'Generic broad match attracts searches that never convert. Tight keyword and match-type control points spend at real buyers.' },
            { title: 'Missing negative keywords', desc: 'Without negatives, budget bleeds on irrelevant searches. A managed negative list cuts the waste week after week.' },
            { title: 'Broken or missing conversion tracking', desc: 'Without accurate tracking, every optimisation is a guess. Correct GA4 and tag setup turns decisions into evidence.' },
            { title: 'Landing pages that do not convert', desc: 'Paid clicks land on weak pages and bounce. Conversion-focused pages turn the traffic you pay for into enquiries.' },
            { title: 'Performance Max left on autopilot', desc: 'PMax spends freely without guardrails. Asset, audience, and exclusion controls keep it pointed at profit.' },
            { title: 'An agency that went quiet', desc: 'Set-and-forget management lets results slide. Active, senior optimisation and clear reporting keep the account sharp.' },
        ],

        // Section 4 -our services
        s5Heading: 'Our Google Ads Management Services',
        services: [
            { title: 'Account audit and strategy', desc: 'We review your account structure, spend, and tracking, then set a strategy around your goals and margins. You start with a clear plan and a baseline. The outcome: less wasted spend from day one.' },
            { title: 'Keyword and search-term research', desc: 'We find the high-intent searches that lead to enquiries and map the negatives that do not. Targeting follows buying intent, not raw volume. The outcome: clicks that convert.' },
            { title: 'Campaign build and structure', desc: 'We build clean, themed campaigns and ad groups so every search stays relevant to its ad. Structure keeps quality scores up and costs down. The outcome: more reach for the same budget.' },
            { title: 'Ad copywriting and assets', desc: 'We write responsive search ads and assets that win qualified clicks and repel the wrong ones. Strong creative lifts click-through and conversion together. The outcome: a lower cost per enquiry.' },
            { title: 'Bid and budget management', desc: 'We set bid strategies and budgets aligned to cost per enquiry and your profitable services. Spend concentrates where it returns. The outcome: budget that follows profit.' },
            { title: 'Negative keyword refinement', desc: 'We review search terms and exclude the irrelevant ones on a continuous cycle. The waste list shrinks every month. The outcome: a cleaner, cheaper account.' },
            { title: 'Conversion tracking setup', desc: 'We configure GA4, Google Tag Manager, and call tracking so calls, forms, and sales all register. Accurate data underpins every decision. The outcome: optimisation you trust.' },
            { title: 'Ongoing optimisation', desc: 'We test ads, bids, and audiences and act on the data, with every change made by a person. Performance compounds week on week. The outcome: results that improve, not drift.' },
            { title: 'Plain-English reporting', desc: 'We report monthly on leads, cost per enquiry, and what changed, without jargon. You see exactly what the spend returned. The outcome: full clarity on ROI.' },
        ],

        // Section 5 -campaign types (cards link to child silo pages where they exist)
        campaignTypesHeading: 'Google Ads Campaign Types We Manage',
        campaignTypesIntro:
            'Each campaign type does a different job. We match the mix to your goals, your margins, and where your buyers already are, then manage every type to a cost-per-enquiry target.',
        campaignTypes: [
            { title: 'Search Ads', desc: 'Capture active demand from people searching for what you sell, the highest-intent moment in Google.', href: '/services/google-ads-management/search-ads' },
            { title: 'Shopping Ads', desc: 'Put products, prices, and images in front of ready buyers, with a feed structured around margin.', href: '/services/google-ads-management/google-shopping-ads' },
            { title: 'Performance Max', desc: 'Reach across Search, Shopping, YouTube, and Display, managed with guardrails rather than autopilot.', href: '/services/google-ads-management/performance-max' },
            { title: 'Display Ads', desc: 'Build awareness and reach across the Google Display Network with audience targeting that stays relevant.', href: '' },
            { title: 'YouTube Ads', desc: 'Turn video views into demand with targeted placements that reach buyers before competitors do.', href: '' },
            { title: 'Remarketing', desc: 'Re-engage warm visitors who left without converting and bring them back to finish the job.', href: '/services/google-ads-management/remarketing' },
        ],

        // Section 6 -conversion tracking (reuses s7 heading/body + integrations chips)
        s7Heading: 'Conversion Tracking and Reporting in Plain English',
        s7Body:
            'Accurate tracking comes first, because no agency proves ROAS or optimises honestly without it. We set up conversion tracking for calls, forms, and sales through GA4 and Google Tag Manager, add call tracking for businesses that close by phone, and import offline conversions for sales that complete in person or later in your CRM. Reporting then ties every pound to leads and cost per enquiry, not vanity clicks. You get a monthly report in plain English that shows what changed, what it cost, and what happens next.',
        integrations: ['GA4', 'Google Tag Manager', 'Call tracking', 'Offline conversion import'],

        // Section 7 -pricing (costDrivers used as the fee-vs-spend panels)
        s12Heading: 'Google Ads Management Pricing in the UK',
        s12Intro:
            'Two numbers matter, and they are separate. The management fee is what you pay our team. The ad spend is what goes to Google. We never mark up your ad spend, so every pound of budget reaches the auction. The tiers below are indicative, with the final fee set after a free audit.',
        costDrivers: [
            { title: 'Management fee (what you pay us)', desc: 'A flat monthly fee for strategy, build, optimisation, tracking, and reporting. Fixed and predictable, billed rolling monthly.' },
            { title: 'Ad spend (what goes to Google)', desc: 'Your advertising budget, paid directly to Google. Separate from our fee, with no markup added by us.' },
        ],
        pricingBands: [
            { name: 'Starter', range: 'Ad spend up to £1,000/mo · from £200/mo management', includes: 'One to two campaigns, keyword and negative management, conversion tracking, and a monthly report. Right for businesses starting paid search.' },
            { name: 'Growth', range: 'Ad spend £1,000 to £3,000/mo · from £400/mo management', includes: 'Multi-campaign management, search and shopping, ongoing optimisation, call tracking, and strategy reviews. Most popular for growing UK businesses.' },
            { name: 'Scale', range: 'Ad spend £3,000 to £10,000/mo · from £650/mo management', includes: 'Full account management across campaign types, Performance Max with guardrails, advanced tracking, and senior strategic input.' },
        ],
        s12Note:
            'Ad spend is separate and paid to Google, with no markup. Management is rolling monthly with no long contracts, and you own your account and data throughout. Final pricing follows a free audit, once the scope is clear.',

        // Section 8 -process
        s10Heading: 'Our Google Ads Management Process, Step by Step',
        s10Intro:
            'Seven stages take your account from a free audit to a campaign that reports against enquiries. Optimisation moves faster with AI-accelerated analysis, and every change gets made by a person, never left to Google’s automation.',
        processSteps: [
            { title: 'Free audit and discovery', desc: 'We review your account, goals, and margins, then agree what success looks like. You leave with a clear baseline and priorities.' },
            { title: 'Competitor and keyword research', desc: 'We map the high-intent searches and study how competitors bid. Targeting follows buying intent and profitable demand.' },
            { title: 'Conversion tracking setup', desc: 'We configure GA4, tags, and call tracking before launch. Accurate data underpins every decision that follows.' },
            { title: 'Campaign build', desc: 'We build clean, themed campaigns with strong ad copy and assets. Structure keeps spend relevant and efficient.' },
            { title: 'Launch', desc: 'We launch with the right bids, budgets, and guardrails in place. Early spend gathers the data that guides optimisation.' },
            { title: 'Data gathering and optimisation', desc: 'We test, refine, and cut waste on a continuous cycle, with AI-accelerated analysis and human decisions. Cost per enquiry falls as the account matures.' },
            { title: 'Monthly report and strategy', desc: 'We report in plain English and agree the next month’s plan together. You always know what happened and what comes next.' },
        ],

        // Section 9 -industries
        s11Heading: 'Google Ads Management by Industry',
        industries: [
            { title: 'Ecommerce', desc: 'Shopping and Performance Max campaigns structured around margin and ROAS, with feeds tuned to your best-sellers.', href: '/industries/ecommerce' },
            { title: 'Local businesses', desc: 'Local search campaigns and call tracking that turn nearby searches into calls and bookings.', href: '/industries/local-businesses' },
            { title: 'B2B companies', desc: 'Qualified-lead campaigns with offline conversion import, so spend follows the leads that become deals.', href: '/industries/b2b-companies' },
            { title: 'Healthcare clinics', desc: 'Compliant local lead generation that fills appointment books while respecting regulated claims.', href: '/industries/healthcare-clinics' },
            { title: 'Real estate', desc: 'Targeted campaigns for valuations, lettings, and listings that reach buyers, sellers, and landlords at the right moment.', href: '/industries/real-estate' },
            { title: 'Professional services', desc: 'High-intent search campaigns that bring qualified enquiries to firms that sell expertise.', href: '/industries/professional-services' },
        ],

        // Section 10 -comparison: PPC vs SEO block + agency/freelancer/in-house table
        ppcSeoPoints: [
            { title: 'Google Ads (paid search)', desc: 'Fast, controllable demand capture. Spend goes live and brings enquiries within days, with full control over budget, targeting, and messaging.' },
            { title: 'SEO (organic search)', desc: 'Compounding long-term value. Organic rankings build slowly and lower cost per lead over time, without paying for every click.' },
        ],
        ppcSeoVerdict:
            'Paid captures demand now. Organic compounds later. Most businesses need both, so we run paid search here and handle SEO under the same roof.',
        compHeading: 'Google Ads vs SEO, and Agency vs Freelancer vs In-House',
        compIntro:
            'Beyond the channel question sits the management question. Three routes run a Google Ads account, and the right one depends on spend, expertise, and whether you want to hire.',
        comparisonTable: [
            { factor: 'Cost', agency: 'Flat monthly fee, no hire or tools to fund', freelancer: 'Low fee, variable scope', inhouse: 'Salary, tools, and training to fund', software: '' },
            { factor: 'Expertise', agency: 'Senior, multi-account experience', freelancer: 'Varies with the individual', inhouse: 'One person’s knowledge, hard to cover', software: '' },
            { factor: 'Consistency', agency: 'A team covers leave and never goes quiet', freelancer: 'One point of failure', inhouse: 'Gaps when the role is empty', software: '' },
            { factor: 'Tracking capability', agency: 'Full GA4, tags, call, and offline tracking', freelancer: 'Often basic or skipped', inhouse: 'Depends on the hire', software: '' },
            { factor: 'Account ownership', agency: 'You own the account and data with us', freelancer: 'Usually yours, varies', inhouse: 'Yours by default', software: '' },
        ],
        compVerdict:
            'A freelancer suits light, low-budget accounts. An in-house hire suits high-spend brands with the volume to justify a salary. An agency suits businesses that want senior expertise and proper tracking without hiring. When your spend does not yet justify management, we say so.',

        // Section 11 -why choose us
        s13Heading: 'Why Businesses Choose Webspires for Google Ads',
        whyChoose: [
            { title: 'You own your account and data', desc: 'The Google Ads account stays yours, set up under your ownership from day one. Leave whenever you want and keep everything.' },
            { title: 'No markup on ad spend', desc: 'Every pound of budget reaches the auction. We charge a flat management fee and never take a cut of your spend.' },
            { title: 'No long contracts', desc: 'Management runs rolling monthly. We earn the next month by performing, not by locking you in.' },
            { title: 'Plain-English reporting', desc: 'Monthly reporting tied to leads and cost per enquiry, with no jargon and no vanity metrics.' },
            { title: 'One team for ads, SEO, social, and CRO', desc: 'The same team runs your paid search, SEO, social, and conversion work, so the whole funnel pulls together.' },
            { title: 'AI-accelerated optimisation at honest pricing', desc: 'Modern AI tooling speeds analysis, while people make every decision, so you get sharper management at a fair fee.' },
            { title: 'Senior management, direct access', desc: 'A senior UK specialist runs your account and answers directly, not a junior behind an account manager.' },
        ],

        // Section 12 -results
        s14Heading: 'Real Google Ads Results',
        caseProblem:
            'Our own early Google Ads ran without tight tracking. Broad keywords pulled clicks that never became enquiries, negatives were thin, and no report tied spend to leads, so nobody knew the true cost per enquiry.',
        caseSolution:
            'We rebuilt the account the way we build clients’ accounts: clean campaign structure, a managed negative list, GA4 and call tracking wired up properly, conversion-focused landing pages, and weekly optimisation against cost per enquiry.',
        caseOutcome:
            'Wasted spend on irrelevant searches fell sharply, tracking finally showed which campaigns drove enquiries, and the cost per enquiry dropped month on month as the account matured.',
        caseMetric: '',
        caseNote:
            'We publish results we stand behind. As client Google Ads results gain approval, we add them here with named cost-per-enquiry and lead figures.',

        // Section 13 -CTA
        s15Heading: 'Get a Free Google Ads Audit',
        s15Body:
            'On a free audit, the Webspires team reviews your account structure, finds wasted spend, checks your tracking, and shows the quick wins. No obligation, and you keep the findings whether you work with us or not.',

        // Section 14 -FAQ
        faqHeading: 'Google Ads Management FAQs',
        faqs: [
            { q: 'How much does Google Ads management cost in the UK?', a: 'UK Google Ads management fees typically run from around £200 per month for smaller accounts to £650 and above for higher-spend management. The fee depends on ad spend, campaign types, and complexity. Ad spend is separate and paid directly to Google, with no markup from us.' },
            { q: 'What is the difference between the management fee and my ad budget?', a: 'The management fee pays our team to build, run, and optimise your campaigns. The ad budget is the money Google charges for clicks and impressions. They are separate, the budget goes straight to Google, and we never add a markup to it.' },
            { q: 'Is there a minimum ad spend?', a: 'No fixed minimum, though paid search needs enough budget to gather data and compete in the auction. For most UK small businesses, a starting budget of a few hundred pounds a month gives campaigns room to prove themselves. We recommend a realistic figure after the audit.' },
            { q: 'Am I tied into a long contract?', a: 'No. Management runs on rolling monthly terms with no long lock-in. You own your Google Ads account and data throughout, so you keep everything and leave whenever you choose. We hold onto clients by performing, not by contracts.' },
            { q: 'How long until I see results?', a: 'Search campaigns often generate enquiries within days of launch, then improve as the account gathers data and gets optimised over the following weeks. In 2026, with more automation in play, the first few weeks of tight tracking and refinement matter more than ever for a low cost per enquiry.' },
            { q: 'Do I own my account and data?', a: 'Yes. We set up and run the campaigns inside an account you own, so the history, data, and assets stay with you. If you ever leave, you take the account intact. No agency holds your account hostage.' },
            { q: 'Should I hire an agency, a freelancer, or run it in-house?', a: 'A freelancer suits light, low-budget accounts, an in-house hire suits high-spend brands with the volume to justify a salary, and an agency suits businesses that want senior expertise and proper tracking without hiring. We give an honest steer during the audit, even when the answer is not us.' },
            { q: 'Is PPC better than SEO?', a: 'Neither wins outright, because they do different jobs. Paid search captures demand fast and gives full control over budget and targeting, while organic search compounds value over time. Most businesses need both, and we run paid search here while handling SEO under the same roof.' },
        ],
    },

    {
        slug: 'generative-engine-optimisation',

        // Meta
        metaTitle: 'GEO & AI Search Optimisation Services UK | Webspires',
        metaDescription:
            'Get your brand cited in AI search. Our GEO service optimises you for AI Overviews, ChatGPT, Perplexity, and Gemini, so you win visibility where buyers now ask questions in 2026. Book a free AI visibility audit.',

        // Hero (Section 1)
        h1: 'Generative Engine Optimisation That Gets You Cited in AI Search',
        heroSub:
            'Your buyers now ask ChatGPT, Perplexity, Gemini, and Google AI Overviews before they ever reach a search results page. Webspires positions your brand to show up in those answers, cited as the source, so qualified visitors arrive already informed. The wedge: a GEO-native agency that treats AI search as the main event in 2026, not a footnote, and runs it alongside your SEO so the two compound. UK businesses get found where the next decade of demand begins.',
        heroChips: [
            'Cited in AI answers',
            'AI Overviews, ChatGPT, Perplexity, Gemini',
            'GEO + SEO under one team',
            'UK-based specialists',
        ],

        // Section 2 -what is GEO
        s2Heading: 'What Generative Engine Optimisation Means',
        s2Definition:
            'Generative engine optimisation is the practice of getting a brand surfaced, cited, and recommended inside AI-generated answers from engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews. The work shapes how AI systems understand and quote your business, so you appear in the answer itself rather than a link buried below it.',
        buildRoutes: [
            { title: 'Entity and brand clarity', desc: 'A clear, consistent definition of who you are and what you do, so AI engines understand and trust your brand.' },
            { title: 'Answer-ready content', desc: 'Content structured around the real questions buyers ask, formatted so AI systems quote it directly.' },
            { title: 'Knowledge graph and structured data', desc: 'Schema, citations, and entity links that feed AI models accurate facts about your business.' },
            { title: 'Authority and citations', desc: 'Mentions and references across the sources AI engines trust, so your brand earns its place in answers.' },
            { title: 'AI visibility tracking', desc: 'Monitoring of how often and how accurately ChatGPT, Perplexity, and AI Overviews cite you.' },
            { title: 'Ongoing optimisation', desc: 'Continuous refinement as the engines, their models, and your market shift.' },
        ],
        s2Adoption:
            'Through 2026, a growing share of searches end inside an AI answer with no click to a website, so visibility now means being the source the model cites, not just a blue link ranking beneath the fold.',

        // Section 3 -signs invisible in AI search
        s4Heading: 'Signs Your Brand Is Invisible in AI Search',
        s4Intro:
            'AI engines already shape buying decisions in 2026, yet most UK businesses have no idea whether they appear in those answers. The signs below mean AI search is passing your brand by.',
        outgrownSigns: [
            { title: 'ChatGPT does not mention you', desc: 'Ask an AI engine about your category and competitors come up, not you. GEO works to put your brand in that answer.' },
            { title: 'AI Overviews cite competitors', desc: 'Google’s AI Overview summarises your market using other sources. Structured, answer-ready content earns you a place in it.' },
            { title: 'AI describes you wrong', desc: 'When AI does mention you, the facts are out of date or simply incorrect. Entity and knowledge-graph work fixes the record.' },
            { title: 'Traffic is flat despite rankings', desc: 'You rank on Google, yet clicks fall as AI answers absorb them. GEO recovers visibility inside the answer itself.' },
            { title: 'No view of AI visibility', desc: 'Nobody tracks whether AI engines cite you or what they say. Monitoring turns that blind spot into a measurable channel.' },
            { title: 'SEO alone no longer covers it', desc: 'Traditional rankings miss the AI surfaces where buyers now ask questions. GEO extends your reach into those answers.' },
        ],

        // Section 4 -our GEO services
        s5Heading: 'Our Generative Engine Optimisation Services',
        services: [
            { title: 'AI visibility audit', desc: 'We test how ChatGPT, Perplexity, Gemini, and AI Overviews answer questions in your market and where you stand. You see exactly where the gaps are. The outcome: a clear GEO baseline.' },
            { title: 'Entity and brand optimisation', desc: 'We define your brand as a clear entity across your site and the wider web, so AI engines understand and trust it. Consistent facts replace confusion. The outcome: accurate, confident citations.' },
            { title: 'Answer-ready content', desc: 'We build content around the exact questions buyers ask AI, formatted for direct quotation. Each page answers cleanly and completely. The outcome: content AI engines quote.' },
            { title: 'Structured data and knowledge graph', desc: 'We add schema, entity links, and source signals that feed models accurate facts. The machine-readable layer matches the human one. The outcome: a brand AI systems read correctly.' },
            { title: 'Authority and digital PR for AI', desc: 'We earn mentions and citations across the sources AI engines weight most. Trusted references lift your presence in answers. The outcome: more inclusions in AI responses.' },
            { title: 'AI visibility tracking and reporting', desc: 'We monitor how often and how accurately the engines cite you, then report in plain English. Progress becomes a number you watch. The outcome: a measurable AI channel.' },
            { title: 'GEO and SEO together', desc: 'We run generative engine optimisation alongside traditional SEO, so organic rankings and AI citations reinforce each other. One strategy covers both surfaces. The outcome: visibility across search and AI.' },
        ],

        // Section 5 -AI engines (reuses the platforms field)
        platformsHeading: 'The AI Engines We Optimise For',
        platformsIntro:
            'Buyers spread their questions across several AI engines, each with its own sources and quirks. We optimise for the ones that drive real visibility, matched to where your audience actually asks.',
        platforms: [
            { title: 'Google AI Overviews', desc: 'The AI summary above Google results. Earning a citation here puts your brand in front of the widest search audience.' },
            { title: 'ChatGPT', desc: 'The most used AI assistant. Visibility here means your brand surfaces when buyers research and compare options.' },
            { title: 'Perplexity', desc: 'The answer engine built on live citations. Strong source signals win direct references to your site.' },
            { title: 'Google Gemini', desc: 'Google’s assistant across Search and Workspace. Entity clarity and structured data drive inclusion.' },
            { title: 'Microsoft Copilot', desc: 'The assistant across Bing and Windows. Authority and clean data earn mentions in its answers.' },
            { title: 'Claude and emerging engines', desc: 'New assistants arrive often. We track the ones your buyers adopt and optimise as they grow.' },
        ],

        // Section 6 -GEO vs SEO (reuses the orgPaid fields)
        orgPaidHeading: 'GEO vs Traditional SEO: How They Work Together',
        orgPaidIntro:
            'GEO and SEO chase the same goal, visibility, on different surfaces. SEO wins rankings on the results page. GEO wins citations inside AI answers. Run together, they cover the whole journey.',
        orgPaidPoints: [
            { title: 'Traditional SEO', desc: 'Rankings, clicks, and organic traffic from the search results page. SEO remains the backbone of being found on Google.' },
            { title: 'Generative engine optimisation', desc: 'Citations and mentions inside AI answers, where a growing share of questions now end. GEO captures the visibility SEO alone misses.' },
            { title: 'Run together by one team', desc: 'The same entity, content, and authority work feeds both. Strong SEO foundations make GEO faster, and GEO extends SEO into AI surfaces.' },
        ],
        orgPaidVerdict:
            'SEO without GEO leaves the AI answer to competitors. GEO without SEO stands on weak foundations. Together they cover both surfaces, which is why we run them as one service.',

        // Section 7 -process
        s10Heading: 'Our GEO Process, Step by Step',
        s10Intro:
            'Six stages take your brand from invisible in AI search to cited across the engines. AI-accelerated analysis speeds the work, while people make the judgement calls that shape how models see you.',
        processSteps: [
            { title: 'AI visibility audit', desc: 'We test how the engines answer your market and where you appear. You leave with a clear baseline and the biggest gaps named.' },
            { title: 'Entity and content strategy', desc: 'We map the questions buyers ask AI and define your brand as a clear entity. The plan sets what to build and fix first.' },
            { title: 'On-site optimisation', desc: 'We add structured data, tighten entity signals, and reshape pages into answer-ready content. Your site becomes machine-readable and quotable.' },
            { title: 'Authority and citations', desc: 'We earn mentions across the sources the engines trust. External signals lift how often AI includes you.' },
            { title: 'Tracking and measurement', desc: 'We monitor citations, mentions, and accuracy across the engines. Progress turns into numbers you watch month to month.' },
            { title: 'Ongoing optimisation', desc: 'We refine as models, engines, and your market shift. AI visibility holds and grows instead of slipping.' },
        ],

        // Section 8 -industries
        s11Heading: 'GEO by Industry',
        industries: [
            { title: 'Ecommerce', desc: 'Product and category visibility in AI shopping answers, so buyers find your range when they ask AI what to buy.', href: '/industries/ecommerce' },
            { title: 'Local businesses', desc: 'Citations in AI answers for local queries, so nearby buyers reach you when they ask an assistant for a recommendation.', href: '/industries/local-businesses' },
            { title: 'B2B companies', desc: 'Inclusion in AI answers during research and vendor comparison, where long B2B buying journeys now begin.', href: '/industries/b2b-companies' },
            { title: 'Healthcare clinics', desc: 'Accurate, trusted citations for health and service queries, with care around regulated claims.', href: '/industries/healthcare-clinics' },
            { title: 'Real estate', desc: 'Visibility in AI answers for area, valuation, and buying questions that start the property journey.', href: '/industries/real-estate' },
            { title: 'Professional services', desc: 'Authority-led citations that put expert firms in AI answers when buyers ask who to trust.', href: '/industries/professional-services' },
        ],

        // Section 9 -pricing
        s12Heading: 'GEO and AI Search Optimisation Pricing in the UK',
        s12Intro:
            'GEO pricing follows scope, the same as any optimisation work. The drivers below set where a retainer lands, and honest bands give you a guide. Final pricing comes after a free AI visibility audit.',
        costDrivers: [
            { title: 'Starting AI visibility', desc: 'A brand already cited needs less groundwork than one absent from every answer.' },
            { title: 'Content and entity work', desc: 'The volume of answer-ready content and entity fixes sets much of the effort.' },
            { title: 'Authority building', desc: 'Earning citations across trusted sources adds ongoing work.' },
            { title: 'Engines tracked', desc: 'Monitoring more AI engines and queries adds reporting depth.' },
        ],
        pricingBands: [
            { name: 'Foundation', range: 'from £600/mo', includes: 'AI visibility audit, entity and structured-data setup, answer-ready content on core pages, and monthly tracking. Right for brands starting GEO.' },
            { name: 'Growth', range: 'from £1,200/mo', includes: 'Ongoing answer-ready content, authority and citation building, multi-engine tracking, and SEO alignment. Most popular for growing UK businesses.' },
            { name: 'Authority', range: 'from £2,400/mo', includes: 'Full GEO and SEO programme, digital PR for AI citations, deep entity work, and senior strategy across all major engines.' },
            { name: 'Add-ons', range: 'Priced on scope', includes: 'One-off AI visibility audits, digital PR campaigns, and content sprints on top of any retainer.' },
        ],
        s12Note:
            'Bands are indicative and confirmed after a free AI visibility audit. Retainers run rolling monthly with no long contracts, and the audit findings are yours to keep either way.',

        // Section 10 -why choose us
        s13Heading: 'Why Businesses Choose Webspires for GEO',
        whyChoose: [
            { title: 'GEO-native, not a bolt-on', desc: 'AI search sits at the centre of how we work, not tacked onto an old SEO checklist. The strategy is built for how buyers search now.' },
            { title: 'One team for GEO and SEO', desc: 'The same team optimises your AI citations and your organic rankings, so the two reinforce each other instead of pulling apart.' },
            { title: 'Measurable AI visibility', desc: 'We track how the engines cite you and report it plainly, so GEO becomes a channel you measure, not a leap of faith.' },
            { title: 'Honest, transparent pricing', desc: 'Clear retainers, no long contracts, and audit findings you keep. You always know what you pay for and why.' },
            { title: 'AI-accelerated work at honest cost', desc: 'Modern AI tooling speeds the analysis while people make the calls, so you get deeper work at a fair fee.' },
            { title: 'Direct access to specialists', desc: 'You talk to the UK team doing the work, not a layer of account managers between you and the strategy.' },
        ],

        // Section 11 -results
        s14Heading: 'GEO Work That Moved the Needle',
        caseProblem:
            'Our own brand sat outside the AI conversation. Ask ChatGPT or Perplexity about our services and other agencies surfaced, while our facts across the web were thin and inconsistent.',
        caseSolution:
            'We applied our own GEO service: a clear entity definition, structured data across the site, answer-ready content on core pages, citations from trusted sources, and tracking across the major engines.',
        caseOutcome:
            'The engines began citing us by name for relevant questions, the facts they repeated turned accurate, and AI referrals started arriving as a visible, growing channel.',
        caseMetric: '',
        caseNote:
            'We publish results we stand behind. As client GEO programmes mature and the metrics gain approval, we add them here with named visibility figures.',

        // Section 12 -CTA
        s15Heading: 'Book a Free AI Visibility Audit',
        s15Body:
            'On a free audit, the Webspires team checks how ChatGPT, Perplexity, Gemini, and AI Overviews answer questions in your market, shows where you appear, and names the quickest wins. No obligation, and the findings are yours to keep.',

        // Section 13 -FAQ
        faqHeading: 'GEO and AI Search FAQs',
        faqs: [
            { q: 'What is generative engine optimisation?', a: 'Generative engine optimisation is the practice of getting your brand surfaced and cited inside AI-generated answers from engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews. Rather than ranking a link, GEO works to make your business the source the AI quotes when buyers ask a question.' },
            { q: 'How is GEO different from SEO?', a: 'SEO earns rankings and clicks on the search results page, while GEO earns citations and mentions inside AI answers. They share foundations like content and authority, so we run them together. SEO gets you found on Google, GEO gets you found inside the AI response.' },
            { q: 'Which AI engines do you optimise for?', a: 'We optimise for the engines your buyers use: Google AI Overviews, ChatGPT, Perplexity, Google Gemini, and Microsoft Copilot, plus emerging assistants as they gain adoption. We focus effort on the surfaces that drive real visibility for your market rather than chasing every tool at once.' },
            { q: 'Does GEO actually drive traffic and leads?', a: 'Yes, in two ways. Some AI answers link directly to your site, sending qualified visitors who arrive already informed. Others mention your brand without a link, which builds awareness that turns into branded searches and enquiries later. We track both so the value stays visible.' },
            { q: 'How long does GEO take to work?', a: 'Early wins like corrected facts and structured-data inclusion often land within weeks, while stronger citation presence builds over a few months. In 2026 the engines update constantly, so GEO is an ongoing discipline rather than a one-off fix, much like SEO.' },
            { q: 'How do you measure GEO results?', a: 'We track how often and how accurately the major AI engines cite your brand, monitor the questions you appear for, and watch referral traffic from AI sources. Reporting turns that into plain numbers each month, so AI visibility becomes a channel you measure, not a guess.' },
            { q: 'Do I need SEO as well as GEO?', a: 'In most cases, yes. Strong SEO foundations make GEO faster and more durable, and the two reinforce each other across search and AI surfaces. We run them as one service, so you cover the full journey without paying two agencies that never talk.' },
            { q: 'Is GEO worth it for a small business?', a: 'Yes, and early movers gain the most. AI answers now shape decisions in 2026, and the brands cited today build a lead that compounds. A focused GEO programme suits SMEs that want to be found where buyers increasingly ask, without an enterprise budget.' },
        ],
    },
];

export function getServicePage(slug) {
    return servicePagesData.find((p) => p.slug === slug) || null;
}
