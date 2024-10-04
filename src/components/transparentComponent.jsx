/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import '../styles/transparentComponent.css';
import ScrollIndicator from './Scroll_Indicator';

const TransparentComponent = () => {
    return (
        <div className="transparent-container">
            <div className="content">
                <h3>My Experiences and Work History</h3>
                <span className='indicator'><ScrollIndicator /></span>
            </div>
        </div>
    );
};

export default TransparentComponent;
