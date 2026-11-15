import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Target,
  ChartNoAxesCombined,
  UsersRound,
  Lightbulb,
  CalendarDays,
  Download,
  ChevronRight,
  Check,
} from "lucide-react";
import { ButtonLink, Icon, SectionHeading } from "@/components/ui";
import {
  subjects,
  careers,
  galleryItems,
  events,
  resources,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero.webp"
          alt="Three students ready to explore a future in business on a tropical school campus"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-pill">
              <span />
              Your future starts here
            </p>
            <div className="hero-title">
              <h1>
                Think big.
                <br />
                Start with ABM.
              </h1>
            </div>
            <p className="hero-definition">
              Accountancy, Business, and Management
            </p>
            <p className="hero-description">
              Turn your curiosity into confidence. Build the skills to lead,
              create, and make your mark in the world of business.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/about/" variant="light">
                Explore the strand
              </ButtonLink>
              <ButtonLink href="/quiz/" variant="outline-light" arrow={false}>
                <Sparkles size={17} />
                Find your career match
              </ButtonLink>
            </div>
            <div className="hero-footnote">
              <span className="mini-icon">
                <GraduationCap size={18} />
              </span>
              <span>For tomorrow’s entrepreneurs, leaders & changemakers</span>
            </div>
          </div>
          <div className="hero-floating">
            <span className="floating-icon">
              <ChartNoAxesCombined size={24} />
            </span>
            <div>
              <strong>A head start on your future.</strong>
              <span>Real skills. Endless possibilities.</span>
            </div>
            <span className="floating-arrow">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </section>
      <div className="promise-bar">
        <div className="container promise-inner">
          <span>
            <ChartNoAxesCombined size={19} />
            Think like an entrepreneur
          </span>
          <span>
            <Target size={19} />
            Solve real-world problems
          </span>
          <span>
            <UsersRound size={19} />
            Lead with confidence
          </span>
          <span>
            <Lightbulb size={19} />
            Create your own opportunities
          </span>
        </div>
      </div>
      <section className="container home-about section-space">
        <div className="about-summary">
          <p className="eyebrow">A strand full of possibilities</p>
          <h2>
            Big ideas begin
            <br />
            with a strong foundation.
          </h2>
          <p>
            ABM brings business to life. Explore how money works, what makes a
            great leader, and how a simple idea can become something
            extraordinary.
          </p>
          <Link href="/about/" className="text-link">
            Get to know ABM
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="benefits-list">
          {[
            {
              icon: "BookOpen",
              title: "Knowledge you can build on",
              text: "Understand business, finance, and the decisions behind them.",
            },
            {
              icon: "Target",
              title: "Skills beyond the classroom",
              text: "Put your ideas into practice through hands-on projects.",
            },
            {
              icon: "GraduationCap",
              title: "Ready for what comes next",
              text: "Find a foundation for college, a career, or your own venture.",
            },
          ].map((item) => (
            <div className="benefit" key={item.title}>
              <span className="icon-tile">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="subjects-preview">
          <div className="mini-heading">
            <div>
              <p className="eyebrow">Your learning journey</p>
              <h3>Meet your subjects.</h3>
            </div>
            <Link
              href="/subjects/"
              aria-label="View all subjects"
              className="circle-link"
            >
              <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="subject-mini-grid">
            {subjects
              .filter((item) => item.category === "Specialized")
              .slice(0, 6)
              .map((subject) => (
                <Link href={`/subjects/#${subject.id}`} key={subject.id}>
                  <Icon name={subject.icon} size={23} />
                  <span>{subject.shortTitle}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className="careers-home section-space">
        <div className="container">
          <SectionHeading
            eyebrow="One strand. So many directions."
            title="Where could ABM take you?"
            text="Find the path that speaks to your interests, strengths, and ambitions."
            href="/careers/"
            linkLabel="Explore career pathways"
          />
          <div className="career-home-grid">
            {careers.slice(0, 4).map((career, index) => (
              <Link
                href={`/careers/#${career.id}`}
                className="career-photo-card"
                key={career.id}
              >
                <Image
                  src={career.image}
                  alt=""
                  fill
                  sizes="(max-width: 600px) 85vw, 25vw"
                />
                <div className="photo-shade" />
                <span className="career-card-tag">
                  <Icon name={career.icon} size={19} />
                </span>
                <div className="career-card-bottom">
                  <div>
                    <small>
                      {
                        [
                          "Make numbers count",
                          "Lead the way forward",
                          "Bring ideas to life",
                          "Build something of your own",
                        ][index]
                      }
                    </small>
                    <h3>{career.shortTitle}</h3>
                  </div>
                  <span className="photo-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container quiz-home">
        <div className="quiz-art" aria-hidden="true">
          <div className="quiz-art-paper">
            <span className="paper-heading" />
            <span>
              <Check />
              <i />
            </span>
            <span>
              <Check />
              <i />
            </span>
            <span>
              <Check />
              <i />
            </span>
          </div>
          <div className="quiz-art-target">
            <Target size={94} strokeWidth={1.7} />
          </div>
          <Sparkles className="art-spark" size={33} />
        </div>
        <div className="quiz-home-copy">
          <p className="eyebrow">Your interests. Your possibilities.</p>
          <h2>
            A little quiz.
            <br />A clearer direction.
          </h2>
          <p>
            Not sure which business career feels like you? Answer five quick
            questions and explore a path that fits.
          </p>
          <div className="quiz-home-actions">
            <ButtonLink href="/quiz/" variant="light">
              Find my career match
            </ButtonLink>
            <span>5 questions · About 2 minutes</span>
          </div>
        </div>
        <span className="quiz-home-deco" aria-hidden="true">
          ?
        </span>
      </section>
      <section className="container home-bottom section-space">
        <div className="home-events">
          <SectionHeading
            eyebrow="Connect & discover"
            title="On the horizon"
            href="/events/"
            linkLabel="All events"
          />
          <div className="event-mini-list">
            {events.slice(0, 3).map((event) => (
              <Link
                className="event-mini"
                href={`/events/#${event.id}`}
                key={event.id}
              >
                <div className="date-tile">
                  <span>
                    {new Date(event.date + "T12:00:00Z").toLocaleDateString(
                      "en",
                      { month: "short", timeZone: "UTC" },
                    )}
                  </span>
                  <strong>
                    {new Date(event.date + "T12:00:00Z").getUTCDate()}
                  </strong>
                </div>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.category}</p>
                </div>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
          <p className="fine-print">
            Illustrative event calendar. School dates to be confirmed.
          </p>
        </div>
        <div className="home-gallery">
          <SectionHeading
            eyebrow="Learning, brought to life"
            title="The ABM experience"
            href="/gallery/"
            linkLabel="View gallery"
          />
          <Link
            href="/gallery/"
            className="gallery-home-mosaic"
            aria-label="Explore the student showcase"
          >
            <div className="mosaic-large">
              <Image
                src={galleryItems[0].image}
                alt={galleryItems[0].alt}
                fill
                sizes="(max-width: 700px) 65vw, 22vw"
              />
              <span>
                Ideas in action
                <ArrowUpRight size={17} />
              </span>
            </div>
            {galleryItems.slice(1, 3).map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 30vw, 12vw"
                />
              </div>
            ))}
          </Link>
        </div>
        <div className="home-resources">
          <SectionHeading
            eyebrow="A little help along the way"
            title="Your study corner"
            href="/resources/"
            linkLabel="All resources"
          />
          <p className="section-copy">Good resources. Better study days.</p>
          <div className="resource-mini-list">
            {resources.slice(0, 3).map((resource) => (
              <a
                key={resource.id}
                href={resource.href}
                download={resource.fileName}
              >
                <BookOpen size={21} />
                <span>{resource.title}</span>
                <Download size={16} />
              </a>
            ))}
          </div>
          <Link className="resource-tip" href="/resources/#faqs">
            <Lightbulb size={20} />
            <span>
              Questions about ABM?<strong>We’ve got answers.</strong>
            </span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
      <section className="prefooter">
        <div className="container">
          <span>
            <GraduationCap size={24} />
            The next chapter is yours to write.
          </span>
          <Link href="/contact/">
            Let’s talk about your future
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
