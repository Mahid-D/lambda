// pages or app route file (e.g. app/page.js or pages/index.js)
// Keep the file path and name that your project already uses.
// This file preserves your existing imports and components.

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
            <div className="badge mb-4">Lambda • Next.js Specialists</div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Build fast, secure, SEO-ready websites with Next.js
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Scalable web development, thoughtful UX, and maintenance packages — so your product grows without headaches.
            </p>

            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn-primary">Get a free quote</Link>
              <Link href="/portfolio" className="btn-secondary">See our work</Link>
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

      <Section title="Portfolio & Resources" subtitle="Selected projects and our blueprint">
  <div className="grid md:grid-cols-2 gap-6">
    {/* Example portfolio item */}
    <div className="card p-5 hover:shadow-card">
      <h4 className="font-semibold">Ecommerce rebuild — Nordic Shoes</h4>
      <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
        Rebuilt storefront with Next.js to improve performance and conversions.
      </p>
      <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-300 text-sm">
        <li>Problem: Slow mobile pages, high checkout drop-off</li>
        <li>Solution: Migrated to Next.js SSG, optimized images, simplified checkout flow</li>
        <li>Results: Page load 4.2s → 1.1s, mobile conversions +18%</li>
      </ul>
      <p className="mt-2 italic text-sm">“Lambda improved our site speed and conversions.” — CEO</p>
    </div>

    {/* Blueprint download */}
    <div className="card p-5 hover:shadow-card flex flex-col justify-center items-start">
      <h4 className="font-semibold">Lambda Web Development Blueprint</h4>
      <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
        Download our complete web development blueprint for modern, scalable sites.
      </p>
    <a
  href="/Lambda_Web_Development_Blueprint.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary mt-4"
>
  Download PDF
</a>

    </div>
  </div>
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
