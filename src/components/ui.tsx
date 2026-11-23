import Image from "next/image";
import Link from "next/link";
import { studentSpotlights } from "@/lib/content";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  ArrowLeft02Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
  BookOpen01Icon,
  Calculator01Icon,
  ChartIncreaseIcon,
  Briefcase01Icon,
  Coins01Icon,
  UserGroupIcon,
  Idea01Icon,
  BalanceScaleIcon,
  ComputerIcon,
  GraduationCapIcon,
  Target02Icon,
  Agreement02Icon,
  Megaphone01Icon,
  BankIcon,
  SigmaIcon,
  Store01Icon,
  Search01Icon,
  MessageMultiple01Icon,
  BarChartIcon,
  Calendar03Icon,
  Download04Icon,
  Tick02Icon,
  Cancel01Icon,
  Menu01Icon,
  Mail01Icon,
  Location01Icon,
  SentIcon,
  Copy01Icon,
  ArrowExpand01Icon,
  RefreshIcon,
  Clock01Icon,
  InformationCircleIcon,
  Call02Icon,
  Globe02Icon,
  Compass01Icon,
} from "@hugeicons/core-free-icons";
import type { ReactNode } from "react";

const icons: Record<string, IconSvgElement> = {
  ArrowRight: ArrowRight02Icon,
  ArrowLeft: ArrowLeft02Icon,
  ArrowUpRight: ArrowUpRight01Icon,
  ChevronRight: ArrowRight01Icon,
  BookOpen: BookOpen01Icon,
  Calculator: Calculator01Icon,
  ChartNoAxesCombined: ChartIncreaseIcon,
  TrendingUp: ChartIncreaseIcon,
  Briefcase: Briefcase01Icon,
  BriefcaseBusiness: Briefcase01Icon,
  Coins: Coins01Icon,
  Users: UserGroupIcon,
  UsersRound: UserGroupIcon,
  Lightbulb: Idea01Icon,
  Scale: BalanceScaleIcon,
  Monitor: ComputerIcon,
  GraduationCap: GraduationCapIcon,
  Target: Target02Icon,
  HeartHandshake: Agreement02Icon,
  Megaphone: Megaphone01Icon,
  Landmark: BankIcon,
  Sigma: SigmaIcon,
  Store: Store01Icon,
  Search: Search01Icon,
  MessagesSquare: MessageMultiple01Icon,
  ChartColumn: BarChartIcon,
  PiggyBank: Coins01Icon,
  Building2: Briefcase01Icon,
  Handshake: Agreement02Icon,
  ChartColumnIncreasing: ChartIncreaseIcon,
  CalendarDays: Calendar03Icon,
  Download: Download04Icon,
  Check: Tick02Icon,
  X: Cancel01Icon,
  Menu: Menu01Icon,
  Mail: Mail01Icon,
  MapPin: Location01Icon,
  Send: SentIcon,
  Copy: Copy01Icon,
  Expand: ArrowExpand01Icon,
  RotateCcw: RefreshIcon,
  Clock3: Clock01Icon,
  Info: InformationCircleIcon,
  Phone: Call02Icon,
  Globe: Globe02Icon,
  Compass: Compass01Icon,
};

export function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  className = "",
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const icon = icons[name] || BookOpen01Icon;
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      aria-hidden="true"
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline-light";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
      {arrow && <Icon name="ArrowRight" size={18} />}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p className="section-copy">{text}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {linkLabel || "Explore more"}
          <Icon name="ArrowRight" size={17} />
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{tag}</span>
        </nav>
        <p className="eyebrow">{tag}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="intro-watermark" aria-hidden="true">
        ABM
      </div>
    </section>
  );
}

export function QuizCallout() {
  return (
    <section className="quiz-callout">
      <div className="quiz-callout-icon">
        <Icon name="Target" size={38} strokeWidth={1.5} />
      </div>
      <div>
        <p className="eyebrow">A little curiosity. A world of possibilities.</p>
        <h2>Your next chapter starts with you.</h2>
        <p>Discover a business career that connects with what you love.</p>
      </div>
      <ButtonLink href="/quiz/" variant="light" className="button-pill">
        Find my career match
      </ButtonLink>
    </section>
  );
}

export function StudentSpotlights({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      className={`spotlights-section ${compact ? "spotlights-compact" : "section-space"}`}
    >
      <div className={compact ? "" : "container"}>
        <SectionHeading
          eyebrow="Student success & spotlights"
          title="Voices from the ABM Strand."
          text="Hear how Westbridge ABM learners turn classroom lessons into pop-up ventures, research defenses, and leadership skills."
          href="/gallery/#student-work"
          linkLabel="Explore student work"
        />
        <div className="three-grid spotlights-grid">
          {studentSpotlights.map((student) => (
            <article className="spotlight-card" key={student.id}>
              <div className="spotlight-badge">{student.achievement}</div>
              <blockquote>“{student.quote}”</blockquote>
              <div className="spotlight-author">
                <span className="spotlight-avatar">
                  <Image
                    src={student.photo}
                    alt={`Portrait of ${student.name}, ${student.grade}`}
                    width={52}
                    height={52}
                  />
                </span>
                <div>
                  <strong>{student.name}</strong>
                  <small>
                    {student.grade} · {student.project}
                  </small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
