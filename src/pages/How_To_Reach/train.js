import React, { useState } from "react";
import { list2 } from "./dummy"; // Ensure this import path is correct

const Train = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDestinations = list2.filter((item) =>
    item.Train_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="train_container">
      <h1 className="train_heading h1">By Train</h1>
      <p>
        Shirdi can be reached from the new railway station at Sainagar, other
        Railway stations are Manmad-Junction (60 Kms), Kopargaon(22 Kms) and
        Nagarsul (50 Kms) on the Central Railway.
      </p>

      <div className="train_station-info">
        <h2 className="h2">Sainagar Shirdi (SNSI), Sainagar Shirdi Railway Station</h2>
        <div className="train_station-details">
          <p><strong>Name:</strong> Sainagar Shirdi</p>
          <p><strong>Code:</strong> SNSI</p>
          <p><strong>City:</strong> Sainagar Shirdi</p>
          <p><strong>More Sainagar Shirdi stations:</strong> Sainagar Shirdi</p>
        </div>
      </div>

      <div className="train_train-list">
        <h4>List of Trains Starting From and Passing Through Sainagar Shirdi (SNSI), SAINAGAR SHIRDI Railway Station:</h4>
      </div>

      <input
        type="text"
        placeholder="Search Train..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <ul className="train_responsive-table">
        <li className="train_table-header">
          <div className="col col-1">No.</div>
          <div className="col col-2">Train Name (Code)</div>
          <div className="col col-3">Arrives</div>
          <div className="col col-4">Departs</div>
          <div className="col col-5">Stop Time</div>
          <div className="col col-6">M</div>
          <div className="col col-7">T</div>
          <div className="col col-8">W</div>
          <div className="col col-9">T</div>
          <div className="col col-10">F</div>
          <div className="col col-11">S</div>
          <div className="col col-12">S</div>
        </li>

        {filteredDestinations.length === 0 ? (
       
            <p className="not-found">Train is not available</p>
      
        ) : (
          filteredDestinations.map((item) => (
            <li className="train_table-row" key={item.No}>
              <div className="col col-1" data-label="No.">{item["No."]}</div>
              <div className="col col-2" data-label="Train Name (Code)">{item.Train_Name}</div>
              <div className="col col-3" data-label="Arrives">{item.Arrives}</div>
              <div className="col col-4" data-label="Departs">{item.Departs}</div>
              <div className="col col-5" data-label="Stop Time">{item["Stop Time"]}</div>
              <div className="col col-6" data-label="M">{item.M ? "Y" : "N"}</div>
              <div className="col col-7" data-label="T">{item.T ? "Y" : "N"}</div>
              <div className="col col-8" data-label="W">{item.W ? "Y" : "N"}</div>
              <div className="col col-9" data-label="T">{item.T ? "Y" : "N"}</div>
              <div className="col col-10" data-label="F">{item.F ? "Y" : "N"}</div>
              <div className="col col-11" data-label="S">{item.S ? "Y" : "N"}</div>
              <div className="col col-12" data-label="S">{item.S ? "Y" : "N"}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Train;
