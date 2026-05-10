import React from 'react';

export default function GradientText({ text = '', colors }) {
  const palette = colors || ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'];
  const gradient = `linear-gradient(90deg, ${palette.join(', ')})`;
  const style = {
    background: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };
  return <span style={style}>{text}</span>;
}
