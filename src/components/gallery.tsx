"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ayblOfficers,
  galleryItems,
  studentWorks,
  type StudentWorkItem,
} from "@/lib/content";
import { getGalleryStory } from "@/lib/gallery-stories";
import { site } from "@/lib/site";
import { Icon, PageIntro, SectionHeading } from "./ui";

const workTypes: readonly ("All highlights" | StudentWorkItem["type"])[] = [
  "All highlights",
  "Enterprise Event",
  "Student Org",
  "Campus Pride",
  "Graduating Class",
];

export function Gallery() {
  const [category, setCategory] = useState("All moments");
  const [workFilter, setWorkFilter] = useState<
    "All highlights" | StudentWorkItem["type"]
  >("All highlights");

  const filtered =
    category === "All moments"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const filteredWorks =
    workFilter === "All highlights"
      ? studentWorks
      : studentWorks.filter((work) => work.type === workFilter);

  return (
    <>
      <PageIntro
        tag="Student Showcase"
        title="Ideas in action. Lourdenian pride in every moment."
        text="Real stories and highlights from the Association of Young Business Leaders (AYBL) and Our Lady of Lourdes College Foundation Senior High School—from the SHS Food Bazaar 2026 to officer inductions and Intramurals victories."
      />
      <div className="container section-space">
        <SectionHeading
          eyebrow="OLLCF SHS & AYBL journal"
          title="Inside the Lourdenian ABM experience."
          text="Open any story below to see the full-size photo and read the behind-the-scenes details of student life at OLLCF."
        />
        <div className="gallery-toolbar">
          <div className="filter-row" aria-label="Filter gallery">
            {[
              "All moments",
              "Events",
              "Activities",
              "Leadership",
              "Achievements",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${category === filter ? "active" : ""}`}
                aria-pressed={category === filter}
                onClick={() => setCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="fine-print" aria-live="polite">
            {filtered.length} stories to read
          </p>
        </div>

        <div className="gallery-grid">
          {filtered.map((photo) => {
            const story = getGalleryStory(photo.id);
            return (
              <Link
                className="gallery-card"
                key={photo.id}
                href={`/gallery/${photo.id}/`}
                aria-label={`Read story: ${photo.title}`}
              >
                <div className="gallery-card-image">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    style={{
                      objectPosition: photo.objectPosition || "center 20%",
                    }}
                    sizes="(max-width:600px) 100vw, (max-width:950px) 50vw, 33vw"
                  />
                  <span className="gallery-card-pill">{photo.category}</span>
                </div>
                <div className="gallery-card-caption">
                  <div className="gallery-card-meta">
                    <span>{story?.dateLabel || "OLLCF SHS"}</span>
                    <span>·</span>
                    <span>{story?.readTime || "3 min read"}</span>
                  </div>
                  <h2>{photo.title}</h2>
                  <p>{photo.description}</p>
                  <span className="gallery-read-more">
                    Read full story
                    <Icon name="ArrowRight" size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <section className="officers-section" id="aybl-officers">
          <SectionHeading
            eyebrow="The torch has been passed"
            title="Meet the newly elected AYBL officers."
            text="A new generation of OLLCF Senior High School leaders stepping forward with fresh ideas, integrity, and purpose to guide the Association of Young Business Leaders."
            href="/gallery/aybl-newly-elected-officers/"
            linkLabel="Read the leadership feature"
          />
          <div className="officers-grid">
            {ayblOfficers.map((officer) => (
              <article className="officer-card" key={officer.id}>
                <div className="officer-card-image">
                  <Image
                    src={officer.image}
                    alt={`${officer.name} — ${officer.role}, OLLCF AYBL`}
                    fill
                    sizes="(max-width:600px) 50vw, (max-width:960px) 33vw, 25vw"
                  />
                </div>
                <div className="officer-card-meta">
                  <strong>{officer.name}</strong>
                  <span>{officer.role}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="fine-print officers-credit">
            Publication credits: Write-up by Christine Ann Ubana · Graphics by
            Akime Jhean Rasco &amp; Ma. Jiecel Najera · Association of Young
            Business Leaders (OLLCF SHS)
          </p>
        </section>

        <section className="student-work-section" id="student-work">
          <SectionHeading
            eyebrow="AYBL & ABM program highlights"
            title="From concept to commerce & campus leadership."
            text="Explore how OLLCF Senior High School ABM students apply business, leadership, and entrepreneurial thinking across campus events and milestones."
          />
          <div className="gallery-toolbar">
            <div className="filter-row" aria-label="Filter highlights">
              {workTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`filter-button ${workFilter === type ? "active" : ""}`}
                  aria-pressed={workFilter === type}
                  onClick={() => setWorkFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <p className="fine-print" aria-live="polite">
              {filteredWorks.length} featured highlights
            </p>
          </div>
          <div className="two-grid work-grid">
            {filteredWorks.map((work) => (
              <article className="work-card" key={work.id}>
                <div className="work-card-image">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    style={{
                      objectPosition: work.objectPosition || "center 25%",
                    }}
                    sizes="(max-width:760px) 100vw, 48vw"
                  />
                  <span className="work-type-pill">{work.type}</span>
                </div>
                <div className="work-card-body">
                  <p className="work-team">{work.team}</p>
                  <h3>{work.title}</h3>
                  <p className="work-summary">{work.summary}</p>
                  <div className="work-highlight">
                    <Icon name="ChartNoAxesCombined" size={18} />
                    <strong>{work.highlight}</strong>
                  </div>
                  <ul className="topic-list">
                    {work.metrics.map((metric) => (
                      <li key={metric}>
                        <Icon name="Check" size={16} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                  <p className="work-takeaway">
                    <strong>ABM connection:</strong> {work.takeaway}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="note gallery-note">
          <Icon name="Info" size={20} />
          <p>
            All photos and announcements featured here come from the official{" "}
            <a
              href={site.socials.ayblFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-note-link"
            >
              Association of Young Business Leaders (AYBL)
            </a>{" "}
            of Our Lady of Lourdes College Foundation — Senior High School.
          </p>
        </div>
      </div>
    </>
  );
}
