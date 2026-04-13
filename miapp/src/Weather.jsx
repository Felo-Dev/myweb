import React, { useState, useEffect } from 'react';
import GradientText from './GradientText';

export default function Weather({ language }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Weather error", err);
      }
    });
  }, []);

  if (!weather) return null;

  return (
    <div className="weather-widget" style={{ alignItems: 'center', display: 'inline-flex', gap: '10px', padding: '6px 10px', borderRadius: 28 }}>
      <span className="weather-icon" style={{ fontSize: '1.15rem' }}>
        {weather.temperature > 20 ? '☀️' : '☁️'}
      </span>
      <span className="weather-temp" style={{ fontWeight: 800, fontSize: '1rem' }}>{Math.round(weather.temperature)}°C</span>
      <span className="weather-label" style={{ opacity: 0.95 }}>
        <GradientText text={language === 'es' ? 'Clima Local' : 'Local Weather'} />
      </span>
    </div>
  );
}