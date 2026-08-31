import jesterPhoto from "../assets/jester.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-label">WEB DEVELOPER</div>

        <h1>
          Hello, I'm <br />
          <span>Jester.</span>
        </h1>

        <p className="hero-description">
          I build digital experiences that are fast, functional, and
          thoughtfully designed. Turning ideas into clean, modern, and
          meaningful web applications.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View Projects <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Let's Talk <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="hero-photo-frame">
          <img src={jesterPhoto} alt="Jester Glory" />
        </div>

        <div className="hero-photo-label">
          <span>JESTER GLORY</span>
          <span>WEB DEVELOPER</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
