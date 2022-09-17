import React from "react";
import ItemProduct from "../Itemproduct/ItemProduct";

export default function ListProduct({ products }) {
  return (
    <div className="w-[100%] my-10">
      <div className="text-center w-[100%] pb-[50px]">
        <h2 className="text-black font-semibold text-[1.3rem] md:text-[2rem] lg:text-[3rem]">
          Featured Products
        </h2>
        <p className="text-zinc-500">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-wrap  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 ">
        {products.map((product, index) => (
          <div key={index}>
            <ItemProduct url={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
