import { Section } from "@/components/Section";

export const metadata = { title: "Careers" };

export default function Careers(){
  return (
    <Section title="Careers at Lambda" subtitle="Join a fully-remote, senior team">
      <div className="space-y-4">
        <div className="card p-6 card-hover appear">
          <h3 className="font-semibold">Senior Frontend Engineer</h3>
          <p className="text-sm mt-2">React/Next.js, accessibility, performance.</p>
        </div>
        <div className="card p-6 card-hover appear">
          <h3 className="font-semibold">Product Designer</h3>
          <p className="text-sm mt-2">Design systems, UX research, prototyping.</p>
        </div>
      </div>
    </Section>
  );
}
