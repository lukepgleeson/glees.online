import React, { useState, useEffect } from 'react';
import bottleImg from '../../assets/bottle.gif';
import '../../styles/index/Bottle.css';

export default function Bottle({ onLetterFound }) {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    const spawnBottle = () => {
      const id = Date.now();
      const spawnOnTopWall = Math.random() > 0.5;
      const startX = spawnOnTopWall ? Math.floor(Math.random() * 80) + 20 : 105;
      const startY = spawnOnTopWall ? -5 : Math.floor(Math.random() * 40);

      setBottles(prev => [...prev, { id, x: startX, y: startY }]);
      setTimeout(() => setBottles(prev => prev.filter(b => b.id !== id)), 25000);
    };

    const interval = setInterval(spawnBottle, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleBottleClick = async (id) => {
    setBottles(prev => prev.filter(b => b.id !== id));
    try {
      const res = await fetch('/api/letters/random');
      if (!res.ok) return;
      const letter = await res.json();
      onLetterFound(letter);
    } catch {
      // no letter, bottle just disappears
    }
  };

  return (
    <div className="bottle-layer-container">
      {bottles.map(bottle => (
        <img
          key={bottle.id}
          src={bottleImg}
          alt="A floating message in a bottle"
          className="floating-bottle"
          style={{ left: `${bottle.x}vw`, top: `${bottle.y}vh` }}
          onClick={() => handleBottleClick(bottle.id)}
        />
      ))}
    </div>
  );
}
