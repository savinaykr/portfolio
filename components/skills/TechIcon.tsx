import * as React from "react";
import Image from "next/image";
import type { Tech } from "./technologies";

// Brands use local SVGs or existing devicons; capabilities use neutral symbols.
// Fixed dimensions keep labels stable while lazy-loaded logos arrive.
export default function TechIcon({
  tech,
  size = 22,
}: {
  tech: Tech;
  size?: number;
}) {
  if (tech.image) {
    return (
      <Image
        src={tech.image}
        alt=""
        aria-hidden
        width={size}
        height={size}
        unoptimized
        loading="lazy"
        decoding="async"
        className={`shrink-0 object-contain ${tech.imageClassName ?? ""}`}
      />
    );
  }

  if (tech.icon) {
    const Icon = tech.icon;
    return (
      <Icon
        size={size}
        className={`shrink-0 ${tech.iconClassName ?? ""}`}
        aria-hidden
      />
    );
  }

  const tint = tech.tint ?? "240 5% 65%";
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-[5px] font-mono font-semibold leading-none"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(8, Math.round(size * 0.42)),
        color: `hsl(${tint})`,
        backgroundColor: `hsl(${tint} / 0.16)`,
        border: `1px solid hsl(${tint} / 0.32)`,
      }}
    >
      {tech.mono ?? tech.name.slice(0, 2)}
    </span>
  );
}
