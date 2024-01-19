"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import Arrow from "../../public/assests/quote-up.svg";
import "./ratings.scss";
import Image from "next/image";

const Ratings = () => {
  const dataobj = [
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      avatar: "/assests/Ellipse 1.svg",
      name: "Janne Cooper",
      rate: 4.3
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      avatar: "/assests/Ellipse 1 (1).svg",
      name: "Cobocannaeru",
      rate: 3.5
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      avatar: "/assests/Ellipse 1.svg",
      name: "Janne Cooper",
      rate: 3.5
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      avatar: "/assests/Ellipse 1.svg",
      name: "Janne Cooper",
      rate: 3.5
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      avatar: "/assests/Ellipse 1.svg",
      name: "Janne Cooper",
      rate: 4.3
    },
  ];
  return (
    <div className="ratings">
      <div className="container">
        <div className="ratings-content">
          <div className="ratings-top">
            <p>Testimonials</p>
            <h3>What our customer say</h3>
          </div>
        </div>
      </div>
      <div className="ratings-main">
        <Swiper
          className="mySwiper"
          loop
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={50}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {dataobj.map((item, inx) => (
            <SwiperSlide key={inx}>
              <div className="ratings-item">
                <div className="rat-quote-img">
                  <Image src={Arrow} alt="quote" width={40} height={40} />
                </div>
                <div className="rat-info">
                  <p>{item.desc}</p>
                </div>
                <div className="rat-profile">
                  <div className="rat-user">
                    <Image
                      src={item.avatar}
                      alt="avatar"
                      width={50}
                      height={50}
                    />
                    <p>{item.name}</p>
                  </div>
                  <div className="rating-star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="#FFB23F"
                        stroke="#FFB23F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>{item.rate}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ratings;
