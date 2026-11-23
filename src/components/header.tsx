"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/site";
import { SchoolLogo } from "./school-logo";
import { Icon } from "./ui";

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
          aria-label={`${site.school} — ABM Strand home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon">
            <SchoolLogo variant="light" size={42} />
          </span>
          <span className="brand-text">
            <strong>
              ABM<span className="brand-dot">.</span> Strand
            </strong>
            <small>{site.school}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const isCurrent =
              pathname === item.href ||
              (item.href !== "/" && pathname === item.href.slice(0, -1));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link
            href="/quiz/"
            className="button button-primary button-pill header-quiz"
          >
            Career quiz
            <Icon name="ArrowUpRight" size={16} />
          </Link>
          <button
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          data-lenis-prevent
        >
          {navigation.map((item) => {
            const isCurrent =
              pathname === item.href ||
              (item.href !== "/" && pathname === item.href.slice(0, -1));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <Icon name="ArrowUpRight" size={18} />
              </Link>
            );
          })}
          <Link
            href="/quiz/"
            className="mobile-nav-cta"
            onClick={() => setOpen(false)}
          >
            Take the career quiz
            <Icon name="ArrowUpRight" size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
