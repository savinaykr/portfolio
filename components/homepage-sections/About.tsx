import Image from "next/image";
import {
  Briefcase,
  Compass,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Section from "@/components/shared/Section";
import { siteData } from "@/lib/siteData";

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
      <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div className="terminal-card border border-slate-800 bg-foreground/[0.02] p-6 sm:p-7">
          <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5 sm:gap-5">
            <div className="shrink-0 border border-slate-800 bg-background p-1">
              <Image
                src="/profile-pic.png"
                alt={`Portrait of ${siteData.name}, ${siteData.role}`}
                width={96}
                height={96}
                sizes="96px"
                className="size-20 object-cover sm:size-24"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold text-gray-50 sm:text-xl">
                {siteData.name}
              </h3>
              <p className="mt-0.5 text-sm text-primary">{siteData.role}</p>
              <p className="mt-1 font-mono text-xs text-gray-400">
                IIIT Una · B.Tech CS · @{siteData.handle}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base sm:leading-7 [&_strong]:font-medium [&_strong]:text-gray-100">
            <p>
              I’m based in Bengaluru. While studying computer science at{" "}
              <strong>IIIT Una</strong>, I co-founded{" "}
              <strong>Career Capsule</strong> and built a live classroom that
              could bring more than 100 students into a single session.
            </p>
            <p>
              At <strong>Neosenth</strong>, launching ViHi on iOS and Android
              meant working on both sides of the product: the experience people
              used on their phones and the Go services, employee SSO/VPN, and
              AWS/GCP infrastructure our team needed to run it.
            </p>
            <p>
              Today at <strong>Commonwealth Bank of Australia</strong>, I build
              conversational workflows, MCP integrations, and guardrails for
              Companion—taking AI features from design and evals through pilot
              rollout.
            </p>
          </div>
        </div>

        <div className="terminal-card border border-slate-800 bg-foreground/[0.02] p-6">
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-gray-400">
            At a glance
          </h3>
          <dl className="space-y-4">
            {glance.map((item) => (
              <div key={item.label} className="flex gap-3.5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center bg-primary/10 text-primary">
                  <item.icon className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-gray-200">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
