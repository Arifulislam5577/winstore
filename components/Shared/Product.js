import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ title, category, image, price, id }) => {
  return (
    <div className="sm:col-span-1 w-full shadow-sm p-4 border">
      <p className="text-xs capitalize text-black mb-2">{category}</p>
      <Link href={`/product/${id}`} className="text-primaryDark text-base line">
        {title}
      </Link>
      <img src={image} alt={title} className="h-24 mx-auto p-2" />

      <div className="flex items-center gap-2 text-xs mb-3">
        <p className="line-through">RS {price + 100}</p>
        <p className="text-secondaryDeep">RS {price}</p>
      </div>

      <button className="block text-white bg-secondaryDeep w-full text-sm p-1">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
