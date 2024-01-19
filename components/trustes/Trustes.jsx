"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "./Trustes.scss";
import "swiper/css/navigation";
import "swiper/css";

const Trustes = () => {
  const images = [
    {
      img: "/assests/Logo05.svg",
    },
    {
      img: "/assests/Logo04.svg",
    },
    {
      img: "/assests/Logo03.svg",
    },
    {
      img: "/assests/Logo02.svg",
    },
    {
      img: "/assests/Logo01.svg",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className="trustes">
      <div className="container">
        <div className="trus-contents">
          <p>Trusted By</p>
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={5}
            loop
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image src={img.img} alt="logo" width={170} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trustes;
