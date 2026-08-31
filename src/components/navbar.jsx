import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Jester<span>.</span>
      </a>

      {/* DESKTOP NAV */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Expertise</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-actions">
        {/* THEME TOGGLE */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="theme-icon">{darkMode ? "☀" : "☾"}</span>
        </button>

        {/* DESKTOP CONTACT */}
        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
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

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
