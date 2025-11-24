import Link from "next/link";
export function FeatureCards({ items = [] }) {
  return (
    <ul className="grid sm:grid-cols-3 gap-6" role="list">
      {items.map(item => (
        <li key={item.href} role="listitem" className="card p-5">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
          <a href={item.href} className="mt-4 inline-block text-sm text-blue-600">Learn more →</a>
        </li>
      ))}
    </ul>
  );
}
