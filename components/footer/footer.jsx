import React from "react";
import Logo from "/public/assests/XestFolio.svg";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <p>Have you project in mind?</p>
            <h3>
              Let’s Make Something <br />
              Great Together!
            </h3>

            <div className="contact-box">
              CONTACT WITH US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <path
                  d="M6.19361 19.9485C5.86818 19.6231 5.84106 19.1123 6.11225 18.756L6.19361 18.6629L19.0499 5.80653C19.405 5.45151 19.9806 5.45151 20.3356 5.80653C20.661 6.13196 20.6881 6.64274 20.4169 6.99907L20.3356 7.09216L7.47924 19.9485C7.12422 20.3035 6.54863 20.3035 6.19361 19.9485Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M9.34604 7.38012C8.84397 7.3812 8.43608 6.97507 8.435 6.473C8.43402 6.01658 8.76958 5.63799 9.20781 5.57211L9.34212 5.56197L19.6906 5.53968C20.1484 5.5387 20.5276 5.87619 20.592 6.3159L20.6016 6.45064L20.5802 16.8C20.5792 17.3021 20.1713 17.7082 19.6693 17.7072C19.2128 17.7062 18.8357 17.3691 18.7716 16.9306L18.7621 16.7962L18.7811 7.35976L9.34604 7.38012Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="ft-logo">
              <Image src={Logo} alt="logo" width={72} height={52} />
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <Link target="_blank" href={"http://facebook.com/"}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"http://linkedin.com/"}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"http://instagram.com/"}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"http://behance.com/"}>
                    <FontAwesomeIcon icon={faBehance} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"http://dribble.com/"}>
                    <FontAwesomeIcon icon={faDribbble} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-terms">
        <p>© 2023 Ideapeel Inc. All Rights Reserved</p>
        <p>Privacy Policy | Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
