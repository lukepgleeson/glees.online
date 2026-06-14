import React from 'react';
import whiteHorsesImg from '../assets/Whitehorse.gif';
import '../styles/WhiteHorses.css';

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
