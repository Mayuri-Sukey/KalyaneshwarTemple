import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Social from '../../components/social-icon/Social'
import pujaImage from "../../assets/images/pujaImage.jpg";
import "../HelplineNo/EmergencyHelpline.css";

const EmergencyHelpline = () => {
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
                    <span> Home &#9654;  Contact Us&#9654;   Emergency Helpline
</span>
                </div>
                <div className="places-head">
                    <h1>Emergency Helpline
</h1>
                </div>
            </div>


            <div className='helpline-section'>
            <div class="helpline_container1">
        <h2>
            Emergency  Service Helpline
        </h2>
    </div>
        <div class="helpline_container2">
        <table class="helplinetable">
            <thead>
            <tr>
                <th>No.</th>
                <th>Department Name</th>
                <th>Telephone Numbers</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01.</td>
                <td>Sansthan PRO office</td>
                <td>02423-258500/258777 Mob- 9404592599</td>
            </tr>
            <tr>
                <td>02.</td>
                <td>Shirdi nagara panchayath (Fire Dept.)</td>
                <td>	02423-255150</td>
            </tr>
            <tr>
                <td>03.</td>
                <td>Sansthan Fire Department</td>
                <td>02423-258989 / 256675 / 2589982</td>
            </tr>
            <tr>
                <td>04.</td>
                <td>Shirdi Police Department</td>
                <td>	02423-255133</td>
            </tr>
            <tr>
                <td>05.</td>
                <td>Shirdi Police Traffic Department</td>
                <td>02423-256331                </td>
            </tr>
            <tr>
                <td>06.</td>
                <td>Sansthan Security Department	</td>
                <td>02423-258888/258869</td>
            </tr>
            <tr>
                <td>07.</td>
                <td>Saibaba Hospital</td>
                <td>02423-258666</td>
            </tr>
            <tr>
                <td>08.</td>
                <td>Sainath Hospital</td>
                <td>	02423-258555</td>
            </tr>
            <tr>
                <td>09.</td>
                <td>	Control Room No.</td>
                <td>+91 7588371245 / 7588372254</td>
            </tr>
            <tr>
                <td>10.</td>
                <td>	Helpline No.</td>
                <td>+91 75883 74469 / 75883 74489 / 75883 75204</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>

    <Footer />

    
      
    </>
  )
}

export default EmergencyHelpline
