import React from 'react';

export default function Colorize({ text = '', colors }) {
  const palette = colors || ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#6366f1', '#3b82f6'];
  return (
    <>
      {Array.from(String(text)).map((ch, i) => (
        <span key={i} style={{ color: palette[i % palette.length] }}>{ch}</span>
      ))}
    </>
  );
}
