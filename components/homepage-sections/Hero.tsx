import { siteData } from "@/lib/siteData";

export default function Hero() {
  return (
    <header className="self-start">
      <h1 className="font-display text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-gray-50 sm:text-6xl lg:max-w-[9ch] lg:text-7xl">{siteData.name}</h1>
      <p className="mt-3 text-lg font-medium text-primary">{siteData.role}</p>
      <div className="mt-5 max-w-[42ch] space-y-3 text-[1.0625rem] leading-relaxed text-gray-300 sm:text-lg">
        <p>I build AI agents and the backend systems they rely on. I work with data scientists to give agents access to the tools and data they need.</p>
        <p>I’ve also led a team building fleet software. When fuel-theft alerts fell behind, I traced the delays to repeated database reads and redesigned how we processed vehicle data.</p>
        <p>I co-founded two startups. At one, I built a live classroom for students. At the other, I built the cloud infrastructure for a mobile marketplace.</p>
      </div>
    </header>
  );
}
