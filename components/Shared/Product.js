import Link from "next/link";
import React from "react";

const Product = ({ title, category, image, price, id }) => {
  function addTenPercent(number) {
    const tenPercent = number * 0.1;
    const result = (number + tenPercent).toFixed(2);
    return result;
  }
  return (
    <div className="sm:col-span-1 w-full shadow-sm p-4 border">
      <p className="text-xs capitalize text-black mb-2">{category}</p>
      <Link href={`/product/${id}`} className="text-primaryDark text-base line">
        {title}
      </Link>

      <Link href={`/product/${id}`}>
        <img src={image} alt={title} className="h-24 mx-auto p-2" />
      </Link>

      <div className="flex items-center gap-2 text-xs mb-3">
        <p className="line-through">RS {addTenPercent(price)}</p>
        <p className="text-secondaryDeep">RS {price}</p>
      </div>

      <button className="block text-white bg-secondaryDeep w-full text-sm p-1">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
