import { heroImage, trustIndicators, brand } from "@/mocks/home";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-background-950">
      {/* Fondo cinematográfico con efecto Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista aérea de una planta solar al atardecer"
          title={`Inspección aérea con drones - ${brand.name}`}
          className="w-full h-full object-cover object-top animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-950/70 via-background-950/40 to-background-950"></div>
      </div>

      {/* Línea de escaneo HUD */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-accent-400/30 animate-scan"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-center text-center px-4 md:px-8 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-900/60 border border-background-700/60 text-xs font-medium text-accent-300 backdrop-blur-sm">
            <i className="ri-radar-line"></i>
            Tecnología · Precisión · Seguridad
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground-50 leading-[1.05] tracking-tight">
            Vemos desde el aire lo que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              otros no pueden ver.
            </span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-foreground-200/90 leading-relaxed max-w-2xl mx-auto">
            Inspección, topografía, fotogrametría y producción audiovisual con
            drones para empresas que necesitan datos precisos, operaciones más
            seguras e imágenes extraordinarias.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#presupuesto"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-primary-500 text-background-950 font-semibold text-base hover:bg-primary-400 transition-all whitespace-nowrap"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto px-8 py-4 rounded-md border border-background-600 text-foreground-100 font-medium text-base hover:bg-background-800/60 hover:border-background-500 transition-all whitespace-nowrap"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Indicadores de confianza */}
        <div className="mt-16 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background-800/40 rounded-lg overflow-hidden border border-background-800/60 backdrop-blur-sm">
            {trustIndicators.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 px-4 py-6 bg-background-950/60"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400">
                  <i className={`${item.icon} text-xl`}></i>
                </span>
                <span className="text-xs md:text-sm font-medium text-foreground-200 text-center uppercase tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}