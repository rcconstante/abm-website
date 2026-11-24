import Image from "next/image";
import { studentSpotlights } from "@/lib/content";
import { SectionHeading } from "./ui";

export function StudentSpotlights({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      className={`spotlights-section ${compact ? "spotlights-compact" : "section-space"}`}
    >
      <div className={compact ? "" : "container"}>
        <SectionHeading
          eyebrow="Pride of OLLCF ABM & AYBL"
          title="Celebrating our Young Business Leaders."
          text="AYBL student leaders representing OLLCF Senior High School at Intramurals 2026."
          href="/gallery/#aybl-officers"
          linkLabel="Meet all AYBL officers"
        />
        <div className="two-grid spotlights-grid">
          {studentSpotlights.map((student) => (
            <article className="spotlight-card" key={student.id}>
              <div className="spotlight-badge">{student.achievement}</div>
              <p className="spotlight-copy">{student.highlight}</p>
              <div className="spotlight-author">
                <span className="spotlight-avatar">
                  <Image
                    src={student.photo}
                    alt={`${student.name} — ${student.achievement}`}
                    width={56}
                    height={56}
                    decoding="async"
                  />
                </span>
                <div>
                  <strong>{student.name}</strong>
                  <small>{student.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
