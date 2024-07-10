// src/components/Diagram.js
import React from 'react';
// import './Diagram.css';

function Diagram() {
    return (
        <div className="diagram-section">
            <img src={`${process.env.PUBLIC_URL}/Mirus-web-logo.jpg`} alt="One Line Diagram" />
        </div>
    );
}

export default Diagram;
