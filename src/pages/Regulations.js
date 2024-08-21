import React, { useState } from "react";
import NewsComponent from "../components/NewsComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import regimg from "../assets/images/templeimgregulation.jpg";
import DailyUpdate from "../components/Update";

const Regulations = () => {
  const [regulation, setRegulation] = useState([
    {
      year: 2021,
      title: "SSST Notifications",
    },
    {
      year: 2017,
      title: "Sansthan Regulations",
    },
    {
      year: 2013,
      title: " Notifications",
    },
    {
      year: 2013,
      title: "Service Regulations",
    },
    {
      year: 2013,
      title: "Management Committee & Other Regulations",
    },
    {
      year: 2011,
      title: "Sansthan Regulations",
    },
    {
      year: 2004,
      title: "Sansthan Regulations",
    },
    {
      year: 1956,
      title: "योजना कानू व नियम",
    },
  ]);
  return (
    <>
      <Navbar />
      <div
        className="about-background"
        style={{ backgroundImage: `url(${regimg})` }}
      ></div>
      <div>
        <marquee behavior="" direction="">
          🚩
          <span className="about-marquee">
            Shri Saibaba Sansthan Trust, Shirdi
          </span>
          🚩
        </marquee>
        <div className="about-path">
          <span> Home &#9654; About Sanathan &#9654; sanathan-regulation</span>
        </div>
        <div className="adhok-head">
          <h1>Sansthan Regulations</h1>
        </div>
      </div>
      <div className="regulation-container">
        <div className="regulation-left">
          <h3>Shri Saibaba Sansthan Trust Regulations</h3>
          <div>
            {/* Download Card */}
            <div className="regul-card-main">
              {regulation.map((data, index) => (
                <div class="regul-card" key={index}>
                  <div class="regul-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="1.5"
                          stroke="#ffffff"
                          d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="regul-content">
                    <span class="regul-title">{data.year}</span>
                    <div class="regul-desc">
                    {data.title}
                    </div>
                    <div class="regul-actions">
                      <div>
                        <a href="#" class="regul-download">
                         Marathi
                        </a>
                      </div>
                      <div>
                        <a href="#" class="regul-notnow">
                          English
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
         
        </div>
        <div className="regulation-right">
          <NewsComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Regulations;
