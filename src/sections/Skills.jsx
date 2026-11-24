const stack = [
  {
    title: "Frontend",
    description:
      "Responsive, user-focused interfaces with clean, maintainable code.",
    tools: ["React", "Vite", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    description:
      "Application logic, REST APIs, and SMS and email integrations.",
    tools: ["PHP", "Node.js", "Express", "REST APIs", "TextBee SMS", "Brevo"],
  },
  {
    title: "Database",
    description:
      "Structured schemas that store, manage, and retrieve data efficiently.",
    tools: ["MySQL", "PostgreSQL", "Supabase", "MongoDB", "Database Design"],
  },
  {
    title: "Cloud & Tools",
    description: "Workflows and hosting to build, deploy, and maintain apps.",
    tools: ["Git", "GitHub", "Vercel", "Huawei Cloud", "Namecheap"],
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
