import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import GradientText from './GradientText';

export default function Navbar({ isDarkMode, toggleDarkMode, language, toggleLanguage }) {
  const t = {
    es: { exp: "Experiencia", stack: "Stack", proj: "Proyectos", cert: "Certificaciones", res: "Resumen" },
    en: { exp: "Experience", stack: "Stack", proj: "Projects", cert: "Certifications", res: "Summary" }
  }[language];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="hero-title"><GradientText text={"Felo-Dev"} /></h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#summary" className="nav-link">{t.res}</a></li>
        <li className="nav-item"><a href="#experience" className="nav-link">{t.exp}</a></li>
        <li className="nav-item"><a href="#stack" className="nav-link">{t.stack}</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">{t.proj}</a></li>
        <li className="nav-item"><a href="#certs" className="nav-link">{t.cert}</a></li>
      </ul>

      <div className="navbar-actions">
        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle Language"
        >
          <span className="lang-flag" aria-hidden>
            {language === 'es' ? '🇬🇧' : '🇪🇸'}
          </span>
          <span className="lang-text">{language === 'es' ? 'EN' : 'ES'}</span>
        </button>

        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Cambiar modo de color"
        >
          {isDarkMode ? (
            <FiMoon className="theme-icon" size={20} />
          ) : (
            <FiSun className="theme-icon" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}