import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Gurusthan from "../assets/images/Gurusthan.png";
import Samadhi from "../assets/images/Samadhi.jpg";
import Dwarkamai from "../assets/images/dwarka.jpg";
import Chavadi from "../assets/images/chavadi.jpg";
import Lendi from "../assets/images/lendibaug.jpg";
import Other from "../assets/images/other-temples.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const Temples = () => {
  return (
    <section id="swipe">
      <div className="title ">
        <h1>
          <span className="temple-premise-span">Temple in Premise</span>
        </h1>
      </div>
      <div className="temple-swiper-parent">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            355: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 40,
            },

            1023: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src={Gurusthan} alt="" />
              <h2>Gurusthan</h2>
              <p>
                Gurusthan means “place of the Guru”. It is both where Baba spent
                most of his time when he first came to Shirdi, according to
                Baba, the tomb of his own Guru is located by the neem tree.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Samadhi} alt="" />
              <h2>Samadhi</h2>
              <p>
                The shrine which houses Baba's tomb was originally constructed
                as a wada (large private house) during Baba's last years in his
                physical body.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Dwarkamai} alt="" />
              <h2>Dwarkamai</h2>
              <p>
                To the devotees of Sai Baba, Dwarkamai is one of the treasures
                of Shirdi. The spirit of tolerance, acceptance and welcome for
                all is very much alive.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Chavadi} alt="" />
              <h2>Chavadi</h2>
              <p>
                Inside Chavadi is a large portrait of Baba which was painted by
                Ambaram from Nausari in Gujarat after Baba had given him darshan
                in a dream in 1953.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Lendi} alt="" />
              <h2>Lendi Garden</h2>
              <p>
                {" "}
                It was a daily ritual for Baba to visit the Lendi Bagh twice a
                day for his quiet meditations. Baba used to spend a lot of his
                time here watering the plants daily in the morning and Evenings.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Other} alt="" />
              <h2>Other Temples</h2>
              <p>
                Ganesh,Shani (i.e. Saturn) and Mahadev (i.e. Shiva). Baba's
                local devotee, Tatya Kote Patil, was fond of offering lamps
                here.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Temples;
