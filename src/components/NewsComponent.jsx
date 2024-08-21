import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Donate from "../assets/images/donate1.png";
import Accommodity from "../assets/images/Accommodation.png";
import live from "../assets/images/liveimg.png"


const NewsComponent = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [news, setNews] = useState([
    " मायलॉन लॅब्रेाटरीज यांचेकडून  एकुण ०१ कोटी १५ लाख रूपये किंमतीचे दोन अद्यावत एक्‍स-रे मशिन देणगी ",
    "श्री साईनाथ रुग्‍णालय शिर्डी येथे मोफत  नेत्र  तपासणी व चष्मे वाटप शिबीर  संपन्न...",
    "मोफत नेत्र तपासणी शिबीर",
    "सोलापूर येथील दानशुर साईभक्‍त श्रीमती मंदाकिनी गुरुलिंग गावसाने यांनी श्री साईबाबा संस्‍थानला चेक स्‍वरुपात रक्‍कम रुपये २० लाख व विविध प्रकाचे एकुण २०५.०५० ग्रॅम वजनाचे रक्‍कम रुपये १३ लाख २४ हजार १५८ रुपये किमतीचे सोन्‍याचे दागीने असे एकुण रक्‍कम र",
  ]);
  return (
    <div className="news-component">
      <div className="news-heading">
        <span>News</span>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {news.map((data, index) => (
            <div className="embla__slide" key={index}>
              <div class="news-card">
                <p class="news-card-title">|| ॐ साईं राम ||</p>
                <p class="news-card-body">{data}</p>
                <p class="news-footer">
                  <span class="news-date">25/05/23</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="news-card-parent">
        <div>
          <a class="news-second-card news-education" href="#">
            {/* <div class="news-overlay"></div> */}
            <div class="news-circle">
              <img src={Donate} alt="" width={"131px"} height={"131px"} />
            </div>
            <p>
              <strong>Donate</strong>
            </p>
          </a>
        </div>
        <div>
          <a class="news-second-card news-education" href="#">
            {/* <div class="news-overlay"></div> */}
            <div class="news-circle">
              <img src={live} alt="" width={"131px"} height={"131px"} />
            </div>
            <p>
              <strong>Live Darshan</strong>
            </p>
          </a>
        </div>
        <div>
          <a class="news-second-card news-education" href="#">
            {/* <div class="news-overlay"></div> */}
            <div class="news-circle">
              <img src={Accommodity} alt="" width={"131px"} height={"131px"} />
            </div>
            <p>
              <strong> Accommodation</strong>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
