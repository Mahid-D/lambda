import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata = { title: "Journal" };

const posts = [
  { slug: "principles", title: "Principles over hype", date: "2025-04-02" },
  { slug: "systems", title: "Design systems as organizational memory", date: "2025-03-10" }
];

export default function Blog(){
  return (
    <Section title="Journal" subtitle="Notes from our work and research">
      <div className="space-y-4">
        {posts.map(p => (
          <article key={p.slug} className="card card-hover p-6 appear">
            <div className="text-xs uppercase tracking-wide text-gray-500">{p.date}</div>
            <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
            <Link className="link mt-3 inline-block" href={`/blog/${p.slug}`}>Read</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
