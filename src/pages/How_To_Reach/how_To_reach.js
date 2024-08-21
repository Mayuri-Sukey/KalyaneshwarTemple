import React, { useState } from 'react';
import './howtoreach.css';
import Bus from './bus';
import Train from './train';
import Air from './air';
import Arrival from './arrivals';
import { FaBusAlt, FaTrain } from 'react-icons/fa';
import { ImAirplane } from 'react-icons/im';

function HowToreach() {
  const [activeButton, setActiveButton] = useState('bus'); // State to track active button

  const handleClick = (buttonName) => {
    setActiveButton(buttonName); // Update active button state on click
  };

  let activeComponent;

  switch (activeButton) {
    case 'bus':
      activeComponent = <Bus />;
      break;
    case 'train':
      activeComponent = <Train />;
      break;
    case 'air':
      activeComponent = <Air />;
      break;
    case 'arrival':
      activeComponent = <Arrival />;
      break;
    default:
      activeComponent = <Bus />; // Default to Bus component
  }

  return (
    <div className="How_container margin">
      <div className="How_menu">
        {/* Bus Button */}
        <button
          className={`How_menu-button ${activeButton === 'bus' ? 'active' : ''}`}
          onClick={() => handleClick('bus')}
        >
          <FaBusAlt /> Bus
        </button>

        {/* Train Button */}
        <button
          className={`How_menu-button ${activeButton === 'train' ? 'active' : ''}`}
          onClick={() => handleClick('train')}
        >
          <FaTrain /> Train
        </button>

        {/* Air Button */}
        <button
          className={`How_menu-button ${activeButton === 'air' ? 'active' : ''}`}
          onClick={() => handleClick('air')}
        >
          <ImAirplane /> Air
        </button>
      </div>

      {/* Display Active Component */}
      <div className="ActiveComponent">
        {activeComponent}
      </div>
    </div>
  );
}

export default HowToreach;
