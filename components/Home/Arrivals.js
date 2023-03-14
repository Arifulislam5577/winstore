import React, { useEffect, useState } from "react";
import Product from "../Shared/Product";

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6"
        );
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-2xl text-black px-10 mb-10">
          <span className="text-secondaryLight">New</span> Arrivals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-end justify-between gap-5">
          {products?.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
