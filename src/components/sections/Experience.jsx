import { Plus } from "lucide-react";
import { experience } from "../../data/profile";
import SectionHeading from "../SectionHeading";
export default function Experience() {
  return (
    <section
      id="experience"
      className="section container"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        number="01"
        label="Experience"
        title={
          <span id="experience-title">
            Full stack work. <em>In production.</em>
          </span>
        }
      >
        Two years building Node.js services and React applications at Vedak.
        Here’s what I contributed across the stack.
      </SectionHeading>
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-entry" key={job.id}>
            <div className="experience-meta">
              <span className="eyebrow">{job.period}</span>
              <h3>{job.company}</h3>
              <p>{job.context}</p>
              <span className="job-type">{job.type}</span>
            </div>
            <div className="experience-body">
              <h4>{job.role}</h4>
              <p className="job-summary">{job.summary}</p>
              <ul className="contribution-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.details.length > 0 && (
                <details className="work-details">
                  <summary>
                    More about this role <Plus size={16} aria-hidden="true" />
                  </summary>
                  <ul className="contribution-list">
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              )}
              {job.supportingWork && (
                <p className="job-summary">{job.supportingWork}</p>
              )}
              <p className="technology-line">
                <span>Worked with</span>
                {job.technologies.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
      <dl className="results-strip">
        <div>
          <dt>500+</dt>
          <dd>concurrent WebSocket users</dd>
        </div>
        <div>
          <dt>35%</dt>
          <dd>smaller frontend bundle</dd>
        </div>
        <div>
          <dt>3.2 → 2.4s</dt>
          <dd>frontend load time</dd>
        </div>
        <div>
          <dt>45%</dt>
          <dd>less time to resolve incidents</dd>
        </div>
      </dl>
    </section>
  );
}
