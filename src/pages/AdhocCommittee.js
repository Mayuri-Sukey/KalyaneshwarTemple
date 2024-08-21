import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import saiadimg from "../assets/images/saimandir.jpg";
import sudhakarimg from "../assets/images/sudhakar_v.jpg";
import goraksh from "../assets/images/Goraksh Gadilkar.jpg";
import collectore from "../assets/images/collector.jpg";
import regimg from "../assets/images/templeimgregulation.jpg";

export const AdhocCommittee = () => {
  return (
    <div>
      <Navbar />
      <div
        className="about-background"
        style={{ backgroundImage: `url(${regimg})` }}
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
          <span> Home &#9654; About Sanathan &#9654; Ad-hoc-committee</span>
        </div>
        <div className="adhok-head">
          <h1>Ad-Hoc Committee</h1>
        </div>
      </div>

      <div className="adhok-headdiv-head">
        <h4>
          Appointed by order of Hon.Bombay High Court, Aurangabad Bench on Dtd.
          13.09.2022 in PIL No.98/2021 and 100/2021
        </h4>
      </div>

      <div className="adhok-headdiv-head">
        <div className="adhok-headdiv">
          <div>
            <div class="adhok-card">
              <div class="adhok-card__content">
                <div className="adhok-imgp">
                  <img src={sudhakarimg} alt="" />
                </div>
                <div>
                  <div className="adhok-name">
                    Hon. Shri, Sudhakar V. Yarlagadda
                  </div>
                  <div className="adhok-details">
                    Principal District & Session Judge, Ahmednagar.
                  </div>
                  <div className="adhok-designition">
                    <h5>Chairman</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="adhok-card">
              <div class="adhok-card__content">
                <div className="adhok-imgp">
                  <img src={collectore} alt="" />
                </div>
                <div>
                  <div className="adhok-name">
                    Hon.Shri.Siddharam Salimath, I.A.S.
                  </div>
                  <div className="adhok-details">Collector, Ahmednagar.</div>
                  <div className="adhok-designition">
                    <h5>Member</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="adhok-card">
              <div class="adhok-card__content">
                <div className="adhok-imgp">
                  <img src={goraksh} alt="" />
                </div>
                <div>
                  <div className="adhok-name">
                    Hon.Shri.Goraksha Gadilkar, I.A.S.
                  </div>
                  <div className="adhok-details">Chief Executive Officer.</div>
                  <div className="adhok-designition">
                    <h5> Member </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
