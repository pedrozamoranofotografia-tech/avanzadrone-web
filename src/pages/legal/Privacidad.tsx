import { Link } from "react-router-dom";
import { brand } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import useSEO from "@/hooks/useSEO";

export default function Privacidad() {
  useSEO({
    title: "Política de Privacidad | AVANZA DRONE",
    description:
      "Política de privacidad de AVANZA DRONE. Conoce cómo tratamos tus datos personales, tus derechos y cómo ejercerlos.",
    keywords: "privacidad, RGPD, protección de datos, AVANZA DRONE",
    canonicalPath: "/privacidad",
  });

  return (
    <div className="min-h-screen bg-background-950 text-foreground-100">
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
              Política de Privacidad
            </h1>
            <p className="text-sm text-foreground-500 mb-10">
              Última actualización: 19 de agosto de 2026
            </p>

            <div className="space-y-8 text-foreground-300 leading-relaxed">
              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  1. Responsable del tratamiento
                </h2>
                <p>
                  El responsable del tratamiento de los datos personales recogidos a través del sitio web es AVANZA DRONE, con domicilio social en Calle Cidro, 20, 3º, 28044 Madrid, España, y correo electrónico <a href="mailto:info@avanzadrone.es" className="text-primary-400 hover:text-primary-300 transition-colors">info@avanzadrone.es</a>.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  2. Datos que recogemos
                </h2>
                <p>
                  A través del formulario de solicitud de presupuesto y de contacto, recogemos los siguientes datos personales:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-foreground-200">Identificación:</strong> Nombre y apellidos, nombre de la empresa.</li>
                  <li><strong className="text-foreground-200">Contacto:</strong> Dirección de correo electrónico y número de teléfono.</li>
                  <li><strong className="text-foreground-200">Información del proyecto:</strong> Ubicación, superficie aproximada, fecha deseada, descripción del servicio solicitado y tipo de servicio.</li>
                </ul>
                <p className="mt-3">
                  También recopilamos datos de navegación mediante cookies y tecnologías similares, conforme a lo indicado en nuestra <Link to="/cookies" className="text-primary-400 hover:text-primary-300 transition-colors">Política de Cookies</Link>.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  3. Finalidad del tratamiento y base jurídica
                </h2>
                <p>
                  Tratamos sus datos personales con las siguientes finalidades y bases jurídicas:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-foreground-200">Gestionar solicitudes de presupuesto:</strong> base jurídica: ejecución de medidas precontractuales a petición del interesado (art. 6.1.b RGPD).</li>
                  <li><strong className="text-foreground-200">Responder a consultas y comunicaciones:</strong> base jurídica: consentimiento del interesado (art. 6.1.a RGPD).</li>
                  <li><strong className="text-foreground-200">Enviar información comercial:</strong> base jurídica: consentimiento expreso del interesado (art. 6.1.a RGPD y art. 21 LSSI-CE).</li>
                  <li><strong className="text-foreground-200">Mejorar la experiencia de usuario:</strong> base jurídica: interés legítimo (art. 6.1.f RGPD).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  4. Conservación de los datos
                </h2>
                <p>
                  Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades que pudieran derivarse de dicha finalidad y del tratamiento de los datos.
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li>Datos de solicitudes de presupuesto: hasta 2 años desde la última interacción.</li>
                  <li>Datos de suscripciones a comunicaciones comerciales: hasta que el interesado revoque su consentimiento.</li>
                  <li>Datos de navegación (cookies): conforme a la Política de Cookies.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  5. Destinatarios y transferencias internacionales
                </h2>
                <p>
                  AVANZA DRONE no cederá sus datos personales a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, plataformas de envío de correo electrónico o almacenamiento en la nube).
                </p>
                <p className="mt-3">
                  En caso de utilizar proveedores ubicados fuera del Espacio Económico Europeo (EEE), garantizamos que se adopten las salvaguardas adecuadas (Cláusulas Contractuales Tipo de la Comisión Europea u otras garantías equivalentes).
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  6. Derechos del interesado
                </h2>
                <p>
                  En cualquier momento puede ejercer los siguientes derechos reconocidos por el Reglamento General de Protección de Datos (RGPD):
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-foreground-200">Derecho de acceso:</strong> conocer qué datos personales tratamos y cómo lo hacemos.</li>
                  <li><strong className="text-foreground-200">Derecho de rectificación:</strong> modificar datos inexactos o incompletos.</li>
                  <li><strong className="text-foreground-200">Derecho de supresión:</strong> solicitar la eliminación de sus datos cuando, entre otros motivos, ya no sean necesarios para los fines que fueron recogidos.</li>
                  <li><strong className="text-foreground-200">Derecho de oposición:</strong> oponerse al tratamiento de sus datos para fines específicos.</li>
                  <li><strong className="text-foreground-200">Derecho de limitación del tratamiento:</strong> solicitar la restricción del tratamiento de sus datos.</li>
                  <li><strong className="text-foreground-200">Derecho de portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                  <li><strong className="text-foreground-200">Derecho a no ser objeto de decisiones automatizadas:</strong> incluida la elaboración de perfiles.</li>
                </ul>
                <p className="mt-3">
                  Para ejercer estos derechos, puede enviar una solicitud por correo electrónico a <a href="mailto:info@avanzadrone.es" className="text-primary-400 hover:text-primary-300 transition-colors">info@avanzadrone.es</a> o por correo postal a la dirección indicada en el apartado 1, acompañando copia de su DNI o documento identificativo equivalente.
                </p>
                <p className="mt-3">
                  Asimismo, tiene derecho a presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer nofollow" className="text-primary-400 hover:text-primary-300 transition-colors">Agencia Española de Protección de Datos (AEPD)</a> si considera que el tratamiento de sus datos personales vulnera la normativa vigente.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  7. Seguridad de la información
                </h2>
                <p>
                  AVANZA DRONE ha adoptado las medidas de seguridad técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  8. Modificaciones de la Política de Privacidad
                </h2>
                <p>
                  AVANZA DRONE se reserva el derecho a modificar la presente Política de Privacidad en cualquier momento, publicando en el sitio web la versión actualizada. Se recomienda revisar periódicamente este documento.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}