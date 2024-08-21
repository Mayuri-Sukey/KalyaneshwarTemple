import React, { useEffect } from "react";
import { RiLiveLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Pillar from "../assets/images/pillar.png";
import Logo from "../assets/download.png";
import Pillar2 from "../assets/images/pillar2.png";
import BG from "../assets/images/bg.png";
import Sai from "../assets/kalyneshwar/bhole.png";
import Spin from '../assets/images/Circle.png';
import { useNavigate } from "react-router-dom";



const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleLiveButtonClick = () => {
    window.open(
      "https://sai.org.in/node/504?width=960&height=540&iframe=true",
      "_blank"
    );
  };
  

  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/about');
  }

  return (
    <section className="about">
      <style>
        {`
          @-webkit-keyframes aitf {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          .live-btn {
            display: inline-block;
            background-color: #ff0000;
            color: #ffffff;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
            border-radius: 5px;
          }
          .live-btn:hover {
            background-color: #cc0000;
          }
        `}
      </style>

      <div className="title-wrapper">
        <div className="about-head">
          <h3>
            <span className="about-head-span">About Us</span>
          </h3>
        </div>
      </div>

      <div className="contain">
        <div
          className="image-div"
          data-aos="fade-right"
          data-aos-duration="1500" 
        >
          <img src={Spin} alt="" width={550} className="bg" />
          <img src={Sai} alt="" className="sai" />
        </div>

        <div className="info-div" data-aos="fade-left" data-aos-duration="1500">
          <p>
            Shri Kalyaneshwar Sansthan Trust, Nagpur, is the Governing and
            Administrative body of Shri Kalyaneshwar Mandir and all others
            temples in this premises, and devoted towards teachings of Bhole Baba{" "}
            {/* <span className="red">"Sabka Malik Ek"</span> */}
             and providing
            amenities to Bholenath devotees who are visiting Kalyaneshwar Mandir.
          </p>
          <button className="btn" >Read More</button>
        </div>
      </div>

      {/* <div className="live" data-aos="fade-up" data-aos-duration="1500">
        <h1>Live Darshan</h1>
        <button className="live-btn" onClick={handleLiveButtonClick}>
          Live
          <RiLiveLine className="liveicon" />
        </button>
      </div> */}
    </section>
  );
};

export default AboutSection;
