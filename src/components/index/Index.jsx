import React from 'react';
import Island from './Island.jsx'
import CustomCursor from './CustomCursor.jsx'
import North from './North.jsx'
import WhiteHorses from './WhiteHorses.jsx'
import Birds from './Birds.jsx'
import Bottle from './Bottle.jsx'
import islandData from './islandData'


export default function Index(props) {
    const islands = islandData.map(island => <Island key={island.id} id={island.id} name={island.name} img={island.img} action={island.action} handleClick={props.changeView} />)
  return (
    <div className="map-container custom-cursor-area">
        <WhiteHorses />
        <Bottle />
        <Birds />
        <North />
        {!props.modalOpen && <CustomCursor />}
      <div className="hex-grid">
                {islands}
      </div>
    </div>
  );
}
