import { Section } from "@/components/Section";

export const metadata = { title: "Focus" };

export default function Services(){
  return (
    <>
      <Section title="Focus" subtitle="Research themes and areas of practice">
        <div className="grid md:grid-cols-2 gap-6">
          <article id="design-systems" className="card card-hover p-6 space-y-3 appear">
            <h3 className="text-xl font-semibold">Design Systems</h3>
            <ul className="list-disc ml-5 text-sm space-y-2 marker:text-lambda-500">
              <li>Accessible components and tokens</li>
              <li>Docs, governance, adoption playbooks</li>
              <li>Cross-platform parity</li>
            </ul>
          </article>
          <article id="performance" className="card card-hover p-6 space-y-3 appear">
            <h3 className="text-xl font-semibold">Performance</h3>
            <ul className="list-disc ml-5 text-sm space-y-2 marker:text-lambda-500">
              <li>Core Web Vitals and edge strategies</li>
              <li>Caching, streaming, RSC</li>
              <li>Measurement and regression control</li>
            </ul>
          </article>
          <article id="i18n" className="card card-hover p-6 space-y-3 appear">
            <h3 className="text-xl font-semibold">Internationalization</h3>
            <ul className="list-disc ml-5 text-sm space-y-2 marker:text-lambda-500">
              <li>Multilingual IA and content operations</li>
              <li>Locale-aware UX validations</li>
              <li>Accessibility across cultures</li>
            </ul>
          </article>
          <article id="ai" className="card card-hover p-6 space-y-3 appear">
            <h3 className="text-xl font-semibold">AI & Interfaces</h3>
            <ul className="list-disc ml-5 text-sm space-y-2 marker:text-lambda-500">
              <li>Chat, agents, and guardrails</li>
              <li>Human-in-the-loop patterns</li>
              <li>Explainability and trust</li>
            </ul>
          </article>
        <article id="mobile" className="card card-hover p-6 space-y-3 appear">
  <h3 className="text-xl font-semibold">iOS & Mobile Apps</h3>
  <ul className="list-disc ml-5 text-sm space-y-2 marker:text-lambda-500">
    <li>Native SwiftUI and React Native builds</li>
    <li>Shared APIs with your web platform</li>
    <li>App Store deployment & ongoing updates</li>
  </ul>
</article>

        </div>
      </Section>
    </>
  );
}
