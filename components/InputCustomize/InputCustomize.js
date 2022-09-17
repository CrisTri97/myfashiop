import React from "react";

export default function InputCustomize() {
  return (
    <div className="w-[100%]">
      <form className="relative w-[350px] h-[50px] lg:w-[450px]">
        <input
          className="w-[100%] h-[100%] rounded-full outline-none pl-5"
          type={"email"}
          placeholder="Email address ..."
        />
        <div className="absolute right-[0] bottom-[50%] translate-x-[0%] translate-y-[50%] md:translate-x-[50%] lg:translate-x-[50%]">
          <button className=" w-[133px] h-[40px] rounded-full bg-blue-600 lg:w-[135px] text-white  hover:bg-white hover:outline-blue-600 outline hover:text-blue-600 ">
            Get Stated
          </button>
        </div>
      </form>
    </div>
  );
}
