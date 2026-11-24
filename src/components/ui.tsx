import Image from "next/image";
import Link from "next/link";
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

const customWebpIcons: Record<string, string> = {
  Calculator: "/images/icons/calculator.webp",
  ChartNoAxesCombined: "/images/icons/growth-chart.webp",
  TrendingUp: "/images/icons/growth-chart.webp",
  ChartColumn: "/images/icons/growth-chart.webp",
  ChartColumnIncreasing: "/images/icons/growth-chart.webp",
  Target: "/images/icons/target.webp",
  Compass: "/images/icons/target.webp",
  Users: "/images/icons/team.webp",
  UsersRound: "/images/icons/team.webp",
  HeartHandshake: "/images/icons/team.webp",
  Handshake: "/images/icons/team.webp",
  MessagesSquare: "/images/icons/team.webp",
  BookOpen: "/images/icons/book.webp",
  Search: "/images/icons/book.webp",
  GraduationCap: "/images/icons/graduation-cap.webp",
  Briefcase: "/images/icons/briefcase.webp",
  BriefcaseBusiness: "/images/icons/briefcase.webp",
  Building2: "/images/icons/briefcase.webp",
  Store: "/images/icons/briefcase.webp",
  Megaphone: "/images/icons/briefcase.webp",
  Lightbulb: "/images/icons/lightbulb.webp",
  Coins: "/images/icons/coins.webp",
  PiggyBank: "/images/icons/coins.webp",
  Landmark: "/images/icons/coins.webp",
  Sigma: "/images/icons/business-math.webp",
  Monitor: "/images/icons/economics.webp",
  Scale: "/images/icons/economics.webp",
};

export function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  className = "",
  variant = "auto",
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  variant?: "auto" | "vector";
}) {
  const customSrc = variant === "auto" ? customWebpIcons[name] : undefined;
  if (customSrc) {
    const renderSize = Math.round(size * 1.32);
    return (
      <Image
        src={customSrc}
        alt=""
        width={renderSize}
        height={renderSize}
        decoding="async"
        className={`custom-icon-img ${className}`.trim()}
        aria-hidden="true"
      />
    );
  }
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
        OLLCF
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
        <h2>Your next chapter at OLLCF starts with you.</h2>
        <p>Discover a business career that connects with what you love.</p>
      </div>
      <ButtonLink href="/quiz/" variant="light" className="button-pill">
        Find my career match
      </ButtonLink>
    </section>
  );
}
