import React from "react";
import InputCustomize from "../InputCustomize/InputCustomize";

export default function Subscribe() {
  return (
    <div className="px-[20px] bg-[#f9f9ff] h-[368px] w-[100%] text-center flex flex-col justify-center items-center">
      <div>
        <h3 className="text-[1.2rem] font-semibold lg:text-[2rem]">
          Subscribe for Our Newsletter
        </h3>
        <p className="text-gray-400">We won’t send any kind of spam</p>
      </div>
      <div className="mt-[50px] ">
        <InputCustomize />
      </div>
    </div>
  );
}
