import React from "react";
import { list4 } from "./dummy";
import { useState } from "react";

const Arrival = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDestinations = list4.filter((item) =>
    item.Destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="Arrival_container">
          <input
        type="text"
        placeholder="Search Flight Destination..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
 
  
      <ul className="Arrival_responsive-table">
        <li className="Arrival_table-header">
          <div className="col">Flight</div>
          <div className="col">Carrier</div>
          <div className="col">Destination</div>
          <div className="col">Departure</div>
        </li>

          { filteredDestinations.length === 0 ? (
       
       <p className="not-found">Flight is not available</p>
 
   ) : (filteredDestinations.map((flight, index) => (
          <li className="Arrival_table-row" key={index}>
            <div className="col" data-label="Flight">
              {flight.Flight}
            </div>
            <div className="col" data-label="Carrier">
              {flight.Carrier}
            </div>
            <div className="col" data-label="Destination">
              {flight.Destination}
            </div>
            <div className="col" data-label="Departure">
              {flight.Departure}
            </div>
          </li>
          )))}
  
      </ul>
      </div>
  );
};

export default Arrival;
