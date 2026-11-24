import { profile, resumeUrl } from "../data/profile";

const stats = [
  { value: "4", accent: "", label: "Live projects" },
  { value: "4", accent: "", label: "Certifications" },
  { value: "Full", accent: "-stack", label: "React · PHP · SQL" },
  { value: "PH", accent: ".", label: "Surigao City" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="badge">
          <span className="badge-dot" aria-hidden="true"></span>
          Available for hire
        </div>

        <h1 className="hero-title">
          Building web apps
          <br />
          <span className="text-fade">people rely on.</span>
        </h1>

        <p className="hero-description">
          I'm <strong>{profile.name}</strong>, a {profile.role.toLowerCase()}{" "}
          who ships production systems end to end, from{" "}
          <strong>React interfaces</strong> to{" "}
          <strong>PHP and SQL backends</strong>. I'm currently building{" "}
          <strong>Health Made Easy</strong> at Cercan Tech Digital Platforms.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>

          {resumeUrl && (
            <a
              href={resumeUrl}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé ↓
            </a>
          )}

          <a
            href={profile.github}
            className="btn btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            className="btn btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <dl className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd>
                {stat.value}
                <span className="accent">{stat.accent}</span>
              </dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
