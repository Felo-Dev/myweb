import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Experience from "./Experience.jsx";
import Stack from "./Stack.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import Summary from "./Summary.jsx";
import Weather from "./Weather.jsx";

export default function App() {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "es");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Detectar preferencia del sistema
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Escuchar cambios en la preferencia del sistema
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Guardar preferencia en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar 
        isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} 
        language={language} toggleLanguage={toggleLanguage} 
      />
      
      <main className="content-card">
        <div className="main-content">
          <Summary language={language} />
          <div id="weather" className="section-card">
            <Weather language={language} />
          </div>
          <Experience language={language} />
          <Stack language={language} />
          <Projects language={language} />
          <Certifications language={language} />
        </div>
      </main>
    </div>
  );
}
