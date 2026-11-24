import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Icon, SectionHeading } from "@/components/ui";
import { StudentSpotlights } from "@/components/student-spotlights";
import {
  subjects,
  careers,
  galleryItems,
  events,
  resources,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero.webp"
          alt="Senior high students in Accountancy, Business, and Management at Our Lady of Lourdes College Foundation"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-school-eyebrow">
              {site.schoolShort} · {site.locationShort}
            </p>
            <div className="hero-title">
              <h1>
                Think big.
                <br />
                Start with ABM.
              </h1>
            </div>
            <p className="hero-description">
              Build real-world skills in accounting, business, and leadership
              with OLLCF’s ABM Strand and AYBL.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/about/" variant="light" className="button-pill">
                Explore ABM
              </ButtonLink>
              <ButtonLink
                href="/quiz/"
                variant="outline-light"
                className="button-pill"
                arrow={false}
              >
                <Icon name="Compass" size={18} variant="vector" />
                Find your career match
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <div className="promise-bar">
        <div className="container promise-inner">
          <span>
            <Icon name="ChartNoAxesCombined" size={20} />
            Entrepreneurial mindset
          </span>
          <span>
            <Icon name="Target" size={20} />
            Real-world business skills
          </span>
          <span>
            <Icon name="UsersRound" size={20} />
            AYBL student leadership
          </span>
          <span>
            <Icon name="Lightbulb" size={20} />
            Quality education since 1977
          </span>
        </div>
      </div>
      <section className="container home-about section-space">
        <div className="about-summary">
          <p className="eyebrow">OLLCF ABM Guide</p>
          <h2>
            Big ideas begin
            <br />
            with a strong foundation.
          </h2>
          <p>
            Discover how business works, lead with AYBL, and prepare for your
            dream college degree in Daet, Camarines Norte.
          </p>
          <Link href="/about/" className="text-link">
            Get to know OLLCF ABM
            <Icon name="ArrowRight" size={17} />
          </Link>
        </div>
        <div className="benefits-list">
          {[
            {
              icon: "BookOpen",
              title: "Business fundamentals",
              text: "Learn accounting, finance, marketing, and management from the ground up.",
            },
            {
              icon: "Target",
              title: "Hands-on campus enterprise",
              text: "Turn class projects into real booths at the OLLCF SHS Food Bazaar.",
            },
            {
              icon: "GraduationCap",
              title: "College & career ready",
              text: "Prepare for BS Accountancy, BSBA, Finance, Marketing, or your own venture.",
            },
          ].map((item) => (
            <div className="benefit" key={item.title}>
              <span className="icon-tile">
                <Icon name={item.icon} size={22} />
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
              <Icon name="ArrowUpRight" size={19} />
            </Link>
          </div>
          <div className="subject-mini-grid">
            {subjects
              .filter((item) => item.category === "Specialized")
              .slice(0, 6)
              .map((subject) => (
                <Link href={`/subjects/#${subject.id}`} key={subject.id}>
                  <Icon name={subject.icon} size={22} />
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
            text="Explore business degrees and career paths that fit your strengths."
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
                  decoding="async"
                  sizes="(max-width: 600px) 85vw, 25vw"
                />
                <div className="photo-shade" />
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
                    <Icon name="ArrowUpRight" size={19} />
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
              <Icon name="Check" size={14} strokeWidth={2.5} />
              <i />
            </span>
            <span>
              <Icon name="Check" size={14} strokeWidth={2.5} />
              <i />
            </span>
            <span>
              <Icon name="Check" size={14} strokeWidth={2.5} />
              <i />
            </span>
          </div>
          <div className="quiz-art-target">
            <Icon name="Target" size={64} />
          </div>
          <span className="art-spark">
            <Icon name="Lightbulb" size={32} />
          </span>
        </div>
        <div className="quiz-home-copy">
          <p className="eyebrow">Your interests. Your possibilities.</p>
          <h2>
            A little quiz.
            <br />A clearer direction.
          </h2>
          <p>
            Not sure which path fits you? Answer five quick questions to find
            your match.
          </p>
          <div className="quiz-home-actions">
            <ButtonLink href="/quiz/" variant="light" className="button-pill">
              Find my career match
            </ButtonLink>
            <span>5 questions · About 2 minutes</span>
          </div>
        </div>
        <span className="quiz-home-deco" aria-hidden="true">
          ?
        </span>
      </section>
      <StudentSpotlights />
      <section className="container home-bottom section-space">
        <div className="home-events">
          <SectionHeading
            eyebrow="OLLCF SHS & AYBL"
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
                  <p>
                    {event.category} · {event.status}
                  </p>
                </div>
                <Icon name="ArrowUpRight" size={18} />
              </Link>
            ))}
          </div>
          <p className="fine-print">
            SY 2026–2027 · {site.schoolShort} &amp; AYBL
          </p>
        </div>
        <div className="home-gallery">
          <SectionHeading
            eyebrow="AYBL & campus life"
            title="The OLLCF ABM experience"
            href="/gallery/"
            linkLabel="View gallery"
          />
          <Link
            href="/gallery/"
            className="gallery-home-mosaic"
            aria-label="Explore the OLLCF ABM and AYBL student showcase"
          >
            <div className="mosaic-large">
              <Image
                src={galleryItems[0].image}
                alt={galleryItems[0].alt}
                fill
                decoding="async"
                style={{ objectPosition: galleryItems[0].objectPosition }}
                sizes="(max-width: 700px) 65vw, 22vw"
              />
              <span>
                SHS Food Bazaar &amp; AYBL
                <Icon name="ArrowUpRight" size={17} />
              </span>
            </div>
            {galleryItems.slice(1, 3).map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  decoding="async"
                  style={{ objectPosition: item.objectPosition }}
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
          <p className="section-copy">
            Free admissions and ABM study guides.
          </p>
          <div className="resource-mini-list">
            {resources.slice(0, 3).map((resource) => (
              <a
                key={resource.id}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="BookOpen" size={20} />
                <span>{resource.title}</span>
                <Icon name="ArrowUpRight" size={17} />
              </a>
            ))}
          </div>
          <Link className="resource-tip" href="/resources/#faqs">
            <Icon name="Lightbulb" size={20} />
            <span>
              Questions about OLLCF ABM?<strong>We’ve got answers.</strong>
            </span>
            <Icon name="ChevronRight" size={18} />
          </Link>
        </div>
      </section>
      <section className="prefooter">
        <div className="container">
          <span>
            <Icon name="GraduationCap" size={24} />
            Think less, choose best—be a Lourdenian!
          </span>
          <Link href="/contact/">
            Inquire at OLLCF Senior High School
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
