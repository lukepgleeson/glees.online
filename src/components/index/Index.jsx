import React from 'react';
import Island from './Island.jsx'
import CustomCursor from './CustomCursor.jsx'
import North from './North.jsx'
import WhiteHorses from './WhiteHorses.jsx'
import Birds from './Birds.jsx'
import Bottle from './Bottle.jsx'
import islandData from './islandData'

const islands = islandData.map(island => <Island id={island.id} name={island.name} img={island.img} />)

export default function Index() {
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
