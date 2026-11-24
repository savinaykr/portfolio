import Image from "next/image";
import Section from "@/components/shared/Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-start">
        <Image src="/profile-pic.png" alt="Savinay Kumar" width={128} height={128} sizes="128px" className="size-32 shrink-0 rounded-xl object-cover" />
        <div className="space-y-3 text-base leading-relaxed text-gray-300">
          <p>I’m based in Bengaluru. While studying computer science at IIIT Una, I co-founded Career Capsule and built a live classroom that could bring more than 100 students into a single session.</p>
          <p>At Neosenth, launching ViHi meant working on both sides of the product: the experience people used on their phones and the services our team needed to run it. That mix of product and systems work still shapes the engineering problems I choose.</p>
        </div>
      </div>
    </Section>
  );
}
