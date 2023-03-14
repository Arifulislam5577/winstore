import Image from "next/image";
import React from "react";

const CategoryBox = ({ title, img }) => {
  return (
    <div className="border-2 border-white shadow-sm relative">
      <img src={img} alt={title} className="object-contain z-0 h-full w-full" />

      <div className="absolute z-10 bottom-2 -left-3 bg-white p-1 w-full shadow flex items-center justify-between px-3">
        <h3 className="text-2xl font-normal text-black ">{title}</h3>
        <h4 className="text-xl text-secondaryLight">Shop</h4>
      </div>
    </div>
  );
};

export default CategoryBox;
