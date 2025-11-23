"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/services", label: "Focus" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export function Navbar(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={clsx("sticky top-0 z-50 backdrop-blur border-b transition shadow-subtle",
      scrolled ? "bg-white/70 dark:bg-gray-950/70 border-gray-200/60 dark:border-gray-800/60" : "border-transparent")}>
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold">Λ Lambda</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => <Link key={l.href} href={l.href} className="text-sm hover:underline">{l.label}</Link>)}
          <ThemeToggle />
        </nav>
        <button className="md:hidden" onClick={() => setOpen(s => !s)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container py-4 flex flex-col gap-4">
            {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
