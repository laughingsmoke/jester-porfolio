import pesdoImage from "../assets/pesdo.webp";
import cercanImage from "../assets/cercantech.webp";
import hmeImage from "../assets/health-made-easy.webp";
import craftiqueImage from "../assets/craftique.webp";

const projects = [
  {
    name: "Cercan Tech",
    type: "Company Website",
    category: "IT Solutions · Surigao City",
    description:
      "The corporate website for Cercan Tech Digital Platforms OPC, presenting the company's services, its products, a step-by-step client process, FAQs, and a contact form for businesses and institutions across the Caraga region.",
    tech: ["Responsive Design", "Lead Generation", "Contact Form", "SEO"],
    url: "https://cercantech.com/",
    domain: "cercantech.com",
    image: cercanImage,
    imageSize: [1600, 900],
    role: "Developer",
  },
  {
    name: "Health Made Easy",
    type: "Mobile App + Landing Page",
    category: "Clinic Booking & Queueing",
    description:
      "A clinic booking app where patients book sessions, check in with a QR code, and follow their place in the queue live. I develop it across the full stack at Cercan Tech: UI components, back-end logic, and database structure.",
    tech: ["React", "JavaScript", "Android", "QR Check-in", "Live Queue"],
    url: "https://health-made-easy.com/",
    domain: "health-made-easy.com",
    image: hmeImage,
    imageSize: [1600, 830],
    role: "Full-Stack Developer",
  },
  {
    name: "Craftique",
    type: "Business Website",
    category: "Handmade Flowers & Bouquets",
    description:
      "An online storefront for a handmade pipe-cleaner bouquet business in Alegria, Surigao del Norte, showcasing bouquets by occasion, custom orders, and a simple order-via-Messenger flow.",
    tech: ["React", "Vite", "Vercel", "Responsive Design"],
    url: "https://craftique-alpha.vercel.app/",
    domain: "craftique-alpha.vercel.app",
    image: craftiqueImage,
    imageSize: [1600, 900],
    role: "Developer",
  },
  {
    name: "PESDO",
    type: "Web Application",
    category: "Job Matching Portal · Capstone",
    description:
      "A job matching portal that replaced paper-based processes at the Surigao City Public Employment Service Office, with role-based dashboards, automated job matching, and real-time SMS and email notifications.",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "TextBee SMS", "Brevo"],
    url: "https://www.pesdosurigao.online/",
    domain: "pesdosurigao.online",
    image: pesdoImage,
    imageSize: [1600, 828],
    role: "Developer & Researcher",
  },
];

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");
  const [width, height] = project.imageSize;
  const featured = index === 0;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card card reveal ${featured ? "project-featured" : ""}`}
      aria-label={`${project.name}: visit live site`}
    >
      <div className="project-shot">
        <div className="shot-bar" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <em>{project.domain}</em>
        </div>
        <img
          src={project.image}
          alt={`${project.name} website screenshot`}
          width={width}
          height={height}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      <div className="project-body">
        <div className="project-meta mono">
          <span>{number}</span>
          <span>{project.type}</span>
        </div>

        <h3>{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>

        <ul className="chips" aria-label="Technologies">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-footer">
          <span className="status">
            <span className="status-dot" aria-hidden="true"></span>
            Live · {project.role}
          </span>
          <span className="project-cta">
            Visit site <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">02 / Selected work</span>
            <h2>
              Shipped <span className="text-fade">&amp; live.</span>
            </h2>
          </div>
          <p>
            Real projects in production, solving practical problems for
            government offices, clinics, and local businesses.
          </p>
        </div>

        <div className="bento">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
