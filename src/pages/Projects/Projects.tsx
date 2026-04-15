import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="page projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Selected enterprise projects delivered using SPFx, React,
          and the Microsoft 365 ecosystem.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Enterprise SharePoint Portal"
          client="Pfizer (via Genpact)"
          description="Modern SharePoint portals built with SPFx and React to support enterprise workflows and collaboration."
          tech={[
            "SPFx",
            "React",
            "Power Automate",
            "Power Apps",
            "Adaptive Cards",
          ]}
          details={[
            "Developed multi-level approval forms with Power Automate",
            "Built dashboards, calendar components, and world map views",
            "Created notification and adaptive card based approval flows",
            "Implemented custom header, footer, and homepage components",
          ]}
        />

        <ProjectCard
          title="US Contact Database Redesign"
          client="McDonald’s (via Cognizant)"
          description="Redesigned a business-critical SharePoint application with modern UI and advanced data capabilities."
          tech={[
            "SPFx",
            "React",
            "PnP JS",
            "Fluent UI",
            "SharePoint Online",
          ]}
          details={[
            "Redesigned dashboards with advanced search and filtering",
            "Implemented admin-secured modules and role-based access",
            "Built application customizers for header, footer, and branding",
            "Migrated enterprise data using Power Automate and Sharegate",
          ]}
        />
      </div>
    </div>
  );
}

/* ----------------------------------
   Reusable Project Card Component
----------------------------------- */
function ProjectCard({
  title,
  client,
  description,
  tech,
  details,
}: {
  title: string;
  client: string;
  description: string;
  tech: string[];
  details: string[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <span className="project-client">{client}</span>
      </div>

      <p className="project-description">{description}</p>

      <div className="tech-stack">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <button
        className="toggle-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide details" : "View details"}
      </button>

      {expanded && (
        <ul className="project-details">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}