import React from "react";
import { Logo } from "./NavbarDesktop";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

function NavbarMobile() {
  return (
    <div className="flex justify-between items-center px-2 py-2 shadow-sm">
      <AiOutlineMenu className="text-xl text-gray-600" />
      <Logo />
      <BiUser className="text-xl text-gray-600" />
    </div>
  );
}

export default NavbarMobile;
