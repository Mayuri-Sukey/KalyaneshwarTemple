import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images/Circle.png";
import Social from "../components/social-icon/Social";
import accommodation from "../assets/images/Accommodation.png";
// import live from "../assets/images/";
import donate from "../assets/images/donate1.png";
import Services from "../components/Services";
import GalleryComponent from "../components/GalleryComponent";
// import saiimg from "../assets/images/Shirdi-1.png";
import Gallery1 from "../components/Gallery";
import saibabaimg from "../assets/images/saibaba4.jpg";
import regimg from "../assets/images/templeimgregulation.jpg";

const About = () => {
  return (
    <div className="about-main">
      <Navbar />
      <Social />
      <marquee behavior="" direction="">
        🚩
        <span className="about-marquee">
          Shri Saibaba Sansthan Trust, Shirdi
        </span>
        🚩
      </marquee>
      <div className="about-path">
        <span> Home &#9654; About Sanathan &#9654; AboutUs</span>
      </div>

      <div
        className="about-background"
        style={{ backgroundImage: `url(${regimg})` }}
      ></div>

      <div className="about-head">
        <h1>About Us</h1>
      </div>

      <div className="about-info-parent">
        <div className="about-imgdata-flex">

          <div>
            <img src={saibabaimg} alt="" className="about-dataimg" />
          </div>
          <div>
            <p>
              Shri Saibaba Sansthan Trust, Shirdi, is the Governing and
              Administrative body of the Shri Saibaba's Samadhi Temple and all
              others temples on this premise, and devoted towards development of
              Shirdi village.
            </p>

            <p>
              Shri Saibaba Sansthan Trust, Shirdi, is the authorized body to
              control and manage the day-to-day activities at the Shri Saibaba
              Samadhi Temple. It also provides various facilities like
              Accommodation, Meals (Free), refreshments, and lot more. The
              Sansthan Trust also runs School and Colleges(Junior and Senior),
              English Medium School from class Jr KG to Std X, Industrial
              Training Institute (ITI), Drinking Water Supply, Hospitals (Shri
              Saibaba Superspecility Hospital and Shri Sainath Hospital on
              Charity basis).
            </p>
          </div>
        </div>
        <p>
          Shirdi, a small rural town in the Rahata Taluka of Ahmednagar district
          in the Maharashtra state of India. Shirdi is a secular place where all
          religions are treated as one & a belief in the power of Faith &
          Patience is foremost. A place where all heads bow down in prayer,
          where faith prevails, where hopes are built, where patience pays, and
          where infinite joy and everlasting contentment abound. Such is the
          glory of the place which belongs to the Holy Saint, a true repository
          of wisdom, who pleased all with pious equality and gifted mankind
          ornaments of humanity and peace by saying "SABKA MALIK EK". The
          footprints of Saibaba have made this town a holy place. Millions of
          devotees continuously flock here from all over India and abroad.
          Situated on the Ahmednagar-Manmad highway.
        </p>

        <p>
          Shirdi can be reached from the new railway station at Sainagar;
          Manmad-Junction, Kopargaon and Nagarsul are other nearby railway
          stations on the Central Railway. Shirdi is where the holy soul of Shri
          Satchidanand Sadguru Sainath Maharaj - affectionately known as
          “Saibaba” rests today. Shri Saibaba appeared at Shirdi in his human
          incarnation. For 60 years Baba served mankind and preached his
          precious teachings to the world from here, and then went for
          contemplation (Samadhi) in Shirdi itself. The footprints and the deeds
          of Saibaba have turned this small town into a unique holy place for
          people of all castes, creeds and religions. Saibaba delivered the
          universal slogan of "Shraddha - Saburi", i.e. Faith and Patience for
          everyone, from here itself. The place of his 'Samadhi' has become a
          center-point for innumerable devotees, infusing them with the joy of
          life. While visiting Shirdi, one experiences complete peace of mind, a
          strong self-confidence, and a great sense of purpose. During his
          contemplation (Samadhi) services, Shri Saibaba had consoled his
          devotees with these words - "After I take Samadhi, my bones will speak
          from the grave, and people will throng here." His message is being
          experienced till today. Shirdi is a convenient place to visit
          throughout the year, during all seasons. Baba's Shirdi is one place
          where even today all his devotees come with empty hands, but filled
          with Hope, and go back "Blessed with Contentment with an Everlasting
          Smile on their faces".
        </p>
      </div>

      <div className="about-gallery-div">
        <span>Gallery</span>
        <Gallery1 />
      </div>

      {/* <div className="about-icon-head">
        <div className="about-live">
          <div className="about-img">
            <img src={accommodation} alt="" />
          </div>
          <div className="about-iconname">Accommodation</div>
          <div className="about-morebtn">
            <button>More</button>
          </div>
        </div>
        <div className="about-live">
          <div className="about-img">
            <img src={donate} alt="" />
          </div>
          <div className="about-iconname">Donate</div>
          <div className="about-morebtn">
            <button>More</button>
          </div>
        </div>
        <div className="about-live">
          <div className="about-img">
            <img src={accommodation} alt="" />
          </div>
          <div className="about-iconname">Accommodation</div>
          <div className="about-morebtn">
            <button>More</button>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default About;
