import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

/* ── JSON-LD Structured Data ────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webspires Limited",
  url: "https://webspires.co.uk",
  logo: "https://webspires.co.uk/images/webspires-logo-icon.png",
  image: "https://webspires.co.uk/images/webspires-logo-icon.png",
  description:
    "UK's leading web design and digital marketing agency delivering high-performance websites, SEO, Google Ads, Meta Ads and social media services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "39A Manchester Rd",
    addressLocality: "Bolton",
    postalCode: "BL3 2NZ",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-161-524-1569",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/webspires",
    "https://instagram.com/webspires",
    "https://linkedin.com/company/webspires",
    "https://twitter.com/webspires",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "45",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webspires",
  url: "https://webspires.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://webspires.co.uk/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function SiteLayout({ children }) {
  return (
    <>
      {/* Inline JSON-LD — safe in body, crawlers read it fine */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Skip-to-content for keyboard / screen-reader users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />
      <main id="main-content" className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
