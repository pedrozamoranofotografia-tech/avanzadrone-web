import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Reveal from "@/components/base/Reveal";
import ServiceHero from "./components/ServiceHero";
import ServiceFAQ from "./components/ServiceFAQ";
import { serviceDetails } from "@/mocks/services";
import useSEO from "@/hooks/useSEO";

export default function ServiceDetail({ slug: slugProp }: { slug?: string }) {
  const params = useParams<{ slug: string }>();
  const slug = slugProp ?? params.slug;
  const service = serviceDetails.find((s) => s.slug === slug);

  const jsonLd = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.seoDescription,
        provider: {
          "@type": "Organization",
          name: "AVANZA DRONE",
          telephone: "+34636980609",
          email: "info@avanzadrone.es",
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
    title: service?.seoTitle ?? "Servicios con drones | AVANZA DRONE",
    description:
      service?.seoDescription ??
      "Servicios técnicos y audiovisuales con drones en toda España.",
    keywords: service?.seoKeywords,
    canonicalPath: service ? `/${service.slug}` : "/",
    ogImage: service?.heroImage,
    ogType: "article",
    jsonLd,
  });

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <ServiceHero service={service} />

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <Reveal>
              <div className="max-w-3xl space-y-5">
                {service.intro.map((p) => (
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
          <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
                Qué resolvemos
              </h2>
              <ul className="mt-6 space-y-4">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-500/10 text-accent-400 shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </span>
                    <span className="text-foreground-300">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
                Entregables
              </h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-500/10 text-primary-400 shrink-0 mt-0.5">
                      <i className="ri-file-list-3-line"></i>
                    </span>
                    <span className="text-foreground-300">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-950 text-center">
                Cómo trabajamos
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <div className="h-full rounded-lg border border-background-200 bg-background-100 p-6">
                    <span className="text-3xl font-heading font-bold text-accent-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-heading font-semibold text-foreground-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={service.faqs} />

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