import Image from "next/image";
import React from "react";
import banner from "../../public/themes/img/banner/banner-bg.jpg";

export default function Banner() {
  return (
    <div className=" w-full  h-[700px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={banner}
        alt=""
        priority
      />
      <div className="absolute bg-neutral-600/[0.2] h-full w-full">
        <div className="flex  h-full w-full flex-col items-center justify-center text-white">
          <h3 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold">
            Fashion for
          </h3>
          <h3 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold">
            Upcoming Winter
          </h3>
          <div className="grid grid-cols-6 ">
            <p className="col-start-2 col-span-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <button className="mt-16 w-44 min-w-min h-14 rounded-md bg-slate-50 text-zinc-700 font-semibold hover:text-white hover:bg-blue-500">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
}
