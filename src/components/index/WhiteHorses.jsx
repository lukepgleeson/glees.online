import React from 'react';
import whiteHorsesImg from '../../assets/Whitehorse.gif';
import '../../styles/index/WhiteHorses.css';

export default function WhiteHorsesBackground() {
    return (
        <div className="white-horses-container">
            <div 
                className="white-horses-bg" 
                style={{ backgroundImage: `url(${whiteHorsesImg})` }}
            />
        </div>
    );
}
