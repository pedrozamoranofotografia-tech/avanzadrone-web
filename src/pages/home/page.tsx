import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Process from "./components/Process";
import BeforeAfter from "./components/BeforeAfter";
import Projects from "./components/Projects";
import WhyDrones from "./components/WhyDrones";
import BudgetForm from "./components/BudgetForm";
import useSEO from "@/hooks/useSEO";
import { heroImage } from "@/mocks/home";

const jsonLdHome = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVANZA DRONE",
  description:
    "Servicios técnicos y audiovisuales con drones en España: inspección, termografía, topografía, fotogrametría y producción aérea.",
  url: "https://avanzadrone.es/",
  telephone: "+34636980609",
  email: "info@avanzadrone.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Cidro, 20, 3º",
    postalCode: "28044",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  areaServed: { "@type": "Country", name: "España" },
  sameAs: [],
};

export default function Home() {
  useSEO({
    title: "AVANZA DRONE | Servicios técnicos y audiovisuales con drones en España",
    description:
      "Inspección, topografía, fotogrametría, termografía y producción audiovisual con drones en toda España. Tecnología aérea para proyectos que avanzan.",
    keywords:
      "drones, inspección con drones, termografía aérea, topografía con drones, fotogrametría, audiovisual aéreo, servicios técnicos, AVANZA DRONE",
    canonicalPath: "/",
    ogImage: heroImage,
    jsonLd: jsonLdHome,
  });

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Process />
        <BeforeAfter />
        <Projects />
        <WhyDrones />
        <BudgetForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}