import Link from "next/link";
import Image from "next/image";

import { siteData } from "@/lib/siteData";
import ThemeSelect from "./ThemeSelect";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
      <nav aria-label="Main" className="section-shell flex h-16 items-center gap-3 text-sm sm:gap-6">
        <Link href="/#hero" className="mr-auto flex items-center gap-2 font-mono" aria-label="Savinay Kumar home">
          <Image src="/logo.svg" alt="" width={32} height={32} unoptimized />
          {siteData.name}
        </Link>
        <Link href="/#experience" className="hidden text-gray-300 hover:text-primary sm:inline">Experience</Link>
        <Link href="/blog" className="hidden text-gray-300 hover:text-primary sm:inline">Writing</Link>
        <Link href="/#contact" className="py-3 text-primary">Contact</Link>
        <ThemeSelect />
      </nav>
    </header>
  );
}
