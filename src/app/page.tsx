import Image from "next/image";
import Link from "next/link";
import {
  ButtonLink,
  Icon,
  SectionHeading,
  StudentSpotlights,
} from "@/components/ui";
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
          alt="Senior high students ready to explore their future in Accountancy, Business, and Management at Our Lady of Lourdes College Foundation"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-school-pill">
              <Icon name="GraduationCap" size={16} />
              {site.school} · {site.locationShort}
            </p>
            <div className="hero-title">
              <h1>
                Think big.
                <br />
                Start with ABM.
              </h1>
            </div>
            <p className="hero-definition">
              Accountancy, Business, and Management — OLLCF Senior High School
            </p>
            <p className="hero-description">
              Turn your curiosity into confidence. Build the skills to lead,
              create, and thrive with OLLCF’s ABM Strand and the Association of
              Young Business Leaders (AYBL).
            </p>
            <div className="hero-actions">
              <ButtonLink href="/about/" variant="light" className="button-pill">
                Explore the strand
              </ButtonLink>
              <ButtonLink
                href="/quiz/"
                variant="outline-light"
                className="button-pill"
                arrow={false}
              >
                <Icon name="Compass" size={18} />
                Find your career match
              </ButtonLink>
            </div>
            <div className="hero-footnote">
              <span className="mini-icon">
                <Icon name="GraduationCap" size={18} />
              </span>
              <span>
                {site.motto} · {site.tagline}
              </span>
            </div>
          </div>
          <Link href="/careers/" className="hero-floating">
            <span className="floating-icon">
              <Icon name="ChartNoAxesCombined" size={22} />
            </span>
            <div>
              <strong>A head start on your future.</strong>
              <span>OLLCF SHS ABM · Quality Education Since 1977</span>
            </div>
            <span className="floating-arrow">
              <Icon name="ArrowUpRight" size={20} />
            </span>
          </Link>
        </div>
      </section>
      <div className="promise-bar">
        <div className="container promise-inner">
          <span>
            <Icon name="ChartNoAxesCombined" size={20} />
            Think like an entrepreneur
          </span>
          <span>
            <Icon name="Target" size={20} />
            Solve real-world problems
          </span>
          <span>
            <Icon name="UsersRound" size={20} />
            Lead with AYBL confidence
          </span>
          <span>
            <Icon name="Lightbulb" size={20} />
            Quality · Excellence · Success
          </span>
        </div>
      </div>
      <section className="container home-about section-space">
        <div className="about-summary">
          <p className="eyebrow">OLLCF Senior High School · ABM Guide</p>
          <h2>
            Big ideas begin
            <br />
            with a strong foundation.
          </h2>
          <p>
            Designed for incoming Lourdenian Senior High learners—discover how
            business works, meet the Association of Young Business Leaders
            (AYBL), and prepare for your dream degree in Daet, Camarines Norte.
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
              title: "Knowledge you can build on",
              text: "Master accounting, business finance, marketing, and management fundamentals.",
            },
            {
              icon: "Target",
              title: "Hands-on campus enterprise",
              text: "Bring concepts to commerce through the OLLCF SHS Food Bazaar and AYBL initiatives.",
            },
            {
              icon: "GraduationCap",
              title: "Ready for college & beyond",
              text: "Build a strong pathway toward BS Accountancy, BSBA, Finance, Marketing, or your own venture.",
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
            text="Find the business degree and career path that matches your interests, strengths, and ambitions."
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
            <Icon name="Target" size={76} strokeWidth={1.5} />
          </div>
          <span className="art-spark">
            <Icon name="Compass" size={30} strokeWidth={1.6} />
          </span>
        </div>
        <div className="quiz-home-copy">
          <p className="eyebrow">Your interests. Your possibilities.</p>
          <h2>
            A little quiz.
            <br />A clearer direction.
          </h2>
          <p>
            Not sure which business career feels like you? Answer five quick
            questions and explore a path that fits before choosing ABM at OLLCF.
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
            Free OLLCF admissions &amp; ABM study guides.
          </p>
          <div className="resource-mini-list">
            {resources.slice(0, 3).map((resource) => (
              <a
                key={resource.id}
                href={resource.href}
                download={resource.fileName}
              >
                <Icon name="BookOpen" size={20} />
                <span>{resource.title}</span>
                <Icon name="Download" size={17} />
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
