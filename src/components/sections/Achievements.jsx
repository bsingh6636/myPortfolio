import { achievements } from "../../data/profile";
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="container achievements-section"
      aria-labelledby="achievements-title"
    >
      <h2 className="eyebrow" id="achievements-title">
        A few milestones along the way
      </h2>
      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <article key={achievement.title}>
            <span className="eyebrow">0{index + 1}</span>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
