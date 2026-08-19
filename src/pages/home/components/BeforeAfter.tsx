import { useRef, useState } from "react";
import { comparisons } from "@/mocks/home";
import type { Comparison } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";

function BeforeAfterSlider({ comparison }: { comparison: Comparison }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-ew-resize select-none touch-none bg-background-900"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      <img
        src={comparison.before}
        alt={comparison.beforeLabel}
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img
          src={comparison.after}
          alt={comparison.afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white/80"></div>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-background-950 flex items-center justify-center shadow-lg">
          <i className="ri-arrow-left-right-line"></i>
        </div>
      </div>

      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background-950/70 text-foreground-100 text-xs backdrop-blur-sm">
        {comparison.beforeLabel}
      </span>
      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary-500 text-background-950 text-xs font-medium">
        {comparison.afterLabel}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="relative py-20 md:py-28 bg-background-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Antes y después"
          title="Comprende el valor al instante"
          description="Desliza para comparar la diferencia entre una simple imagen y la información procesada que entregamos."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((comparison, i) => (
            <Reveal key={comparison.title} delay={(i % 2) * 80}>
              <div>
                <BeforeAfterSlider comparison={comparison} />
                <p className="mt-3 text-sm font-medium text-foreground-200">
                  {comparison.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}