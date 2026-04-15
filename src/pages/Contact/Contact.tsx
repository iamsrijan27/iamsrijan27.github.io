import { JSX, useState } from "react";
import "./Contact.css";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M2 5h20v14H2z" />
      <path d="M2 5l10 7 10-7" fill="none" stroke="currentColor" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 3l7.4 8.8L3.5 21h3.3l5.8-6.4L18 21h4l-8-9.6L21 3h-3.4l-5.2 5.8L8 3H4z"/>
    </svg>
  );
}

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

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}

type ContactKey = "email" | "phone" | "github" | "linkedin" | "twitter" | null;

export default function Contact() {
  const [active, setActive] = useState<ContactKey>(null);

  const toggle = (key: ContactKey) => {
    setActive(active === key ? null : key);
  };

  return (
    <div className="page contact">
      <h1>Contact</h1>
      <p className="contact-subtitle">
        Let’s connect — click any card to view details
      </p>

      <div className="contact-grid">
        {/* Email */}
        <ContactCard
          label="Email"
          value="srijanjha1999@gmail.com"
          icon={<EmailIcon />}
          isActive={active === "email"}
          onClick={() => toggle("email")}
          href="mailto:srijanjha1999@gmail.com"
        />

        {/* Mobile */}
        <ContactCard
          label="Mobile"
          value="+91 9199372967"
          icon={<MobileIcon />}
          isActive={active === "phone"}
          onClick={() => toggle("phone")}
          href="tel:+919199372967"
        />

        {/* GitHub */}
        <ContactCard
          label="GitHub"
          value="github.com/iamsrijan27"
          icon={<GitHubIcon />}
          isActive={active === "github"}
          onClick={() => toggle("github")}
          href="https://github.com/iamsrijan27"
        />

        {/* LinkedIn */}
        <ContactCard
          label="LinkedIn"
          value="linkedin.com/in/srijanjha"
          icon={<LinkedInIcon />}
          isActive={active === "linkedin"}
          onClick={() => toggle("linkedin")}
          href="https://www.linkedin.com/in/srijankumarjha/"
        />

        {/* X / Twitter */}
        <ContactCard
          label="X (Twitter)"
          value="twitter.com"
          icon={<TwitterXIcon />}
          isActive={active === "twitter"}
          onClick={() => toggle("twitter")}
          href="https://x.com/iamSrijan_"
        />
      </div>
    </div>
  );
}

/* ----------------------------------
   Reusable Contact Card
----------------------------------- */
function ContactCard({
  label,
  value,
  icon,
  isActive,
  onClick,
  href,
}: {
  label: string;
  value: string;
  icon: JSX.Element;
  isActive: boolean;
  onClick: () => void;
  href: string;
}) {
  return (
    <div
      className={`contact-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      <span className="label">{label}</span>

      {isActive && (
        <a
          className="value"
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      )}
    </div>
  );
}
