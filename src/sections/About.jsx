function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-label">01 — ABOUT</div>

        <div className="about-grid">
          <div className="about-heading">
            <h2>
              Building with <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-intro">
              I'm Jester, a web developer focused on building practical digital
              experiences that solve real-world problems.
            </p>

            <p>
              I enjoy working across the development process—from designing
              interfaces and structuring databases to developing responsive web
              applications and connecting systems together.
            </p>

            <p>
              My main focus is creating applications that are not only visually
              clean, but also reliable, maintainable, and useful to the people
              who depend on them.
            </p>

            <div className="about-details">
              <div>
                <span>Based in</span>
                <strong>Philippines</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Web Development</strong>
              </div>

              <div>
                <span>Currently</span>
                <strong>Building & Learning</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
