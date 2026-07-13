import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full hairline bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-[30px] leading-[1.1] font-bold tracking-tight md:text-[44px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--ink-dim)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
