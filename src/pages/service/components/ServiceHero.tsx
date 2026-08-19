import { Link } from "react-router-dom";
import type { ServiceDetail } from "@/mocks/services";

export default function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden bg-background-950">
      <div className="absolute inset-0">
        <img
          src={service.heroImage}
          alt={`${service.title} - AVANZA DRONE`}
          title={`${service.title} en toda España - AVANZA DRONE`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background-950"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <nav
          aria-label="Miga de pan"
          className="flex items-center gap-2 text-xs text-foreground-400"
        >
          <Link to="/" className="hover:text-foreground-100 transition-colors">
            Inicio
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link
            to="/#servicios"
            className="hover:text-foreground-100 transition-colors"
          >
            Servicios
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-accent-400">{service.title}</span>
        </nav>

        <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
          {service.title}
        </h1>
        <p className="mt-3 text-base md:text-lg text-foreground-200 max-w-2xl">
          {service.tagline}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            to="/#presupuesto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary-500 text-background-950 font-semibold text-sm hover:bg-primary-400 transition-all whitespace-nowrap"
          >
            Solicitar presupuesto
            <i className="ri-arrow-right-line"></i>
          </Link>
          <a
            href="tel:+34636980609"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-background-500 text-white font-medium text-sm hover:bg-background-800/60 transition-all whitespace-nowrap"
          >
            <i className="ri-phone-line"></i>
            636 98 06 09
          </a>
        </div>
      </div>
    </section>
  );
}