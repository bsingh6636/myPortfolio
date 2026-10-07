import { useRef, useState } from "react";
import { ArrowRight, Check, Copy, Plus } from "lucide-react";
import { profile } from "../../data/profile";
import ExternalLink from "../ExternalLink";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const submitting = useRef(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError("");
    } catch {
      setCopyError("Please select the email address above to copy it.");
    }
  };
  const submit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(
        "https://backend-dev-beige.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          }),
          signal: controller.signal,
        },
      );
      const result = await response.json();
      if (!response.ok || result.status !== "success")
        throw new Error("delivery failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError(
        "Your message could not be sent. Please email me directly, or open your mail app below.",
      );
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  };
  const mailDraft = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name || "Visitor"}`)}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`)}`;
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-topline">
          <p className="eyebrow">06 / Get in touch</p>
          <span className="availability">
            <span aria-hidden="true" />
            Immediate joiner · Bengaluru
          </span>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">
              Good work starts
              <br />
              with a <em>conversation.</em>
            </h2>
            <p>
              Hiring for full stack or backend engineering?
              <br />
              I’d like to hear what your team is working on.
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowRight size={22} aria-hidden="true" />
              </a>
              <button
                type="button"
                className="icon-button"
                onClick={copyEmail}
                aria-label={
                  copied ? "Email address copied" : "Copy email address"
                }
              >
                {copied ? (
                  <Check size={18} aria-hidden="true" />
                ) : (
                  <Copy size={18} aria-hidden="true" />
                )}
              </button>
            </div>
            <p className="copy-status" role="status">
              {copyError || (copied ? "Email address copied." : "")}
            </p>
            <div className="contact-secondary">
              <ExternalLink href={`mailto:${profile.domainEmail}`}>
                {profile.domainEmail}
              </ExternalLink>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
            <div className="contact-profiles">
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume PDF
              </ExternalLink>
            </div>
          </div>
          <div className="contact-form-wrap">
            <details className="contact-form-details">
              <summary>
                Prefer to leave a message? <Plus size={18} aria-hidden="true" />
              </summary>
              <div className="contact-form-content">
                <p>Send a note through the portfolio contact form.</p>
                {status === "sent" ? (
                  <div className="form-success" role="status">
                    <Check size={20} aria-hidden="true" />
                    <p>Your message was sent. Thanks for getting in touch.</p>
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                    />
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                    />
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      maxLength={5000}
                      value={form.message}
                      onChange={(event) =>
                        setForm({ ...form, message: event.target.value })
                      }
                    />
                    <button
                      type="submit"
                      className="button button-solid"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Send message"}
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                    {error && (
                      <div className="form-error">
                        <p role="alert">{error}</p>
                        <ExternalLink href={mailDraft}>
                          Open mail app
                        </ExternalLink>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </details>
            <div className="contact-side-note">
              <span className="eyebrow">Based in Bengaluru, India</span>
              <p>
                Full stack development
                <br />
                Backend engineering
                <br />
                React development
              </p>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <a href="#home" className="wordmark" aria-label="Back to top">
            bk<span className="wordmark-dot">.</span>
          </a>
          <p>
            © {new Date().getFullYear()} {profile.displayName}
          </p>
          <ExternalLink href="https://github.com/bsingh6636/myPortfolio">
            Built with React · View source
          </ExternalLink>
          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
