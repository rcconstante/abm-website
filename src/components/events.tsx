"use client";

import Link from "next/link";
import { useState } from "react";
import { events, type EventCategory } from "@/lib/content";
import { site } from "@/lib/site";
import { ButtonLink, Icon, PageIntro } from "./ui";

const categories: readonly ("All events" | EventCategory)[] = [
  "All events",
  "Bazaar",
  "Enrollment",
  "Orientation",
  "Research",
  "Leadership",
  "Highlight",
];

export function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All events" | EventCategory
  >("All events");

  const filteredEvents =
    selectedCategory === "All events"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <>
      <PageIntro
        tag="Events & Updates"
        title="Step out. Show up. Get inspired."
        text="Stay updated on OLLCF Senior High School & AYBL activities—from the SHS Food Bazaar 2026 and ongoing pre-registration to student leadership highlights."
      />
      <div className="container section-space">
        <div className="note">
          <Icon name="CalendarDays" size={20} />
          <p>
            Official SY 2026–2027 highlights and upcoming campus activities for{" "}
            <strong>{site.school} — Senior High School</strong> and the{" "}
            <strong>{site.organization}</strong>. For real-time schedule
            announcements, follow{" "}
            <a
              href={site.socials.shsFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-note-link"
            >
              OLLCF SHS
            </a>{" "}
            and{" "}
            <a
              href={site.socials.ayblFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-note-link"
            >
              AYBL on Facebook
            </a>
            .
          </p>
        </div>

        <div className="gallery-toolbar">
          <div className="filter-row" aria-label="Filter events by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-button ${selectedCategory === cat ? "active" : ""}`}
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="fine-print" aria-live="polite">
            Showing {filteredEvents.length} of {events.length} events &amp;
            highlights
          </p>
        </div>

        <div className="events-list">
          {filteredEvents.map((event) => (
            <article className="event-detail" id={event.id} key={event.id}>
              <div className="event-large-date">
                <span>
                  {new Date(event.date + "T12:00:00Z").toLocaleDateString(
                    "en",
                    { month: "short", timeZone: "UTC" },
                  )}
                </span>
                <strong>
                  {new Date(event.date + "T12:00:00Z").getUTCDate()}
                </strong>
                <small>{event.date.slice(0, 4)}</small>
              </div>
              <div className="event-detail-body">
                <span className="resource-format">
                  {event.category}
                  <span className="sample-tag">{event.status}</span>
                </span>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span>
                    <Icon name="Clock3" size={17} />
                    {event.time}
                  </span>
                  <span>
                    <Icon name="MapPin" size={17} />
                    {event.location}
                  </span>
                </div>
                <details>
                  <summary>
                    Event details &amp; highlights
                    <Icon name="ArrowRight" size={17} />
                  </summary>
                  <ul>
                    {event.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <Link href="/contact/" className="text-link">
                    Ask OLLCF SHS about this activity or visit campus
                    <Icon name="ArrowUpRight" size={17} />
                  </Link>
                </details>
              </div>
            </article>
          ))}
        </div>

        <div className="announcement">
          <Icon name="Megaphone" size={32} />
          <div>
            <h2>Ready to start your Senior High journey at OLLCF?</h2>
            <p>
              Pre-registration is ongoing! Download the OLLCF SHS Enrollment
              Guide or reach out to our campus in Daet, Camarines Norte—plus
              enjoy free school supplies &amp; uniform for incoming SHS
              learners.
            </p>
          </div>
          <ButtonLink
            href="/contact/"
            variant="secondary"
            className="button-pill"
          >
            Inquire or visit campus
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
