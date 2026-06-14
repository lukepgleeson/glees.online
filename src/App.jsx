import React from 'react';
import Island from './components/Island.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import North from './components/North.jsx'
import WhiteHorses from './components/WhiteHorses.jsx'
import Birds from './components/Birds.jsx'
import Bottle from './components/Bottle.jsx'
import islandData from './islandData'

const islands = islandData.map(island => <Island id={island.id} name={island.name} img={island.img} />)

export default function Archipelago() {
  return (
    <div className="map-container custom-cursor-area">
        <WhiteHorses />
        <Bottle />
        <Birds />
        <North />
        <CustomCursor />
      <div className="hex-grid">
                {islands}
      </div>
    </div>
  );
}
