import { certifications } from "../../data/profile";
import SectionHeading from "../SectionHeading";
export default function Education() {
  return (
    <section
      id="education"
      className="section container education-section"
      aria-labelledby="education-title"
    >
      <SectionHeading
        number="05"
        label="Education & learning"
        title={
          <span id="education-title">
            The <em>foundation.</em>
          </span>
        }
      />
      <div className="education-layout">
        <div>
          <span className="eyebrow">Dec 2020 – Jul 2024</span>
          <h3>
            Bachelor of Engineering
            <br />
            in Computer Science
          </h3>
          <p className="education-school">KNS Institute of Technology</p>
          <p>
            Visvesvaraya Technological University (VTU)
            <br />
            Bengaluru, Karnataka, India
          </p>
          <p className="education-grade">First Class · 74%</p>
          <p className="education-coursework">
            <span className="eyebrow">Coursework</span>Data structures &
            algorithms · DBMS & SQL · Operating systems · Computer networks ·
            Cloud computing · OOP & system design · Software engineering
          </p>
          <details className="work-details">
            <summary>Curriculum & lab work</summary>
            <p>
              Database normalization, ACID transactions, indexing, and
              algorithmic complexity. UNIX process management, concurrency,
              socket communication, and TCP/IP protocols.
            </p>
          </details>
        </div>
        <aside>
          <span className="eyebrow">Certifications</span>
          <ul className="certification-list">
            {certifications.map((certificate) => (
              <li key={certificate.name}>
                <h4>{certificate.name}</h4>
                <p>{certificate.issuer}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
