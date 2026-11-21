import * as React from "react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import SkillCard from "../skills/SkillCard";
import SkillTagCard from "../skills/SkillTagCard";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Applied AI, supported by backend engineering and end-to-end infrastructure delivery."
      className="bg-white/[0.015]"
    >
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible className="lg:sticky lg:top-24">
          <SkillCard />
        </FadeInWhenVisible>
        <div>
          <SkillTagCard />
        </div>
      </div>
    </Section>
  );
}
