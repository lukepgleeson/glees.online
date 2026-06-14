import React from 'react';
import northImg from '../assets/North.png';
import '../styles/North.css'

export default function North() {
    return (
        <img src={northImg} alt="North Direction Marker" className="north-marker"/>
    );
}
