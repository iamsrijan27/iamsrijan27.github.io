import "./About.css";

export default function About() {
  return (
    <div className="page about">
      {/* Header */}
      <div className="about-header">
        <h1>About Me</h1>
        <p>
          SharePoint & Microsoft 365 developer with strong experience in
          building modern, scalable, and business‑focused enterprise solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Left: Professional Story */}
        <div className="about-story">
          <h3>Professional Summary</h3>
          <p>
            I am a SharePoint developer with <strong>4.10+ years of experience</strong> working
            across global organizations including <strong>Cognizant</strong> and <strong>Genpact</strong>,
            delivering enterprise‑grade Microsoft 365 solutions.
          </p>

          <p>
            My expertise lies in <strong>SPFx with React</strong>, Power Automate, Power Apps,
            and modern SharePoint Online development. I have built complex
            approval workflows, dashboards, custom components, and business
            applications aligned with enterprise standards.
          </p>

          <p>
            Currently, I am working on the <strong>Pfizer</strong> project at Genpact,
            contributing to scalable portals, Power Platform automation,
            custom Copilot solutions, and performance‑optimized UI experiences.
          </p>
        </div>

        {/* Right: Highlights */}
        <div className="about-highlights">
          <div className="about-card">
            <span className="about-label">Total Experience</span>
            <span className="about-value">4.10+ Years</span>
          </div>

          <div className="about-card">
            <span className="about-label">Current Role</span>
            <span className="about-value">
              Business Analyst<br />SharePoint Developer
            </span>
          </div>

          <div className="about-card">
            <span className="about-label">Current Organization</span>
            <span className="about-value">Genpact (Pfizer)</span>
          </div>

          <div className="about-card">
            <span className="about-label">Core Expertise</span>
            <span className="about-value">SPFx · React · Power Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}