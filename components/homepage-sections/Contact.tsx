import * as React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ContactCard from "../about/ContactCard";
import { siteData } from "@/lib/siteData";

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const links = [
  {
    icon: Mail,
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/savinay-kr",
    href: siteData.socials.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: `@${siteData.handle}`,
    href: siteData.socials.github,
  },
  {
    icon: XMark,
    label: "X",
    value: "@SavinayKr",
    href: siteData.socials.x,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      description={siteData.contactInvitation}
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible>
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  l.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="terminal-card flex items-center gap-4 rounded-xl border border-slate-800 bg-foreground/[0.02] p-4 hover:border-primary/40 hover:bg-foreground/[0.04] transition-colors"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <l.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-gray-500">
                    {l.label}
                  </span>
                  <span className="block truncate text-sm text-gray-200">
                    {l.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <ContactCard />
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
