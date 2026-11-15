import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChartNoAxesCombined,
  BriefcaseBusiness,
  Coins,
  UsersRound,
  Lightbulb,
  Scale,
  Monitor,
  GraduationCap,
  Target,
  HeartHandshake,
  Megaphone,
  Landmark,
  Sigma,
  Store,
  Search,
  MessagesSquare,
  ChartColumn,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  ChartNoAxesCombined,
  TrendingUp: ChartNoAxesCombined,
  Briefcase: BriefcaseBusiness,
  BriefcaseBusiness,
  Coins,
  Users: UsersRound,
  UsersRound,
  Lightbulb,
  Scale,
  Monitor,
  GraduationCap,
  Target,
  HeartHandshake,
  Megaphone,
  Landmark,
  Sigma,
  Store,
  Search,
  MessagesSquare,
  ChartColumn,
  PiggyBank: Coins,
  Building2: BriefcaseBusiness,
  Handshake: HeartHandshake,
  ChartColumnIncreasing: ChartNoAxesCombined,
};

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Component = icons[name] || BookOpen;
  return (
    <Component
      size={size}
      className={className}
      aria-hidden="true"
      strokeWidth={1.7}
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
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
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
          <ArrowRight size={16} aria-hidden="true" />
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
        <Target size={44} strokeWidth={1.2} aria-hidden="true" />
      </div>
      <div>
        <p className="eyebrow">A little curiosity. A world of possibilities.</p>
        <h2>Your next chapter starts with you.</h2>
        <p>Discover a business career that connects with what you love.</p>
      </div>
      <ButtonLink href="/quiz/" variant="light">
        Find my career match
      </ButtonLink>
    </section>
  );
}
