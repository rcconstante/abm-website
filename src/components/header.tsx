"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookOpen, Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="ABM Strand home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon">
            <BookOpen size={34} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span>
            <strong>
              ABM<span className="brand-dot">.</span> Strand
            </strong>
            <small>{site.school}</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href || pathname === item.href.slice(0, -1)
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/quiz/" className="button button-primary header-quiz">
          <Sparkles size={15} aria-hidden="true" />
          Career quiz
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href || pathname === item.href.slice(0, -1)
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link href="/quiz/" onClick={() => setOpen(false)}>
            Take the career quiz
            <Sparkles size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
