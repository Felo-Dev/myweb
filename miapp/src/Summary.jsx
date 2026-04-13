import React, { useState, useEffect } from 'react';
import Colorize from './Colorize';
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
      role: "DESARROLLADOR COMPLETO",
      title: "CURRÍCULUM PROFESIONAL",
      text: "Ingeniero de Software y Desarrollador Full Stack con una sólida trayectoria en la construcción de ecosistemas digitales escalables. Mi enfoque combina la arquitectura robusta del backend (Python, PHP, Node.js) con interfaces de usuario intuitivas y de alto rendimiento (React, React Native)."
    },
    en: { 
      name: "BRANDO FELIPE (Felo-Dev)",
      role: "FULL STACK DEVELOPER",
      title: "PROFESSIONAL SUMMARY",
      text: "Software Engineer and Full Stack Developer with a solid track record in building scalable digital ecosystems. My approach combines robust backend architecture (Python, PHP, Node.js) with intuitive, high-performance user interfaces (React, React Native)."
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
          <div className="summary-status-bar" style={{display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap'}}>
            <div style={{opacity: 0.9, fontWeight: 700, fontSize: '0.9rem'}}>{content.role}</div>
            <div style={{fontFamily: 'monospace', fontSize: '0.9rem', opacity: 0.95}}>
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
      <p style={{lineHeight: '1.7', fontSize: '1.15rem', maxWidth: '750px', opacity: 0.85, margin: '1rem 0'}}>{content.text}</p>
      
      {/* Botón posicionado al final de la sección con icono y texto dinámico */}
      <div style={{ marginTop: '2rem' }}>
        <button className="print-btn" onClick={() => window.print()}>
          <FontAwesomeIcon icon={faDownload} /> 
          {language === 'es' ? 'Descargar Resumen PDF' : 'Download Resume PDF'}
        </button>
      </div>
    </section>
  );
}