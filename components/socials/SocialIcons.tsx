"use client";

import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { siteData } from "@/lib/siteData";

const socials = [
  {
    _id: 1,
    network: "x",
    url: siteData.socials.x,
  },
  {
    _id: 2,
    network: "linkedin",
    url: siteData.socials.linkedin,
  },
  {
    _id: 3,
    network: "github",
    url: siteData.socials.github,
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-5">
      {socials.map((social) => (
        <div
          key={social._id}
          className="p-1 rounded-full border border-transparent hover:border-slate-700 hover:bg-muted transition"
        >
          <SocialIcon
            url={social.url}
            network={social.network}
            fgColor="currentColor"
            bgColor="transparent"
          />
        </div>
      ))}
    </div>
  );
}
