import About from "@/components/sections/About";
import ClosingQuote from "@/components/sections/ClosingQuote";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Stack from "@/components/sections/Stack";

export default function HomePage() {
  return (
    <>
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
