import { MapPin } from "lucide-react";
import { siteData } from "@/lib/siteData";

const HIGHLIGHTS = [
  "AI Agents & MCP",
  "RAG & Evals",
  "Go · Python · K8s",
];

export default function Hero() {
  return (
    <header className="self-start">
      <h1 className="font-display text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-gray-50 sm:text-6xl lg:max-w-[9ch] lg:text-7xl">
        {siteData.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-primary">{siteData.role}</p>
      <ul className="mt-4 flex flex-wrap items-center gap-2" aria-label="Focus and location">
        <li className="inline-flex items-center gap-1.5 border border-foreground/15 bg-foreground/[0.03] px-2.5 py-1 font-mono text-xs text-gray-300">
          <MapPin className="size-3.5 text-primary" aria-hidden />
          {siteData.location}
        </li>
        {HIGHLIGHTS.map((item) => (
          <li
            key={item}
            className="inline-flex items-center border border-foreground/15 bg-foreground/[0.03] px-2.5 py-1 font-mono text-xs text-gray-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 max-w-[44ch] space-y-4 text-[0.95rem] leading-[1.7] text-gray-300 sm:text-base">
        <p>I build AI agents and the backend systems they rely on. I work with data scientists to give agents access to the tools and data they need.</p>
        <p>I’ve also led a team building fleet software. When fuel-theft alerts fell behind, I traced the delays to repeated database reads and redesigned how we processed vehicle data.</p>
        <p>I co-founded two startups. At one, I built a live classroom for students. At the other, I built the cloud infrastructure for a mobile marketplace.</p>
      </div>
    </header>
  );
}
