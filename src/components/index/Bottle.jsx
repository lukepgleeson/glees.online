import React, { useState, useEffect } from 'react';
import bottleImg from '../../assets/bottle.gif';
import '../../styles/index/Bottle.css';

export default function Bottle() {
  const [bottles, setBottles] = useState([]);
  const [activeMessage, setActiveMessage] = useState(null);

  useEffect(() => {
    const spawnBottle = () => {
      const id = Date.now();
      
      // Randomize whether it enters from the top edge or the right edge
      const spawnOnTopWall = Math.random() > 0.5;
      
      let startX = 0;
      let startY = 0;

      if (spawnOnTopWall) {
        startX = Math.floor(Math.random() * 80) + 20; // Upper top side (20% to 100% across)
        startY = -5; // Just off-screen top
      } else {
        startX = 105; // Just off-screen right
        startY = Math.floor(Math.random() * 40); // Upper right wall (0% to 40% down)
      }

      const newBottle = { id, x: startX, y: startY };
      setBottles((prev) => [...prev, newBottle]);

      // Despawn element after it drifts completely past the viewport bounds (25s)
      setTimeout(() => {
        setBottles((prev) => prev.filter((b) => b.id !== id));
      }, 25000);
    };

    // Spawns a bottle every 12 seconds to keep it rare and rewarding to find
    const interval = setInterval(spawnBottle, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleBottleClick = (id) => {
    // Open placeholder message popup
    setActiveMessage("You pulled a corked glass bottle out of the rolling waves. Inside, a weather-worn parchment reads: 'Placeholder Message from the Deep...'");
    
    // Remove this specific bottle from the water since the player grabbed it
    setBottles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <>
      <div className="bottle-layer-container">
        {bottles.map((bottle) => (
          <img
            key={bottle.id}
            src={bottleImg}
            alt="A floating message in a bottle"
            className="floating-bottle"
            style={{
              left: `${bottle.x}vw`,
              top: `${bottle.y}vh`,
            }}
            onClick={() => handleBottleClick(bottle.id)}
          />
        ))}
      </div>

      {/* Simple Interactive Modal Popup */}
      {activeMessage && (
        <div className="bottle-modal-overlay" onClick={() => setActiveMessage(null)}>
          <div className="bottle-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Message Found!</h3>
            <p>{activeMessage}</p>
            <button className="bottle-modal-close-btn" onClick={() => setActiveMessage(null)}>
              Toss it back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
