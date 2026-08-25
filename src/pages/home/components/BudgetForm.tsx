import { useState, useEffect } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

const SUBMIT_ADDR = "https://readdy.ai/api/form/da2sbhaamq5jpe1hs4hg";

const serviceOptions = [
  "Inspección",
  "Termografía",
  "Topografía",
  "Fotogrametría",
  "Seguimiento de obra",
  "Planta solar",
  "Audiovisual",
  "Inmobiliario",
  "Otro",
];

export default function BudgetForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const hp = (fd.get("website_alt") as string) || "";
    if (hp.trim() !== "") {
      setStatus("success");
      setStatusMsg("Solicitud enviada. Te contactaremos en breve.");
      form.reset();
      return;
    }

    const servicios = (fd.getAll("servicio") as string[]).filter(Boolean).join(", ");

    const payload = new URLSearchParams();
    payload.append("servicios", servicios);
    payload.append("ubicacion", (fd.get("ubicacion") as string) || "");
    payload.append("superficie", (fd.get("superficie") as string) || "");
    payload.append("fecha", (fd.get("fecha") as string) || "");
    payload.append("descripcion", (fd.get("descripcion") as string) || "");
    payload.append("nombre", (fd.get("nombre") as string) || "");
    payload.append("email", (fd.get("email") as string) || "");
    payload.append("telefono", (fd.get("telefono") as string) || "");

    try {
      const res = await fetch(SUBMIT_ADDR, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      const responseText = await res.text();
      let parsed: Record<string, unknown> | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const code = parsed?.code as string | undefined;
      const serverMsg =
        (parsed?.meta as { message?: string } | undefined)?.message ||
        (parsed?.meta as { detail?: string } | undefined)?.detail ||
        (parsed?.message as string | undefined) ||
        responseText;

      if (res.ok && code === "OK") {
        setStatus("success");
        setStatusMsg("Solicitud enviada correctamente. Te contactaremos en breve.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMsg(
          serverMsg && serverMsg !== responseText
            ? serverMsg
            : "No se pudo enviar la solicitud. Inténtalo de nuevo."
        );
      }
    } catch {
      setStatus("error");
      setStatusMsg("Error de conexión. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="presupuesto" className="relative py-20 md:py-28 bg-background-950">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Solicitar presupuesto"
          title="Cuéntanos tu proyecto"
          description="Completa el formulario y te prepararemos una propuesta a medida, sin compromiso."
        />

        {/* Info de contacto */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="flex items-start gap-3 bg-background-900 border border-background-800/60 rounded-lg p-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 shrink-0">
                <i className="ri-map-pin-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-medium text-foreground-200">Dirección</p>
                <p className="text-xs text-foreground-500 mt-0.5">
                  Calle Cidro, 20, 3º<br />28044 Madrid, España
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-background-900 border border-background-800/60 rounded-lg p-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 shrink-0">
                <i className="ri-mail-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-medium text-foreground-200">Email</p>
                <a href="mailto:info@avanzadrone.es" className="text-xs text-foreground-500 hover:text-foreground-200 transition-colors mt-0.5 block">
                  info@avanzadrone.es
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-background-900 border border-background-800/60 rounded-lg p-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 shrink-0">
                <i className="ri-phone-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-medium text-foreground-200">Teléfono</p>
                <a href="tel:+34636980609" className="text-xs text-foreground-500 hover:text-foreground-200 transition-colors mt-0.5 block">
                  636 98 06 09
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-background-900 border border-background-800/60 rounded-lg p-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 shrink-0">
                <i className="ri-time-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-medium text-foreground-200">Horario</p>
                <p className="text-xs text-foreground-500 mt-0.5">
                  Lunes a Viernes<br />9:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-lg overflow-hidden border border-background-800/60 bg-background-900">
            <iframe
              title="Ubicación de AVANZA DRONE en Madrid"
              src="https://www.google.com/maps?q=Calle+Cidro+20,+28044+Madrid&output=embed"
              className="w-full h-64 md:h-72"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa con la ubicación de AVANZA DRONE"
            ></iframe>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <form
            onSubmit={handleSubmit}
            data-readdy-form
            className="bg-background-900 border border-background-800/60 rounded-lg p-6 md:p-10"
          >
            <input
              type="text"
              name="website_alt"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              readOnly
              className="field-aux"
            />

            <div>
              <label className="block font-heading font-semibold text-base text-foreground-100">
                ¿Qué necesitas?
              </label>
              <p className="mt-1 text-sm text-foreground-500">
                Selecciona una o varias opciones.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {serviceOptions.map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-background-700 text-sm text-foreground-300 cursor-pointer hover:border-accent-500 hover:text-foreground-100 transition-colors has-[:checked]:border-accent-500 has-[:checked]:bg-accent-500/10 has-[:checked]:text-accent-300"
                  >
                    <input
                      type="checkbox"
                      name="servicio"
                      value={opt}
                      className="sr-only"
                    />
                    <i className="ri-check-line"></i>
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="ubicacion"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Ubicación del proyecto
                </label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  placeholder="Ciudad o localidad"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="superficie"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Superficie aproximada
                </label>
                <input
                  id="superficie"
                  name="superficie"
                  type="text"
                  placeholder="Ej. 5.000 m²"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="fecha"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Fecha deseada
                </label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 focus:border-accent-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium text-foreground-200 mb-2"
              >
                Descripción del proyecto
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                maxLength={500}
                placeholder="Cuéntanos brevemente qué necesitas, el objetivo del proyecto y cualquier detalle relevante."
                className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none resize-none"
              ></textarea>
              <p className="mt-1 text-xs text-foreground-500">
                Máximo 500 caracteres. Si necesitas enviarnos planos,
                fotografías o documentación adicional, podremos solicitártelos
                después de recibir tu consulta.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Nombre y empresa
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre / empresa"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-foreground-200 mb-2"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="w-full px-4 py-3 rounded-md bg-background-950/60 border border-background-700 text-sm text-foreground-100 placeholder:text-foreground-600 focus:border-accent-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-9 w-full md:w-auto px-10 py-4 rounded-md bg-primary-500 text-background-950 font-semibold text-base hover:bg-primary-400 transition-all whitespace-nowrap"
            >
              RECIBIR PROPUESTA
            </button>

            {status !== "idle" && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-accent-400" : "text-red-400"
                }`}
              >
                {statusMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}