import { profile, resumeUrl } from "../data/profile";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card card reveal">
          <span className="eyebrow">05 / Contact</span>

          <h2>
            Let's work <span className="text-fade">together.</span>
          </h2>

          <p>
            Hiring for a developer role, or have a project in mind? I'm open to
            full-time positions and freelance work. Email is the fastest way
            to reach me.
          </p>

          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email} <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Send an email
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
            <a href={profile.phoneHref} className="btn btn-ghost">
              {profile.phone}
            </a>
          </div>

          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
