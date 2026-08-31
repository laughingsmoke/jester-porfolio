import { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}

export default App;
