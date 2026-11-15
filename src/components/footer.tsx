import Link from "next/link";
import { BookOpen, ArrowUpRight, GraduationCap } from "lucide-react";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <BookOpen size={34} strokeWidth={1.5} aria-hidden="true" />
              <span>
                <strong>ABM. Strand</strong>
                <small>{site.school}</small>
              </span>
            </Link>
            <p>
              Big ideas. Real-world skills.
              <br />A future that’s yours to build.
            </p>
          </div>
          <div className="footer-links">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/quiz/" className="footer-invitation">
            <GraduationCap size={27} strokeWidth={1.5} />
            <span>
              Not sure where to start?
              <strong>
                Find your career match <ArrowUpRight size={16} />
              </strong>
            </span>
          </Link>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getUTCFullYear()} {site.school}. Made for future
            business minds.
          </p>
          <p>School project · Illustrative campus imagery</p>
        </div>
      </div>
    </footer>
  );
}
