import React from "react";
import { IoMdDownload } from "react-icons/io";
import news from "../Data/latestnews.json";
import appeals from "../Data/appeal.json";
import Gate from "../assets/images/gate.png";

const LatestNews = () => {
  return (
    <section className="news-Section">
      <div className="tablewrap">
        {/* <div className="toran">
          <img src={Gate} alt="" />
        </div> */}
        <div className="wrap">
          <div
            className="latest-news"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="headin" style={{marginTop:"-11px"}}>
              <h3>Latest News</h3>
            </div>
            <div className="contains">
              <ul>
                {news.map((news, index) => (
                  <li key={index}>
                    {news.data}
                    <span className="date">{news.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-wrap">
              <button className="button-62">Read More</button>
            </div>
          </div>
          <div
            className="latest-news"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="headin" style={{marginTop:"-11px"}}>
              <h3>Appeal</h3>
            </div>
            <div className="contains ">
              <ul>
                {appeals.map((appeal, index) => (
                  <li key={index}>
                    {appeal.data}
                    <button className="down-btn">
                      <IoMdDownload />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-wrap">
              <button className="button-62">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
