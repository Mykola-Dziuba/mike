import React from 'react';
import diagram from './Mirus-web-logo.jpg'; // Загрузка изображения

function Diagram() {
    return (
        <div className="diagram-container">
            <img src={diagram} alt="One Line Diagram" className="diagram" />
        </div>
    );
}

export default Diagram;
