import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import SkillCard from "../skills/SkillCard";
import SkillTagCard from "../skills/SkillTagCard";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technologies"
      title="What I work with"
      description="Applied AI, supported by backend engineering and end-to-end infrastructure delivery."
      className="bg-foreground/[0.015]"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
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
