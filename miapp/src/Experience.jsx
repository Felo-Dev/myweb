import React from 'react';
import GradientText from './GradientText';

export default function Experience({ language }) {
  const content = {
    es: { title: "EXPERIENCIA LABORAL", current: "ACTUAL" },
    en: { title: "WORK EXPERIENCE", current: "PRESENT" }
  }[language];

  const jobs = [
    { company: "I2B TECH", date: content.current, desc: language === 'es' ? "Full Stack Developer (Híbrido). Microservicios con Docker, CI/CD, y despliegue automatizado en contenedores." : "Full Stack Developer (Hybrid). Microservices with Docker, CI/CD, and automated container deployments." },
    { company: "CLÍNICA COLOMBIA", date: "2024-25", desc: language === 'es' ? "Analista de TI. Administración de servidores Linux y contenedores Docker para entornos clínicos." : "IT Analyst. Linux server administration and Docker containers for clinical environments." },
    { company: "FREELANCER.COM", date: "2023-24", desc: language === 'es' ? "Desarrollador Remoto. Apps web con Node.js/React empaquetadas y desplegadas con Docker." : "Remote Developer. Web apps with Node.js/React packaged and deployed via Docker." },
    { company: "SOFTWARE SU", date: "2020-24", desc: language === 'es' ? "Desarrollador UI. Interfaces responsivas y optimizadas para alto tráfico." : "UI Developer. Responsive, high-performance interfaces for high-traffic platforms." },
  ];

  return (
    <section id="experience" className="section-card">
      <h2 className="section-title"><GradientText text={content.title} /></h2>
      <div className="experience-list">
        {jobs.map((j, i) => (
          <div key={i} className="experience-item">
            <span className="experience-company">{j.company}</span>
            <span className="experience-date">{j.date}</span>
            <span className="experience-desc">{j.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}