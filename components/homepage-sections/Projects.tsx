import * as React from "react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ProjectCard from "../projects/ProjectCard";

import { projects } from "@/lib/career";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="AI products and the systems behind them"
      description="Selected work across banking agents, a consumer marketplace, enterprise automation, and real-time telemetry."
    >
      <div className="flex flex-col gap-6">
        <FadeInWhenVisible>
          <ProjectCard {...featured} />
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <FadeInWhenVisible
              key={project.title}
              delay={index * 0.1}
              className="h-full"
            >
              <ProjectCard {...project} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </Section>
  );
}
