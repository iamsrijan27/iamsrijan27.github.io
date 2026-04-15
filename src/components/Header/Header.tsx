import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="logo">Srijan</div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
        <NavLink to="/appearances">Appearances</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Hamburger Icon */}
      <button
        className="hamburger"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/certifications" onClick={closeMenu}>Certifications</NavLink>
          <NavLink to="/appearances" onClick={closeMenu}>Appearances</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}