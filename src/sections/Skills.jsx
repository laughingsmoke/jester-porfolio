const stack = [
  {
    title: "Frontend",
    description:
      "Responsive, user-focused interfaces with clean, maintainable code.",
    tools: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description:
      "Application logic, APIs, authentication, and server-side systems.",
    tools: ["PHP", "Node.js", "REST APIs", "SMS Integration"],
  },
  {
    title: "Database",
    description:
      "Structured schemas that store, manage, and retrieve data efficiently.",
    tools: ["MySQL", "SQL", "Cloud SQL", "Database Design"],
  },
  {
    title: "Tools & Deployment",
    description: "Modern workflows to build, test, deploy, and maintain apps.",
    tools: ["Git", "GitHub", "VS Code", "Google Cloud", "Vercel"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">03 / Technical stack</span>
            <h2>
              Tools of <span className="text-fade">the trade.</span>
            </h2>
          </div>
          <p>
            I work across the full web development process, from interface to
            database to deployment.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group, index) => (
            <article className="stack-card card reveal" key={group.title}>
              <div className="stack-top mono">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{group.title}</span>
              </div>
              <p>{group.description}</p>
              <ul className="chips">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
