"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  galleryItems,
  studentWorks,
  type StudentWorkItem,
} from "@/lib/content";
import { Icon, PageIntro, SectionHeading } from "./ui";

const workTypes: readonly ("All work" | StudentWorkItem["type"])[] = [
  "All work",
  "Mini-Business",
  "Business Proposal",
  "Student Article",
  "Project Poster",
];

export function Gallery() {
  const [category, setCategory] = useState("All moments");
  const [workFilter, setWorkFilter] = useState<
    "All work" | StudentWorkItem["type"]
  >("All work");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const filtered =
    category === "All moments"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const filteredWorks =
    workFilter === "All work"
      ? studentWorks
      : studentWorks.filter((work) => work.type === workFilter);

  const item = selected === null ? null : filtered[selected];

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

  function move(direction: number) {
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + filtered.length) % filtered.length,
    );
  }

  return (
    <>
      <PageIntro
        tag="Student Showcase"
        title="Ideas in action. Memories in the making."
        text="Explore student mini-businesses, feasibility proposals, research articles, project posters, and everyday ABM campus moments."
      />
      <div className="container section-space">
        <SectionHeading
          eyebrow="Campus photo gallery"
          title="Inside the ABM experience."
          text="Click any photo to open the full-size preview and browse moments with your keyboard."
        />
        <div className="gallery-toolbar">
          <div className="filter-row" aria-label="Filter gallery">
            {["All moments", "Projects", "Activities", "Achievements"].map(
              (filter) => (
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
              ),
            )}
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
              onClick={() => setSelected(index)}
              aria-label={`Preview ${photo.title}`}
            >
              <div className="gallery-card-image">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
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

        <section className="student-work-section" id="student-work">
          <SectionHeading
            eyebrow="Business simulation highlights & student work"
            title="Mini-businesses, proposals & articles."
            text="See how ABM students turn classroom accounting, marketing, and research into pop-up ventures, startup pitches, and published work."
          />
          <div className="gallery-toolbar">
            <div className="filter-row" aria-label="Filter student work">
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
              {filteredWorks.length} featured works
            </p>
          </div>
          <div className="two-grid work-grid">
            {filteredWorks.map((work) => (
              <article className="work-card" key={work.id}>
                <div className="work-card-image">
                  <Image
                    src={work.image}
                    alt={`Illustration of ${work.title}`}
                    fill
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
                    <strong>Key ABM takeaway:</strong> {work.takeaway}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="note gallery-note">
          <Icon name="Info" size={20} />
          <p>
            These illustrative campus scenes and project write-ups showcase
            typical ABM enterprise simulations, feasibility proposals, articles,
            and research posters.
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
                <small>{item.category} · Illustrative imagery</small>
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
                  {(selected ?? 0) + 1} / {filtered.length}
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
