import React from 'react';
import { motion } from 'framer-motion';
import "./dailyprogram.css";
import map from "../../assets/map.png";
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import Footer from '../../components/Footer';
import saiimg from "../../assets/images/saibaba4.jpg";
import timelineElements from './timelineElements';
import { ReactComponent as WorkIcon } from "./namaste.svg";
import { ReactComponent as SchoolIcon } from "./namaste.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const DailyProgram = () => {

  let workIconStyles = { background: "#f9c74f" };
  let schoolIconStyles = { background: "#f9c74f" };

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
          <span> Home &#9654; SAI Temple &#9654;Daily Programme</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${saiimg})` }}
        ></div>

        <div className="about-head">
          <h1>Daily Programme</h1>
        </div>

        <div className="timeline-container">
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              return (
                <VerticalTimelineElement
                  key={element.id}
                  // date={element.title}
                  // dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <p className="vertical-timeline-element-description">
                    {element.description}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DailyProgram;
