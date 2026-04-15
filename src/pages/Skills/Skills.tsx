import "./Skills.css";

export default function Skills() {
  return (
    <div className="page skills">
      <div className="skills-header">
        <h1>Skills & Expertise</h1>
        <p>
          Technologies and platforms I use to build scalable,
          enterprise‑grade Microsoft 365 solutions.
        </p>
      </div>

      <div className="skills-grid">
        {/* SharePoint */}
        <div className="skill-card">
          <h3>SharePoint & Microsoft 365</h3>

          <SkillItem label="SharePoint Online" level="95%" />
          <SkillItem label="SPFx (React)" level="90%" />
          <SkillItem label="PnP JS" level="85%" />
          <SkillItem label="Application Customizers" level="85%" />
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend Development</h3>

          <SkillItem label="React JS" level="90%" />
          <SkillItem label="TypeScript" level="85%" />
          <SkillItem label="JavaScript (ES6+)" level="90%" />
          <SkillItem label="HTML5 / CSS3" level="85%" />
        </div>

        {/* Power Platform */}
        <div className="skill-card">
          <h3>Power Platform & AI</h3>

          <SkillItem label="Power Automate" level="90%" />
          <SkillItem label="Power Apps" level="85%" />
          <SkillItem label="Adaptive Cards" level="80%" />
          <SkillItem label="Copilot Studio" level="75%" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------
   Reusable Skill Item Component
-------------------------------- */
function SkillItem({
  label,
  level,
}: {
  label: string;
  level: string;
}) {
  return (
    <div className="skill-item">
      <div className="skill-label">
        <span>{label}</span>
        <span className="skill-percent">{level}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: level }} />
      </div>
    </div>
  );
}
