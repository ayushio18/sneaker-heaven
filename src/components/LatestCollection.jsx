import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Transform your stride with our brand-new collection of premium,
          stylish, and performance-driven sneakers. Whether you’re looking to
          make a bold statement, elevate your comfort, or enhance your
          performance, we’ve got the perfect pair for you! Explore our exclusive
          range today and find sneakers that match your style and needs.
          Redefine your journey, one step at a time!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
