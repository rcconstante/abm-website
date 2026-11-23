import Image from "next/image";
import {
  subjects,
  careers,
  resources,
  curriculumNote,
  faqs,
  usefulLinks,
} from "@/lib/content";
import {
  PageIntro,
  SectionHeading,
  Icon,
  QuizCallout,
  ButtonLink,
  StudentSpotlights,
} from "./ui";

export function AboutPage() {
  return (
    <>
      <PageIntro
        tag="About ABM"
        title="For the business mind in you."
        text="A place for curious thinkers, natural problem-solvers, and anyone with an idea worth exploring."
      />
      <div className="container section-space">
        <div className="about-page-lead">
          <div className="about-page-image">
            <Image
              src="/images/gallery-team.webp"
              alt="Students collaborating on a business project"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span>
              <Icon name="BookOpen" size={20} />
              Learn it. Try it. Make it yours.
            </span>
          </div>
          <div>
            <p className="eyebrow">Meet your next chapter</p>
            <h2>What is ABM?</h2>
            <p>
              Accountancy, Business, and Management explores the way businesses
              work, from the first spark of an idea to the decisions that keep
              an organization moving.
            </p>
            <p>
              This Senior High School pathway builds your understanding of
              accounting, finance, marketing, and management while developing
              practical skills you can use in everyday life.
            </p>
            <p>
              You don’t need a business background to begin. Bring your
              curiosity, a willingness to learn, and the confidence to ask
              questions.
            </p>
            <ButtonLink href="/subjects/" className="button-pill">
              Explore what you’ll learn
            </ButtonLink>
          </div>
        </div>
        <div className="note">
          <Icon name="Info" size={20} />
          <p>{curriculumNote}</p>
        </div>
        <section className="section-space">
          <SectionHeading
            title="More than lessons. Skills for life."
            text="Connect classroom learning with the decisions, teamwork, and ideas that shape the real world."
          />
          <div className="three-grid">
            {[
              {
                icon: "ChartNoAxesCombined",
                title: "Make sense of the numbers",
                text: "Read basic financial information, compare options, and support a decision with evidence.",
              },
              {
                icon: "UsersRound",
                title: "Work well with people",
                text: "Communicate clearly, share responsibilities, and learn what thoughtful leadership looks like.",
              },
              {
                icon: "Lightbulb",
                title: "Turn ideas into action",
                text: "Identify a need, explore a market, build a plan, and learn from feedback.",
              },
            ].map((item) => (
              <article className="detail-card" key={item.title}>
                <span className="icon-tile">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-fit">
          <div>
            <p className="eyebrow">There’s no single business personality</p>
            <h2>Could ABM be your thing?</h2>
            <p>
              If any of these sound like you, this could be a good place to
              start.
            </p>
          </div>
          <ul>
            {[
              "You’re curious about how a business earns and grows.",
              "You enjoy organizing ideas, people, or projects.",
              "You want to understand money and make informed choices.",
              "You have an idea and wonder how to bring it to life.",
            ].map((text) => (
              <li key={text}>
                <Icon name="Check" size={19} />
                {text}
              </li>
            ))}
          </ul>
        </section>
        <StudentSpotlights compact />
        <QuizCallout />
      </div>
    </>
  );
}

export function SubjectsPage() {
  return (
    <>
      <PageIntro
        tag="ABM Subjects"
        title="Build your business toolkit."
        text="Discover the knowledge behind confident decisions, creative ideas, and businesses that work."
      />
      <div className="container section-space">
        <div className="note">
          <Icon name="Info" size={20} />
          <p>{curriculumNote}</p>
        </div>
        <nav
          className="filter-row subject-jump"
          aria-label="Subject categories"
        >
          {["Specialized", "Applied", "Core"].map((category) => (
            <a
              className="filter-button"
              href={`#${category.toLowerCase()}`}
              key={category}
            >
              {category} subjects
              <Icon name="ArrowRight" size={16} />
            </a>
          ))}
        </nav>
        {["Specialized", "Applied", "Core"].map((category) => (
          <section
            className="subject-section"
            id={category.toLowerCase()}
            key={category}
          >
            <SectionHeading
              eyebrow={
                category === "Specialized"
                  ? "At the heart of ABM"
                  : category === "Applied"
                    ? "Put your learning to work"
                    : "A well-rounded foundation"
              }
              title={`${category} learning areas`}
            />
            <div className="three-grid">
              {subjects
                .filter((subject) => subject.category === category)
                .map((subject) => (
                  <article
                    className="detail-card subject-detail"
                    id={subject.id}
                    key={subject.id}
                  >
                    <span className="icon-tile">
                      <Icon name={subject.icon} size={24} />
                    </span>
                    <h3>{subject.title}</h3>
                    <p>{subject.description}</p>
                    <ul className="topic-list">
                      {subject.topics.map((topic) => (
                        <li key={topic}>
                          <Icon name="Check" size={16} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </section>
        ))}
        <QuizCallout />
      </div>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageIntro
        tag="Career Pathways"
        title="A world of possibilities ahead."
        text="There’s more than one way to make your mark. Explore degrees and careers that build on an ABM foundation."
      />
      <div className="container section-space">
        <section className="roadmap">
          <SectionHeading title="From your classroom to your calling." />
          <ol>
            <li>
              <span>1</span>
              <h3>Explore in Senior High</h3>
              <p>
                Build foundational business skills and discover your interests.
              </p>
            </li>
            <li>
              <span>2</span>
              <h3>Choose your next step</h3>
              <p>
                Compare college courses, admissions requirements, or business
                training.
              </p>
            </li>
            <li>
              <span>3</span>
              <h3>Learn by doing</h3>
              <p>
                Develop a portfolio through projects, internships, and practical
                experience.
              </p>
            </li>
            <li>
              <span>4</span>
              <h3>Make your move</h3>
              <p>
                Apply your skills in a career or work toward your own venture.
              </p>
            </li>
          </ol>
        </section>
        <div className="career-detail-grid">
          {careers.map((career) => (
            <article className="career-detail" id={career.id} key={career.id}>
              <div className="career-detail-image">
                <Image
                  src={career.image}
                  alt={`Illustration of learning for ${career.title}`}
                  fill
                  sizes="(max-width:760px) 100vw, 45vw"
                />
              </div>
              <div className="career-detail-body">
                <h2>{career.title}</h2>
                <p>{career.description}</p>
                <div className="degree">
                  <Icon name="GraduationCap" size={26} />
                  <div>
                    <small>College pathway to explore</small>
                    <strong>{career.degree}</strong>
                  </div>
                </div>
                <h3>Where it could lead</h3>
                <div className="chips">
                  {career.jobs.map((job) => (
                    <span key={job}>{job}</span>
                  ))}
                </div>
                <h3>Skills to grow</h3>
                <p>{career.skills.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="note">
          <Icon name="Info" size={20} />
          <p>
            These are possible pathways, not guaranteed outcomes. Entry
            requirements vary by college; some professions require additional
            qualifications or licensure.
          </p>
        </div>
        <QuizCallout />
      </div>
    </>
  );
}

export function ResourcesPage() {
  return (
    <>
      <PageIntro
        tag="Learning Resources"
        title="Good resources. Better study days."
        text="Keep a useful guide close by, give your ideas a little structure, and make the most of your learning journey."
      />
      <div className="container section-space">
        <SectionHeading
          title="Your learning library"
          text="Original, free-to-download materials. No account needed."
        />
        <div className="two-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.id}>
              <span className="icon-tile">
                <Icon name="BookOpen" size={24} />
              </span>
              <div>
                <span className="resource-format">
                  {resource.category} · {resource.format}
                </span>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <a
                  href={resource.href}
                  download={resource.fileName}
                  className="text-link"
                >
                  Download resource
                  <Icon name="Download" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <section className="section-space">
          <SectionHeading title="Small habits. A stronger foundation." />
          <div className="three-grid">
            {[
              {
                title: "Practice a little, often",
                text: "Work through one short accounting or math exercise a day. Explain each step in your own words.",
              },
              {
                title: "Connect it to real life",
                text: "Pick a local business. Think about its customers, costs, pricing, and the problem it solves.",
              },
              {
                title: "Keep a question list",
                text: "Write down what you don’t understand. Bring specific questions to your teacher or study group.",
              },
            ].map((tip) => (
              <article className="study-tip" key={tip.title}>
                <Icon name="Lightbulb" size={24} />
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="resource-links-section">
          <SectionHeading
            title="Keep exploring"
            text="Trusted starting points for your research and college preparation."
          />
          <div className="two-grid">
            {usefulLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="external-resource"
              >
                <div>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
                <Icon name="ArrowUpRight" size={22} />
              </a>
            ))}
          </div>
        </section>
        <section className="faq-section" id="faqs">
          <SectionHeading
            eyebrow="You’re not the only one wondering"
            title="A few good questions."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
