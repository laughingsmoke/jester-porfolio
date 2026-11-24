import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import NeuralBackground from "./components/NeuralBackground";
import { profile } from "./data/profile";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

// Fades elements marked with .reveal in as they scroll into view.
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useReveal();

  return (
    <div className="app">
      <NeuralBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp;
          Vite.
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
