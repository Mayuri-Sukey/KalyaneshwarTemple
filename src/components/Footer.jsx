import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
} from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";


const Footer = () => {

  const[isVisible,setIsVisible ] = useState(false);
  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };

  const listenToScroll = () =>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
  })

  return (
    <>
    <footer>
      <div className="footer">
        <div className="quick">
          <div>
            <h2>Quick Links</h2>
          </div>
          <div className="ele-wrap">
            <div className="ele">
              <ul>
                <li>About Us</li>
                <li>Servicces</li>
                <li>Daily Updates</li>
                <li>Contact Us</li>
                {/* <li>Statistical Reports</li> */}
              </ul>
            </div>

            {/* <div className="ele">
              <ul>
                <li>Appeal</li>
                <li>Annual Reports</li>
                <li>Resolutions</li>
                <li>Notice</li>
                <li>Information Centers</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="quick">
          <h2>Reach Us On</h2>

          <div className="con">
            <h5>Please do contact on</h5>
            <span>9874563214</span>
          </div>

          <div className="con">
            <h5>Help Line No.</h5>
            <span>+91 9874563214 / 9874563214 / 9874563214 / 9874563214</span>
          </div>
        </div>

        <div className="quick">
          <h2>Follow Us On</h2>

          {/* <div className='ico'>
                        <ul>
                            <li><FaFacebook id="facebook"/></li>
                            <li><FaInstagram id="insta"/></li>
                            <li><FaTwitter id="twitter" /></li>
                            <li><FaYoutube id="youtube"/></li>
                            
                        </ul>
                    </div> */}
          <div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.instagram.com/shree_kalyaneshwar_mandir?igsh=MWtpaGM3bzZsZGZ4Mw=="
                  id="footer-insta-ico-a"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  id="footer-twit-ico-a"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  id="footer-youtube-ico-a"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  id="footer-face-ico-a"
                  target="_blank"
                  className="footer-facebook-a"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

          <h2>Download App</h2>

          <div className="ico">
            <ul id="down" className="footer-adroid-parent">
              <li>
                <IoLogoAndroid />
              </li>
              <li>
                <FaApple />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-end">
        <div className="footer-term">
          <h4>© Copyright Shree Kalyaneshwar Mandir, Nagpur</h4>
        </div>
        <div className="term footer-term">
          Terms & Conditions | Terms & Disclaimer | Contact Us
        </div>

        <div className="term footer-term">
          Design and Developed by{" "}
          <strong>
            &#169; <i> Royals WebTech</i>
          </strong>
          .
        </div>
      </div>
    </footer>

      {/* //scroll to top */}
      {isVisible && (   <div className='scroll_top' onClick={scrollTop}>
      <FaArrowUp className="arrow"/>
    </div>)}
    </>
  );
};

export default Footer;