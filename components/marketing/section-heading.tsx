export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.28em] ${
          invert ? "text-[rgba(255,209,191,0.78)]" : "text-[var(--color-accent)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl ${
          invert ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p className={`text-base leading-8 sm:text-lg ${invert ? "text-white/70" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
