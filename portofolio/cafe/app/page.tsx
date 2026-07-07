import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-charcoal">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
