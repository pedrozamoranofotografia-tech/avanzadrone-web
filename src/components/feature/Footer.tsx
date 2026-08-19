import { Link } from "react-router-dom";
import { brand } from "@/mocks/home";

const serviceLinks = [
  { label: "Inspecciones con drones", slug: "inspecciones-drones" },
  { label: "Termografía aérea", slug: "termografia-drones" },
  { label: "Topografía y cartografía", slug: "topografia-drones" },
  { label: "Fotogrametría 3D", slug: "fotogrametria-drones" },
  { label: "Seguimiento de obras", slug: "seguimiento-obras-drones" },
];

export default function Footer() {
  return (
    <footer className="bg-background-900 border-t border-background-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-foreground-400 leading-relaxed">
              {brand.tagline}. Servicios técnicos y audiovisuales con drones para
              empresas que necesitan datos precisos y operaciones más seguras.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-foreground-400">
              <p className="flex items-start gap-2">
                <i className="ri-map-pin-line text-accent-400 mt-0.5"></i>
                <span>Calle Cidro, 20, 3º<br />28044 Madrid, España</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-mail-line text-accent-400"></i>
                <a href="mailto:info@avanzadrone.com" className="hover:text-foreground-100 transition-colors">
                  info@avanzadrone.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-phone-line text-accent-400"></i>
                <a href={brand.phoneLink} className="hover:text-foreground-100 transition-colors">
                  {brand.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground-100 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground-100 mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sectores" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Sectores
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#presupuesto" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground-100 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/aviso-legal" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
            <a
              href="#presupuesto"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary-500 text-background-950 text-sm font-medium hover:bg-primary-400 transition-all whitespace-nowrap"
            >
              Solicitar presupuesto
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground-500">
            © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground-500">
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-line text-accent-500"></i>
              Tecnología · Precisión · Seguridad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}