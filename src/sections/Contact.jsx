function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-label">04 — CONTACT</div>

        <div className="contact-content">
          <div className="contact-heading">
            <h2>
              Let's build
              <br />
              <span>something.</span>
            </h2>
          </div>

          <div className="contact-info">
            <p>
              Have a project, idea, or opportunity in mind? I'm always open to
              discussing new ideas, collaborations, and meaningful projects.
            </p>

            <div className="contact-methods">
              <a
                href="mailto:jesterglory15@gmail.com"
                className="contact-email"
              >
                jesterglory15@gmail.com
                <span>↗</span>
              </a>

              <a href="tel:+639996716744" className="contact-phone">
                +63 999 671 6744
                <span>↗</span>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/laughingsmoke"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jester-glory-6055b8380/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href="https://www.facebook.com/jester.pabas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
