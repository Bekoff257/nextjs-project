import Trustes from "../components/trustes/Trustes";
import Main from "../components/main/Main";
import React from "react";
import Features from "../components/features/Features";
import Portfolio from "@/components/portfolio/Portfolio";
import Blog from "@/components/blog/blog";
import Ratings from "@/components/ratings/ratings";
import Faqs from "@/components/faqs/faqs";
import Footer from "@/components/footer/footer";

function page() {
  return (
    <div className="page-main">
      <Main />
      <Trustes />
      <Features />
      <Portfolio/>
      <Blog/>
      <Ratings/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default page;
