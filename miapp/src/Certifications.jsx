import React from 'react';
import GradientText from './GradientText';
import Colorize from './Colorize';

export default function Certifications({ language }) {
  const content = {
    es: {
      title: "CERTIFICACIONES Y FORMACIÓN",
      items: [
        {
          title: "CERTIFICADO PHP",
          issuer: "SoloLearn",
          desc: "Acreditación técnica en el lenguaje PHP, con enfoque en el desarrollo de lógica de servidor, procesamiento de formularios y conectividad con bases de datos para sistemas dinámicos."
        },
        {
          title: "DIPLOMADO EN DESARROLLO",
          issuer: "Politécnico de Colombia",
          desc: "Estudios avanzados en ingeniería de software, cubriendo el ciclo de vida del desarrollo, patrones de diseño y metodologías para la creación de soluciones tecnológicas escalables."
        }
      ]
    },
    en: {
      title: "CERTIFICATIONS & EDUCATION",
      items: [
        {
          title: "PHP CERTIFICATE",
          issuer: "SoloLearn",
          desc: "Technical accreditation in PHP, focusing on server-side logic development, form processing, and database connectivity for dynamic systems."
        },
        {
          title: "DEVELOPMENT DIPLOMA",
          issuer: "Politécnico de Colombia",
          desc: "Advanced studies in software engineering, covering the development life cycle, design patterns, and methodologies for building scalable technological solutions."
        }
      ]
    }
  }[language];

  return (
    <section id="certs" className="section-card" style={{ marginTop: '4rem' }}>
      <h2 className="section-title">
        <GradientText text={content.title} />
      </h2>
      <div className="certs-list">
        {content.items.map((cert, index) => (
          <div key={index} className="cert-item">
            <div className="cert-header">
              <h3 className="cert-name">{cert.title}</h3>
              <span className="cert-issuer">
                <Colorize text={cert.issuer} />
              </span>
            </div>
            <p className="cert-desc">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}