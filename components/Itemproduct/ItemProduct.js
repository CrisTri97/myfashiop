import Image from "next/image";
import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
export default function ItemProduct({ url }) {
  return (
    <div className="group w-[240px] h-[340px] lg:w-[200px] lg:h-[300px] rounded-md overflow-hidden  justify-center items-center relative group-hover:translate-x-[50%]">
      <Image
        src={url}
        layout="fill"
        alt="product"
        placeholder="blur"
        objectFit="cover"
        priority
      />
      <div className="transition-all opacity-0 ease-linear  flex absolute  text-[1.3rem]  bottom-[20%] transform  right-[-40%] z-10 group-hover:right-[20%] duration-[0.2s] group-hover:opacity-100">
        <div className="w-8 h-8 p-1 text-[1.3rem] bg-gray-50/[0.9] mr-1 rounded-md hover:bg-blue-600 hover:text-white">
          <HeartIcon className="" />
        </div>
        <div className="w-8 h-8 p-1 text-[1.3rem] bg-gray-50/[0.9] hover:bg-blue-600 hover:text-white rounded-md">
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
}
