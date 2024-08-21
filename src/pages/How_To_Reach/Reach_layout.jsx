import React from 'react'
import HowToreach from './how_To_reach'
import Navbar from '../../components/Navbar'
import Social from '../../components/social-icon/Social'
import Footer from '../../components/Footer'
import regimg from "../../assets/images/templeimgregulation.jpg";
function Reach_layout({children}) {
  return (
    <div >
         <Navbar/>
         <Social/>
         <div
                className="about-background"
                style={{ backgroundImage: `url(${regimg})`,}}
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
                    <span> Home &#9654;   SAI Temple    &#9654; How to reach Shirdi
</span>
                </div>
                <div className="places-head">
                    <h1 style={{textAlign:"left", fontSize:"33px"}}>How to reach Shirdi
</h1>
                </div>
            </div>
            <div className='how-to-reach'>
         <HowToreach/>
         {children}
         <Footer/>
         </div>
    </div>
  )
}

export default Reach_layout