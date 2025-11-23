import Link from "next/link";
export function FeatureCards({ items }:{ items: {title:string; desc:string; href:string}[] }){
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((i, idx) => (
        <article key={idx} className="card card-hover p-6 appear">
          <h3 className="mt-1 text-lg font-semibold">{i.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{i.desc}</p>
          <Link className="link mt-4 inline-flex" href={i.href}>Learn more</Link>
        </article>
      ))}
    </div>
  );
}
