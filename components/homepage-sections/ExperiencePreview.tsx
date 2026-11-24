import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roles } from "@/lib/career";

export default function ExperiencePreview() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="min-w-0 scroll-mt-20">
      <h2 id="experience-heading" className="border-b border-foreground/20 pb-3 text-lg font-medium">
        Experience
      </h2>
      <ol className="relative ml-2 mt-5 pb-8">
        {roles.slice(0, 3).map((role, index, list) => {
          const isFirst = index === 0;
          const isLast = index === list.length - 1;
          return (
            <li key={role.company} className="relative pb-6 pl-7 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-0 left-0 w-px bg-slate-800 ${
                    isFirst ? "top-2" : "top-0"
                  }`}
                />
              )}
              {isLast && (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 h-2 w-px bg-slate-800"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-2 h-14 w-px bg-gradient-to-b from-slate-800 to-transparent"
                  />
                </>
              )}
              <span
                className={`absolute -left-[5.5px] top-1.5 z-10 size-3 rounded-full ring-4 ring-background ${
                  role.current ? "bg-primary" : "bg-slate-600"
                }`}
                aria-hidden
              />
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-gray-50">
                    {role.shortName ?? role.company}
                  </h3>
                  {role.current && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs text-gray-500">{role.dates}</span>
              </div>
              <p className="mt-0.5 text-sm text-primary/90">{role.role}</p>
              {role.current && (
                <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-gray-300">
                  I build AI agents, from the conversations customers have with them to the tools they use behind the scenes.
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <Link
        href="/experience"
        className="inline-flex min-h-11 items-center gap-2 pl-9 text-sm text-primary hover:underline"
      >
        View full experience
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </section>
  );
}
