"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme-dark");
    const isDark = stored ? stored === "1" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme-dark", next ? "1" : "0");
    setDark(next);
  };
  return <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-lg border border-gray-200/60 dark:border-gray-800/60">{dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}</button>;
}
