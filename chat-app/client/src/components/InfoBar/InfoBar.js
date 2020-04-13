import React from 'react';

import './InfoBar.css';

const InfoBar = () => {
    <div className="InfoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt = "online image" />
            <h3>roomName</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close img"/></a>
        </div>
    </div>
}

export default InfoBar;