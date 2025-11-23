import { notFound } from "next/navigation";
import { Section } from "@/components/Section";

const content: Record<string, {title:string; body:string; date:string}> = {
  "principles": {
    title: "Principles over hype",
    date: "2025-04-02",
    body: "We prefer prototypes and measured outcomes to buzzwords. Here’s how we evaluate new tech…"
  },
  "systems": {
    title: "Design systems as organizational memory",
    date: "2025-03-10",
    body: "A good system preserves decisions, reduces drift, and accelerates delivery…"
  }
};

export default function Post({ params }:{ params: { slug: string }}){
  const post = content[params.slug];
  if(!post) return notFound();
  return (
    <Section title={post.title} subtitle={post.date}>
      <div className="prose">{post.body}</div>
    </Section>
  );
}
