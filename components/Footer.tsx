import Link from "next/link";
export function Footer(){
  return (
    <footer className="section border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="container grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold">Λ Lambda</div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Exploring the modern web—systems, performance, and inclusive design.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" href="/about">About</Link></li>
            <li><Link className="link" href="/ecosystem">Ecosystem</Link></li>
            <li><Link className="link" href="/blog">Journal</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Focus</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" href="/services#design-systems">Design Systems</Link></li>
            <li><Link className="link" href="/services#performance">Performance</Link></li>
            <li><Link className="link" href="/services#i18n">Internationalization</Link></li>
            <li><Link className="link" href="/services#ai">AI & Interfaces</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-sm"></p>
          <Link className="btn-primary mt-3 inline-block" href="/contact">Contact us</Link>
        </div>
      </div>
      <div className="container mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Lambda. All rights reserved.</div>
    </footer>
  );
}
