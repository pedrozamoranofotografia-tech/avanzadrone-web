import { useState } from "react";
import type { ServiceFAQ as FAQ } from "@/mocks/services";
import Reveal from "@/components/base/Reveal";

export default function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background-950">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-foreground-400">
            Resolvemos las dudas más habituales sobre este servicio.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 40}>
                <div className="rounded-lg border border-background-800/60 bg-background-900 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-medium text-foreground-100">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center shrink-0 text-accent-400">
                      <i
                        className={`${
                          isOpen ? "ri-subtract-line" : "ri-add-line"
                        } text-lg`}
                      ></i>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-foreground-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}