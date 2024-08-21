import React from 'react';
import './Video.css';
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import Footer from '../../components/Footer';
import pujaImage from "../../assets/images/pujaImage.jpg"

const videos = [
  {
    "src": "https://sai.org.in/sites/default/files/SAI%20SHRUSHTI%20SHIRDI%20marathi.mp4",
    "title": "Sai Darshan"
  },
  {
    "src": "https://www.youtube.com/embed/zdp1JQsZuzQ",
    "title": "Sai Baba Bhagto Ke Liye"
  },
  {
    "src": "https://www.youtube.com/embed/GJv4mPk7ccU",
    "title": "An appeal To Shree Sai Baba Devote"
  }
];

function Video() {
  return (
 <div>

 
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
                    <span> Home &#9654; Sai Temple &#9654; Puja
</span>
                </div>
                <div className="places-head">
                    <h1>Sai Darshan Video
</h1>
                </div>
            </div>
        
<div className='video-Section'>
    <section className="Video_section-container">
      <div className="Video_section-content">
        <div>
          <div className="Video_section-title">Sai Darshan</div>
          <p className="Video_section-subtitle">Explore Sai Darshan Videos</p>
        </div>
        <div className="Video_video-grid">
          {videos.map((video, index) => (
            <div className="Video_video-container" key={index}>
              <iframe
                src={video.src}
              
                allow=" encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="Video_video-iframe"
              />
              <div className="Video_video-overlay">
                <h3 className="Video_video-title">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
   
    <Footer/>

</div>
  );
}

export default Video;
