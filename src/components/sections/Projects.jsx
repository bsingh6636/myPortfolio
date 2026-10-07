import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import ExternalLink from "../ExternalLink";
import SectionHeading from "../SectionHeading";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <ExternalLink
        href={project.github}
        aria-label={`Source code for ${project.name}`}
      >
        Source code
      </ExternalLink>
      {project.live && (
        <ExternalLink
          href={project.live}
          aria-label={`Live site for ${project.name}`}
        >
          {project.id === "web-hook-service" ? "API endpoint" : "Live site"}
        </ExternalLink>
      )}
    </div>
  );
}
function ProjectRow({ project }) {
  return (
    <article className="project-row">
      <div>
        <h4>{project.name}</h4>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p>{project.description}</p>
        <p className="technology-line">{project.technologies.join(" · ")}</p>
      </div>
      <ProjectLinks project={project} />
    </article>
  );
}

function SystemSketch({ kind }) {
  return kind === "web-hook-service" ? (
    <div
      className="system-sketch relay-sketch"
      role="img"
      aria-label="Webhook relay: receive an event, forward it to its target, and store failed deliveries in MongoDB for replay"
    >
      <div className="sketch-label">EVENT DELIVERY / A SECOND CHANCE</div>
      <div className="sketch-flow">
        <span>Receive</span>
        <ArrowRight size={19} aria-hidden="true" />
        <span>Forward</span>
        <ArrowRight size={19} aria-hidden="true" />
        <span>Target</span>
      </div>
      <div className="sketch-branch">
        <span aria-hidden="true">↳</span> Failed? Store it. Inspect it. Replay
        it.
      </div>
      <code>GET /missed-requests</code>
    </div>
  ) : (
    <div
      className="system-sketch infra-sketch"
      role="img"
      aria-label="Infrastructure configuration: stack.yaml generates Docker Compose and Nginx configs, with validation, releases, and rollback"
    >
      <div className="sketch-label">
        PERSONAL INFRASTRUCTURE / OPERATED BY ME
      </div>
      <div className="infra-file">
        <span aria-hidden="true">▤</span> stack.yaml
      </div>
      <div className="infra-outputs">
        <span>Docker Compose</span>
        <span>Nginx + TLS</span>
      </div>
      <p>
        Validate <span>→</span> Preview <span>→</span> Deploy <span>↶</span>{" "}
        Rollback
      </p>
    </div>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const filtered = otherProjects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  const shown = filtered.slice(0, 3);
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          number="02"
          label="Selected work"
          title={
            <span id="projects-title">
              A few things I’ve <em>put into the world.</em>
            </span>
          }
        >
          Personal services, tools, and applications. What they do, what I
          contributed, and where to see the code.
        </SectionHeading>
        <article className="featured-project">
          <div className="featured-project-image">
            <div className="image-topline">
              <span className="status-dot" aria-hidden="true" /> EduCors / API
              proxy<span>01</span>
            </div>
            <div
              className="cors-sketch"
              role="img"
              aria-label="EduCors request flow: browser sends a request with its API key, the proxy authenticates and forwards it, and usage is recorded per key"
            >
              <p className="eyebrow">
                A request, without the cross-origin roadblock.
              </p>
              <div className="cors-flow">
                <span>Your app</span>
                <ArrowRight size={20} aria-hidden="true" />
                <strong>EduCors</strong>
                <ArrowRight size={20} aria-hidden="true" />
                <span>Target API</span>
              </div>
              <pre>
                <code>
                  <span className="code-method">GET</span> /api/getData{`\n`}
                  <span className="code-key">?ApiKey</span>=YOUR_API_KEY{`\n`}
                  <span className="code-key">&Target</span>
                  =https://api.example.com/data
                </code>
              </pre>
              <div className="cors-capabilities">
                <span>Authenticate</span>
                <span>Rate limit</span>
                <span>Forward</span>
                <span>Track usage</span>
              </div>
            </div>
            <div className="image-bottomline">
              <span>JWT auth · Rate limits · Usage analytics</span>
              <span>2,000+ requests / month</span>
            </div>
          </div>
          <div className="featured-project-copy">
            <span className="eyebrow">01 / API service</span>
            <h3>
              {featured[0].name}
              <span>{featured[0].subtitle}</span>
            </h3>
            <p>{featured[0].description}</p>
            <p>{featured[0].contribution}</p>
            <p className="project-technical">{featured[0].technical}</p>
            <p className="technology-line">
              {featured[0].technologies.join(" · ")}
            </p>
            <ProjectLinks project={featured[0]} />
          </div>
        </article>
        <div className="supporting-projects">
          {featured.slice(1).map((project, index) => (
            <article className="supporting-project" key={project.id}>
              <SystemSketch kind={project.id} />
              <div className="supporting-project-body">
                <span className="eyebrow">
                  0{index + 2} /{" "}
                  {project.id === "infra"
                    ? "Cloud & operations"
                    : "Backend service"}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                <details className="work-details">
                  <summary>
                    Technical details <Plus size={15} aria-hidden="true" />
                  </summary>
                  <p>{project.technical}</p>
                </details>
                <p className="technology-line">
                  {project.technologies.join(" · ")}
                </p>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
        <div className="project-index-header">
          <div>
            <p className="eyebrow">The rest of the workbench</p>
            <h3>
              More projects<span> / {otherProjects.length}</span>
            </h3>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter more projects"
          >
            {[
              ["all", "All"],
              ["fullstack", "Full stack"],
              ["data", "Data & UI"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="project-index" aria-live="polite" aria-atomic="false">
          {shown.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
        {filtered.length > 3 && (
          <details className="project-archive" key={filter}>
            <summary className="project-expand">
              <span className="expand-label">
                See all {filtered.length} projects
              </span>
              <span className="collapse-label">Show fewer projects</span>
              <Plus size={17} aria-hidden="true" />
            </summary>
            <div className="project-index">
              {filtered.slice(3).map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          </details>
        )}
        <div className="engineering-notes">
          <p className="eyebrow">Other things I’ve worked on</p>
          <div>
            <details>
              <summary>
                Custom domain email <Plus size={16} aria-hidden="true" />
              </summary>
              <p>
                Configured brijesh@brijeshhq.com using ImprovMX for inbound
                forwarding, Brevo SMTP for outbound mail, and Cloudflare DNS for
                MX, SPF, CNAME, and A records. Uses free service tiers. Learned
                email authentication with SPF, DKIM, and DMARC, and how
                receiving and sending can use separate providers.
              </p>
            </details>
            <details>
              <summary>
                job-tracker-mcp <Plus size={16} aria-hidden="true" />
              </summary>
              <p>
                Built with Claude as a learning project and used daily. A
                TypeScript MCP v2 server with tools to list applications, add an
                application, update its status, and check due follow-ups. Uses
                Zod validation, serialized writes, atomic file saves, and
                recoverable error responses.
              </p>
            </details>
            <details>
              <summary>
                Authentication & service tooling{" "}
                <Plus size={16} aria-hidden="true" />
              </summary>
              <p>
                Additional work includes authenticator-app two-factor login and
                a Node.js service-to-service package for authentication, request
                logging, and masking sensitive headers.
              </p>
            </details>
          </div>
        </div>
        <div className="projects-footnote">
          <span>More code, experiments, and learning on GitHub.</span>
          <ExternalLink href={profile.github}>
            Browse my repositories
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
