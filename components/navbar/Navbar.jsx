"use client";

import React from "react";
import Image from "next/image";
import Logo from "./../../public/assests/XestFolio.svg";
import "./Navbar.scss";
import Link from "next/link";

export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav_logo">
            <Link href={"/"}>
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="nav_links">
            <ul>
              <li>
                <Link href={"#about"}>About</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"#features"}>Service</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"#blog"}>Blogs</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"#faqs"}>FAQ</Link>
              </li>
            </ul>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
