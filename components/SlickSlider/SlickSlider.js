import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="h-full py-10 ">
      <Slider {...settings}>
        <div className="hot-deal-slider ">
          <div className="img-hot-deal"></div>
        </div>
        <div className="hot-deal-slider ">
          <div className="img-hot-deal"></div>
        </div>
        <div className="hot-deal-slider ">
          <div className="img-hot-deal"></div>
        </div>
      </Slider>
    </div>
  );
}
