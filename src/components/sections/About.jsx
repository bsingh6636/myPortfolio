import { profile } from "../../data/profile";
import ExternalLink from "../ExternalLink";
import SectionHeading from "../SectionHeading";
export default function About() {
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-title"
    >
      <SectionHeading
        number="03"
        label="A little context"
        title={
          <span id="about-title">
            The person <em>behind the code.</em>
          </span>
        }
      />
      <div className="about-layout">
        <div className="about-intro">
          <p className="about-lead">
            I’m {profile.name}, a full stack engineer based in Bengaluru. I
            spent two years at Vedak building Node.js backends and the React
            interfaces they power.
          </p>
          <p>
            At Vedak, I worked on the full path from a webhook arriving to a
            recording reaching the right client. That meant handling repeated
            events, retrying individual failures, controlling access, and making
            production problems visible.
          </p>
          <p>
            On the frontend, I built real-time notifications, expert filtering,
            and CRM reporting, and worked on reducing bundle size. Outside work,
            I build and operate personal services, including EduCors and my
            self-hosted deployment stack.
          </p>
          <p>
            I studied Computer Science at KNS Institute of Technology,
            affiliated with VTU. I’m now available to join immediately and open
            to full stack and backend engineering roles.
          </p>
          <ExternalLink href={profile.linkedin}>
            More about my background
          </ExternalLink>
        </div>
        <aside className="about-practice">
          <span className="eyebrow">What I pay attention to</span>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>When things fail</h3>
                <p>
                  Retries, idempotency, and clear failure boundaries in
                  asynchronous systems.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>When people use it</h3>
                <p>
                  Responsive interfaces, useful internal tools, and smaller
                  frontend bundles.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>When it reaches production</h3>
                <p>
                  Deployment workflows, observable services, and documentation
                  the team can use.
                </p>
              </div>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
