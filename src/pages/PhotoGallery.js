import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Social from '../components/social-icon/Social';
 import g1 from "../assets/images/g1.jpeg";
 import g2 from "../assets/images/g2.jpeg";
 import g3 from "../assets/images/g3.jpeg";
 import g4 from "../assets/images/g4.jpeg";
 import g5 from "../assets/images/g5.jpeg";
 import g6 from "../assets/images/g6.jpeg";
 import g7 from "../assets/images/g7.jpeg";
 import g8 from "../assets/images/g8.jpeg";
 import g9 from "../assets/images/g9.jpeg";
 import g10 from "../assets/images/g10.jpeg";
 import g11 from "../assets/images/g11.jpeg";
 import g12 from "../assets/images/g12.jpeg";
 import g13 from "../assets/images/g13.jpeg";
 import g14 from "../assets/images/g14.jpeg";
 import g16 from "../assets/images/g16.jpeg";
 import g17 from "../assets/images/g17.jpeg";
 import g18 from "../assets/images/g18.jpeg";
 import g20 from "../assets/images/g20.jpeg";
 import g21 from "../assets/images/g21.jpeg";
 import g22 from "../assets/images/g22.jpeg";
 import g23 from "../assets/images/g23.jpeg";
 import g24 from "../assets/images/g24.jpeg";
 import g25 from "../assets/images/g26.jpeg";
 import g26 from "../assets/images/g27.jpeg";
 import g27 from "../assets/images/g28.jpeg";
 import g28 from "../assets/images/g29.jpeg";
 import g29 from "../assets/images/g30.jpeg";
 import g30 from "../assets/images/g31.jpeg";
 import g31 from "../assets/images/g32.jpeg";
 import g32 from "../assets/images/g33.jpeg";
 import g33 from "../assets/images/g34.jpeg";
 import g34 from "../assets/images/g35.jpeg";
 import gallery from "../assets/images/galleryimage.jpg";
//  import g36 from "../assets/images/g37.jpeg";
 
//  import g38 from "../assets/images/g25.jpeg";
const images = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7 ,
  g8 ,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g16,
  g17,
  g18,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g26,
  g27,
 g28,
  g29,
  g30,
  g31,g32,
  g33,
  g34,
  //g35,
//   g36,
//   g38,
 

];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [animationClass, setAnimationClass] = useState('');

  const handleNext = () => {
    setAnimationClass('imgTransitionNext');
    setTimeout(() => setAnimationClass(''), 500);
    setSelectedImg((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setAnimationClass('imgTransitionPrev');
    setTimeout(() => setAnimationClass(''), 500);
    setSelectedImg((prev) => (prev - 1 + images.length) % images.length);
  };

  const closePopup = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImg]);

  return (
 <>
 
 <Navbar/>
 <Social/>

    <div
    className="about-background"
    style={{ backgroundImage: `url(${gallery})` }}
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
        <span> Home &#9654;  Daily Updates &#9654; Photo Gallery
</span>
    </div>
    <div className="places-head">
        <h1>Photo Gallery
</h1>
    </div>
</div>


<div className='gallery-section'>
    <div className="gallery-wrapper">
      <div className="gallery-inner">
        {images.map((src, index) => (
          <div className="gallery-img" key={index}>
            <img src={src} alt="" onClick={() => setSelectedImg(index)} />
          </div>
        ))}
      </div>

      {selectedImg !== null && (
        <>
          <div className="gallery-overlay" onClick={closePopup}></div>
          <div className="gallery-popup active">
            <button className="close" onClick={closePopup}>&times;</button>
            <span className="next" onClick={handleNext}>&#187;</span>
            <span className="prev" onClick={handlePrev}>&#171;</span>
            <img src={images[selectedImg]} alt="" className={animationClass} />
          </div>
        </>
      )}
    </div>

    </div>
    <Footer/>
    </>
  );
};

export default Gallery;