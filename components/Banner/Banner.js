import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-0 w-full  h-[700px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        src={"/../public/themes/img/banner/banner-bg.jpg"}
        alt=""
      />
    </div>
  );
}
