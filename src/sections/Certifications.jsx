import introductionCybersecurity from "../assets/introduction-to-cybersecurity.pdf";
import cyberThreatManagement from "../assets/cyber-threat-management.pdf";
import sapS4Hana from "../assets/SAPS4HAHA_Glory.pdf";
import schoolCertificates from "../assets/certs.pdf";
export default function Certifications() {
  const certifications = [
    {
      number: "01",
      category: "CYBERSECURITY",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
      description:
        "An introductory cybersecurity certification covering fundamental cybersecurity concepts, common cyber threats, online safety, and the importance of protecting digital information and systems.",
      skills: [
        "Cybersecurity Fundamentals",
        "Cyber Threats",
        "Network Security",
        "Online Safety",
      ],
      certificate: introductionCybersecurity,
    },
    {
      number: "02",
      category: "CYBERSECURITY",
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "2026",
      description:
        "A cybersecurity certification focused on understanding, identifying, and managing cyber threats through threat analysis, security monitoring, and defensive cybersecurity practices.",
      skills: [
        "Threat Management",
        "Threat Analysis",
        "Security Monitoring",
        "Incident Response",
      ],
      certificate: cyberThreatManagement,
    },
    {
      number: "03",
      category: "SAP / ENTERPRISE SYSTEMS",
      title: "Introduction to S/4HANA using Global Bike",
      issuer: "SAP University Alliances",
      date: "2024",
      description:
        "Certificate of participation for successfully completing the Introduction to S/4HANA using Global Bike course, covering key SAP S/4HANA business process modules from February 2024 to June 2024.",
      skills: [
        "SAP S/4HANA",
        "Sales & Distribution (SD)",
        "Materials Management (MM)",
        "Production Planning (PP)",
        "Financial Accounting (FI)",
        "Controlling (CO)",
      ],
      certificate: sapS4Hana,
    },
    {
      number: "04",
      category: "ACADEMIC / PROFESSIONAL DEVELOPMENT",
      title: "IT & Software Development Training",
      issuer: "STI College Philippines",
      date: "2024",
      description:
        "A collection of school certificates recognizing completed training and participation in System Administration, Java Fundamentals, and the Student Development Program focused on MERN Stack development.",
      skills: [
        "System Administration",
        "Java Fundamentals",
        "MERN Stack",
        "Web Development",
        "Software Development",
      ],
      certificate: schoolCertificates,
    },
  ];
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <span className="eyebrow">04 / Certifications</span>
            <h2>
              Learning <span className="text-fade">log.</span>
            </h2>
          </div>
          <p>
            Certifications and training in software development, cybersecurity,
            and enterprise systems.
          </p>
        </div>

        <ol className="log card reveal">
          <li className="log-header mono" aria-hidden="true">
            <span className="log-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            ~/certifications.log
          </li>

          {certifications.map((certification) => (
            <li className="log-entry" key={certification.number}>
              <div className="log-when mono">
                <span>{certification.date}</span>
                <span>{certification.category}</span>
              </div>

              <div className="log-body">
                <h3>{certification.title}</h3>
                <p className="log-issuer">{certification.issuer}</p>
                <p>{certification.description}</p>

                <ul className="chips">
                  {certification.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <a
                  href={certification.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View certificate ↗
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
