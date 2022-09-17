import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  QueueListIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function NavMenu() {
  const [isShowDropMenu, setIsShowDropMenu] = useState(false);
  const [isShowShopMenu, setIsShowShopMenu] = useState(false);
  const [isShowBlogMenu, setIsShowBlogMenu] = useState(false);
  const [isShowPageMenu, setIsShowPageMenu] = useState(false);

  return (
    <>
      <div className="z-[100] sticky top-0 flex items-center font-bold text-sm justify-between  bg-red-50">
        <Image
          width={129}
          height={60}
          src={"/../public/themes/img/clientLogo/logo1.png"}
          alt=""
        />
        <ul className="hidden lg:flex">
          <li className="list-item-contact active-menu">HOME</li>
          <li className="list-item-contact shop-menu">
            SHOP
            <ul className="shop-menu-dropDown">
              <li>SHOP CATEGORY</li>
              <li>PRODUCT DETAIL</li>
              <li>PRODUCT CHECKOUT</li>
              <li>SHOPPING CART</li>
              <li>CONFIRMATION</li>
            </ul>
          </li>
          <li className="list-item-contact  shop-menu">
            BLOG
            <ul className="shop-menu-dropDown">
              <li>BLOG</li>
              <li>BLOG DETAILS</li>
            </ul>
          </li>
          <li className="list-item-contact shop-menu">
            PAGE
            <ul className="shop-menu-dropDown">
              <li>LOGIN</li>
              <li>TRACKING</li>
              <li>ELEMENTS</li>
            </ul>
          </li>
          <li className="list-item-contact">CONTACT</li>
        </ul>
        <ul className="hidden lg:flex items-center pr-11">
          <li className="item-icon-nav-menu">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </li>
          <li className="item-icon-nav-menu">
            <UserIcon className="w-5 h-5" />
          </li>
          <li className="item-icon-nav-menu">
            <HeartIcon className="w-5 h-5" />
          </li>
          <li className="item-icon-nav-menu">
            <ShoppingCartIcon className="w-5 h-5" />
          </li>
        </ul>
        <div
          onClick={() => setIsShowDropMenu(!isShowDropMenu)}
          className="item-icon-nav-menu lg:hidden"
        >
          {isShowDropMenu === false ? (
            <QueueListIcon className="w-5 h-5" />
          ) : (
            <XMarkIcon className="w-5 h-5" />
          )}
        </div>
      </div>
      {isShowDropMenu === true && (
        <div className=" font-bold px-5 pb-2 h-fit bg-[#fef2f2] lg:hidden">
          <ul className="dropDown-contact-menu ">
            <li className=" active-menu">HOME</li>
            <li onClick={() => setIsShowShopMenu(!isShowShopMenu)} className="">
              SHOP
            </li>
            {isShowShopMenu === true && (
              <ul className="mobile-menu-dropDown">
                <li>SHOP CATEGORY</li>
                <li>PRODUCT DETAIL</li>
                <li>PRODUCT CHECKOUT</li>
                <li>SHOPPING CART</li>
                <li>CONFIRMATION</li>
              </ul>
            )}

            <li className="" onClick={() => setIsShowBlogMenu(!isShowBlogMenu)}>
              BLOG
            </li>
            {isShowBlogMenu === true && (
              <ul className="mobile-menu-dropDown">
                <li>BLOG</li>
                <li>BLOG DETAILS</li>
              </ul>
            )}

            <li className="" onClick={() => setIsShowPageMenu(!isShowPageMenu)}>
              PAGE
            </li>
            {isShowPageMenu === true && (
              <ul className="mobile-menu-dropDown">
                <li>LOGIN</li>
                <li>TRACKING</li>
                <li>ELEMENTS</li>
              </ul>
            )}

            <li className="">CONTACT</li>
          </ul>
          <ul className="dropDown-icon-menu flex items-center pr-11">
            <li className="">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </li>
            <li className="">
              <UserIcon className="w-5 h-5" />
            </li>
            <li className="">
              <HeartIcon className="w-5 h-5" />
            </li>
            <li className="">
              <ShoppingCartIcon className="w-5 h-5" />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
