"use client";
import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/imgs/profile.jpg";
import diplomado from "./assets/imgs/diplomado.png";
import certificado from "./assets/imgs/PHP_certificate.jpg";
import appMobile from "./assets/imgs/app.png";
import Proyector from "./assets/imgs/proyector.png";
import mern from "./assets/imgs/mern.jpg";
import script from "./assets/imgs/nmp.png";
import {
  FaReact,
  FaMobileAlt,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaPhp,
  FaCode,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaDocker,
} from "react-icons/fa";

export default function App() {
  // Lightbox / modal para certificados
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && lightbox.open)
        setLightbox({ open: false, src: "", alt: "" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  // helpers para abrir/cerrar lightbox
  function openLightbox(src, alt) {
    setLightbox({ open: true, src, alt });
  }
  
  function closeLightbox() {
    setLightbox({ open: false, src: "", alt: "" });
  }

  // Fecha actual para el recibo
  const today = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="app-root">
      <div className="receipt-paper">
        
        {/* HEADER DEL RECIBO */}
        <header className="receipt-header">
          <h1>BRANDO FELIPE</h1>
          <p className="role">FULL STACK DEV</p>
          
          <div className="meta-info">
            <span>ORDEN #: 0001-DEV-2026</span>
            <span>FECHA: {today}</span>
            <span>UBICACIÓN: CALI, VALLE</span>
          </div>
        </header>

        {/* SECCIÓN DE PERFIL / INTRO (Con Foto) */}
        <section className="about-section">
          <div className="about-photo">
            <img src={profile} alt="Foto de perfil" />
          </div>
          <div className="about-text-content">
            <div className="section-title">RESUMEN PROFESIONAL</div>
            <p style={{ lineHeight: "1.8", marginBottom: "15px", fontSize: "1rem" }}>
              Ingeniero de Software y Desarrollador Full Stack con una sólida trayectoria en la construcción de ecosistemas digitales escalables. Mi enfoque combina la arquitectura robusta del backend (Python, PHP, Node.js) con interfaces de usuario intuitivas y de alto rendimiento (React, React Native).
            </p>
            <p style={{ lineHeight: "1.8", fontSize: "1rem" }}>
              Especializado en transformar requerimientos complejos en soluciones tecnológicas eficientes. Experiencia comprobada en la optimización de bases de datos críticas, integración de APIs y desarrollo de aplicaciones móviles multiplataforma. Pasión por el código limpio, la arquitectura sostenible y la mejora continua de la experiencia de usuario.
            </p>
          </div>
        </section>

        {/* CUERPO DEL RECIBO: GRID (2 COLUMNAS) */}
        <div className="receipt-body-grid">
          
          {/* COLUMNA IZQUIERDA: SKILLS Y CERTIFICADOS */}
          <div className="left-col">
            <section className="receipt-section">
              <div className="section-title">STACK TECNOLÓGICO</div>
              {[
                { name: "REACT / NEXT.JS", price: "SR" },
                { name: "NODE.JS / EXPRESS", price: "MID" },
                { name: "PYTHON / DJANGO", price: "MID" },
                { name: "POSTGRESQL / SQL", price: "ADV" },
                { name: "PHP / LARAVEL", price: "ADV" },
                { name: "REACT NATIVE", price: "MID" },
                { name: "DOCKER / LINUX", price: "BAS" },
              ].map((item, idx) => (
                <div className="line-item" key={idx}>
                  <span className="item-name">{item.name}</span>
                  <span className="dots"></span>
                  <span className="item-price">{item.price}</span>
                </div>
              ))}
            </section>

            <div className="divider"></div>

            <section className="receipt-section">
              <div className="section-title">CERTIFICACIONES</div>
              <div className="line-item" onClick={() => openLightbox(diplomado, "Diplomado")} style={{cursor: 'pointer'}}>
                <span className="item-name">DIPLOMADO WEB</span>
                <span className="dots"></span>
                <span className="item-price">[VER]</span>
              </div>
              <div className="line-item" onClick={() => openLightbox(certificado, "Certificado PHP")} style={{cursor: 'pointer'}}>
                <span className="item-name">CERTIFICADO PHP</span>
                <span className="dots"></span>
                <span className="item-price">[VER]</span>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: EXPERIENCIA (Detallada) */}
          <div className="right-col">
            <section className="receipt-section">
              <div className="section-title">HISTORIAL LABORAL</div>

              <div className="line-item">
                <span className="item-name">I2B TECH</span>
                <span className="dots"></span>
                <span className="item-price">ACTUAL</span>
              </div>
              <p style={{ fontSize: "0.95rem", margin: "0 0 20px 0", lineHeight: "1.7", color: "#4e342e", textAlign: "justify" }}>
                Desarrollador Full Stack (Híbrido).
                <br/>
                Desarrollo de software moderno utilizando <strong>React</strong>. Implementación de soluciones escalables y mantenimiento de arquitecturas de software.
              </p>

              <div className="line-item">
                <span className="item-name">CLÍNICA COLOMBIA</span>
                <span className="dots"></span>
                <span className="item-price">2024-25</span>
              </div>
              <p style={{ fontSize: "0.95rem", margin: "0 0 20px 0", lineHeight: "1.7", color: "#4e342e", textAlign: "justify" }}>
                Analista de aplicaciones de TI.
                <br/>
                Gestión y análisis de aplicativos web críticos para el sector salud. Soporte y optimización de sistemas internos.
              </p>

              <div className="line-item">
                <span className="item-name">FREELANCER.COM</span>
                <span className="dots"></span>
                <span className="item-price">2023-24</span>
              </div>
              <p style={{ fontSize: "0.95rem", margin: "0 0 20px 0", lineHeight: "1.7", color: "#4e342e", textAlign: "justify" }}>
                Desarrollador de software (Remoto).
                <br/>
                Ejecución de proyectos internacionales con énfasis en <strong>React.js</strong>. Gestión de control de versiones y colaboración distribuida mediante <strong>GitHub</strong>.
              </p>

              <div className="line-item">
                <span className="item-name">SU SOFTWARE</span>
                <span className="dots"></span>
                <span className="item-price">2020-24</span>
              </div>
              <p style={{ fontSize: "0.95rem", margin: "0 0 10px 0", lineHeight: "1.7", color: "#4e342e", textAlign: "justify" }}>
                Desarrollador (Presencial).
                <br/>
                Especialización en diseño de interfaces de usuario (UI). Manejo de repositorios con Apache Subversion y desarrollo de módulos a medida.
              </p>
            </section>
          </div>

        </div>

        {/* SECCIÓN PROYECTOS (ANCHO COMPLETO ABAJO) */}
        <div className="divider"></div>
        
        <section className="receipt-section">
          <div className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '25px' }}>
            PROYECTOS DESTACADOS (CUPONES)
          </div>
          
          <div className="projects-grid">
            <div className="coupon" onClick={() => openLightbox(appMobile, "App Móvil")}>
              <img src={appMobile} alt="App" className="coupon-img" />
              <div className="coupon-details">
                <h4>APP MÓVIL</h4>
                <p>React Native · iOS/Android</p>
              </div>
              <FaGithub />
            </div>

            <div className="coupon" onClick={() => openLightbox(Proyector, "Proyector TV")}>
              <img src={Proyector} alt="TV" className="coupon-img" />
              <div className="coupon-details">
                <h4>APP CLÍNICA TV</h4>
                <p>Gestión turnos · Sockets</p>
              </div>
              <FaGithub />
            </div>

            <div className="coupon" onClick={() => openLightbox(mern, "API Validator")}>
              <img src={mern} alt="API" className="coupon-img" />
              <div className="coupon-details">
                <h4>API VALIDATOR</h4>
                <p>Node.js · Express</p>
              </div>
              <FaGithub />
            </div>
          </div>
        </section>

        {/* FOOTER TOTAL */}
        <footer className="receipt-footer">
          <div className="total-line">
            <span>TOTAL EXP:</span>
            <span>+5 AÑOS</span>
          </div>

          <div className="barcode">
            || | ||| | || ||| || || |||
          </div>
          
          <div className="thank-you">
            ¡GRACIAS POR SU VISITA!
          </div>
          
          <div className="social-links">
            <a href="mailto:brandoncortes81@gmail.com"><FaRegEnvelope /></a>
            <a href="https://github.com/Felo-Dev"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/brando-cortes-b46351258/"><FaLinkedin /></a>
          </div>

          <button className="btn-print" onClick={() => window.print()}>
            IMPRIMIR COPIA
          </button>
        </footer>
      </div>

      {/* Lightbox modal (click en overlay cierra) */}
      {lightbox.open && (
        <div
          className="lightbox"
          onClick={closeLightbox}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
            >
              ×
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="lightbox-caption">{lightbox.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}
