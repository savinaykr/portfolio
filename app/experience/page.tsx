import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Experience from "@/components/homepage-sections/Experience";

export const metadata = { title: "Experience", alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-12">
      <div className="section-shell">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to portfolio
        </Link>
      </div>
      <Experience />
    </main>
  );
}
