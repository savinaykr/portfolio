import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "@/components/shared/Section";
import type { BlogPost } from "@/lib/blog";

export interface IBlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Section
      id="blog"
      eyebrow="Writing"
      title="Notes from the build"
      description="Practical write-ups on backend platforms, AI in production, and scaling real systems."
      className="bg-foreground/[0.015]"
    >
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="terminal-card group flex h-full flex-col border border-slate-800 bg-foreground/[0.02] p-6 transition-colors hover:border-primary/40"
            >
              {(post.date || post.updated) && (
                <time
                  dateTime={post.date || post.updated}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500"
                >
                  <CalendarDays className="size-3.5 shrink-0" aria-hidden />
                  {post.date ? "" : "Updated "}
                  {new Date((post.date || post.updated) + "T00:00:00Z").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              )}
              <h3 className="mt-3 font-display text-lg font-semibold text-gray-100 transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
          {posts.length % 2 === 1 && (
            <Link
              href="/blog"
              className="terminal-card group flex h-full flex-col justify-between border border-dashed border-slate-800 bg-foreground/[0.01] p-6 transition-colors hover:border-primary/40"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  Archive
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-gray-100 transition-colors group-hover:text-primary">
                  Browse all engineering notes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Read all {posts.length} articles on agentic workflows, LLM evaluation, inference, and product architecture.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                View all posts
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          )}
        </div>
      )}
    </Section>
  );
}
