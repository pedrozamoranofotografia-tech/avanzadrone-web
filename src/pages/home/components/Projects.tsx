import { projects } from "@/mocks/home";
import type { Project } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group relative overflow-hidden rounded-lg border border-background-800/60 bg-background-900 flex flex-col h-full">
        <div className="relative h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            title={`${project.title} - AERODATA`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-900/30 to-transparent"></div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-accent-500 text-background-950 text-xs font-medium">
              {project.sector}
            </span>
            {project.demo && (
              <span className="px-3 py-1 rounded-full bg-background-950/70 text-foreground-300 text-xs backdrop-blur-sm">
                Demostración
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-heading font-semibold text-lg text-foreground-50 leading-snug">
            {project.title}
          </h3>

          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="font-medium text-accent-400">Problema</p>
              <p className="mt-1 text-foreground-400 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="font-medium text-accent-400">Solución</p>
              <p className="mt-1 text-foreground-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <span
                key={t}
                className="text-xs text-foreground-300 bg-background-800/60 px-2.5 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <p className="font-medium text-foreground-200">Entregables</p>
            <ul className="mt-2 space-y-1.5">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-foreground-400">
                  <i className="ri-check-line text-accent-400 mt-0.5"></i>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t border-background-800/60">
            <p className="font-medium text-foreground-200">Resultado</p>
            <p className="mt-1 text-sm text-foreground-400 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 md:py-28 bg-background-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Proyectos"
          title="Casos de estudio reales"
          description="Cada proyecto es un problema resuelto con datos, precisión y resultados medibles."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-foreground-500">
            Los casos marcados como demostración se mostrarán como ejemplo hasta
            disponer de proyectos reales publicables.
          </p>
        </Reveal>
      </div>
    </section>
  );
}