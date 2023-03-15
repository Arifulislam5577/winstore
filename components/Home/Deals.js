import Image from "next/image";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Shared/Loader";

const Deals = () => {
  const [activeCate, setActiveCate] = useState(0);
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const { data: categoryData, loading } = useFetch(
    `https://fakestoreapi.com/products/category/${categories[activeCate]}?limit=5`
  );

  function addTenPercent(number) {
    const tenPercent = number * 0.1;
    const result = (number + tenPercent).toFixed(2);
    return result;
  }

  return (
    <div className="py-10">
      <div className="container mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
          <div className="lg:col-span-1 w-full">
            <h1 className="text-2xl text-black">
              <span className="text-secondaryLight">Best</span> Deals
            </h1>
          </div>
          <div className="lg:col-span-3 w-full flex flex-wrap items-center lg:justify-end justify-start lg:gap-5 gap-2">
            {categories?.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCate(index)}
                className={`uppercase  text-black text-base  ${
                  activeCate === index &&
                  "text-secondaryDeep border-b-2 border-secondaryDeep "
                }`}
              >
                {category}
              </button>
            ))}

            <div className="flex items-center gap-3">
              <button
                disabled={activeCate === 0}
                onClick={() => setActiveCate((prev) => prev - 1)}
              >
                <Image
                  src="/icons/arrow1.svg"
                  alt="next"
                  height="14"
                  width="9"
                />
              </button>
              <button
                disabled={activeCate + 1 === categories?.length}
                onClick={() => setActiveCate((prev) => prev + 1)}
              >
                <Image
                  src="/icons/arrow2.svg"
                  alt="next"
                  height="14"
                  width="9"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {loading || !categoryData?.length ? (
          <div className="products grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-5">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        ) : categoryData?.length >= 1 ? (
          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-5">
            <div className="col-span-1 row-span-1 p-5 border grid-cols-2 grid gap-3">
              <div className="col-span-1">
                <h2 className="text-sm">{categoryData[0]?.title}</h2>
                <h3 className="text-xl text-secondaryDeep">
                  Rs.{categoryData[0]?.price}
                </h3>
                <h4 className="text-base line-through text-black">
                  Rs.{addTenPercent(categoryData[0]?.price)}
                </h4>

                <div className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] p-3 mt-5 text-xl text-center">
                  <h5>Save </h5>
                  <h6>10%</h6>
                </div>
              </div>
              <div className="col-span-1">
                <h1 className="text-3xl">
                  <span className="text-secondaryDeep">Special</span> Offer
                </h1>

                <img
                  src={categoryData[0]?.image}
                  alt={categoryData[0]?.title}
                  className="h-24 mx-auto mt-5"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-2 p-5 border">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl">
                  <span className="text-red-600">Special</span> Offer
                </h1>

                <div className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] p-3 w-20 h-20 rounded-full text-xl text-center mb-4 text-white">
                  <h5>Save </h5>
                  <h6>10%</h6>
                </div>
              </div>
              <img
                src={categoryData[1]?.image}
                alt={categoryData[1]?.title}
                className="h-60 mx-auto"
              />

              <div className="my-3">
                <h2 className="text-xl my-3">{categoryData[1]?.title}</h2>
                <div className="flex mt-3 items-center gap-5">
                  <h3 className="text-xl text-secondaryDeep">
                    Rs.{categoryData[1]?.price}
                  </h3>
                  <h4 className="text-base line-through text-black">
                    Rs.{addTenPercent(categoryData[1]?.price)}
                  </h4>
                </div>

                <div className="my-3 flex items-center justify-between">
                  <h5 className="text-sm text-red-600">Already Sold : 6</h5>
                  <h5 className="text-sm text-red-600">Available : 26</h5>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 p-5 border grid-cols-2 grid gap-3">
              <div className="col-span-1">
                <h2 className="text-sm">{categoryData[2]?.title}</h2>
                <h3 className="text-xl text-secondaryDeep">
                  Rs.{categoryData[2]?.price}
                </h3>
                <h4 className="text-base line-through text-black">
                  Rs.{addTenPercent(categoryData[2]?.price)}
                </h4>

                <div className="bg-gradient-to-r from-[#EECFCC] to-[#EECFCC] p-3 mt-5 text-xl text-center">
                  <h5>Save </h5>
                  <h6>10%</h6>
                </div>
              </div>
              <div className="col-span-1">
                <h1 className="text-3xl">
                  <span className="text-secondaryDeep">Special</span> Offer
                </h1>

                <img
                  src={categoryData[2]?.image}
                  alt={categoryData[2]?.title}
                  className="h-24 mx-auto mt-5"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1 p-5 border grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <h1 className="text-3xl">
                  <span className="text-red-600">Special</span> Offer
                </h1>

                <h2 className="text-sm">{categoryData[3]?.title}</h2>
                <h3 className="text-xl text-secondaryDeep">
                  Rs.{categoryData[3]?.price}
                </h3>
                <h4 className="text-base line-through text-black">
                  Rs.{addTenPercent(categoryData[3]?.price)}
                </h4>
                <h5 className="text-sm text-secondaryDeep">Already Sold : 6</h5>
                <h5 className="text-sm text-secondaryDeep">Available : 26</h5>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1] p-3 w-20 h-20 rounded-full text-xl text-center mb-4">
                  <h5>Save </h5>
                  <h6>10%</h6>
                </div>

                <img
                  src={categoryData[3]?.image}
                  alt={categoryData[3]?.title}
                  className="h-24 mx-auto"
                />
              </div>
            </div>

            {categoryData?.length === 5 && (
              <div className="col-span-1 row-span-1 p-5 border grid grid-cols-2 gap-3">
                <div className="col-span-1">
                  <h1 className="text-3xl">
                    <span className="text-red-600">Special</span> Offer
                  </h1>

                  <h2 className="text-sm">{categoryData[4]?.title}</h2>
                  <h3 className="text-xl text-secondaryDeep">
                    Rs.{categoryData[4]?.price}
                  </h3>
                  <h4 className="text-base line-through text-black">
                    Rs.{addTenPercent(categoryData[4]?.price)}
                  </h4>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1] p-3 w-20 h-20 rounded-full text-xl text-center mb-4">
                    <h5>Save </h5>
                    <h6>10%</h6>
                  </div>

                  <img
                    src={categoryData[4]?.image}
                    alt={categoryData[4]?.title}
                    className="h-24 mx-auto"
                  />
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-5">
                    <h5 className="text-sm text-red-600">Already Sold : 6</h5>
                    <h5 className="text-sm text-red-600">Available : 26</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Deals;
