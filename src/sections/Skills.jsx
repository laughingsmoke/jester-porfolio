function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="section-label">03 — EXPERTISE</div>

        <div className="skills-header">
          <div className="skills-heading">
            <h2>
              What I
              <br />
              <span>do.</span>
            </h2>
          </div>

          <div className="skills-intro">
            <p>
              I work across the full web development process, from designing
              interfaces and building applications to structuring databases and
              connecting systems together.
            </p>
          </div>
        </div>

        <div className="skills-list">
          <div className="skill-card">
            <div className="skill-number">01</div>

            <div className="skill-main">
              <h3>Frontend Development</h3>

              <p>
                Creating responsive, modern, and user-focused interfaces with
                clean and maintainable code.
              </p>

              <div className="skill-technologies">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>

            <div className="skill-main">
              <h3>Backend Development</h3>

              <p>
                Building application logic, APIs, authentication, and
                server-side systems that support reliable web applications.
              </p>

              <div className="skill-technologies">
                <span>PHP</span>
                <span>REST APIs</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>

            <div className="skill-main">
              <h3>Database & Systems</h3>

              <p>
                Designing structured databases and connecting application
                systems to store, manage, and retrieve information efficiently.
              </p>

              <div className="skill-technologies">
                <span>MySQL</span>
                <span>SQL</span>
                <span>Cloud SQL</span>
                <span>Database Design</span>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>

            <div className="skill-main">
              <h3>Tools & Workflow</h3>

              <p>
                Using modern development tools and workflows to build, test,
                deploy, and maintain web applications.
              </p>

              <div className="skill-technologies">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
