"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon, PageIntro } from "./ui";

const TOUR_TOPIC = "Request a campus tour";

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
        ? `\nPreferred campus tour date: ${tourDate || "Flexible"}\nPreferred time slot: ${tourSlot || "Morning (9:00 AM – 11:00 AM)"}`
        : "";

    setMessage(
      `ABM inquiry: ${selectedTopic}\n\nName: ${name}\nVisitor type: ${role}\nReply email: ${email}${tourLines}\n\n${inquiry}`,
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
    link.download = "abm-inquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <>
      <PageIntro
        tag="Get in Touch"
        title="Your questions are welcome here."
        text="Choosing your next step is a big decision. Ask a question about the ABM strand, enrollment requirements, or request a guided campus tour."
      />
      <div className="container contact-layout section-space">
        <aside className="contact-info">
          <p className="eyebrow">Let’s find your next step</p>
          <h2>
            A conversation can
            <br />
            open a new door.
          </h2>
          <p>
            Whether you’re a future student, a parent, or simply curious, we’re
            glad you’re exploring Westbridge Senior High.
          </p>

          <div className="contact-detail">
            <span className="icon-tile">
              <Icon name="GraduationCap" size={22} />
            </span>
            <div>
              <h3>ABM Strand Office</h3>
              <p>{site.school}</p>
              <p className="contact-subdetail">
                {site.coordinator} · {site.coordinatorRole}
              </p>
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
              <Icon name="Phone" size={22} />
            </span>
            <div>
              <h3>Admissions &amp; guidance</h3>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                {site.phone}
              </a>
              <p className="contact-subdetail">{site.officeHours}</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="icon-tile">
              <Icon name="MapPin" size={22} />
            </span>
            <div>
              <h3>Campus address</h3>
              <p>{site.address}</p>
            </div>
          </div>

          <div className="contact-note">
            <strong>Demo school profile</strong>
            <p>
              Westbridge Senior High details shown above are illustrative mock
              data for previewing the site. Replace them via{" "}
              <code>.env.local</code> or <code>src/lib/site.ts</code> before
              official launch.
            </p>
          </div>
        </aside>

        <section className="contact-form-panel">
          <h2>What’s on your mind?</h2>
          <p>
            Prospective students and parents can ask a question or schedule a
            campus tour below.
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
                  placeholder="e.g. Alex Santos"
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
                  <option>Enrollment information</option>
                  <option>Subjects and curriculum</option>
                  <option>College and career pathways</option>
                  <option>School activities and events</option>
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
                    ? "Let us know how many visitors are coming and any specific ABM facilities or questions you’d like covered during your tour…"
                    : "I’d like to know more about…"
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
                ? "Prepare campus tour request"
                : "Prepare my inquiry"}
            </button>
          </form>

          {message && (
            <div className="inquiry-ready" role="status">
              <h3>
                <Icon name="Check" size={20} />
                {isCampusTour
                  ? "Your campus tour request is ready."
                  : "Your inquiry is ready."}
              </h3>
              <p>
                Open your email app to review and send your message directly to{" "}
                <strong>{site.email}</strong>, or copy/download it for later.
              </p>
              <div className="inquiry-actions">
                <a
                  className="button button-primary button-pill"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(isCampusTour ? "Westbridge ABM Campus Tour Request" : "ABM Strand inquiry")}&body=${encodeURIComponent(message)}`}
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
    </>
  );
}
