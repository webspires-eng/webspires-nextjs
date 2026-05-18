import { siteConfig } from "@/config/site";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ResultsSnapshot from "@/components/sections/ResultsSnapshot";
import ProblemPain from "@/components/sections/ProblemPain";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GrowthMethod from "@/components/sections/GrowthMethod";
import Portfolio from "@/components/sections/Portfolio";
import HowItWorks from "@/components/sections/HowItWorks";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import ReportingTransparency from "@/components/sections/ReportingTransparency";
import WhyWebspires from "@/components/sections/WhyWebspires";
import Testimonials from "@/components/sections/Testimonials";
import FaqHome from "@/components/sections/FaqHome";
import ContactCTA from "@/components/sections/ContactCTA";
import { homeFaqs } from "@/data/homeFaqs";

const title =
  "Digital Marketing Agency UK | SEO, PPC, Web Design & Growth Services";
const description =
  "Grow your business with a UK digital marketing agency offering SEO, PPC, web design, content, CRM and social media strategies — backed by data, competitor research and measurable reporting.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: siteConfig.twitter,
  },
};

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1 — Hero */}
      <Hero />
      {/* 2 — Trust bar */}
      <TrustBar />
      {/* 3 — Results snapshot */}
      <ResultsSnapshot />
      {/* 4 — Problem / pain */}
      <ProblemPain />
      {/* 5 — Services overview */}
      <ServicesGrid />
      {/* 6 — Competitor research & branded growth audit */}
      <GrowthMethod />
      {/* 7 — Case studies / work */}
      <Portfolio />
      {/* 8 — Growth framework / process */}
      <HowItWorks />
      {/* 9 — Industry solutions */}
      <IndustrySolutions />
      {/* 10 — Reporting & transparency */}
      <ReportingTransparency />
      {/* 11 — Why choose us */}
      <WhyWebspires />
      {/* 12 — Testimonials */}
      <Testimonials />
      {/* 13 — FAQ */}
      <FaqHome />
      {/* 14 — Final CTA */}
      <ContactCTA />
    </>
  );
}
