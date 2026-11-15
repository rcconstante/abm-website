"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Expand } from "lucide-react";
import { galleryItems } from "@/lib/content";
import { PageIntro } from "./ui";

export function Gallery() {
  const [category, setCategory] = useState("All moments");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered =
    category === "All moments"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);
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
        text="Explore the projects, teamwork, and everyday moments that bring business learning to life."
      />
      <div className="container section-space">
        <div className="gallery-toolbar">
          <div className="filter-row" aria-label="Filter gallery">
            {["All moments", "Projects", "Activities", "Achievements"].map(
              (filter) => (
                <button
                  key={filter}
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
                  <Expand size={19} />
                </span>
              </div>
              <div className="gallery-card-caption">
                <small>{photo.category}</small>
                <h2>
                  {photo.title}
                  <ArrowUpRight size={19} />
                </h2>
                <p>{photo.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="note gallery-note">
          <p>
            These AI-generated images illustrate possible ABM learning
            activities. They do not document actual students, school events, or
            awards.
          </p>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
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
              <X />
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
                  <ArrowLeft size={20} />
                </button>
                <span>
                  {(selected ?? 0) + 1} / {filtered.length}
                </span>
                <button
                  className="circle-link"
                  onClick={() => move(1)}
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
