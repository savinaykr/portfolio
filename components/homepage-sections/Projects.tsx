import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredWork } from "@/lib/career";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="stories-heading" className="section-shell scroll-mt-20 pb-8">
      <h2 id="stories-heading" className="border-t border-foreground/15 pt-8 font-display text-2xl font-semibold tracking-tight">Engineering stories</h2>
      {featuredWork.map((work) => (
        <Link id={work.id} key={work.id} href={`/work/${work.id}`} className="group block scroll-mt-20 border-b border-foreground/15 py-6 lg:py-7">
          <p className="text-sm text-gray-400">{work.label}</p>
          <div className="mt-2 flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-medium leading-tight tracking-tight text-gray-50 group-hover:text-primary lg:text-2xl">{work.title}</h3>
            <ArrowUpRight size={18} aria-hidden className="shrink-0 text-primary" />
          </div>
        </Link>
      ))}
    </section>
  );
}
