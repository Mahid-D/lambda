import { Section } from "@/components/Section";

export const metadata = { title: "About" };

export default function About(){
  return (
    <>
      <Section title="The Lambda Way" subtitle="A culture of clarity, craft, and care">
        <div className="space-y-4 text-gray-700 dark:text-gray-300 appear">
          <p>Lambda is an independent studio centered on systems thinking and human-centered web practice. We value accessibility, measurable performance, and clear documentation.</p>
          <ul className="list-disc ml-5 marker:text-lambda-500">
            <li>Open knowledge — share what we learn</li>
            <li>Evidence over hype — prototypes and data</li>
            <li>Sustainable web — green hosting and lean code</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
