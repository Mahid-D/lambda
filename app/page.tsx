import Link from "next/link";
import { Section } from "@/components/Section";
import { FeatureCards } from "@/components/FeatureCards";
import { LogoCloud } from "@/components/LogoCloud";

export default function HomePage(){
  return (
    <>
      <header className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="appear">
            <div className="badge mb-4">Lambda • Since 2025</div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Lambda is a studio for the modern web.
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              We explore, document, and advance web practice across design systems,
              performance, accessibility, and internationalization. This site introduces
              who we are and how to reach us.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/about" className="btn-secondary">About Lambda</Link>
              <Link href="/contact" className="btn-primary">Contact us</Link>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-br from-lambda-50 to-white dark:from-gray-900 dark:to-gray-950 appear">
            <h3 className="text-xl font-semibold">What you’ll find here</h3>
            <ul className="list-disc ml-5 mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-300 marker:text-lambda-500">
              <li>Our philosophy and principles</li>
              <li>Focus areas and research themes</li>
              <li>Case notes and journal posts</li>
              <li>Links to child sites across the Lambda ecosystem</li>
            </ul>
          </div>
        </div>
      </header>

      <Section title="Focus areas" subtitle="A quick view of what we study and build">
        <FeatureCards items={[
          { title: "Design Systems", desc: "Accessible components, tokens, and governance.", href: "/services#design-systems" },
          { title: "Performance", desc: "Edge-first, smart caching, Core Web Vitals.", href: "/services#performance" },
          { title: "Internationalization", desc: "Multilingual UX and culturally-aware content.", href: "/services#i18n" },
        ]}/>
      </Section>

      <Section title="Lambda ecosystem" subtitle="Child sites and initiatives">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "Lambda Innovation", desc: "R&D drops, prototypes, and experiments.", href: "/ecosystem#innovation"},
            {title: "Lambda Labs", desc: "Open-source tooling and starters.", href: "/ecosystem#labs"},
            {title: "Lambda Academy", desc: "Courses, talks, and AMAs.", href: "/ecosystem#academy"},
          ].map((t, i) => (
            <a key={i} href={t.href} className="card card-hover p-6 hover:shadow-card appear">
              <h4 className="font-semibold">{t.title}</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{t.desc}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Selected collaborators" subtitle="Brands and teams we’ve worked with">
        <LogoCloud />
      </Section>
    </>
  );
}
