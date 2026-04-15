import "./Home.css";

export default function Home() {
  return (
    <div className="page home">
      <div className="home-hero-card">
        {/* Text Section */}
        <div className="hero-content">
          <p className="hero-eyebrow">👋 Hello, I’m</p>

          <h1>Srijan Kumar Jha</h1>

          <h2>
            SharePoint & SPFx Developer · React · Power Platform · Microsoft 365
          </h2>

          <p className="hero-description">
            SharePoint developer with <strong>4.10+ years of experience</strong>{" "}
            delivering enterprise‑grade solutions using SPFx with React,
            Power Automate, Power Apps, and Copilot Studio for global clients.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <a href="/resume.pdf" className="btn-primary" download>
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/srijankumarjha/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="hero-highlights">
          <div className="highlight-card">
            <span className="highlight-title">Experience</span>
            <span className="highlight-value">  4.10+ Years</span>
          </div>

          <div className="highlight-card">
            <span className="highlight-title">Current Company</span>
            <span className="highlight-value">  Genpact (Pfizer)</span>
          </div>

          <div className="highlight-card">
            <span className="highlight-title">Core Expertise</span>
            <span className="highlight-value">  SPFx · React</span>
          </div>
        </div>
      </div>
    </div>
  );
}
