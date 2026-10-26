import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaMoon,
  FaProjectDiagram,
  FaSun,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const navItems = [
    { name: "Home", target: "Home", icon: <FaHome /> },
    { name: "About", target: "About", icon: <FaUser /> },
    { name: "Education", target: "Education", icon: <FaGraduationCap /> },
    { name: "Experience", target: "Experience", icon: <FaBriefcase /> },
    { name: "Tech Stack", target: "TechStack", icon: <FaCode /> },
    { name: "Projects", target: "Projects", icon: <FaProjectDiagram /> },
    { name: "GitHub", target: "GitHub", icon: <FaGithub /> },
    { name: "Contact", target: "Contact", icon: <FaEnvelope /> },
  ];

  const renderLinks = (mobile = false) =>
    navItems.map((item) => (
      <li key={item.target}>
        <Link
          href={`#${item.target}`}
          to={item.target}
          spy
          smooth
          duration={280}
          offset={-100}
          activeClass="active-nav-link"
          onClick={() => mobile && setMenuOpen(false)}
          className="nav-link"
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.name}
        </Link>
      </li>
    ));

  const themeToggle = (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDarkMode((current) => !current)}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
      aria-pressed={darkMode}
    >
      <FaSun aria-hidden="true" />
      <span className="theme-toggle-track" aria-hidden="true">
        <span />
      </span>
      <FaMoon aria-hidden="true" />
    </button>
  );

  return (
    <nav className="portfolio-nav sticky top-0">
      <div className="navbar-shell flex justify-between items-center">
        <Link
          href="#Home"
          to="Home"
          spy
          smooth
          duration={280}
          offset={-100}
          activeClass="active-nav-link"
          className="portfolio-brand"
          aria-label="Praveen Kumar — home"
        >
          <span className="brand-copy">
            Praveen Kumar
            <small>PRODUCT ENGINEER</small>
          </span>
        </Link>

        <div className="desktop-nav">
          <ul className="navbar-links">{renderLinks()}</ul>
          {themeToggle}
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <div id="mobile-navigation" className="mobile-nav-panel">
            <ul className="mobile-nav-list">{renderLinks(true)}</ul>
            <div className="mobile-theme-toggle">{themeToggle}</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
