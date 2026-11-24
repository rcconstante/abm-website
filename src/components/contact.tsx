"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon, PageIntro } from "./ui";

const TOUR_TOPIC = "Request a campus visit";

export function ContactPage() {
  const [topic, setTopic] = useState("About the ABM strand");
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const isCampusTour = topic === TOUR_TOPIC;

  function invalidateInquiry() {
    setMessage(null);
    setCopied(false);
    setError("");
  }

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "Prospective Student");
    const selectedTopic = String(form.get("topic") || topic);
    const tourDate = String(form.get("tourDate") || "").trim();
    const tourSlot = String(form.get("tourSlot") || "").trim();
    const inquiry = String(form.get("message") || "").trim();

    if (
      name.length < 2 ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      /[\r\n]/.test(email) ||
      inquiry.length < 10 ||
      inquiry.length > 3000
    ) {
      setError(
        "Please enter your name, a valid email, and a message between 10 and 3,000 characters.",
      );
      return;
    }

    setError("");
    setCopied(false);

    const tourLines =
      selectedTopic === TOUR_TOPIC
        ? `\nPreferred campus visit date: ${tourDate || "Flexible"}\nPreferred time slot: ${tourSlot || "Morning (9:00 AM – 11:00 AM)"}`
        : "";

    setMessage(
      `OLLCF ABM Strand Inquiry: ${selectedTopic}\n\nName: ${name}\nVisitor type: ${role}\nReply email: ${email}${tourLines}\n\n${inquiry}`,
    );
  }

  async function copyMessage() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setError("Your browser couldn’t copy the message. Download it instead.");
    }
  }

  function download() {
    if (!message) return;
    const url = URL.createObjectURL(
      new Blob([message], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "ollcf-abm-inquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <>
      <PageIntro
        tag="Get in Touch"
        title="Your questions are welcome here."
        text="Choosing your Senior High strand is a big step. Reach out to Our Lady of Lourdes College Foundation in Daet, Camarines Norte to ask about ABM enrollment, subjects, or AYBL."
      />
      <div className="container section-space">
        <div className="contact-layout">
          <aside className="contact-info">
            <p className="eyebrow">Here at OLLCF, your future is our concern</p>
            <h2>
              A conversation can
              <br />
              open a new door.
            </h2>
            <p>
              Whether you’re an incoming Grade 11 student, a parent or guardian,
              or a transferee exploring ABM, we’re glad you’re considering{" "}
              <strong>{site.school}</strong>.
            </p>

            <div className="contact-detail">
              <span className="icon-tile">
                <Icon name="GraduationCap" size={22} />
              </span>
              <div>
                <h3>Senior High School · ABM Strand</h3>
                <p>{site.school}</p>
                <p className="contact-subdetail">
                  {site.organization} · Adviser: {site.adviser}
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-tile">
                <Icon name="Phone" size={22} />
              </span>
              <div>
                <h3>Telephone &amp; mobile</h3>
                <p>
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                    {site.phone}
                  </a>
                  {" · "}
                  <a href={`tel:${site.mobile.replace(/[^\d+]/g, "")}`}>
                    {site.mobile}
                  </a>
                </p>
                <p className="contact-subdetail">{site.officeHours}</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-tile">
                <Icon name="Mail" size={22} />
              </span>
              <div>
                <h3>Email inquiries</h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-tile">
                <Icon name="MapPin" size={22} />
              </span>
              <div>
                <h3>Campus address</h3>
                <p>{site.address}</p>
                <p className="contact-subdetail">
                  <a href="#campus-map">View interactive map below</a>
                </p>
              </div>
            </div>

            <div className="contact-note">
              <strong>Official OLLCF &amp; AYBL pages</strong>
              <p>
                Connect with Our Lady of Lourdes College Foundation, OLLCF
                Senior High School, and AYBL for live enrollment updates and
                events:
              </p>
              <div className="contact-socials">
                <a
                  href={site.socials.ollcfFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  OLLCF Official FB
                  <Icon name="ArrowUpRight" size={15} />
                </a>
                <a
                  href={site.socials.shsFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  OLLCF SHS FB
                  <Icon name="ArrowUpRight" size={15} />
                </a>
                <a
                  href={site.socials.ayblFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  AYBL Org FB
                  <Icon name="ArrowUpRight" size={15} />
                </a>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  Instagram {site.socials.instagramHandle}
                  <Icon name="ArrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </aside>

          <section className="contact-form-panel">
            <h2>What’s on your mind?</h2>
            <p>
              Incoming Grade 11 students and parents can prepare an inquiry or
              request a campus visit at OLLCF Daet below.
            </p>
            <form onSubmit={prepare} onChange={invalidateInquiry}>
              <div className="form-row">
                <label>
                  Your name<span aria-hidden="true">*</span>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="e.g. Juan Dela Cruz"
                  />
                </label>
                <label>
                  Email address<span aria-hidden="true">*</span>
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  I am a…
                  <select name="role" defaultValue="Prospective Student">
                    <option>Prospective Student</option>
                    <option>Parent / Guardian</option>
                    <option>Transferee / Returnee</option>
                    <option>Teacher / Guidance Counselor</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Topic
                  <select
                    name="topic"
                    value={topic}
                    onChange={(event) => {
                      setTopic(event.target.value);
                      invalidateInquiry();
                    }}
                  >
                    <option>About the ABM strand</option>
                    <option>{TOUR_TOPIC}</option>
                    <option>SHS Pre-Registration &amp; Enrollment</option>
                    <option>Subjects and curriculum</option>
                    <option>College and career pathways</option>
                    <option>AYBL &amp; student activities</option>
                    <option>Something else</option>
                  </select>
                </label>
              </div>

              {isCampusTour && (
                <div className="tour-fields">
                  <div className="form-row">
                    <label>
                      Preferred visit date
                      <input name="tourDate" type="date" />
                    </label>
                    <label>
                      Preferred time slot
                      <select name="tourSlot" defaultValue="Morning (9–11 AM)">
                        <option>Morning (9–11 AM)</option>
                        <option>Afternoon (1:30–3:30 PM)</option>
                      </select>
                    </label>
                  </div>
                </div>
              )}

              <label>
                Your message<span aria-hidden="true">*</span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={6}
                  placeholder={
                    isCampusTour
                      ? "Let us know how many visitors are coming and any questions about OLLCF SHS ABM enrollment or campus facilities…"
                      : "I’d like to know more about enrolling in ABM at OLLCF…"
                  }
                />
              </label>
              <p className="form-privacy">
                Your message stays in your browser until you choose to open your
                email app, copy, or download it.
              </p>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="button button-primary button-pill form-submit"
              >
                <Icon name="Send" size={18} />
                {isCampusTour
                  ? "Prepare campus visit request"
                  : "Prepare my inquiry"}
              </button>
            </form>

            {message && (
              <div className="inquiry-ready" role="status">
                <h3>
                  <Icon name="Check" size={20} />
                  {isCampusTour
                    ? "Your campus visit request is ready."
                    : "Your inquiry is ready."}
                </h3>
                <p>
                  Open your email app to review and send your message directly
                  to <strong>{site.email}</strong>, or copy/download it for
                  later.
                </p>
                <div className="inquiry-actions">
                  <a
                    className="button button-primary button-pill"
                    href={`mailto:${site.email}?subject=${encodeURIComponent(isCampusTour ? "OLLCF ABM Campus Visit Request" : "OLLCF ABM Strand Inquiry")}&body=${encodeURIComponent(message)}`}
                  >
                    <Icon name="Mail" size={17} />
                    Open email app
                  </a>
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="button button-secondary button-pill"
                  >
                    {copied ? (
                      <Icon name="Check" size={17} />
                    ) : (
                      <Icon name="Copy" size={17} />
                    )}
                    {copied ? "Copied" : "Copy message"}
                  </button>
                  <button
                    type="button"
                    onClick={download}
                    className="button button-secondary button-pill"
                  >
                    <Icon name="Download" size={17} />
                    Download
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        <section className="campus-map-section" id="campus-map">
          <div className="campus-map-header">
            <div>
              <p className="eyebrow">Visit OLLCF Campus</p>
              <h2>Find us along Vinzons Avenue, Daet.</h2>
              <p className="section-copy">
                Planning to drop by for Senior High pre-registration, enrollment
                requirements, or a campus tour? Our Lady of Lourdes College
                Foundation sits right along Vinzons Ave in Brgy. Gahonon, Daet,
                Camarines Norte.
              </p>
            </div>
            <div className="campus-map-actions">
              <a
                href={site.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary button-pill"
              >
                <Icon name="MapPin" size={18} />
                Open in Google Maps
                <Icon name="ArrowUpRight" size={16} />
              </a>
            </div>
          </div>

          <div className="campus-map-card">
            <div className="campus-map-embed">
              <iframe
                src={site.mapEmbedUrl}
                title="Google Map showing Our Lady of Lourdes College Foundation at Vinzons Ave, Gahonon, Daet, Camarines Norte"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="campus-map-facts">
              <div className="campus-map-fact">
                <Icon name="MapPin" size={20} />
                <div>
                  <strong>Exact Location</strong>
                  <span>{site.address}</span>
                </div>
              </div>
              <div className="campus-map-fact">
                <Icon name="Clock3" size={20} />
                <div>
                  <strong>Admissions &amp; Office Hours</strong>
                  <span>{site.officeHours}</span>
                </div>
              </div>
              <div className="campus-map-fact">
                <Icon name="Phone" size={20} />
                <div>
                  <strong>Need directions on the way?</strong>
                  <span>
                    Call{" "}
                    <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                      {site.phone}
                    </a>{" "}
                    or{" "}
                    <a href={`tel:${site.mobile.replace(/[^\d+]/g, "")}`}>
                      {site.mobile}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
