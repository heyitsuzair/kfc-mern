import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";

const Hero = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    dots: false,
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src={img1} alt="Banner" className="banner-img" />
      </div>
      <div className="item">
        <img src={img2} alt="Banner" className="banner-img" />
      </div>
      <div className="item">
        <img src={img3} alt="Banner" className="banner-img" />
      </div>
    </OwlCarousel>
  );
};
export default Hero;
