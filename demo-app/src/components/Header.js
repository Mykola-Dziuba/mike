import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-left">
                <h1>SOLV<sup>TM</sup></h1>
                <h2>Oneline Diagram Report</h2>
                <div className="header-info">
                    <p>Project Name: <strong>NEW</strong></p>
                    <p>Project Designer: <strong>XYZ</strong></p>
                    <p>Customer: <strong>ABC</strong></p>
                    <p>Prepared by: <strong>John Doe</strong></p>
                    <p>Date: <strong>8-JULY-2024</strong></p>
                </div>
            </div>
            <div className="header-right">
                <img src={`${process.env.PUBLIC_URL}/Mirus-web-logo.png`} alt="MIRUS International Inc." />
            </div>
        </header>
    );
}

export default Header;
