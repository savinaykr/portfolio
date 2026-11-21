import * as React from "react";
import { FileText, GraduationCap } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import { siteData } from "@/lib/siteData";

import { roles } from "@/lib/career";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="From co-founding in 2019 to senior engineering and technical-lead roles across startups and enterprise."
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
        <ol className="relative border-l border-slate-800 ml-2">
          {roles.map((r, i) => (
            <li key={r.company} className="relative pl-8 pb-7 last:pb-0">
              {/* node */}
              <span
                className={`absolute -left-[6.5px] top-1.5 size-3 rounded-full ring-4 ring-background ${
                  r.current ? "bg-primary" : "bg-slate-600"
                }`}
                aria-hidden
              />
              <FadeInWhenVisible delay={i * 0.05}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-gray-50">
                    {r.company}
                  </h3>
                  {r.current && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-500/30">
                      Current
                    </span>
                  )}
                  <span className="ml-auto font-mono text-xs text-gray-500">
                    {r.dates}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-primary/90">{r.role}</p>
                <ul className="mt-3 max-w-3xl space-y-2.5 list-disc pl-4 text-sm leading-relaxed text-gray-300 marker:text-primary/60">
                  {r.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {r.tech && (
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {r.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-slate-800 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </FadeInWhenVisible>
            </li>
          ))}
        </ol>

        {/* Education + résumé link */}
        <FadeInWhenVisible delay={0.1} className="lg:w-64">
          <div className="terminal-card rounded-2xl border border-slate-800 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 text-gray-400">
              <GraduationCap className="size-4 text-primary" aria-hidden />
              <span className="text-xs uppercase tracking-wide">Education</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-100">
              B.Tech, Computer Science
            </p>
            <p className="text-sm text-gray-400">IIIT Una</p>
            <p className="font-mono text-xs text-gray-500 mt-0.5">
              Aug 2017 – May 2021
            </p>

            <a
              href={siteData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-primary transition-colors"
            >
              <FileText className="size-4" aria-hidden />
              Full history (résumé)
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
