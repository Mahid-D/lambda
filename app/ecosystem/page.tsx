import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata = { title: "Ecosystem" };

export default function Ecosystem(){
  return (
    <>
      <Section title="Lambda Ecosystem" subtitle="Sibling and child sites under the Lambda umbrella">
        <div className="grid md:grid-cols-3 gap-6">
          <article id="innovation" className="card card-hover p-6 appear">
            <h3 className="text-xl font-semibold">Lambda Innovation</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">A home for prototypes and research drops.</p>
            <Link className="link mt-4 inline-block" href="#">Visit Innovation</Link>
          </article>
          <article id="labs" className="card card-hover p-6 appear">
            <h3 className="text-xl font-semibold">Lambda Labs</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Open-source components, starters, and utilities.</p>
            <Link className="link mt-4 inline-block" href="#">Explore Labs</Link>
          </article>
          <article id="academy" className="card card-hover p-6 appear">
            <h3 className="text-xl font-semibold">Lambda Academy</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Courses, workshops, and AMAs.</p>
            <Link className="link mt-4 inline-block" href="#">Enter Academy</Link>
          </article>
        </div>
      </Section>
    </>
  );
}
