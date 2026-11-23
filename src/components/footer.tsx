import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { SchoolLogo } from "./school-logo";
import { Icon } from "./ui";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-icon">
                <SchoolLogo variant="dark" size={44} />
              </span>
              <span className="brand-text">
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
            <Icon name="GraduationCap" size={28} strokeWidth={1.6} />
            <span>
              Not sure where to start?
              <strong>
                Find your career match <Icon name="ArrowUpRight" size={17} />
              </strong>
            </span>
          </Link>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getUTCFullYear()} {site.school}. Made for future
            business minds.
          </p>
          <p>
            {site.email} · {site.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
