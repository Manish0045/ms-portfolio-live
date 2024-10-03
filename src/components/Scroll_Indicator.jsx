// import React from 'react';
import { BsMouse3 } from 'react-icons/bs';
import '../styles/Scroll_Indicator.css';


const ScrollIndicator = () => {
    return (
        <div className="scroll-indicator">
            <div className="arrow bounce">
                <span className="arrow-icon"><BsMouse3 color='cyan' /></span>
            </div>
            <p className="scroll-text">Scroll down</p>
        </div>
    );
};

export default ScrollIndicator;
