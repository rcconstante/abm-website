"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Check,
  Copy,
  Download,
  GraduationCap,
} from "lucide-react";
import { site } from "@/lib/site";
import { PageIntro } from "./ui";

export function ContactPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
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
    const topic = String(form.get("topic") || "");
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
    setMessage(
      `ABM inquiry: ${topic}\n\nName: ${name}\nReply email: ${email}\n\n${inquiry}`,
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
        text="Choosing your next step is a big decision. Start a conversation about ABM, school life, or where your interests could lead."
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
            glad you’re exploring.
          </p>
          <div className="contact-detail">
            <span className="icon-tile">
              <GraduationCap />
            </span>
            <div>
              <h3>Meet your school</h3>
              <p>{site.school}</p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="icon-tile">
              <Mail />
            </span>
            <div>
              <h3>Email inquiries</h3>
              {site.email ? (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              ) : (
                <p>School email to be confirmed</p>
              )}
            </div>
          </div>
          <div className="contact-detail">
            <span className="icon-tile">
              <MapPin />
            </span>
            <div>
              <h3>Find us</h3>
              <p>{site.address || "Campus address to be confirmed"}</p>
            </div>
          </div>
          {site.schoolUrl && (
            <a
              href={site.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit the school website
              <ArrowUpRight size={16} />
            </a>
          )}
          <div className="contact-note">
            <strong>A note about this school project</strong>
            <p>
              Westbridge is an illustrative school identity. Official contact
              details and social links will be added by the school.
            </p>
          </div>
        </aside>
        <section className="contact-form-panel">
          <h2>What’s on your mind?</h2>
          <p>Tell us a little about yourself and what you’d like to know.</p>
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
            <label>
              What would you like to ask about?
              <select name="topic" defaultValue="About the ABM strand">
                <option>About the ABM strand</option>
                <option>Subjects and curriculum</option>
                <option>College and career pathways</option>
                <option>School activities and events</option>
                <option>Enrollment information</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Your message<span aria-hidden="true">*</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={6}
                placeholder="I’d like to know more about…"
              />
            </label>
            <p className="form-privacy">
              Your message stays in your browser until you choose to share it.
              Please leave out sensitive personal information.
            </p>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="button button-primary form-submit">
              <Send size={17} />
              Prepare my inquiry
              <ArrowUpRight size={17} />
            </button>
          </form>
          {message && (
            <div className="inquiry-ready" role="status">
              <h3>
                <Check size={20} />
                Your inquiry is ready.
              </h3>
              <p>
                {site.email
                  ? "Open your email app to review and send it to the school."
                  : "The school’s email isn’t available yet. Copy or download your message to share when you have their contact details. This message has not been sent."}
              </p>
              <div className="inquiry-actions">
                {site.email && (
                  <a
                    className="button button-primary"
                    href={`mailto:${site.email}?subject=${encodeURIComponent("ABM Strand inquiry")}&body=${encodeURIComponent(message)}`}
                  >
                    <Mail size={16} />
                    Open email app
                  </a>
                )}
                <button
                  type="button"
                  onClick={copyMessage}
                  className="button button-secondary"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy message"}
                </button>
                <button
                  type="button"
                  onClick={download}
                  className="button button-secondary"
                >
                  <Download size={16} />
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
