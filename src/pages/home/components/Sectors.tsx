import { Link } from "react-router-dom";
import { sectors } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

export default function Sectors() {
  return (
    <section id="sectores" className="relative py-20 md:py-28 bg-background-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Sectores"
          title="Tecnología aérea aplicada a tu sector"
          description="Trabajamos codo con codo con empresas e instituciones de los sectores más exigentes."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={(i % 4) * 60}>
              <Link
                to={`/${sector.slug}`}
                className="group flex flex-col items-center gap-4 p-6 rounded-lg border border-background-800/60 bg-background-950/40 hover:bg-background-950/80 hover:border-background-700 transition-all cursor-pointer"
              >
                <span className="w-14 h-14 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 group-hover:bg-accent-500 group-hover:text-background-950 transition-colors">
                  <i className={`${sector.icon} text-2xl`}></i>
                </span>
                <span className="text-sm font-medium text-foreground-200 text-center">
                  {sector.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}