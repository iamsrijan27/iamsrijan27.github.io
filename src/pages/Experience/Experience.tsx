import "./Experience.css";

export default function Experience() {
  return (
    <div className="page experience">
      <div className="experience-header">
        <h1>Professional Experience</h1>
        <p>
          My career journey delivering enterprise-grade SharePoint and
          Microsoft 365 solutions for global organizations.
        </p>
      </div>

      <div className="timeline">
        {/* Genpact */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-card">
            <h3>Business Analyst | SharePoint Developer</h3>
            <span className="company">Genpact — Pfizer</span>
            <span className="duration">May 2023 – Present</span>

            <ul>
              <li>
                Developed modern SharePoint Online portals using SPFx with
                React JS.
              </li>
              <li>
                Built multi-level approval forms using Power Automate and
                Adaptive Cards.
              </li>
              <li>
                Designed dashboards, calendar components, world map visuals,
                and signature pad components.
              </li>
              <li>
                Created Power Apps for forms and dashboards using gallery
                and data table controls.
              </li>
              <li>
                Implemented custom header, footer, homepage, carousel banner,
                newsletter, and document libraries.
              </li>
              <li>
                Worked on custom Copilot solutions using Copilot Studio.
              </li>
            </ul>
          </div>
        </div>

        {/* Cognizant */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-card">
            <h3>Associate | SharePoint Developer</h3>
            <span className="company">Cognizant — McDonald’s (US)</span>
            <span className="duration">March 2021 – May 2023</span>

            <ul>
              <li>
                Developed SPFx WebParts and Extensions using React, Fluent UI,
                and PnP JS.
              </li>
              <li>
                Built dynamic request forms with conditional rendering
                and approval workflows.
              </li>
              <li>
                Redesigned US Contact Database with dashboards, filters,
                advanced search, and export features.
              </li>
              <li>
                Created Application Customizers for global header and footer.
              </li>
              <li>
                Handled content and data migration using Power Automate
                and Sharegate.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
