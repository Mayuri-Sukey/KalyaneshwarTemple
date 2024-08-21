import React from 'react';
import "./annualreport.css";
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import Footer from '../../components/Footer';
import saiimg from "../../assets/images/saibaba4.jpg";
// import namaste from "./namaste.svg";
import "react-vertical-timeline-component/style.min.css";
import { Link } from 'react-router-dom';
import { cardData } from './cardData';

const AnnualRports = () => {
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
          <span> Home &#9654; About Sanathan &#9654; About Us</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${saiimg})` }}
        ></div>

        <div className="about-head">
          <h1>Annual Reports</h1>
        </div>

       {/* <!-- partial:index.partial.html --> */}



<div className="main-main-con">

{ cardData.map((data)=>(
  <div className="ag-format-container">
    <div className="ag-courses_box">
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
  
          <div className="ag-courses-item_title"
          key={data.id}>
            {data.title}
          </div>
  
          <div className="ag-courses-item_date-box">
          <Link
          to={data.previewlink}>
            <button className="new-btn">
            Preview
            </button>
            </Link> 

            <Link
          to={data.downloadlink}>
            <button className="new-btn">
          Download
           </button>
            </Link> 
          
          </div>
        </a>
      </div>
    </div>
  </div>
  ))}
  </div>

{/* <!-- partial --> */}



        <Footer />
      </div>
    </>
  );
};

export default AnnualRports;

