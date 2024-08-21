import React, { useState } from 'react';
import "./accomodation.css";
import General from "./general";
import Acc from './acc';
import Non from "./non";

function Accomodation() {
  const [activeComponent, setActiveComponent] = useState("general");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "general":
        return <General />;
      case "ac":
        return <Acc />;
      case "non-ac":
        return <Non />;
      default:
        return <General />;
    }
  };

  return (
    <div className="Accomodation_body">
      <div className="Accomodation_menu">
        <button
          className={`Accomodation_menu-button ${activeComponent === "general" ? "active" : ""}`}
          onClick={() => handleButtonClick("general")}
        >
          General
        </button>
        <button
          className={`Accomodation_menu-button ${activeComponent === "ac" ? "active" : ""}`}
          onClick={() => handleButtonClick("ac")}
        >
          AC
        </button>
        <button
          className={`Accomodation_menu-button ${activeComponent === "non-ac" ? "active" : ""}`}
          onClick={() => handleButtonClick("non-ac")}
        >
          NON-AC
        </button>
      </div>

      <div className="Accomodation_content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Accomodation;
