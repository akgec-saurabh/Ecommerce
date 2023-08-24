import Link from "next/link";
import React from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { AiOutlineShopping } from "react-icons/ai";
import menu from "@/helpers/menu";

const DropDown = ({ head, items }) => {
  return (
    <li className="relative h-full group">
      <div className="h-full flex items-center px-2 py-2 cursor-pointer text-gray-600 hover:text-gray-950 ">
        {head}
      </div>
      <ul className="absolute z-10 top-[100%] hidden py-4 px-6 group-hover:block bg-gray-950">
        {items.map((item) => (
          <li key={item.value} className="w-max">
            <Link
              href={item.value}
              className="w-max cursor-pointer text-gray-400 hover:text-white text-sm"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const LeftMenu = () => {
  return (
    <ul className="flex items-center gap-2">
      {menu.map((menu) => (
        <DropDown key={menu.text} head={menu.text} items={menu.subMenu} />
      ))}
    </ul>
  );
};

export const Logo = () => {
  return (
    <div className="text-2xl font-medium uppercase flex items-center tracking-widest ">
      FurniZen
    </div>
  );
};

const RightMenu = () => {
  return (
    <ul className="flex items-center gap-5 py-4">
      <li className="text-gray-600 hover:text-gray-950 cursor-pointer">
        <LiaHeart />
      </li>
      <li className=" text-gray-600 hover:text-gray-950 cursor-pointer">
        Login
      </li>
      <li className=" text-gray-600 hover:text-gray-950 cursor-pointer">
        <AiOutlineShopping />
      </li>
    </ul>
  );
};

function NavbarDesktop() {
  return (
    <div className=" w-screen justify-betweencreen shadow	h-[70px]">
      <div className="flex justify-between max-w-7xl mx-auto h-full">
        <LeftMenu />
        <Logo />
        <RightMenu />
      </div>
    </div>
  );
}

export default NavbarDesktop;
