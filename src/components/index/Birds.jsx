import React, { useState, useEffect } from 'react';
import birdsImg from '../../assets/Birds.gif';
import '../../styles/index/Birds.css';

export default function Birds() {
  const [flocks, setFlocks] = useState([]);

  useEffect(() => {
    const spawnFlock = () => {
      const id = Date.now();
      
      // Randomize the entry coordinates along the South/East edges
      // 50% chance to spawn on the right wall, 50% chance on the bottom floor
      const spawnOnRightWall = Math.random() > 0.5;
      
      let startX = 0;
      let startY = 0;

      if (spawnOnRightWall) {
        startX = 100; // Right edge (100vw)
        startY = Math.floor(Math.random() * 60) + 30; // Random height between 30% and 90% down
      } else {
        startX = Math.floor(Math.random() * 60) + 40; // Random width between 40% and 100% across
        startY = 100; // Bottom edge (100vh)
      }

      const newFlock = { id, x: startX, y: startY };

      // Add the new flock to state
      setFlocks((prev) => [...prev, newFlock]);

      // Automatically clean up the DOM element after its 4.5-second animation finishes
      setTimeout(() => {
        setFlocks((prev) => prev.filter((f) => f.id !== id));
      }, 4500);
    };

    spawnFlock();
    const interval = setInterval(spawnFlock, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="birds-layer-container">
      {flocks.map((flock) => (
        <img
          key={flock.id}
          src={birdsImg}
          alt="Birds flying overhead"
          className="bird-flock"
          style={{
            left: `${flock.x}vw`,
            top: `${flock.y}vh`,
          }}
        />
      ))}
    </div>
  );
}
