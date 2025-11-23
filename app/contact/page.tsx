import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <Section
      title="Contact"
      subtitle="Reach out directly — we're happy to hear from you"
    >
      <div className="card p-8 md:p-10 space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg">
          You can contact <strong>Lambda</strong> through the following channels:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">📞 Phone</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              <Link
                href="tel:+11234567890"
                className="link text-base font-medium"
              >
                +4745538231
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">📧 Email</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              <Link
                href="mailto:hello@lambda.dev"
                className="link text-base font-medium"
              >
                dolo6dip@gamil.com
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">🏢 Address</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Myrlandsveien 14  
              8403 Sortland, Norway
            </p>
          </div>
        </div>

        <p className="pt-6 border-t border-gray-200 dark:border-gray-800 text-sm">
          We typically respond within 1 business day.  
          For collaboration inquiries, please include a brief project summary.
        </p>
      </div>
    </Section>
  );
}
