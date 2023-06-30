import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HeaderSlider.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import bg1 from "../../../assets/1.jpeg";
import bg2 from "../../../assets/2.jpg";
import bg3 from "../../../assets/3.jpg";
import SliderCard from "../SliderCard/SliderCard";

export default function HeaderSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 30,
          modifier: 8,
          slideShadows: true,
        }}
        //pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard bg={bg1} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bg={bg2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bg={bg3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
