import Image from "next/image";
import React from "react";
import lg1 from "../../public/themes/img/clientLogo/1.png";
import lg2 from "../../public/themes/img/clientLogo/2.png";
import lg3 from "../../public/themes/img/clientLogo/3.png";
import lg4 from "../../public/themes/img/clientLogo/4.png";
import lg5 from "../../public/themes/img/clientLogo/5.png";

import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const arrLogo = [lg1, lg2, lg3, lg4, lg5, lg1, lg2, lg3, lg4, lg5];
export default function Listgo() {
  return (
    <Container>
      <div className="w-[100%] h-[100px]">
        <div>
          <Slider {...settings}>
            {arrLogo.map((logo, index) => (
              <div
                key={index}
                className="h-[100px] w-[150px] relative opacity-[0.5] hover:opacity-100"
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={logo}
                  alt="cx-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}
