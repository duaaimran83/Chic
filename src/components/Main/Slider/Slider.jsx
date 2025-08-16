import React from 'react';
import "./Slider.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider1 from '../../../assets/Slider1.jpg';
import Slider2 from '../../../assets/Slider2.png';
import Slider3 from '../../../assets/Slider3.png';
import Slider4 from '../../../assets/Slider4.png';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} alt="Slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="Slider 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider4} alt="Slider 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
