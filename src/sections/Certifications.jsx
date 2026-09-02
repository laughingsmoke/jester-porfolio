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
    <section className="certifications" id="certifications">
      {" "}
      <div className="section-container">
        {" "}
        <div className="section-label">06 — CERTIFICATIONS</div>{" "}
        <div className="certifications-header">
          {" "}
          <div className="certifications-heading">
            {" "}
            <h2>
              {" "}
              Learning <br /> <span>&amp; Growth.</span>{" "}
            </h2>{" "}
          </div>{" "}
          <div className="certifications-intro">
            {" "}
            <p>
              {" "}
              Certifications and training achievements that reflect my
              continuous learning and growing knowledge in information
              technology, cybersecurity, enterprise systems, and modern software
              development.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="certifications-list">
          {" "}
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.number}>
              {" "}
              <div className="certification-number">
                {" "}
                {certification.number}{" "}
              </div>{" "}
              <div className="certification-content">
                {" "}
                <div className="certification-top">
                  {" "}
                  <span className="certification-category">
                    {" "}
                    {certification.category}{" "}
                  </span>{" "}
                  <span className="certification-date">
                    {" "}
                    {certification.date}{" "}
                  </span>{" "}
                </div>{" "}
                <h3>{certification.title}</h3>{" "}
                <p className="certification-issuer">
                  {" "}
                  Issued by <strong>{certification.issuer}</strong>{" "}
                </p>{" "}
                <p className="certification-description">
                  {" "}
                  {certification.description}{" "}
                </p>{" "}
                <div className="certification-bottom">
                  {" "}
                  <div className="certification-skills">
                    {" "}
                    {certification.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}{" "}
                  </div>{" "}
                  <a
                    href={certification.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    {" "}
                    View Certificate <span>↗</span>{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
        <div className="certifications-footer">
          {" "}
          <span>CONTINUOUS LEARNING</span>{" "}
          <p>More certifications will be added as I continue to grow.</p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
