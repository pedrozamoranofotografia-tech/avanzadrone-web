import Reveal from "@/components/base/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent-400">
        <span className="w-5 h-px bg-accent-400"></span>
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground-50 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-foreground-400 leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}