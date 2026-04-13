import React from 'react';

export default function GradientText({ text = '', colors }) {
  const palette = colors || ['#FF5A7A', '#FF9F43', '#FFD43B', '#4CD97B', '#20C3D6', '#3B82F6', '#8B5CF6'];
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
