import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./SlickSlider.module.scss";

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.parentSlider}>
      <Slider {...settings}>
        <div className={styles.parentSlick}>
          <div className={styles.slickImg}></div>

          <div className={styles.parentText}>
            <p>Hot Deals of </p>
            <p>Month </p>
            <span>Show Now</span>
          </div>
        </div>
        <div className={styles.parentSlick}>
          <div className={styles.slickImg}></div>

          <div className={styles.parentText}>
            <p>Hot Deals of </p>
            <p>Month </p>
            <span>Show Now</span>
          </div>
        </div>
        <div className={styles.parentSlick}>
          <div className={styles.slickImg}></div>

          <div className={styles.parentText}>
            <p>Hot Deals of </p>
            <p>Month </p>
            <span>Show Now</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
