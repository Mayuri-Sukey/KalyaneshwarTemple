import React from "react";
import { useState } from "react";
// import data from "./data";
import "./history.css";
import Navbar from "../../components/Navbar";
import Social from "../../components/social-icon/Social";
import Footer from "../../components/Footer";
import saiimg from "../../assets/images/saibaba4.jpg";
import regimg from "../../assets/images/templeimgregulation.jpg";
// import { motion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import Bookone from "./Bookone";
import Content from "./Content";

const data = [
  { id: 1, heading: 'Introduction', sunhead: <Bookone />, sunhead2: <Content/> },
  { id: 2, heading: 'Mission & Advice', sunhead: <Bookone />, sunhead2: <Content/> },
  { id: 3, heading: 'Wonderful Incarnation', sunhead: <Bookone />, sunhead2: <Content/> },
  { id: 4, heading: 'Udi', sunhead: <Bookone />, sunhead2: <Content/>},
  { id: 5, heading: 'Personality', sunhead: <Bookone />, sunhead2: <Content/> },
  { id: 6, heading: 'Personal Belongings', sunhead: <Bookone />, sunhead2: <Content/> },
  { id: 7, heading: 'Chronology', sunhead: <Bookone />, sunhead2: <Content/> },
];


const History = () => {
  // const [selected, setSelected] = useState(null);

  // function handleSingleSelection(getCurrentId) {
  //   setSelected(getCurrentId === selected ? null : getCurrentId);
  // }
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };


  return (
    <>
      <div className="about-main">
      <Navbar />
        <Social />
        <marquee behavior="" direction="">
          🚩
          <span className="about-marquee">
            Shri Saibaba Sansthan Trust, Shirdi
          </span>
          🚩
        </marquee>
        <div className="about-path">
          <span> Home &#9654;  SAI Temple &#9654; History</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${saiimg})` }}
        ></div>

        <div className="about-head">
          <h1>History</h1>
        </div>


        <div className="acc-wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="new-new-title"
              >
                <h3>{dataItem.heading}</h3>
                <span className="button">{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              <AnimatePresence initial={false}>
                {selected === dataItem.id && (
                  <motion.div 
                    className="acc-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {dataItem.sunhead2}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>


        <Footer />
      </div>
    </>
  );
};

export default History;






// import React, { useState, useEffect } from "react";
// import "./history.css";
// import Navbar from "../../components/Navbar";
// import Social from "../../components/social-icon/Social";
// import Footer from "../../components/Footer";
// import saiimg from "../../assets/images/saibaba4.jpg";
// import { motion, AnimatePresence } from 'framer-motion';
// import Bookone from "./Bookone";
// import Content from "./Content";

// const data = [
//   { id: 1, heading: 'Introduction', sunhead: <Bookone />, sunhead2: <Content/> },
//   { id: 2, heading: 'Mission & Advice', sunhead: <Bookone />, sunhead2: <Content/> },
//   { id: 3, heading: 'Wonderful Incarnation', sunhead: <Bookone />, sunhead2: <Content/> },
//   { id: 4, heading: 'Udi', sunhead: <Bookone />, sunhead2: <Content/>},
//   { id: 5, heading: 'Personality', sunhead: <Bookone />, sunhead2: <Content/> },
//   { id: 6, heading: 'Personal Belongings', sunhead: <Bookone />, sunhead2: <Content/> },
//   { id: 7, heading: 'Chronology', sunhead: <Bookone />, sunhead2: <Content/> },
// ];

// const History = () => {
//   const [selected, setSelected] = useState(null);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleSingleSelection = (id) => {
//     setSelected(selected === id ? null : id);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <div className="about-main">
//         <Navbar />
//         <Social />
//         <marquee behavior="" direction="">
//           🚩
//           <span className="about-marquee">
//             Shri Saibaba Sansthan Trust, Shirdi
//           </span>
//           🚩
//         </marquee>
//         <div className="about-path">
//           <span> Home &#9654; About Sanathan &#9654; About Us</span>
//         </div>

//         <div
//           className="about-background"
//           style={{ backgroundImage: `url(${saiimg})` }}
//         ></div>

//         <div className="about-head">
//           <h1>History</h1>
//         </div>

//         <div className="acc-wrapper">
//           <div className="accordion">
//             {data && data.length > 0 ? (
//               data.map((dataItem) => (
//                 <div className="item" key={dataItem.id}>
//                   <div
//                     onClick={() => handleSingleSelection(dataItem.id)}
//                     className="new-new-title"
//                   >
//                     <h3>{dataItem.heading}</h3>
//                     <span className="button">{selected === dataItem.id ? '-' : '+'}</span>
//                   </div>
//                   <AnimatePresence initial={false}>
//                     {selected === dataItem.id && (
//                       <motion.div
//                         className="acc-content"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {/* {windowWidth >= 100 ? dataItem.sunhead2 : dataItem.sunhead} */}
//                         {dataItem.sunhead2}

//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))
//             ) : (
//               <div>No data found!</div>
//             )}
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default History;