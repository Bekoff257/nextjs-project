"use client";

import React from "react";
import "./Portfolio.scss";
import Img1 from "../../public/assests/Rectangle 43.svg";
import Img2 from "../../public/assests/Rectangle 39.svg";
import Img3 from "../../public/assests/Rectangle 38.svg";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio" id="about">
      <div className="container">
        <div className="portfolio-content">
          <div className="port-top">
            <div className="prt-text">
              <p>Portfolio</p>
              <h2>Some Of Our Best Works </h2>
            </div>
            <div className="port-button">
              <button>Load More</button>
            </div>
          </div>
          <div className="portfolio-col-content">
            <div className="portfolio-columns" data-aos="fade-right">
              <Image src={Img3} alt="image" className="port-img1" data-aos="fade-right"/>
              <Image src={Img2} alt="image" className="port-img2" data-aos="fade-right"/>
              <Image src={Img1} alt="image" className="port-img3" data-aos="fade-right"/>
              <Image src={Img1} alt="image" className="port-img4" data-aos="fade-left"/>
              <Image src={Img3} alt="image" className="port-img5" data-aos="fade-left"/>
              <Image src={Img2} alt="image" className="port-img6" data-aos="fade-left"/>
              <Image src={Img3} alt="image" className="port-img7" data-aos="fade-right"/>
              <Image src={Img2} alt="image" className="port-img8" data-aos="fade-right"/>
              <Image src={Img1} alt="image" className="port-img9" data-aos="fade-right"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
