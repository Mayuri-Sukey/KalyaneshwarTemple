import React, { useState, useEffect } from "react";
import "./Menu.css"; // Import your CSS file
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPlay, FaPause } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import Donate from "../../assets/images/donationsai.png";
import backgroundMusic from "../../../src/audio/namamish_mishan.mp3";

const Social = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isDonateVisible, setDonateVisible] = useState(true);
  const [isMusicPlaying, setMusicPlaying] = useState(false); // Initialize music as paused

  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    
    // Handle autoplay restriction
    const playMusic = () => {
      audio.play().catch(error => {
        console.log('Autoplay prevented: ', error);
      });
    };

    if (isMusicPlaying) {
      playMusic();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isMusicPlaying]);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleDonate = () => {
    setDonateVisible(!isDonateVisible);
  };

  const toggleMusic = () => {
    setMusicPlaying(!isMusicPlaying);
  };

  return (
    <>


     

<div className="music_menu">
          <a className="music" onClick={toggleMusic} title={isMusicPlaying ? "Pause" : "Play"}>
            {isMusicPlaying ? <FaPause id="pause" /> : <FaPlay id="play" />}
          </a>
        </div>
<div className="menu trans">
        <a className="" onClick={handleDonate}>
          <img src={Donate} alt="" />
        </a>
        <a
          href="#"
          className={`${isDonateVisible ? "hidden" : "label"}`}
          target="_blank"
        >
          <span className="don">Donate</span>
        </a>
      </div>

      <div className="menu">
        <a
          href="#"
          className={`${isMenuVisible ? "hidden" : "show"}`}
          target="_blank"
        >
          <FaFacebook id="facebook" />
        </a>
        <a
          className={` ${isMenuVisible ? "hidden" : "show"}`}
          href="https://www.instagram.com/shree_kalyaneshwar_mandir?igsh=MWtpaGM3bzZsZGZ4Mw=="
          target="_blank"
        >
          <FaInstagram id="insta" />
        </a>
        <a
          className={`${isMenuVisible ? "hidden" : "show"}`}
          href="#"
          target="_blank"
        >
          <FaTwitter id="twitter" />
        </a>
        <a
          className={`${isMenuVisible ? "hidden" : "show"}`}
          href="#"
          target="_blank"
        >
          <FaYoutube id="youtube" />
        </a>
        <a className="" onClick={handleClick}>
          <BiSolidMessageSquareAdd id="soc" />
        </a>
      
      </div>

      
    </>
  );
};

export default Social;
