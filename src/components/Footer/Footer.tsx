import "./Footer.css";
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm1 18H3V9h2v12zM9 9h2v2h.1c.3-.6 1.2-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2V21h-2v-6.3c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9V9z"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .5-1.2-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9 9 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10.3 10.3 0 0022 12.3C22 6.6 17.5 2 12 2z"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4l8 5 8-5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left */}
        <span className="footer-text">
          © {new Date().getFullYear()} Srijan Kumar Jha · SharePoint & SPFx Developer
        </span>

        {/* Right */}
        <div className="footer-icons">
          <a
            href="mailto:srijanjha1999@gmail.com"
            aria-label="Email"
          >
            <EmailIcon />
          </a>

          <a
            href="https://github.com/iamsrijan27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/srijankumarjha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
