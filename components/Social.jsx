import Link from "next/link";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";

function Social() {
  return (
    <div className="flex text-xl gap-2 py-4">
      <Link href="/" className="text-grayText hover:text-blackText">
        <BiLogoFacebook />
      </Link>
      <Link href="/" className="text-grayText hover:text-blackText">
        <BiLogoWhatsapp />
      </Link>
      <Link href="/" className="text-grayText hover:text-blackText">
        <BiLogoTwitter />
      </Link>
      <Link href="/" className="text-grayText hover:text-blackText">
        <BiLogoInstagram />
      </Link>
    </div>
  );
}

export default Social;
