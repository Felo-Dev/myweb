import React from 'react';
import { SiReact, SiLaravel, SiPostgresql, SiNodedotjs, SiPython, SiDocker } from 'react-icons/si';
import GradientText from './GradientText';

export default function Stack({ language }) {
  const content = {
    es: { title: "PILA TECNOLÓGICA" },
    en: { title: "TECH STACK" }
  }[language];

  const palette = ['#FF5A7A', '#FF9F43', '#FFD43B', '#4CD97B', '#20C3D6', '#3B82F6', '#8B5CF6'];

  const skills = [
    { name: "REACT / NEXT.JS", rating: 5, Icon: SiReact },
    { name: "PHP / LARAVEL", rating: 4, Icon: SiLaravel },
    { name: "POSTGRESQL / SQL", rating: 4, Icon: SiPostgresql },
    { name: "NODE.JS / EXPRESS", rating: 3, Icon: SiNodedotjs },
    { name: "PYTHON / DJANGO", rating: 3, Icon: SiPython },
    { name: "REACT NATIVE", rating: 3, Icon: SiReact },
    { name: "DOCKER / LINUX", rating: 2, Icon: SiDocker },
  ];

  return (
    <section id="stack" className="section-card">
      <h2 className="section-title">{content.title}</h2>
      <div className="stack-grid">
        {skills.map((s, index) => (
          <div key={index} className="skill-item">
            <div
              className="tech-icon-wrapper"
              style={{
                width: 64,
                height: 64,
                minWidth: 64,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: palette[index % palette.length],
                color: '#fff'
              }}
            >
              <s.Icon size={28} />
            </div>
            <div style={{ marginTop: 10, fontWeight: 700, fontSize: '0.9rem', textAlign: 'center' }}>
              {s.name}
            </div>
            <div className="rating-dots" style={{ marginTop: 8 }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i < s.rating ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}