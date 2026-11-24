import Image from "next/image";
import {
  subjects,
  careers,
  resources,
  curriculumNote,
  faqs,
  usefulLinks,
} from "@/lib/content";
import { site } from "@/lib/site";
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
        text="A guide for incoming Senior High School learners at Our Lady of Lourdes College Foundation (OLLCF) who want to build real-world skills in accounting, business, finance, and leadership."
      />
      <div className="container section-space">
        <div className="about-page-lead">
          <div className="about-page-image">
            <Image
              src="/images/Ourladyoflourdes/student-/768992371_122262095336122924_5639107466373830583_n.jpg"
              alt="Association of Young Business Leaders officers and ABM students at Our Lady of Lourdes College Foundation Senior High School"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span>
              <Icon name="UsersRound" size={20} />
              OLLCF SHS · Association of Young Business Leaders (AYBL)
            </span>
          </div>
          <div>
            <p className="eyebrow">Our Lady of Lourdes College Foundation</p>
            <h2>What is ABM at OLLCF?</h2>
            <p>
              Accountancy, Business, and Management (ABM) explores how
              organizations start, earn, grow, and serve their communities—from
              a first spark of an idea to the financial and leadership decisions
              that keep a business moving.
            </p>
            <p>
              At <strong>{site.school}</strong> in Daet, Camarines Norte, Senior
              High ABM students pair classroom mastery with active campus
              leadership through the{" "}
              <strong>Association of Young Business Leaders (AYBL)</strong> and
              hands-on ventures like the annual{" "}
              <strong>OLLCF SHS Food Bazaar</strong>.
            </p>
            <p>
              You don’t need a business background to begin—just bring your
              curiosity, willingness to learn, and excitement to grow in a
              supportive Lourdenian community.
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
            eyebrow="Why choose OLLCF Senior High School"
            title="More than lessons. Skills for life."
            text="Quality education since 1977—connecting classroom fundamentals with teamwork, entrepreneurship, and campus leadership."
          />
          <div className="three-grid">
            {[
              {
                icon: "ChartNoAxesCombined",
                title: "Make sense of the numbers",
                text: "Read financial statements, calculate markup and budgets, and support every business choice with clear evidence.",
              },
              {
                icon: "UsersRound",
                title: "Grow with AYBL leadership",
                text: "Join the Association of Young Business Leaders to organize events, collaborate across divisions, and build real confidence.",
              },
              {
                icon: "Lightbulb",
                title: "From concept to commerce",
                text: "Test real ideas in front of customers—from marketing plans and practical research to booths at the OLLCF SHS Food Bazaar.",
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
            <p className="eyebrow">Incoming Grade 11 Lourdenians</p>
            <h2>Could ABM be your thing?</h2>
            <p>
              If any of these sound like you—and you’re looking for a supportive
              SHS department with free school supplies &amp; uniform—OLLCF ABM
              could be the right start for you.
            </p>
          </div>
          <ul>
            {[
              "You’re curious about how a business earns, markets, and grows.",
              "You enjoy organizing ideas, events, people, or student projects.",
              "You want to understand money, accounting, and smart financial choices.",
              "You have a business idea and want to bring it from concept to commerce.",
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
        text="Discover the specialized, applied, and core subjects behind confident decisions, creative ideas, and businesses that work at OLLCF Senior High School."
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
        text="There’s more than one way to make your mark. Explore college degrees and professions that build on an OLLCF ABM foundation."
      />
      <div className="container section-space">
        <section className="roadmap">
          <SectionHeading title="From your OLLCF classroom to your calling." />
          <ol>
            <li>
              <span>1</span>
              <h3>Explore in Senior High</h3>
              <p>
                Build foundational business skills at OLLCF SHS and discover
                your strengths through ABM and AYBL.
              </p>
            </li>
            <li>
              <span>2</span>
              <h3>Choose your next step</h3>
              <p>
                Compare college courses at OLLCF and partner institutions, check
                admissions requirements, or plan a venture.
              </p>
            </li>
            <li>
              <span>3</span>
              <h3>Learn by doing</h3>
              <p>
                Develop a portfolio through projects, campus bazaars, student
                leadership, and internships.
              </p>
            </li>
            <li>
              <span>4</span>
              <h3>Make your move</h3>
              <p>
                Apply your skills in a rewarding corporate career or launch your
                own enterprise.
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
                  alt={`Learning pathway for ${career.title}`}
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
            qualifications or licensure such as the CPA board exam.
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
        text="Open free OLLCF admissions checklists, ABM study guides, and budgeting worksheets in PDF—plus quick links to official OLLCF & DepEd pages."
      />
      <div className="container section-space">
        <SectionHeading
          title="Your learning library"
          text="Original, free-to-read PDF guides for incoming Grade 11 and current OLLCF ABM learners. Opens in a new tab—no account needed."
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Open PDF
                  <Icon name="ArrowUpRight" size={17} />
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
                text: "Work through one short accounting or business math exercise a day and explain each step in your own words.",
              },
              {
                title: "Connect it to local business",
                text: "Observe businesses around Daet—study their customers, pricing, costs, and the everyday needs they solve.",
              },
              {
                title: "Keep a question list",
                text: "Write down concepts you want to clarify and bring specific questions to your OLLCF teachers or AYBL study peers.",
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
            title="Official OLLCF pages & learning links"
            text="Follow OLLCF Senior High School and AYBL directly, and explore trusted DepEd and BSP resources."
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
