"use client";

import Link from "next/link";
import { useState } from "react";
import { events, type EventCategory } from "@/lib/content";
import { ButtonLink, Icon, PageIntro } from "./ui";

const categories: readonly ("All events" | EventCategory)[] = [
  "All events",
  "Expo",
  "Research",
  "Enrollment",
  "Webinar",
  "Seminar",
  "Orientation",
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
        text="Key dates for ABM business expos, research congresses, webinars, orientations, and enrollment deadlines."
      />
      <div className="container section-space">
        <div className="note">
          <Icon name="CalendarDays" size={20} />
          <p>
            Sample SY 2026–2027 campus activity calendar for Westbridge Senior
            High. Final schedules and room assignments are confirmed via the ABM
            Strand Office before each event.
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
            Showing {filteredEvents.length} of {events.length} upcoming events
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
                  <span className="sample-tag">Campus calendar</span>
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
                    What to expect
                    <Icon name="ArrowRight" size={17} />
                  </summary>
                  <ul>
                    {event.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <Link href="/contact/" className="text-link">
                    Ask about this event or request a campus visit
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
            <h2>Planning your next school year?</h2>
            <p>
              Download the SHS Enrollment &amp; Requirements Guide or request a
              guided Westbridge campus tour with our admissions team.
            </p>
          </div>
          <ButtonLink
            href="/contact/"
            variant="secondary"
            className="button-pill"
          >
            Request a campus tour
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
