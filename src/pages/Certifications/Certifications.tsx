import "./Certifications.css";

export default function Certifications() {
  return (
    <div className="page certifications">
      <div className="certifications-header">
        <h1>Certifications & Learning</h1>
        <p>
          Professional certifications and continuous learning in
          Microsoft 365, SharePoint, and Power Platform.
        </p>
      </div>

      <div className="certifications-grid">
        <CertificationCard
          title="Microsoft Learn – SharePoint Framework"
          provider="Microsoft Learn"
          status="Completed"
          description="Modern SharePoint Framework development using React, extensions, and enterprise customization."
        />

        <CertificationCard
          title="Power Platform Fundamentals"
          provider="Microsoft"
          status="Completed"
          description="Core concepts of Power Apps, Power Automate, data connectors, and business process automation."
        />

        <CertificationCard
          title="Copilot Studio (Custom Copilot)"
          provider="Microsoft"
          status="In Progress"
          description="Designing and customizing Copilot experiences integrated with Microsoft 365 and business data."
        />
      </div>
    </div>
  );
}

/* ----------------------------------
   Reusable Certification Card
----------------------------------- */
function CertificationCard({
  title,
  provider,
  status,
  description,
}: {
  title: string;
  provider: string;
  status: "Completed" | "In Progress";
  description: string;
}) {
  return (
    <div className="certification-card">
      <div className="cert-header">
        <span className="cert-provider">{provider}</span>
        <span
          className={`cert-status ${
            status === "Completed" ? "completed" : "in-progress"
          }`}
        >
          {status}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}