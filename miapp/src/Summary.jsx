import React, { useState, useEffect } from 'react';
import GradientText from './GradientText';
import profileImg from './assets/imgs/profile.jpg'; // Importamos la imagen correctamente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Summary({ language }) {
  const [time, setTime] = useState(new Date());
  const [detectedCity, setDetectedCity] = useState("");

  useEffect(() => {
    let isMounted = true;
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Detectar ubicación por IP (más rápido y menos intrusivo que GPS)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (isMounted && data.city) {
          setDetectedCity(`${data.city.toUpperCase()}, ${data.country_code}`);
        }
      })
      .catch(() => console.log("No se pudo detectar la ubicación"));

    return () => {
      clearInterval(timer);
      isMounted = false;
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(language === 'es' ? 'es-CO' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const content = {
    es: { 
      name: "BRANDO FELIPE (Felo-Dev)",
      role: "DESARROLLADOR FULL STACK",
      title: "RESUMEN PROFESIONAL",
      text: "Ingeniero de Software y Desarrollador Full Stack con experiencia en la construcción de ecosistemas digitales escalables. Combino backend robusto (Python, PHP, Node.js) con interfaces modernas y de alto rendimiento (React, React Native). Manejo de contenedores Docker, CI/CD y despliegues automatizados para entornos de producción."
    },
    en: { 
      name: "BRANDO FELIPE (Felo-Dev)",
      role: "FULL STACK DEVELOPER",
      title: "PROFESSIONAL SUMMARY",
      text: "Software Engineer and Full Stack Developer experienced in building scalable digital ecosystems. I combine robust backend architectures (Python, PHP, Node.js) with modern, high-performance user interfaces (React, React Native). Experienced with Docker containers, CI/CD pipelines, and automated production deployments."
    }
  }[language];

  return (
    <section id="summary" className="section-card">
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={profileImg} 
            alt="Brando Felipe" 
            className="profile-image"
          />
        </div>
        <div style={{flex: 1}}>
          <div className="summary-status-bar">
            <div className="summary-role">{content.role}</div>
            <div className="summary-location">
              <GradientText text={`${detectedCity || (language === 'es' ? 'OBTENIENDO UBICACIÓN...' : 'FETCHING LOCATION...')} • ${formatTime(time)}`} />
            </div>
          </div>
          <h1 className="summary-name">
            BRANDO FELIPE 
            <span className="summary-alias"> (Felo-Dev)</span>
          </h1>
        </div>
      </div>
      <h2 className="section-title"><GradientText text={content.title} /></h2>
      <p className="summary-text">{content.text}</p>
      
      {/* Botón posicionado al final de la sección con icono y texto dinámico */}
      <div style={{ marginTop: '2rem' }}>
        <button className="print-btn" onClick={() => window.print()}>
          <FontAwesomeIcon icon={faDownload} /> 
          {language === 'es' ? 'Descargar CV' : 'Download Resume'}
        </button>
      </div>
    </section>
  );
}