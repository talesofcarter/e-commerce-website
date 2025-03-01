import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
        />
        {isHovered && (
          <button className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white py-2 text0sm font-medium transition-opacity duration-300 hover:bg-chocolateBrown cursor-pointer">
            Select Option
          </button>
        )}
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {""}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
