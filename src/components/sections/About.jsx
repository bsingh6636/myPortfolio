import { profile } from '../../data/profile';
import ExternalLink from '../ExternalLink';
import SectionHeading from '../SectionHeading';

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
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
            I’m {profile.name}, a full stack engineer based in Bengaluru. I spent two years at Vedak
            building Node.js and Python backends and the React interfaces they power.
          </p>
          <p>
            At Vedak, I built customer-facing portals and owned the video conferencing
            lifecycle—embedding Zoom meetings via SDK, streaming recordings to AWS S3 with
            composite-key deduplication, and queued delivery to enterprise clients. I built an
            internal Python retrieval chatbot (RAG) over company documents using PostgreSQL with
            pgvector, an LLM classification service, and migrated our UI from Material UI to
            Shadcn/ui while cutting bundle size by 35%.
          </p>
          <p>
            Outside work, I build and operate personal services: the EduCors API proxy, a
            multi-workspace RAG assistant with validated tool calling, a hand-written Python RAG
            service with an evaluation harness, and a CI/CD pipeline that deploys Docker images to
            an Azure VM.
          </p>
          <p>
            I studied Computer Science at KNS Institute of Technology, affiliated with Visvesvaraya
            Technological University (VTU). I’m available to join immediately and open to full
            stack, backend, and AI-focused engineering roles.
          </p>
          <ExternalLink href={profile.linkedin}>More about my background</ExternalLink>
        </div>
        <aside className="about-practice">
          <span className="eyebrow">What I pay attention to</span>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>When things fail</h3>
                <p>Retries, idempotency, and clear failure boundaries in asynchronous systems.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>When people use it</h3>
                <p>Responsive interfaces, useful internal tools, and smaller frontend bundles.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>When it reaches production</h3>
                <p>
                  Deployment workflows, observable services, and documentation the team can use.
                </p>
              </div>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
