import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import SocialIcons from "../socials/SocialIcons";
import TerminalTicker from "../hero/TerminalTicker";
import { siteData } from "@/lib/siteData";

// Entrance animations are pure CSS (animate-fade-up + per-block delays), so the
// hero is server-rendered and visible even before/without JS.
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-28 pb-16 lg:min-h-[min(900px,100svh)] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="section-shell relative grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="animate-fade-up font-mono text-xs tracking-wide text-primary">
            Applied AI &amp; agentic systems
          </p>

          <h1 className="animate-fade-up [animation-delay:60ms] mt-6 font-display font-bold tracking-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-50">
              {siteData.name}
            </span>
            <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl text-gray-400">
              {siteData.role}
            </span>
          </h1>

          <p className="mt-3 text-sm text-gray-300">
            at {siteData.worksFor.name}
          </p>

          <p className="animate-fade-up [animation-delay:120ms] mt-5 max-w-xl text-lg text-gray-300 leading-relaxed">
            {siteData.tagline}
          </p>
          <p className="animate-fade-up [animation-delay:160ms] mt-3 max-w-xl text-sm text-gray-500 leading-relaxed font-mono">
            {siteData.focus}
          </p>

          <div className="animate-fade-up [animation-delay:200ms] mt-5 flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="size-4 text-primary/80" aria-hidden />
            {siteData.location}
          </div>

          <div className="animate-fade-up [animation-delay:240ms] mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View my work
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <a
              href={siteData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-slate-700 px-5 py-2.5 text-sm text-gray-200 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <FileText className="size-4" aria-hidden />
              Résumé
            </a>
            <div className="pl-1">
              <SocialIcons />
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:280ms]">
            <TerminalTicker />
          </div>
        </div>

        {/* Portrait */}
        <div className="animate-fade-up [animation-delay:100ms] order-first lg:order-none justify-self-center mb-2 lg:mb-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 bg-gradient-to-tr from-primary/25 to-transparent blur-2xl"
            />
            <div className="terminal-card relative border border-slate-800 bg-black/30 p-2">
              <Image
                src="/profile-pic.png"
                alt={`Portrait of ${siteData.name}, ${siteData.role}`}
                width={300}
                height={300}
                priority
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 176px, 144px"
                className="size-36 sm:size-44 lg:size-[300px] bg-background object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 hover:text-primary transition-colors"
      >
        <ArrowDown className="size-6 animate-bounce" aria-hidden />
      </Link>
    </section>
  );
}
