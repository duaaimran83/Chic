import React from 'react';
import "./Partners.css"

// Swiper Js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

// Images
import client1 from "../../../assets/client1.png";
import client3 from "../../../assets/client3.png";
import client4 from "../../../assets/client4.png";
import client5 from "../../../assets/client5.png";
import client6 from "../../../assets/client6.png";

const Partners = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        modules={[Autoplay]}
        className="mySwiper1"
        >
        <SwiperSlide><img src={client1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client6} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Partners;
