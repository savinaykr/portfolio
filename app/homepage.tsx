import { Bot, Cloud, Network } from "lucide-react";
import About from "@/components/homepage-sections/About";
import Blog from "@/components/homepage-sections/Blog";
import Hero from "@/components/homepage-sections/Hero";
import ExperiencePreview from "@/components/homepage-sections/ExperiencePreview";
import Projects from "@/components/homepage-sections/Projects";
import Skills from "@/components/homepage-sections/Skills";
import Contact from "@/components/homepage-sections/Contact";
import ScrollToHash from "@/components/shared/ScrollToHash";
import type { BlogPost } from "@/lib/blog";

export interface IHomepageProps {
  posts?: BlogPost[];
}

export default function Homepage(props: IHomepageProps) {
  return (
    <>
      <ScrollToHash />
      <div id="hero" className="section-shell grid gap-12 pb-12 pt-32 sm:pt-36 lg:grid-cols-[1fr_1.25fr] lg:gap-24 lg:py-36">
        <Hero />
        <div className="min-w-0 space-y-7">
          <section aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className="text-lg font-medium">Areas of expertise</h2>
            <div className="mt-3 border-t border-foreground/15">
              {[
                {
                  icon: Bot,
                  area: "Applied AI & agents",
                  summary: "AI agents that use tools and data.",
                  description:
                    "I design multi-step agent workflows and build the APIs and MCP tools they use. I work with data scientists to test how agents handle decisions, handoffs and unexpected questions.",
                },
                {
                  icon: Network,
                  area: "Distributed systems",
                  summary: "Event processing and reliable backend services.",
                  description:
                    "I build event-driven services in Python and Go. For a fleet monitoring system, I parallelized Kafka consumers and kept recent readings in memory so fuel alerts could keep up with incoming data.",
                },
                {
                  icon: Cloud,
                  area: "Cloud infrastructure",
                  summary: "Cloud deployments and secure team access.",
                  description:
                    "I built a startup’s deployment infrastructure on AWS and Google Cloud with Docker and Kubernetes. I also set up SSO for employees and VPN access to internal resources.",
                },
              ].map(({ icon: Icon, area, summary, description }) => (
                <details key={area} name="expertise" className="group border-b border-foreground/15">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3.5 font-medium text-gray-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-start gap-3.5">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center bg-primary/10 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block">{area}</span>
                        <span className="mt-0.5 block text-sm font-normal leading-snug text-gray-400">{summary}</span>
                      </span>
                    </span>
                    <span aria-hidden="true" className="relative mr-1 h-3 w-3 shrink-0 text-primary before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current group-open:after:hidden" />
                  </summary>
                  <p className="max-w-prose pb-4 pl-[3.125rem] pr-5 text-sm leading-relaxed text-gray-300">{description}</p>
                </details>
              ))}
            </div>
          </section>
          <ExperiencePreview />
        </div>
      </div>
      <Projects />
      <About />
      <Blog posts={props.posts ?? []} />
      <Skills />
      <Contact />
    </>
  );
}
