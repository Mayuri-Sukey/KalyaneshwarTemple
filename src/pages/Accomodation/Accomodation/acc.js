import React from 'react';
// import './App.css';

const data = [
  {
    no: "01",
    location: "Sai Bhakta Niwas",
    roomType: "AC",
    roomDescription: "6 beds attached room with AC",
    minCap: 6,
    maxCap: 8,
    ratePerDay: "",
    remark: "Floor mattress will be provided for extra Persons"
  },
  {
    no: "02",
    location: "Sai Ashram Bhaktiniwas",
    roomType: "AC",
    roomDescription: "3 beds AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "600",
    remark: "Floor mattress will be provided for extra Persons"
  },
  {
    no: "03",
    location: "Dwarawati",
    roomType: "AC-WESTERN",
    roomDescription: "3 beds AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "900",
    remark: "Floor mattress will be provided for extra Persons"
  },
  {
    no: "04",
    location: "Sai prasad Niwassthan",
    roomType: "AC",
    roomDescription: "3 beds AC room",
    minCap: 3,
    maxCap: 5,
    ratePerDay: "",
    remark: "Child will be charged ₹100."
  },
  {
    no: "05",
    location: "Sai Niwas",
    roomType: "AC WESTRAN",
    roomDescription: "",
    minCap: 2,
    maxCap: 2,
    ratePerDay: "800",
    remark: "Floor mattress will be provided for extra Persons ₹200. per head"
  }
];

const Acc = () => {
  return (
    <div className="Ac_App">
      <h1 className='General_h1'>A.C. Rooms Available For Online Booking & Local Booking</h1>
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
              <td className='.td'data-label="No.">{item.no}</td>
              <td className='.td'data-label="Location Name">{item.location}</td>
              <td className='.td'data-label="Room Type">{item.roomType}</td>
              <td className='.td'data-label="Room Description">{item.roomDescription}</td>
              <td className='.td'data-label="Min Cap">{item.minCap}</td>
              <td className='.td'data-label="Max Cap">{item.maxCap}</td>
              <td className='.td'data-label="Rate per Day ( ₹ )">{item.ratePerDay}</td>
              <td className='.td'data-label="Remark">{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Acc;
