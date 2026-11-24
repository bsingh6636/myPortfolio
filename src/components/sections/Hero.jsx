import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import ExternalLink from '../ExternalLink';
export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">A personal portfolio / 2026</span>
        <span className="availability">
          <span aria-hidden="true" />
          Available to join immediately
        </span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-hello">Hello, I’m</p>
          <h1 id="hero-title">
            Brijesh
            <br />
            <em>
              Kushwaha<span>.</span>
            </em>
          </h1>
          <h2>
            Full stack engineer.
            <br />
            From API to production.
          </h2>
          <p className="hero-description">
            I build Node.js and Python services, React interfaces, and third-party integrations. Two
            years of full stack work at Vedak, from internal RAG chatbots and Zoom conferencing
            pipelines to event-driven architectures and high-performance frontend tools.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#projects">
              Explore my work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-text"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={`mailto:${profile.email}`}>Email me</ExternalLink>
          </div>
        </div>
        <div className="hero-aside">
          <figure className="portrait">
            <img
              src="/images/portrait.jpg"
              alt="Brijesh Kushwaha giving a presentation at college"
              width="1000"
              height="750"
              fetchpriority="high"
            />
            <figcaption>
              <span>Brijesh, in person.</span>
              <span className="portrait-caption">{profile.location} ↗</span>
            </figcaption>
          </figure>
          <div className="hero-note">
            <span className="note-mark" aria-hidden="true">
              ↳
            </span>
            <p>
              Backends. Interfaces.
              <br />
              <em>Everything in between.</em>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-facts">
        <div>
          <span className="eyebrow">My focus</span>
          <p>Full stack & AI integrations</p>
        </div>
        <div>
          <span className="eyebrow">My toolkit</span>
          <p>Node.js · React · Python · FastAPI · MySQL · Docker</p>
        </div>
        <a href="#experience" className="hero-scroll">
          <span>Keep reading</span>
          <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
