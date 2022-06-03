import React from "react";
import { Navigation } from 'swiper';
import {  Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Slider.scss"

const Slider = () => {
  return (
    <div id="Slider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={50} slidesPerView={3}>
        <SwiperSlide><img src="/images/offer-1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/offer-2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/offer-3.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/offer-4.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/offer-5.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

