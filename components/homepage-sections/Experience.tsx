import * as React from "react";
import { GraduationCap } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";

import { roles } from "@/lib/career";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
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
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">{r.summary}</p>
              </FadeInWhenVisible>
            </li>
          ))}
        </ol>

        {/* Education */}
        <FadeInWhenVisible delay={0.1} className="lg:w-64">
          <div className="terminal-card rounded-2xl border border-slate-800 bg-foreground/[0.02] p-6">
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

          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
