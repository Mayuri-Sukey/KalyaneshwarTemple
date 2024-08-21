import React from "react";
import Logo from "../assets/download.png";
import Gallery from "../assets/images/gallery.jpg";
import saibaba1 from "../assets/images/saibaba1.jpg";
import saibaba2 from "../assets/images/saibaba2.jpeg";
import saibaba3 from "../assets/images/saibaba3.jpg";
import saibaba4 from "../assets/images/saibaba4.jpg";
import saibaba5 from "../assets/images/saibaba5.jpeg";
import G1 from "../assets/kalyneshwar/g1.jpg";
import G2 from "../assets/kalyneshwar/g2.jpg";
import G3 from "../assets/kalyneshwar/g3.jpg";
import G4 from "../assets/kalyneshwar/g4.jpg";
import G5 from "../assets/kalyneshwar/g5.jpg";
import G6 from "../assets/kalyneshwar/g6.jpg";
import G7 from "../assets/kalyneshwar/g7.jpg";
import G8 from "../assets/kalyneshwar/mahadev.jpg";
import G9 from "../assets/kalyneshwar/g1.jpg";
import G10 from "../assets/kalyneshwar/g2.jpg"

const GalleryComponent = () => {
  return (
    <section>
      <div className="gallery">
        <div className="title-wrapper">
          <div className="about-head">
            <span className="about-head-span">
              <h3>Gallery</h3>
            </span>
          </div>
          {/* <div className="img-container">
            <img classname="img" src={Logo} alt="" width={100} />
          </div> */}
        </div>

        <div className="gallery-main-parent">
          <div className="gallery-main-div">
            {/* <img src={saibaba1} alt="saibabaimg" />
            <img src={saibaba2} alt="saibabaimg" /> */}
            <img src={G1} alt="saibabaimg" />
            <img src={G2} alt="saibabaimg" />
            <img src={G3} alt="saibabaimg" />
            <img src={G4} alt="saibabaimg" />
            <img src={G5} alt="saibabaimg" />
            <img src={G6} alt="saibabaimg" />
            <img src={G7} alt="saibabaimg" />
            <img src={G8} alt="saibabaimg" />
            <img src={G9} alt="saibabaimg" />
            <img src={G10} alt="saibabaimg" />
            {/* <img src={saibaba5} alt="saibabaimg" />
            <img src={saibaba1} alt="saibabaimg" /> */}
          </div>
        </div>

        {/* previous code */}

        {/* <div className="imgs">
          <div className="frame">
            <img src={Frame} alt="" width={800} height={550} />
          </div>

          <div className="gall">
            <a className="" href="#">
              <img src={Gallery} alt="" width={1300} height={300} />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GalleryComponent;
