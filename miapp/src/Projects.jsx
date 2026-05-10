import React from 'react';
import GradientText from './GradientText';

export default function Projects({ language }) {
  const content = {
    es: {
      title: "PROYECTOS DESTACADOS",
      items: [
        { 
          type: "App", 
          name: "APP MÓVIL", 
          tech: "React Native · iOS/Android",
          desc: "Arquitectura de componentes reactivos y escalables bajo el ecosistema de React, optimizando el renderizado y la persistencia de datos local."
        },
        { 
          type: "TV", 
          name: "APP CLÍNICA TV", 
          tech: "Gestión turnos · Sockets",
          desc: "Comunicación bidireccional mediante WebSockets para sincronización de turnos en tiempo real con latencia mínima."
        },
        { 
          type: "API", 
          name: "API VALIDATOR", 
          tech: "Node.js · Express",
          desc: "Servicios robustos en Node.js con flujos de validación asíncronos y middlewares de seguridad avanzados."
        },
        { 
          type: "DevOps", 
          name: "DOCKER INFRA", 
          tech: "Docker · CI/CD · Linux",
          desc: "Infraestructura basada en contenedores Docker para entornos de desarrollo y producción. Automatización de builds y despliegues con pipelines de integración continua."
        }
      ]
    },
    en: {
      title: "FEATURED PROJECTS",
      items: [
        { type: "App", name: "MOBILE APP", tech: "React Native · iOS/Android", desc: "Architecture of reactive and scalable components using the React ecosystem, optimizing rendering and local data persistence." },
        { type: "TV", name: "TV CLINIC APP", tech: "Queue Management · Sockets", desc: "Bidirectional communication via WebSockets for real-time shift synchronization with minimal latency." },
        { type: "API", name: "API VALIDATOR", tech: "Node.js · Express", desc: "Robust Node.js services with asynchronous validation flows and advanced security middlewares." },
        { type: "DevOps", name: "DOCKER INFRA", tech: "Docker · CI/CD · Linux", desc: "Docker container-based infrastructure for development and production environments. Automated builds and deployments with CI/CD pipelines." }
      ]
    }
  }[language];

  return (
    <section id="projects" className="section-card" style={{ marginTop: '4rem' }}>
      <h2 className="section-title">
        <GradientText text={content.title} />
      </h2>
      <div className="projects-grid">
        {content.items.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              <span className="project-type">{project.type}</span>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-glow"></div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech-wrapper">
                <p className="project-tech">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}