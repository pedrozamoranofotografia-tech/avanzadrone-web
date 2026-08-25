import { Link } from "react-router-dom";
import { brand } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import useSEO from "@/hooks/useSEO";

export default function AvisoLegal() {
  useSEO({
    title: "Aviso Legal | AVANZA DRONE",
    description:
      "Aviso legal de AVANZA DRONE. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.",
    keywords: "aviso legal, AVANZA DRONE, LSSI-CE",
    canonicalPath: "/aviso-legal",
  });

  return (
    <div className="min-h-screen bg-background-950 text-foreground-100">
      {/* Navbar simple para páginas legales */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-950/90 backdrop-blur-md border-b border-background-800/60">
        <nav className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="text-sm text-foreground-300 hover:text-foreground-50 transition-colors whitespace-nowrap"
          >
            ← Volver al inicio
          </Link>
        </nav>
      </header>

      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-50 mb-2">
              Aviso Legal
            </h1>
            <p className="text-sm text-foreground-500 mb-10">
              Última actualización: 19 de agosto de 2026
            </p>

            <div className="space-y-8 text-foreground-300 leading-relaxed">
              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  1. Datos identificativos del titular
                </h2>
                <p>
                  De conformidad con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web es:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-foreground-200">Denominación social:</strong> AVANZA DRONE</li>
                  <li><strong className="text-foreground-200">Dirección:</strong> Calle Cidro, 20, 3º, 28044 Madrid, España</li>
                  <li><strong className="text-foreground-200">Correo electrónico:</strong> info@avanzadrone.es</li>
                  <li><strong className="text-foreground-200">Actividad:</strong> Servicios técnicos y audiovisuales con drones: inspección, termografía, topografía, fotogrametría, seguimiento de obras y producción audiovisual.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  2. Objeto y condiciones de uso
                </h2>
                <p>
                  El presente sitio web tiene por objeto facilitar información sobre los servicios técnicos y audiovisuales con drones ofrecidos por AVANZA DRONE, así como permitir la solicitud de presupuestos y contacto con la empresa.
                </p>
                <p className="mt-3">
                  El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las condiciones incluidas en este Aviso Legal, en la Política de Privacidad y en la Política de Cookies.
                </p>
                <p className="mt-3">
                  AVANZA DRONE se reserva el derecho a modificar en cualquier momento las presentes condiciones de uso, así como cualesquiera otras condiciones particulares. Dichas modificaciones serán notificadas convenientemente en el sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  3. Propiedad intelectual e industrial
                </h2>
                <p>
                  Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseños, logotipos, marcas, nombres comerciales y demás contenidos) son propiedad de AVANZA DRONE o de terceros que han autorizado su uso, estando protegidos por los derechos de propiedad intelectual e industrial.
                </p>
                <p className="mt-3">
                  Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro uso de los contenidos con fines comerciales, salvo autorización expresa y por escrito de AVANZA DRONE.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  4. Exclusión de responsabilidad
                </h2>
                <p>
                  AVANZA DRONE no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li>La interrupción del funcionamiento o la falta de disponibilidad del sitio web.</li>
                  <li>La privacidad y seguridad en la utilización del sitio web por parte del usuario.</li>
                  <li>La recepción, obtención, almacenamiento, difusión o transmisión de contenidos por parte de terceros.</li>
                  <li>La introducción de virus informáticos por parte de terceros.</li>
                </ul>
                <p className="mt-3">
                  AVANZA DRONE actúa con la máxima diligencia posible para garantizar la disponibilidad técnica, accesibilidad y continuidad del sitio web. No obstante, podrá suspender temporalmente el acceso por motivos de mantenimiento, reparación, actualización o mejora de los servicios.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  5. Enlaces a terceros
                </h2>
                <p>
                  El sitio web puede contener enlaces a otros sitios de Internet pertenecientes a terceros. AVANZA DRONE no asume responsabilidad alguna por los contenidos, informaciones, opiniones, productos o servicios facilitados a través de dichos sitios enlazados.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  6. Legislación aplicable y jurisdicción
                </h2>
                <p>
                  El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de la ciudad de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  7. Contacto
                </h2>
                <p>
                  Para cualquier consulta relativa a este Aviso Legal, puede contactar con nosotros a través del correo electrónico <a href="mailto:info@avanzadrone.es" className="text-primary-400 hover:text-primary-300 transition-colors">info@avanzadrone.es</a> o en la dirección postal indicada en el apartado 1.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}