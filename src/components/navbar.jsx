import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode((current) => {
      const nextMode = !current;

      if (nextMode) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }

      return nextMode;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        JG<span>.</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Expertise</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="theme-icon">{lightMode ? "☾" : "☀"}</span>
        </button>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Expertise
        </a>
        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}
