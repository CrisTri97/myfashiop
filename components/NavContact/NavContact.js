import React from "react";
import NavMenu from "../NavMenu/NavMenu";

export default function NavContact() {
  return (
    <>
      <div className=" hidden sm:flex justify-between items-center px-10 text-[#b2a296] text-[12px] h-10 border-b ">
        <div>CALL US: 012 44 5698 7456 896</div>
        <ul className="flex ">
          <li className="list-item-contact">LOGIN/REGISTER</li>
          <li className="list-item-contact border-x">MY ACCOUNT</li>
          <li className="list-item-contact">CONTACT US</li>
        </ul>
      </div>
      <NavMenu />
    </>
  );
}
