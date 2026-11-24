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
                <SchoolLogo variant="dark" size={50} />
              </span>
              <span className="brand-text">
                <strong>
                  ABM<span className="brand-dot">.</span> Strand
                </strong>
                <small>{site.school}</small>
              </span>
            </Link>
            <p>
              {site.motto}
              <br />
              {site.tagline} · {site.locationShort}
            </p>
            <div className="footer-socials">
              <a
                href={site.socials.ollcfFacebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                OLLCF FB
                <Icon name="ArrowUpRight" size={14} />
              </a>
              <a
                href={site.socials.shsFacebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                OLLCF SHS
                <Icon name="ArrowUpRight" size={14} />
              </a>
              <a
                href={site.socials.ayblFacebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                AYBL Org
                <Icon name="ArrowUpRight" size={14} />
              </a>
            </div>
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
              Incoming Grade 11 Lourdenian?
              <strong>
                Find your career match <Icon name="ArrowUpRight" size={17} />
              </strong>
            </span>
          </Link>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getUTCFullYear()} {site.school} · {site.locationShort}.
            Senior High School ABM Strand &amp; AYBL.
          </p>
          <p>
            {site.email} · {site.phone} · {site.mobile}
          </p>
        </div>
      </div>
    </footer>
  );
}
