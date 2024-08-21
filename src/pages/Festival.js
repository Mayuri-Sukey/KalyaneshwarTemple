import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Social from '../components/social-icon/Social'

const Festival = () => {
  return (
    <>
    <Navbar/>
    <Social/>

    <div
                className="about-background"
                // style={{ backgroundImage: `url(${templeComplex})` }}
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
                    <span> Home &#9654; Sai Temple &#9654; Festivals</span>
                </div>
                <div className="places-head">
                    <h1>Upcoming Festivals</h1>
                </div>
            </div>
   

    <div className='festivals'>

    </div>
    <Footer/>
      
    </>
  )
}

export default Festival
