function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-label">02 — SELECTED WORK</div>

        <div className="projects-header">
          <div className="projects-heading">
            <h2>
              Selected
              <br />
              <span>work.</span>
            </h2>
          </div>

          <div className="projects-intro">
            <p>
              A selection of projects focused on solving practical problems
              through thoughtful design, modern web technologies, and reliable
              systems.
            </p>
          </div>
        </div>

        <div className="projects-list">
          <a
            href="https://www.pesdosurigao.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-link"
            aria-label="Visit PESDO live website"
          >
            {/* PROJECT TOP */}
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">WEB APPLICATION</span>
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-content">
              <div className="project-category">PUBLIC EMPLOYMENT SYSTEM</div>

              <h3>PESDO</h3>

              <p>
                A web-based employment platform designed to help jobseekers,
                employers, and PESDO staff manage job opportunities, referrals,
                and employment information in one centralized system.
              </p>
            </div>

            {/* PROJECT BOTTOM */}
            <div className="project-bottom">
              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>SMS</span>
              </div>

              <div className="project-arrow" aria-hidden="true">
                ↗
              </div>
            </div>

            {/* PROJECT VISUAL */}
            <div className="project-visual">
              <div className="browser-window">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-address">pesdosurigao.online</div>

                  <div className="browser-icon">↗</div>
                </div>

                <div className="browser-content">
                  <div className="pesdo-preview">
                    <span className="preview-badge">PESDO — LIVE SYSTEM</span>

                    <h4>
                      Smarter employment.
                      <br />
                      Better opportunities.
                    </h4>

                    <p>
                      Connecting jobseekers and employers through a centralized
                      digital employment platform.
                    </p>

                    <div className="preview-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT META */}
            <div className="project-meta">
              <div>
                <span>Type</span>
                <strong>Web Application</strong>
              </div>

              <div>
                <span>Role</span>
                <strong>Developer</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>Live</strong>
              </div>

              <div>
                <span>Website</span>
                <strong>pesdosurigao.online</strong>
              </div>
            </div>
          </a>
        </div>

        <div className="projects-coming">
          <span>MORE PROJECTS</span>
          <p>More work currently in development.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
