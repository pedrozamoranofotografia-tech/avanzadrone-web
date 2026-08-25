import { whyDrones } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

export default function WhyDrones() {
  return (
    <section id="por-que" className="relative py-20 md:py-28 bg-background-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Por qué usar drones"
          title="Resultados que otros métodos no alcanzan"
          description="El dron es la herramienta. El producto es la información y el resultado que recibe tu empresa."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyDrones.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex flex-col h-full p-7 rounded-lg border border-background-800/60 bg-background-950/40 hover:border-primary-700/50 transition-all cursor-pointer">
                <span className="w-14 h-14 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-background-950 transition-colors">
                  <i className={`${item.icon} text-2xl`}></i>
                </span>
                <h3 className="mt-5 font-heading font-semibold text-lg text-foreground-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}