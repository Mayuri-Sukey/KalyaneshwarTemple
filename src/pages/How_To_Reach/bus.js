import React from "react";
import { lists } from "./dummy";
import { useState } from "react";


const Bus = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDestinations = lists.filter((item) =>
    item.Destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bus_container">
      <h1 className="bus_heading">By Bus</h1>
      <p>
        Maharashtra State Transport buses are available from major cities like
        Nashik, Mumbai, Aurangabad, Ahmednagar, Pune, Manmad, and Kopargaon to
        Shirdi. Private air-conditioned buses also available from various
        cities of Maharashtra, Telangana, Gujarat, Andhra Pradesh to Shirdi.
      </p>

      <div className="bus_container">
      <input
        type="text"
        placeholder="Search destination..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
        {/* <h2>Bus Time Table</h2> */}
        {filteredDestinations.length === 0 ? (
        <p className="not-found">Destination not found</p>
      ) : (
        <ul className="bus_responsive-table">
          <li className="bus_table-header">
            <div className="col col-1">NO.</div>
            <div className="col col-2">Destination</div>
            <div className="col col-3">Departure Timings</div>
            {/* Add additional headers as needed */}
          </li>
          {filteredDestinations.map((item) => (
            <li className="bus_table-row" key={item.No}>
              <div className="col col-1" data-label="No.">
                {item.No}
              </div>
              <div className="col col-2" data-label="Destination">
                {item.Destination}
              </div>
              <div className="col col-3" data-label="DepartureTimings">
                {item.DepartureTimings.join(", ")}
              </div>
              {/* Add additional columns as needed */}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Bus;
