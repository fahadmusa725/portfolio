import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Stack from "@/components/sections/Stack";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
