import React, { useState, useEffect, useRef } from 'react';
import '../styles/CustomCursor.css'; // Dedicated cursor styling
import boatNorth from '../assets/BoatN.gif';
import boatSouth from '../assets/BoatS.gif';
import boatWest from '../assets/BoatW.gif';
import boatEast from '../assets/BoatE.gif';
import boatNorthEast from '../assets/BoatNE.gif';
import boatNorthWest from '../assets/BoatNW.gif';
import boatSouthWest from '../assets/BoatSW.gif';
import boatSouthEast from '../assets/BoatSE.gif';

const CURSOR_GIFS = {
  north: boatNorth,
  south: boatSouth,
  west: boatWest,
  east: boatEast,
  northEast: boatNorthEast,
  northWest: boatNorthWest,
  southWest: boatSouthWest,
  southEast: boatSouthEast,
};

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('north');
  
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      const deltaX = currentX - lastPos.current.x;
      const deltaY = currentY - lastPos.current.y;
      
      // Filter out tiny jittery movements
      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
        let newDirection = direction;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        // Check if movement is significantly diagonal
        // A ratio between 0.4 and 2.4 means both X and Y moved noticeably
        const isDiagonal = absX > 0.4 * absY && absY > 0.4 * absX;

        if (isDiagonal) {
          if (deltaX > 0 && deltaY > 0) newDirection = 'southEast';
          else if (deltaX > 0 && deltaY < 0) newDirection = 'northEast';
          else if (deltaX < 0 && deltaY > 0) newDirection = 'southWest';
          else if (deltaX < 0 && deltaY < 0) newDirection = 'northWest';
        } else {
          // Fall back to pure cardinal directions if one axis dominates
          if (absX > absY) {
            newDirection = deltaX > 0 ? 'east' : 'west';
          } else {
            newDirection = deltaY > 0 ? 'south' : 'north';
          }
        }

        setDirection(newDirection);
      }

      setMousePos({ x: currentX, y: currentY });
      lastPos.current = { x: currentX, y: currentY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [direction]); // Added direction dependency to preserve state correctly within the effect closure

  return (
    <div 
      className="custom-cursor" 
      style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
    >
      <img src={CURSOR_GIFS[direction]} alt="Dynamic pointer" />
    </div>
  );
}
