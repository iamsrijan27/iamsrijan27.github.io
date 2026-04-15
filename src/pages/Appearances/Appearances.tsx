import "./Appearances.css";

export default function Appearances() {
  return (
    <div className="page appearances">
      {/* Header */}
      <div className="appearances-header">
        <h1>Appearances & Knowledge Sharing</h1>
        <p>
          Knowledge sharing sessions, internal demos, and presentations
          delivered within enterprise teams and projects.
        </p>
      </div>

      {/* Appearances Grid */}
      <div className="appearances-grid">
        <AppearanceCard
          title="SPFx & React Knowledge Session"
          type="Internal Knowledge Sharing"
          description="Conducted internal sessions to explain SPFx architecture, React patterns,
          and best practices for building scalable SharePoint solutions."
        />

        <AppearanceCard
          title="Power Automate Approval Flow Demo"
          type="Project Demo"
          description="Demonstrated multi‑level approval workflows using Power Automate and
          Adaptive Cards for business and functional stakeholders."
        />

        <AppearanceCard
          title="SharePoint Portal Walkthrough – Pfizer"
          type="Client Presentation"
          description="Presented custom SharePoint portals, dashboards, and Power Apps solutions
          to client stakeholders highlighting business value and usability."
        />

        <AppearanceCard
          title="Reusable SPFx Components Overview"
          type="Technical Presentation"
          description="Shared approaches for building reusable SPFx components, extensions,
          and performance‑optimized UI patterns."
        />
      </div>
    </div>
  );
}

/* ----------------------------------
   Reusable Appearance Card
----------------------------------- */
function AppearanceCard({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <div className="appearance-card">
      <span className="appearance-type">{type}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}