import React from 'react';
// import './App.css';

const data = [
  {
    no: "01",
    location: "Sai Bhakta Niwas",
    roomType: "NON AC",
    roomDescription: "3 beds attached non AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "200",
    remark: "Floor mattress will be provided for extra persons"
  },
  {
    no: "02",
    location: "Sai Bhakta Niwas",
    roomType: "NON AC",
    roomDescription: "11 beds attached non AC room",
    minCap: 2,
    maxCap: 11,
    ratePerDay: "",
    remark: ""
  },
  {
    no: "03",
    location: "Sai Ashram Bhaktniwas",
    roomType: "NON AC",
    roomDescription: "3 beds non AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "",
    remark: "Floor mattress will be provided for extra persons"
  },
  {
    no: "04",
    location: "Dwarawati",
    roomType: "NON AC-WESTREN",
    roomDescription: "3 beds non AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "500",
    remark: "Floor mattress will be provided for extra persons"
  },
  {
    no: "05",
    location: "Dwarawati",
    roomType: "NON AC-INDIAN",
    roomDescription: "3 beds non AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "500",
    remark: "Floor mattress will be provided for extra persons"
  },
  {
    no: "06",
    location: "Sai Udyan",
    roomType: "NON AC",
    roomDescription: "3 beds non AC room",
    minCap: 10,
    maxCap: 15,
    ratePerDay: "250",
    remark: ""
  },
  {
    no: "07",
    location: "Sai Udyan",
    roomType: "NON AC",
    roomDescription: "",
    minCap: 8,
    maxCap: 10,
    ratePerDay: "150",
    remark: ""
  },
  {
    no: "08",
    location: "Shanti Niketan",
    roomType: "NON AC",
    roomDescription: "",
    minCap: 3,
    maxCap: 4,
    ratePerDay: "200",
    remark: ""
  },
  {
    no: "09",
    location: "Shanti Niketan",
    roomType: "NON AC",
    roomDescription: "",
    minCap: 6,
    maxCap: 7,
    ratePerDay: "300",
    remark: ""
  },
  {
    no: "10",
    location: "Bus Stand",
    roomType: "NON AC",
    roomDescription: "",
    minCap: 4,
    maxCap: 6,
    ratePerDay: "300",
    remark: ""
  },
  {
    no: "11",
    location: "Bus Stand",
    roomType: "NON AC",
    roomDescription: "",
    minCap: 10,
    maxCap: 10,
    ratePerDay: "500",
    remark: ""
  }
];

const Non = () => {
  return (
    <div className="Ac_App">
      <h1 className='General_h1'>Non A.C. Rooms Available For Online Booking & Local Booking</h1>
      <table>
        <thead>
          <tr>
            <th className='.th'>No.</th>
            <th className='.th'>Location Name</th>
            <th className='.th'>Room Type</th>
            <th className='.th'>Room Description</th>
            <th className='.th'>Min Cap</th>
            <th className='.th'>Max Cap</th>
            <th className='.th'>Rate per Day ( ₹ )</th>
            <th className='.th'>Remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='.td' data-label="No.">{item.no}</td>
              <td className='.td' data-label="Location Name">{item.location}</td>
              <td className='.td' data-label="Room Type">{item.roomType}</td>
              <td className='.td' data-label="Room Description">{item.roomDescription}</td>
              <td className='.td' data-label="Min Cap">{item.minCap}</td>
              <td className='.td' data-label="Max Cap">{item.maxCap}</td>
              <td className='.td' data-label="Rate per Day ( ₹ )">{item.ratePerDay}</td>
              <td className='.td' data-label="Remark">{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Non;
