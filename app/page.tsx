import About from "@/components/sections/About";
import ClosingQuote from "@/components/sections/ClosingQuote";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Stack from "@/components/sections/Stack";
import { profile, siteUrl } from "@/content/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    sameAs: profile.socials.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1 divide-y divide-line">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Education />
        <Stack />
        <Contact />
        <ClosingQuote />
      </main>
      <Footer />
    </>
  );
}
