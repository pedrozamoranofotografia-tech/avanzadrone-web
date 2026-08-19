import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Reveal from "@/components/base/Reveal";
import SectorHero from "./components/SectorHero";
import ServiceFAQ from "@/pages/service/components/ServiceFAQ";
import { sectorDetails } from "@/mocks/sectors";
import useSEO from "@/hooks/useSEO";

export default function SectorDetail({ slug: slugProp }: { slug?: string }) {
  const params = useParams<{ slug: string }>();
  const slug = slugProp ?? params.slug;
  const sector = sectorDetails.find((s) => s.slug === slug);

  const jsonLd = sector
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: sector.title,
        description: sector.seoDescription,
        provider: {
          "@type": "Organization",
          name: "AVANZA DRONE",
          telephone: "+34636980609",
          email: "info@avanzadrone.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Cidro, 20, 3º",
            postalCode: "28044",
            addressLocality: "Madrid",
            addressCountry: "ES",
          },
        },
        areaServed: { "@type": "Country", name: "España" },
      }
    : undefined;

  useSEO({
    title: sector?.seoTitle ?? "Sectores con drones | AVANZA DRONE",
    description:
      sector?.seoDescription ??
      "Soluciones con drones para tu sector en toda España.",
    keywords: sector?.seoKeywords,
    canonicalPath: sector ? `/${sector.slug}` : "/",
    ogImage: sector?.heroImage,
    ogType: "article",
    jsonLd,
  });

  if (!sector) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <SectorHero sector={sector} />

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <Reveal>
              <div className="max-w-3xl space-y-5">
                {sector.intro.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-base md:text-lg text-foreground-700 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background-950">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
                Soluciones para tu sector
              </h2>
              <p className="mt-3 text-foreground-400">
                Estos son los servicios que mejor se adaptan a las necesidades de
                tu actividad.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.solutions.map((solution, i) => (
                <Reveal key={solution.slug} delay={i * 60}>
                  <Link
                    to={`/${solution.slug}`}
                    className="group flex items-start gap-4 p-6 rounded-lg border border-background-800/60 bg-background-900 hover:border-background-700 transition-all h-full"
                  >
                    <span className="w-12 h-12 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 group-hover:bg-accent-500 group-hover:text-background-950 transition-colors shrink-0">
                      <i className="ri-arrow-right-up-line text-xl"></i>
                    </span>
                    <span>
                      <span className="block font-heading font-semibold text-foreground-50">
                        {solution.title}
                      </span>
                      <span className="mt-1 block text-sm text-foreground-400 leading-relaxed">
                        {solution.description}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-950">
                Beneficios
              </h2>
              <ul className="mt-6 space-y-4">
                {sector.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-500/10 text-accent-600 shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </span>
                    <span className="text-foreground-700">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-950">
                Casos de uso
              </h2>
              <ul className="mt-6 space-y-4">
                {sector.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-500/10 text-primary-600 shrink-0 mt-0.5">
                      <i className="ri-focus-3-line"></i>
                    </span>
                    <span className="text-foreground-700">{u}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background-950">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 text-center">
                Cómo trabajamos
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sector.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <div className="h-full rounded-lg border border-background-800/60 bg-background-900 p-6">
                    <span className="text-3xl font-heading font-bold text-accent-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-heading font-semibold text-foreground-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={sector.faqs} />

        <section className="py-16 md:py-24 bg-background-950">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground-50">
                ¿Empezamos tu proyecto?
              </h2>
              <p className="mt-4 text-foreground-400">
                Cuéntanos qué necesitas y te prepararemos una propuesta a medida,
                sin compromiso. Servicio en toda España.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/#presupuesto"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-500 text-background-950 font-semibold text-base hover:bg-primary-400 transition-all whitespace-nowrap"
                >
                  Solicitar presupuesto
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <a
                  href="tel:+34636980609"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-background-600 text-foreground-100 font-medium text-base hover:bg-background-800/60 transition-all whitespace-nowrap"
                >
                  <i className="ri-phone-line"></i>
                  636 98 06 09
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}