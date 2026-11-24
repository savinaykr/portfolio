import Link from "next/link";
import Experience from "@/components/homepage-sections/Experience";

export const metadata = { title: "Experience", alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return (
    <main className="pt-24">
      <div className="section-shell"><Link href="/#experience" className="text-sm text-primary">← Back to portfolio</Link></div>
      <Experience />
    </main>
  );
}
