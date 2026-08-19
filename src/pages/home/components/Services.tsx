import { Link } from "react-router-dom";
import { services } from "@/mocks/home";
import type { Service } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={(index % 2) * 80}>
      <Link
        to={`/${service.slug}`}
        className="group relative flex flex-col h-full overflow-hidden rounded-lg border border-background-800/60 bg-background-900 hover:border-background-700 transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            title={`${service.title} - AVANZA DRONE`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-900 to-transparent"></div>
          <span className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-md bg-background-950/70 text-primary-400 backdrop-blur-sm">
            <i className={`${service.icon} text-xl`}></i>
          </span>
        </div>

        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-heading font-semibold text-lg text-foreground-50 leading-snug">
            {service.title}
          </h3>
          <p className="mt-1.5 text-sm text-accent-400">{service.tagline}</p>
          <p className="mt-3 text-sm text-foreground-400 leading-relaxed">
            {service.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {service.highlights.slice(0, 4).map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-1.5 text-xs text-foreground-300 bg-background-800/60 px-2.5 py-1 rounded-full"
              >
                <i className="ri-check-line text-accent-400"></i>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors whitespace-nowrap">
              {service.cta}
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-28 bg-background-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones aéreas para cada proyecto"
          description="Del vuelo a la información. Ocho líneas de servicio técnico y audiovisual diseñadas para entregar datos, precisión y resultados."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}