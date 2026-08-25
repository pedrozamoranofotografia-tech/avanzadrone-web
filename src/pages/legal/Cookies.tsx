import { useState } from "react";
import { Link } from "react-router-dom";
import { brand } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import useSEO from "@/hooks/useSEO";

const cookieCategories = [
  {
    name: "Necesarias",
    description:
      "Son imprescindibles para el correcto funcionamiento del sitio web. No pueden desactivarse en nuestros sistemas. Suelen configurarse solo en respuesta a acciones realizadas por usted, como establecer preferencias de privacidad, iniciar sesión o rellenar formularios.",
    examples: ["Sesión de usuario", "Preferencias de privacidad", "Seguridad CSRF"],
    required: true,
  },
  {
    name: "Analíticas",
    description:
      "Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y a ver cómo se mueven los visitantes por el sitio.",
    examples: ["Google Analytics 4", "Métricas de uso"],
    required: false,
  },
  {
    name: "Funcionales",
    description:
      "Permiten que el sitio web ofrezca una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por terceros cuyos servicios hemos añadido a nuestras páginas.",
    examples: ["Preferencias de idioma", "Formularios de contacto"],
    required: false,
  },
  {
    name: "Marketing",
    description:
      "Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual, y por tanto, más valiosos para los editores y anunciantes terceros.",
    examples: ["Publicidad personalizada", "Redes sociales"],
    required: false,
  },
];

export default function Cookies() {
  const [accepted, setAccepted] = useState(false);

  useSEO({
    title: "Política de Cookies | AVANZA DRONE",
    description:
      "Política de cookies de AVANZA DRONE. Conoce qué cookies utilizamos, para qué sirven y cómo gestionar tus preferencias.",
    keywords: "cookies, política de cookies, privacidad, AVANZA DRONE",
    canonicalPath: "/cookies",
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
              Política de Cookies
            </h1>
            <p className="text-sm text-foreground-500 mb-10">
              Última actualización: 19 de agosto de 2026
            </p>

            <div className="space-y-8 text-foreground-300 leading-relaxed">
              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  1. ¿Qué son las cookies?
                </h2>
                <p>
                  Una cookie es un pequeño archivo de texto que se almacena en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten al sitio web reconocer su dispositivo y recordar información sobre su visita, como sus preferencias de idioma, opciones de inicio de sesión y otros ajustes.
                </p>
                <p className="mt-3">
                  También utilizamos tecnologías similares a las cookies, como local storage, session storage y web beacons, que cumplen funciones equivalentes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  2. ¿Qué tipos de cookies utilizamos?
                </h2>
                <p className="mb-4">
                  En AVANZA DRONE utilizamos las siguientes categorías de cookies:
                </p>
                <div className="space-y-5">
                  {cookieCategories.map((cat) => (
                    <div
                      key={cat.name}
                      className="bg-background-900 border border-background-800/60 rounded-lg p-5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading font-semibold text-foreground-100">
                          {cat.name}
                        </h3>
                        {cat.required && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                            Obligatorias
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-foreground-400 mb-2">
                        {cat.description}
                      </p>
                      <p className="text-xs text-foreground-500">
                        <strong className="text-foreground-400">Ejemplos:</strong>{" "}
                        {cat.examples.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  3. Cookies de terceros
                </h2>
                <p>
                  Algunas cookies son colocadas por terceros que prestan servicios en nuestro sitio web. Actualmente utilizamos:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-foreground-200">Google Analytics 4:</strong> para analizar el tráfico y el comportamiento de los usuarios en nuestro sitio web. Google puede transferir datos fuera del EEE conforme a sus propias políticas de privacidad.
                  </li>
                  <li>
                    <strong className="text-foreground-200">Font Awesome / Remix Icon:</strong> para la carga de iconografía web. No recogen datos personales identificables.
                  </li>
                  <li>
                    <strong className="text-foreground-200">Google Fonts:</strong> para la carga de tipografías. No recogen datos personales identificables.
                  </li>
                </ul>
                <p className="mt-3">
                  Puede consultar las políticas de privacidad de estos terceros en sus respectivos sitios web.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  4. Gestión de cookies
                </h2>
                <p>
                  Puede gestionar sus preferencias de cookies de las siguientes formas:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-foreground-200">Banner de cookies:</strong> al visitar nuestro sitio por primera vez, se mostrará un banner que le permite aceptar, rechazar o configurar sus preferencias de cookies.
                  </li>
                  <li>
                    <strong className="text-foreground-200">Configuración del navegador:</strong> todos los navegadores permiten gestionar las cookies a través de sus opciones de configuración. Puede bloquear o eliminar las cookies instaladas en su dispositivo. Tenga en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio web.
                  </li>
                  <li>
                    <strong className="text-foreground-200">Herramientas de terceros:</strong> existen herramientas externas que permiten gestionar el seguimiento de cookies de múltiples sitios web.
                  </li>
                </ul>
                <p className="mt-3">
                  A continuación le proporcionamos enlaces a las instrucciones de gestión de cookies de los navegadores más utilizados:
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Google Chrome
                  </a>
                  <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Mozilla Firefox
                  </a>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Safari
                  </a>
                  <a
                    href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Microsoft Edge
                  </a>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  5. Actualizaciones de la Política de Cookies
                </h2>
                <p>
                  AVANZA DRONE puede actualizar esta Política de Cookies en cualquier momento para adaptarla a cambios legislativos, técnicos o en los servicios prestados. Se recomienda revisar periódicamente este documento.
                </p>
                <p className="mt-3">
                  Cuando se produzcan cambios significativos, se mostrará nuevamente el banner de cookies para que pueda revisar y ajustar sus preferencias.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground-100 mb-3">
                  6. Contacto
                </h2>
                <p>
                  Si tiene cualquier duda sobre nuestra Política de Cookies, puede contactarnos en <a href="mailto:info@avanzadrone.es" className="text-primary-400 hover:text-primary-300 transition-colors">info@avanzadrone.es</a>.
                </p>
              </section>
            </div>

            {/* Simulador de preferencias */}
            <div className="mt-12 bg-background-900 border border-background-800/60 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground-100 mb-4">
                Preferencias de cookies
              </h3>
              <p className="text-sm text-foreground-400 mb-5">
                Puede gestionar sus preferencias de cookies aquí. Las cookies necesarias no pueden desactivarse.
              </p>
              <div className="space-y-3">
                {cookieCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between py-3 border-b border-background-800/40 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground-200">
                        {cat.name}
                      </p>
                      <p className="text-xs text-foreground-500">
                        {cat.required
                          ? "Siempre activas"
                          : accepted
                          ? "Activas"
                          : "Desactivadas"}
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={cat.required}
                      onClick={() => !cat.required && setAccepted(!accepted)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        cat.required || accepted
                          ? "bg-primary-500"
                          : "bg-background-700"
                      } ${cat.required ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-background-50 transition-transform ${
                          cat.required || accepted
                            ? "translate-x-5"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setAccepted(true)}
                  className="px-5 py-2.5 rounded-md bg-primary-500 text-background-950 text-sm font-medium hover:bg-primary-400 transition-all whitespace-nowrap"
                >
                  Aceptar todas
                </button>
                <button
                  type="button"
                  onClick={() => setAccepted(false)}
                  className="px-5 py-2.5 rounded-md border border-background-600 text-foreground-200 text-sm font-medium hover:bg-background-800/60 transition-all whitespace-nowrap"
                >
                  Solo necesarias
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}