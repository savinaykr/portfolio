import Link from "next/link";
import { roles } from "@/lib/career";

export default function ExperiencePreview() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="min-w-0 scroll-mt-20">
      <h2 id="experience-heading" className="border-b border-foreground/20 pb-3 text-lg font-medium">Experience</h2>
      <ol className="divide-y divide-foreground/10">
        {roles.slice(0, 3).map((role) => (
          <li key={role.company} className="py-4">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4">
              <h3 className="font-display text-lg font-semibold tracking-tight">{role.shortName ?? role.company}</h3>
              <span className="text-xs text-gray-400">{role.dates}</span>
            </div>
            <p className="mt-1 text-sm text-gray-300">{role.role}</p>
            {role.current && <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-gray-300">I work with data scientists to build APIs and MCP integrations for AI agents.</p>}
          </li>
        ))}
      </ol>
      <Link href="/experience" className="inline-flex min-h-11 items-center gap-2 text-sm text-primary hover:underline">View full experience <span aria-hidden>→</span></Link>
    </section>
  );
}
