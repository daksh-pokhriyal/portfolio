
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "About", to: "/about" }
];

function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          className="brand"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          DAKSH<span>Pokhriyal</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">


          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={darkMode}
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? "☀" : "☾"}
          </button>


          <Link
            className="nav-cta"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
