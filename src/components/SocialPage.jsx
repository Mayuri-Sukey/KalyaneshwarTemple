import React from 'react'
import { FaFacebook,FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import Donate from '../assets/images/donate.png'


const SocialPage = () => {

 
  
  return (
    <section>
      <div className="social-links adjust">
        <div className="social-btn reds">
          <img src={Donate} alt="" />
          <span>Donate</span>
        </div>
      </div>
      <div className="social-links">
        <div className="social-btn">
          <FaFacebook id="facebook" />
          <span>@shrisaibabasansthantrustshirdi</span>
        </div>

        <div className="social-btn">
          <FaInstagram id="insta" />
          <span>@shreesaibabasansthantrust</span>
        </div>

        <div className="social-btn">
          <FaTwitter id="twitter" />
          <span>@ssstshirdi</span>
        </div>

        <div className="social-btn">
          <FaYoutube id="youtube" />
          <span>@saibabasanstantrust</span>
        </div>
      </div>
    </section>
  );
};

export default SocialPage;
