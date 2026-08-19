import { processSteps } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 md:py-28 bg-background-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro de cinco pasos"
          description="De la idea inicial a la entrega de información lista para usar en tu proyecto."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="relative flex flex-col h-full p-6 rounded-lg border border-background-800/60 bg-background-900">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-accent-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-foreground-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-400 leading-relaxed">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <span className="hidden lg:flex absolute top-6 -right-4 w-8 h-8 items-center justify-center rounded-full bg-background-800/80 text-accent-400 border border-background-700">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}