import React from 'react';
import Colorize from './Colorize';
import GradientText from './GradientText';

export default function Experience({ language }) {
  const content = {
    es: { title: "LABORAL HISTÓRICO", current: "ACTUAL" },
    en: { title: "WORK HISTORY", current: "PRESENT" }
  }[language];

  const jobs = [
    { company: "I2B TECH", date: content.current, desc: language === 'es' ? "Desarrollador Full Stack (Híbrido)." : "Full Stack Developer (Hybrid)." },
    { company: "CLÍNICA COLOMBIA", date: "2024-25", desc: language === 'es' ? "Analista de TI." : "IT Analyst." },
    { company: "FREELANCER.COM", date: "2023-24", desc: language === 'es' ? "Desarrollador Remoto." : "Remote Developer." },
    { company: "SOFTWARE SU", date: "2020-24", desc: language === 'es' ? "Desarrollador UI." : "UI Developer." },
  ];

  return (
    <section id="experience" className="section-card">
      <h2 className="section-title"><GradientText text={content.title} /></h2>
      {jobs.map((j, i) => (
        <div key={i} style={{marginBottom: '1.5rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <span>{j.company}</span>
            <span>{j.date}</span>
          </div>
          <div style={{fontSize: '0.9rem', opacity: 0.8}}>
            {(j.desc && (j.desc.includes('Full Stack') || j.desc.includes('Desarrollador Full Stack'))) ? (
              <>
                {j.desc.split(/(Desarrollador Full Stack|Full Stack)/).map((part, idx) => (
                  (part === 'Desarrollador Full Stack' || part === 'Full Stack') ? (
                    <Colorize key={idx} text={part} />
                  ) : (
                    <span key={idx}>{part}</span>
                  )
                ))}
              </>
            ) : (
              j.desc
            )}
          </div>
        </div>
      ))}
    </section>
  );
}