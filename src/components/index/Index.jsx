import React from 'react';
import Island from './Island.jsx'
import CustomCursor from './CustomCursor.jsx'
import North from './North.jsx'
import WhiteHorses from './WhiteHorses.jsx'
import Birds from './Birds.jsx'
import Bottle from './Bottle.jsx'
import Buoy from './Buoy.jsx'
import islandData from './islandData'


export default function Index(props) {
    const [hoveredIsland, setHoveredIsland] = React.useState(null);

    const islands = islandData.map(island => (
      <Island key={island.id} id={island.id} name={island.name} img={island.img} action={island.action} handleClick={props.changeView} onHover={setHoveredIsland} />
    ));
  return (
    <div className="map-container custom-cursor-area">
        <WhiteHorses />
        <Bottle onLetterFound={props.onLetterFound} />
        <Birds />
        <Buoy onClick={() => props.changeView("BUOY")} />
        <North />
        {!props.modalOpen && !props.cursorHidden && <CustomCursor hoveredIsland={hoveredIsland} />}
      <div className="hex-grid">
                {islands}
      </div>
    </div>
  );
}
