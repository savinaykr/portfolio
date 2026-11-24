import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredWork } from "@/lib/career";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return featuredWork.map(({ id }) => ({ slug: id }));
}

async function getStory({ params }: Props) {
  const { slug } = await params;
  return featuredWork.find((work) => work.id === slug) ?? notFound();
}

export async function generateMetadata(props: Props) {
  const work = await getStory(props);
  return { title: work.title, description: work.summary, alternates: { canonical: `/work/${work.id}` } };
}

export default async function StoryPage(props: Props) {
  const work = await getStory(props);
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 lg:py-36">
      <Link className="text-sm text-primary" href={`/#${work.id}`}>← Back to portfolio</Link>
      <article className="mt-12">
        <p className="text-sm text-gray-400">{work.label}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{work.title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-300">
          {work.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="mt-8 border-t border-foreground/15 pt-4 text-sm text-gray-400">{work.tools.join(" · ")}</p>
      </article>
    </main>
  );
}
