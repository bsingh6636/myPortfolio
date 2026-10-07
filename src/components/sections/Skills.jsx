import { Plus } from "lucide-react";
import { additionalSkills, learning, skillGroups } from "../../data/profile";
import SectionHeading from "../SectionHeading";
export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeading
          number="04"
          label="Technical toolkit"
          title={
            <span id="skills-title">
              Tools I use.
              <br />
              <em>Systems I understand.</em>
            </span>
          }
        >
          Grouped by the work they support. The technologies behind my projects
          and professional experience.
        </SectionHeading>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.title}>
              <h3>
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <details className="work-details additional-skills">
          <summary>
            Additional cloud & database tools{" "}
            <Plus size={16} aria-hidden="true" />
          </summary>
          <p>{additionalSkills.join(" · ")}</p>
        </details>
        <div className="learning-note">
          <span className="eyebrow">Currently learning</span>
          <p>{learning.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
