import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Shani from "../assets/images/Shani-Shingnapur.png";
import Ajanta from "../assets/images/Ajanta.jpeg";
import Ramkund from "../assets/images/ramkund.jpg";
import Muktidham from "../assets/images/mukti.jpg";
import Pandavleni from "../assets/images/Pandavleni.jpg";
import Kalaram from "../assets/images/Kalaram.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const NearbyPlaces = () => {
  return (
    <section>
      <div className="title">
        <h1>
          <span className="temple-premise-span">Shirdi Nearby Places</span>
        </h1>
      </div>
      <div className="temple-swiper-parent">
        <Swiper
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1023: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src={Shani} alt="" />
              <h2>Shani Shingnapur</h2>
              <p>
                Shani Shingnapur Situated in Nevasa Taluka in Ahmednagar
                district, the village is known for its popular temple of Shani.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide ">
              <img src={Ajanta} alt="" />
              <h2>Ellora Caves</h2>
              <p>
                Carved into the vertical basalt cliffs of the Sahyadri Hills,
                Kailasa: The Majestic Temple of Ellora Ellora is situated about
                15 miles north-west of Aurangabad.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Ramkund} alt="" />
              <h2>Ramkund</h2>
              <p>
                Ramkund is located along the bank of Godavari River, Nashik.
                This place is situated at a distance of 2 km from Central Bus
                stand.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Muktidham} alt="" />
              <h2>Muktidham</h2>
              <p>
                Muktidham is a marble temple complex honouring various Hindu
                gods. It is a popular tourist attraction situated in the Nashik
                Road.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Pandavleni} alt="" />
              <h2>Pandavleni Caves</h2>
              <p>
                The location of the caves is a holy Buddhist site and is located
                about 8 km south of the centre of Nashik, Maharashtra, India.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Kalaram} alt="" />
              <h2>Kalaram Temple</h2>
              <p>
                Kalaram Mandir is situated within the Panchvati area of Nashik
                City. This temple is situated at a distance of 3 km from Central
                Bus.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default NearbyPlaces;
