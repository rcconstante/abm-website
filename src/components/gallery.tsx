"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ayblOfficers,
  galleryItems,
  studentWorks,
  type StudentWorkItem,
} from "@/lib/content";
import { site } from "@/lib/site";
import { Icon, PageIntro, SectionHeading } from "./ui";

const workTypes: readonly ("All highlights" | StudentWorkItem["type"])[] = [
  "All highlights",
  "Enterprise Event",
  "Student Org",
  "Campus Pride",
  "Graduating Class",
];

interface LightboxEntry {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export function Gallery() {
  const [category, setCategory] = useState("All moments");
  const [workFilter, setWorkFilter] = useState<
    "All highlights" | StudentWorkItem["type"]
  >("All highlights");
  const [lightboxItems, setLightboxItems] = useState<readonly LightboxEntry[]>(
    [],
  );
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const filtered =
    category === "All moments"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const filteredWorks =
    workFilter === "All highlights"
      ? studentWorks
      : studentWorks.filter((work) => work.type === workFilter);

  const item = selected === null ? null : lightboxItems[selected];

  useEffect(() => {
    if (selected !== null) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    } else {
      dialog.current?.close();
    }
  }, [selected]);

  function openGalleryLightbox(index: number) {
    setLightboxItems(filtered);
    setSelected(index);
  }

  function openOfficerLightbox(index: number) {
    setLightboxItems(
      ayblOfficers.map((officer) => ({
        title: officer.name,
        category: officer.role,
        description: `${officer.name} serves as ${officer.role} of the Association of Young Business Leaders (AYBL) at Our Lady of Lourdes College Foundation — Senior High School.`,
        image: officer.image,
        alt: `${officer.name}, ${officer.role} — OLLCF AYBL`,
      })),
    );
    setSelected(index);
  }

  function move(direction: number) {
    setSelected((current) =>
      current === null || lightboxItems.length === 0
        ? null
        : (current + direction + lightboxItems.length) % lightboxItems.length,
    );
  }

  return (
    <>
      <PageIntro
        tag="Student Showcase"
        title="Ideas in action. Lourdenian pride in every moment."
        text="Real highlights from the Association of Young Business Leaders (AYBL) and Our Lady of Lourdes College Foundation Senior High School—from the SHS Food Bazaar 2026 to officer inductions and Intramurals victories."
      />
      <div className="container section-space">
        <SectionHeading
          eyebrow="OLLCF SHS & AYBL photo gallery"
          title="Inside the Lourdenian ABM experience."
          text="Click any photo to open the full-size view and browse moments using your arrow keys."
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
                onClick={() => {
                  setCategory(filter);
                  setSelected(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="fine-print" aria-live="polite">
            {filtered.length} moments to explore
          </p>
        </div>
        <div className="gallery-grid">
          {filtered.map((photo, index) => (
            <button
              className="gallery-card"
              key={photo.id}
              onClick={() => openGalleryLightbox(index)}
              aria-label={`Preview ${photo.title}`}
            >
              <div className="gallery-card-image">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  style={{ objectPosition: photo.objectPosition || "center 20%" }}
                  sizes="(max-width:600px) 100vw, (max-width:950px) 50vw, 33vw"
                />
                <span className="gallery-expand">
                  <Icon name="Expand" size={18} />
                </span>
              </div>
              <div className="gallery-card-caption">
                <small>{photo.category}</small>
                <h2>
                  {photo.title}
                  <Icon name="ArrowUpRight" size={19} />
                </h2>
                <p>{photo.description}</p>
              </div>
            </button>
          ))}
        </div>

        <section className="officers-section" id="aybl-officers">
          <SectionHeading
            eyebrow="The torch has been passed"
            title="Meet the newly elected AYBL officers."
            text="A new generation of OLLCF Senior High School leaders stepping forward with fresh ideas, integrity, and purpose to guide the Association of Young Business Leaders. Click any officer card to view full size."
          />
          <div className="officers-grid">
            {ayblOfficers.map((officer, index) => (
              <button
                type="button"
                className="officer-card"
                key={officer.id}
                onClick={() => openOfficerLightbox(index)}
                aria-label={`View ${officer.name}, ${officer.role}`}
              >
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
              </button>
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
                    style={{ objectPosition: work.objectPosition || "center 25%" }}
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

      <dialog
        ref={dialog}
        className="lightbox"
        data-lenis-prevent
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        aria-label={item?.title || "Image preview"}
      >
        {item && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Close image preview"
            >
              <Icon name="X" size={20} />
            </button>
            <div className="lightbox-image">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width:760px) 95vw, 720px"
              />
            </div>
            <div className="lightbox-caption">
              <div>
                <small>{item.category} · OLLCF SHS · AYBL</small>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="lightbox-controls">
                <button
                  className="circle-link"
                  onClick={() => move(-1)}
                  aria-label="Previous image"
                >
                  <Icon name="ArrowLeft" size={20} />
                </button>
                <span>
                  {(selected ?? 0) + 1} / {lightboxItems.length}
                </span>
                <button
                  className="circle-link"
                  onClick={() => move(1)}
                  aria-label="Next image"
                >
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
