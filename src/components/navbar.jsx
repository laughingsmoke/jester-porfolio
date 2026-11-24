import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function readSavedTheme() {
  try {
    return localStorage.getItem("theme") === "light";
  } catch {
    return false;
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(readSavedTheme);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
    try {
      localStorage.setItem("theme", lightMode ? "light" : "dark");
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  }, [lightMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-pill">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-dot" aria-hidden="true"></span>
          JESTER<span className="logo-muted">.DEV</span>
        </a>

        <span className="nav-divider" aria-hidden="true"></span>

        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setLightMode((current) => !current)}
          aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
        >
          {lightMode ? "☾" : "☀"}
        </button>

        <a href="#contact" className="nav-contact">
          Hire me
        </a>

        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="mobile-menu-cta">
          Hire me →
        </a>
      </nav>
    </header>
  );
}
