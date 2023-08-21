import Image from "next/image";
import React, { useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";

function Product() {
  const [isHover, setIsHover] = useState(false);
  const imagePath = isHover
    ? "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-plain-glassbottle-2.jpg"
    : "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-plain-glassbottle.jpg";
  return (
    <div className=" w-full group">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative cursor-pointer w-full h-[250px] sm:h-[300px] lg:h-[350px]"
      >
        <Image className="object-cover" src={imagePath} fill alt="product" />
      </div>
      <div className="flex justify-between text-gray-600">
        <span className="hover:text-gray-950 cursor-pointer">
          Glass Water Bottle
        </span>
        <span className="flex items-center gap-2 hover:text-gray-950 cursor-pointer">
          <span className="italic font-light text-sm">990</span>
          <LiaHeart />
        </span>
      </div>
      {isHover ? (
        <div className="italic font-light">Show More</div>
      ) : (
        <div>&#8377;600</div>
      )}
    </div>
  );
}

export default Product;
