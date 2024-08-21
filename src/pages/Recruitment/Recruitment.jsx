import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import "./recruitment.css";
import pujaImage from "../../assets/images/pujaImage.jpg";
import { GrDocumentPdf } from "react-icons/gr";



const Recruitment = () => {
  return (
    <>
      <Navbar/>
      <Social/>

      <div
                className="about-background"
                style={{ backgroundImage: `url(${pujaImage})` }}
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
                    <span> Home &#9654;  Daily Updates   &#9654;  Recruitment
</span>
                </div>
                <div className="places-head">
                    <h1 style={{textAlign:"center"}}>Recruitment
</h1>
                </div>
            </div>

            

            <div className='notice_Sectiobn'>
            <div className="notice_container1">
      <div className="notice_container2">
        <table className="noticetable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
             
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01.</td>
              <td>श्री साईबाबा व श्री साईनाथ रुग्‍णालयाकडील वैद्यकीय अधिकारी यांची आवश्‍यक रिक्‍त पदे कंत्राटी पध्‍दतीने ११ महिनचे कालावधीसाठी भरणेसाठी जाहिरात</td>
             
              <td>
                <button className="notice_btn1" onClick={() => window.location.href=''}>
                
                <GrDocumentPdf />
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
    </div>
           
      <Footer/>
    </>
  )
}

export default Recruitment
