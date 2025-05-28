import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  console.log(bestSeller);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most popular sneakers, loved by thousands of satisfied
          customers. From sleek designs to high-performance pairs, these
          best-sellers combine style, comfort, and functionality seamlessly.
          Crafted with premium materials and designed for every occasion, these
          favorites are perfect for elevating your look. Explore what everyone’s
          raving about and step into timeless style today!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
