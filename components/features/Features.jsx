"use client";

import React, { forwardRef, useEffect } from "react";
import Aos from "aos";
import "./Features.scss";
import Image from "next/image";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const imgObjects = [
    {
      img: "/assests/image6.svg",
      title: "UX Experience",
    },
    {
      img: "/assests/image18.svg",
      title: "UI Design",
    },
    {
      img: "/assests/image19.svg",
      title: "Product Analysis",
    },
    {
      img: "/assests/image20.svg",
      title: "Product Design",
    },
  ];

  return (
    <div className="features" id="features">
      <div className="container">
        <div className="features-content">
          <div data-aos="fade-right" className="features-left">
            <p>FEATURES</p>
            <h2>
              Giving Your Business <br />
              Some Great Ideas
            </h2>
            <span>
              Every designer needs the right tools to do the perfect job. <br />
              Thankfully, we can do that. I design products that are more <br />
              than pretty. I make them shippable and usable.
            </span>
            <div className="features-btn">
              <button>Contact US</button>
            </div>
          </div>
          <div data-aos="fade-left" className="features-right">
            <div className="right-images">
              {imgObjects.map((img, indx) => (
                <>
                  <div className="one-img" key={indx}>
                    <Image src={img.img} alt="img" width={270} height={120} />
                    <div className="product-info">
                      <h3>{img.title}</h3>
                      <p>
                        I design products that are more <br />
                        than pretty. I make them usable. <br />
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          </div>
          <div className="counts-of-thing" data-aos="fade-up">
            <ul>
                <li>
                    <h3>12K+</h3>
                    <p>Project Complete</p>
                </li>
                <li>
                    <h3>7K+</h3>
                    <p>Happy Client</p>
                </li>
                <li>
                    <h3>10+</h3>
                    <p>Years Experience</p>
                </li>
                <li>
                    <h3>270+</h3>
                    <p>Win Awards</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
