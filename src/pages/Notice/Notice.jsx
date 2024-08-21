import React from 'react'
import Footer from '../../components/Footer';
import "../../components/Navbar";
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import pujaImage from "../../assets/images/pujaImage.jpg";
import "../Notice/Notice.css";
import { GrDocumentPdf } from "react-icons/gr";


const Notice = () => {
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
                    <span> Home &#9654;  Daily Updates   &#9654; Notice
</span>
                </div>
                <div className="places-head">
                    <h1 style={{textAlign:"center"}}>Notice
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
              <th>Period</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01.</td>
              <td>Legal action will be taken against those who publish fictitious / false information regarding the name and biography of Shri Sai Baba.</td>
              <td></td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/nivedan22122021.pdf'}>
                <GrDocumentPdf className='notice_pdf'/>
                </button>
              </td>
            </tr>
            <tr>
              <td>02.</td>
              <td>माहे जुलै २०२३ ते माहे ऑगस्‍ट २०२३ अखेर मंदिर व मंदिर परिसरात सापडलेल्‍या बिनधनी वस्‍तू व रोख रक्‍कम</td>
              <td></td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/bindhani%20vastu28092023.pdf'}>
                <GrDocumentPdf className='notice_pdf'/>                </button>
              </td>
            </tr>
            <tr>
              <td>03.</td>
              <td>अनुकंपा प्रतिक्षासुची</td>
              <td></td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95%20%E0%A4%B5%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A4%82%E0%A4%AA%E0%A4%BE%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%E0%A4%B8%E0%A5%81%E0%A4%9A%E0%A5%80.pdf'}>
                <GrDocumentPdf className='notice_pdf'/>                </button>
              </td>
            </tr>
            <tr>
              <td>04.</td>
              <td>Shri Saibaba Diary 2024 (Marathi-English) and Shri Saibaba Calendar (1 page) are now available in Online Website and also Shirdi Local Books Counters and Dadar, Mumbai Office.</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>05.</td>
              <td>Circular publishing Seniority list of Contract Employees</td>
              <td></td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/Circular%20publishing%20Seniority%20list%20of%20Contract%20Employees.pdf'}>
                <GrDocumentPdf className='notice_pdf'/>                </button>
              </td>
            </tr>
            <tr>
              <td>06.</td>
              <td>Devotee's List for Shri Sai Baba Aarti-Clothes. For the Month of June-2024</td>
              <td>03/07/2024</td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/jun-2024%20%20Aarthi%20list.pdf'}>
                <GrDocumentPdf className='notice_pdf'/>                </button>
              </td>
            </tr>
            <tr>
              <td>07.</td>
              <td>Regarding Lost articles - May Month 2024</td>
              <td></td>
              <td>
                <button className="notice_btn1" onClick={() => window.location.href='https://sai.org.in/sites/default/files/New%20Doc%2006-03-2024%2011.38.pdf'}>
<GrDocumentPdf className='notice_pdf'/>                </button>
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

export default Notice
