import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
