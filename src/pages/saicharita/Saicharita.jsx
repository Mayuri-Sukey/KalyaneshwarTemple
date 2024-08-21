// import React from 'react';
// import "./saicharita.css";
// import Navbar from '../../components/Navbar';
// import Social from '../../components/social-icon/Social';
// import Footer from '../../components/Footer';
// import saiimg from "../../assets/images/saibaba4.jpg";
// import "react-vertical-timeline-component/style.min.css";

// const Saicharita = () => {



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
//           <h1>Saicharita</h1>
//         </div>

       
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Saicharita;

import React from 'react';
import "./saicharita.css";
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import Footer from '../../components/Footer';
import saiimg from "../../assets/images/saibaba4.jpg";
import namaste from "./namaste.svg";
import "react-vertical-timeline-component/style.min.css";
import { Link } from 'react-router-dom';
import { cardData } from './cardData';

const Saicharita = () => {
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
          <span> Home &#9654; e-Library  &#9654; Saicharitra in PDF</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${saiimg})` }}
        ></div>

        <div className="about-head">
          <h1>Saicharita</h1>
        </div>

        <div className="cards-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
             <img src={namaste} alt="Namaste" />
             <p className="card__title">{card.title}</p>


          <div className="card__content">
            <Link to={card.linkPath}>
              <button className="btn1">
                Know More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>

        <Footer />
      </div>
    </>
  );
};

export default Saicharita;
