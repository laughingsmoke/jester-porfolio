import jesterPhoto from "../assets/jester.webp";
import { profile } from "../data/profile";

const details = [
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Full-Stack Web Development" },
  { label: "Open to", value: "Full-time & Freelance" },
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 / About</span>
          <h2>
            Building with <span className="text-fade">purpose.</span>
          </h2>
        </div>

        <div className="about-grid">
          <figure className="about-photo card reveal">
            <img
              src={jesterPhoto}
              alt={`Portrait of ${profile.name}`}
              width="1024"
              height="924"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>{profile.name}</span>
              <span className="mono">{profile.role}</span>
            </figcaption>
          </figure>

          <div className="about-content reveal">
            <p className="lead">
              I'm Jester, a web developer focused on building practical
              software that solves real-world problems.
            </p>

            <p>
              I work across the whole development process: designing
              interfaces, structuring databases, building responsive web
              applications, and connecting systems together.
            </p>

            <p>
              I care about software that is not only clean to look at, but also
              reliable, maintainable, and genuinely useful to the people who
              depend on it.
            </p>

            <dl className="about-details">
              {details.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
