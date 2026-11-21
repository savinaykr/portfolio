import * as React from "react";
import {
  Briefcase,
  Compass,
  MapPin,
  Sparkles,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import AboutCard from "../about/AboutCard";

const glance = [
  {
    icon: Briefcase,
    label: "Currently",
    value: "Senior AI Engineer · Commonwealth Bank of Australia",
  },
  {
    icon: Compass,
    label: "Focus",
    value: "Applied AI · Agents · RAG · Distributed systems",
  },
  {
    icon: Rocket,
    label: "Product delivery",
    value: "Companion lending pilot · ViHi on iOS & Android",
  },
  { icon: MapPin, label: "Based in", value: "Bengaluru, India" },
  {
    icon: ShieldCheck,
    label: "Infrastructure",
    value: "Employee SSO & VPN · AWS/GCP deployments",
  },
  {
    icon: Sparkles,
    label: "Leadership",
    value: "Pod delivery · Architecture · Teams of 6+",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="From an AI workflow to a working product"
      description="Applied AI engineering with the backend, infrastructure, and delivery experience to bring it into production."
    >
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible>
          <AboutCard />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="terminal-card rounded-2xl border border-slate-800 bg-white/[0.02] p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              At a glance
            </h3>
            <dl className="space-y-4">
              {glance.map((item) => (
                <div key={item.label} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-200 mt-0.5">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
