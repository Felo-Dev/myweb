"use client";
import { useEffect, useRef, useState } from "react";
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
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 20;
    const dotSize = 2;
    let dots = [];

    function setup() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.floor(window.innerWidth / gridSize);
      const rows = Math.floor(window.innerHeight / gridSize);

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          dots.push({
            ox: x * gridSize + gridSize / 2,
            oy: y * gridSize + gridSize / 2,
          });
        }
      }

      draw(); // dibuja fondo estático al iniciar
    }

    function draw(highlight) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "rgba(10,16,30,0.85)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = "rgba(255,255,255,0.06)";
      for (const p of dots) {
        ctx.beginPath();
        ctx.arc(p.ox, p.oy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      if (highlight && highlight.x != null) {
        const grad = ctx.createRadialGradient(
          highlight.x,
          highlight.y,
          0,
          highlight.x,
          highlight.y,
          160
        );
        grad.addColorStop(0, "rgba(91,141,239,0.14)");
        grad.addColorStop(1, "rgba(91,141,239,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
    }

    function handlePointerMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      draw({ x: mouse.current.x, y: mouse.current.y });
    }

    function handleResize() {
      setup();
    }

    setup();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // IntersectionObserver para animar entradas y elementos (reveal on scroll)
  useEffect(() => {
    const selector = ".panel, .cert-item, .skills li, .intro-header, .profile, .card-about";
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in-view"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            // opcional: remover clase cuando deja la vista
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  // efecto de parallax sutil dentro de la tarjeta intro (actualiza variables CSS)
  useEffect(() => {
    const el = document.querySelector(".card-intro");
    if (!el) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    }
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  // helpers para abrir/cerrar lightbox
  function openLightbox(src, alt) {
    setLightbox({ open: true, src, alt });
  }
  function closeLightbox() {
    setLightbox({ open: false, src: "", alt: "" });
  }

  return (
    <div className="app-root">
      <canvas ref={canvasRef} className="canvas-bg" aria-hidden="true" />

      <main className="card-layout" role="main">
        {/* INTRO: nombre, rol y resumen */}
        <section className="card-intro">
          <div className="intro-left">
            <header className="intro-header">
              <div className="badge">
                <h1>Bienvenido a mi página</h1>
              </div>
              <h2 className="name">Brando Felipe</h2>
              <p className="role">Desarrollador Web & Mobile</p>
              <p className="stack">
                React · React Native · Node · Python · PHP · PostgreSQL
              </p>
            </header>

            <div className="intro-summary">
              <p className="lead">
                Creo experiencias digitales modernas, accesibles y enfocadas en
                el usuario. Diseño y desarrollo tanto front-end como back-end,
                optimizando rendimiento y mantenibilidad.
              </p>
            </div>

            {/* Perfil móvil (aparece en columna izquierda, antes de botones en responsive) */}
            <div className="profile-mobile" aria-hidden="false">
              <div className="profile">
                <img src={profile} alt="Perfil Brando Felipe" />
              </div>
              <div className="meta">
                <strong>Áreas</strong>
                <p>UI/UX · Performance · PWAs · Apps multiplataforma</p>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="cta-row">
              <div className="actions">
                <a className="btn primary" href="#projects">
                  Ver proyectos
                </a>
                <a className="btn outline" href="#sobremi">
                  Sobre mí
                </a>
              </div>
            </div>

            {/* Habilidades */}
            <aside
              className="panel skills-panel"
              aria-label="Habilidades técnicas"
            >
              <h4>Habilidades Técnicas</h4>
              <ul className="skills">
                <li>
                  <FaReact className="fa-icon" /> React / Next.js
                </li>
                <li>
                  <FaMobileAlt className="fa-icon" /> React Native
                </li>
                <li>
                  <FaNodeJs className="fa-icon" /> Node.js / Express
                </li>
                <li>
                  <FaPython className="fa-icon" /> Python
                </li>
                <li>
                  <FaDatabase className="fa-icon" /> PostgreSQL / SQL
                </li>
                <li>
                  <FaPhp className="fa-icon" /> PHP
                </li>
                <li>
                  <FaCode className="fa-icon" /> HTML / CSS / JavaScript
                </li>
                <li>
                  <FaCode className="fa-icon" /> UI / UX
                </li>
                <li>
                  <FaLinux className="fa-icon" /> Linux
                </li>
                <li>
                  <FaDocker className="fa-icon" /> Docker
                </li>
              </ul>
            </aside>
          </div>

          {/* Perfil escritorio (aside derecha) */}
          <aside className="intro-right desktop-only" aria-label="Perfil de escritorio">
            <div className="profile profile-desktop" aria-hidden="false">
              <img src={profile} alt="Perfil Brando Felipe" />
            </div>

            <div className="meta meta-desktop">
              <h4>Contacto & Perfil</h4>

              <ul className="profile-list">
                <li className="pl-item"><strong>Ubicación:</strong><span>Cali - Valle del Cauca</span></li>
                <li className="pl-item">
                  <FaRegEnvelope className="fa-icon" />
                  <a href="mailto:brandoncortes81@gmail.com">brandoncortes81@gmail.com</a>
                </li>
                <li className="pl-item"><strong>Stack:</strong><span>PHP · Laravel · Node.js · Python · PostgreSQL</span></li>
                <li className="pl-item socials-inline">
                  <a href="https://github.com/Felo-Dev" aria-label="GitHub"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/brando-cortes-b46351258/" aria-label="LinkedIn"><FaLinkedin /></a>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="Certificados" className="card-about panel certificados">
          <h3>Certificados Extras:</h3>

          <div className="imgCert" role="list">
            <figure role="listitem" className="cert-item">
              <img
                src={diplomado}
                alt="Diplomado"
                tabIndex={0}
                onClick={() => openLightbox(diplomado, "Diplomado")}
                onKeyDown={(e) =>
                  e.key === "Enter"
                    ? openLightbox(diplomado, "Diplomado")
                    : null
                }
              />
              <figcaption>Diplomado — Formación adicional</figcaption>
            </figure>

            <figure role="listitem" className="cert-item">
              <img
                src={certificado}
                alt="Certificado PHP"
                tabIndex={0}
                onClick={() => openLightbox(certificado, "Certificado PHP")}
                onKeyDown={(e) =>
                  e.key === "Enter"
                    ? openLightbox(certificado, "Certificado PHP")
                    : null
                }
              />
              <figcaption>Certificado PHP</figcaption>
            </figure>
          </div>
        </section>

        <section id="projects" className="card-about panel certificados">
          <h3>Proyectos mas recientes:</h3>

          <div className="imgCert" role="list">
            <figure role="listitem" className="cert-item">
              <img
                src={appMobile}
                alt="Aplicación Móvil"
                tabIndex={0}
                onClick={() => openLightbox(appMobile, "Aplicación Móvil")}
                onKeyDown={(e) =>
                  e.key === "Enter"
                    ? openLightbox(appMobile, "Aplicación Móvil")
                    : null
                }
              />
              <figcaption>Aplicación Móvil</figcaption>
              <a href="https://github.com/Felo-Dev/app" aria-label="GitHub">
                <FaGithub />
              </a>
            </figure>

            <figure role="listitem" className="cert-item">
              <img
                src={Proyector}
                alt="Proyector-TV"
                tabIndex={0}
                onClick={() => openLightbox(Proyector, "Proyector-TV")}
                onKeyDown={(e) =>
                  e.key === "Enter"
                    ? openLightbox(Proyector, "Proyector-TV")
                    : null
                }
              />

              <figcaption>Aplicativos  Tv</figcaption>
              <a
                href="https://github.com/Felo-Dev/appTV-Clinica"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </figure>

            <figure role="listitem" className="cert-item">
              <img
                src={mern}
                alt="Proyector-TV"
                tabIndex={0}
                onClick={() => openLightbox(mern, "Api-Validador")}
                onKeyDown={(e) =>
                  e.key === "Enter" ? openLightbox(mern, "Api-Validador") : null
                }
              />
              <figcaption>Api-validador</figcaption>
              <a
                href="https://github.com/Felo-Dev/api-validator-api-productos"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </figure>

            <figure role="listitem" className="cert-item">
              <img
                src={script}
                alt="Api-validador"
                tabIndex={0}
                onClick={() => openLightbox(script, "Api-validador")}
                onKeyDown={(e) =>
                  e.key === "Enter" ? openLightbox(script, "Api-validador") : null
                }
              />
              <figcaption>Scrip-py Nmap</figcaption>
              <a
                href="https://github.com/Felo-Dev/scripts--linux"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </figure>
          </div>
        </section>

        {/* SOBRE MI / DETALLES */}
        <section id="about" className="card-about panel">
          <h2>SOBRE MI</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Desarrollador backend con más de 3 años de experiencia en PHP,
                Laravel, Node.js y Python. Con conocimientos sólidos en bases de
                datos relacionales (PostgreSQL) y no relacionales (MongoDB).
                Apasionado por crear soluciones eficientes y escalables, con un
                enfoque constante en mejorar el rendimiento y la calidad de cada
                proyecto.
              </p>
            </div>

            <div id="sobremi" className="contact-card">
              <h4>Contacto</h4>
              <p>Cali - Valle del Cauca</p>
              <p>
                <a href="mailto:brandoncortes81@gmail.com">Mi Correo</a>
              </p>
            </div>
          </div>

          <h2>HABILIDADES</h2>
          <ul className="resume-skills">
            <li>Desarrollo frontend y backend</li>
            <li>Framework Laravel</li>
            <li>Manejo Postman</li>
            <li>Manejo SQL</li>
            <li>Manejo básico servidores Linux</li>
            <li>Manejo .NET</li>
            <li>React, Angular</li>
            <li>Manejo Amazon Web Services</li>
            <li>Implementación y ejecución de pruebas unitarias</li>
            <li>Manejo de zona DNS</li>
          </ul>

          <h4>EXPERIENCIA</h4>
          <div className="experience">
            <h2>Analista de aplicativos web y móviles — Clínica Colombia</h2>
            <p className="date">Diciembre 2024 - actual</p>

            <h6>Funciones:</h6>
            <ul>
              <li>
                Análisis y levantamiento de requerimientos de usuarios internos.
              </li>
              <li>
                Actualización y optimización de funcionalidades en la plataforma
                web de la clínica.
              </li>
              <li>
                Consulta y mantenimiento de bases de datos SQL para verificación
                y corrección de información.
              </li>
              <li>
                Diagnóstico y solución de errores en código y base de datos del
                sistema.
              </li>
              <li>
                Brindar soporte técnico a usuarios internos a través de la
                plataforma GLPI.
              </li>
            </ul>

            <h6>Logros:</h6>
            <p>
              Diseño, desarrollo e implementación de un sistema de gestión de
              turnos para pacientes, desarrollado con PHP, Laravel y SQL. El
              proyecto incluyó el desarrollo completo, pruebas unitarias y
              funcionales, así como el despliegue exitoso en el servidor de
              producción.
            </p>
          </div>

          <div className="courses">
            <h2>Desarrollador Fullstack</h2>
            <p className="date">Agosto 2020 - 2024</p>

            <h6>Funciones:</h6>
            <ul>
              <li>
                Desarrollo de nuevas funcionalidades para usuarios internos.
              </li>
              <li>
                Identificación y resolución de errores en el código y en las
                bases de datos.
              </li>
              <li>
                Actualización y optimización de código en PHP y JavaScript para
                mejorar la eficiencia.
              </li>
              <li>
                Implementación de mejoras continuas en el sistema interno para
                asegurar su funcionalidad y estabilidad.
              </li>
              <li>
                Creación y desarrollo de proyectos completos basados en los
                requerimientos proporcionados por el área de análisis de
                requerimientos.
              </li>
            </ul>
          </div>

          <h6>Logros:</h6>
          <ul>
            <li>
              Implementación de un sistema de gestión de usuarios que mejoró la
              eficiencia en un 30%.
            </li>
            <li>
              Reducción de errores en el sistema mediante la implementación de
              pruebas automatizadas.
            </li>
            <li>
              Mejora en la experiencia del usuario a través de la optimización
              de la interfaz y la usabilidad.
            </li>
          </ul>

          <div className="courses">
            <h2>Desarrollador Freelancer</h2>
            <p className="date">Enero 2024 - Actual</p>

            <h6>Funciones:</h6>
            <ul>
              <li>
                Desarrollo y diseño de sitios web personalizados, asegurando una
                experiencia de usuario óptima y adaptada al cliente.
              </li>
              <li>
                Creación de proyectos web completos, desde la planificación
                hasta la implementación, incluyendo integración de bases de
                datos y funcionalidad backend.
              </li>
              <li>
                Colaboración directa con clientes para entender requerimientos,
                ofrecer soluciones técnicas y cumplir con los plazos acordados.
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Lightbox modal (click en overlay cierra) */}
      {lightbox.open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeLightbox}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Cerrar certificado"
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
