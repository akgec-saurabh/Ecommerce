import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";

function Product({ product }) {
  console.log(product);
  const [isHover, setIsHover] = useState(false);
  const imagePath = isHover ? product.hoverImage : product.mainImage;

  return (
    <div className=" w-full group">
      <Link
        href={`/product/${product.id}`}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
        className="relative block cursor-pointer w-full h-[250px] sm:h-[300px] lg:h-[350px]"
      >
        <Image
          className="object-cover"
          src={imagePath}
          fill
          alt="product"
          sizes="20vw"
        />
      </Link>
      <div className="flex justify-between text-gray-600">
        <span className="hover:text-gray-950 cursor-pointer">
          {product.name}
        </span>
        <span className="flex items-center gap-2 hover:text-gray-950 cursor-pointer">
          <span className="italic font-light text-sm">
            {product.popularity}
          </span>
          <LiaHeart />
        </span>
      </div>
      {isHover ? (
        <div className="italic font-light">Show More</div>
      ) : (
        <div>&#8377;{product.price}</div>
      )}
    </div>
  );
}

export default Product;
