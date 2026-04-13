import React from 'react';

export default function Colorize({ text = '', colors }) {
  const palette = colors || ['#FF4B4B', '#FF9F43', '#FFD43B', '#4CD97B', '#20C3D6', '#3B82F6', '#8B5CF6'];
  return (
    <>
      {Array.from(String(text)).map((ch, i) => (
        <span key={i} style={{ color: palette[i % palette.length] }}>{ch}</span>
      ))}
    </>
  );
}
