import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          className="w-full hover:scale-110 transition-transform ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />

        {isHovered && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "tween", stiffness: 50, damping: 10 }}
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white py-2 text-sm font-medium hover:bg-chocolateBrown cursor-pointer"
          >
            Select Option
          </motion.button>
        )}
      </div>

      {/* Product Details */}
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
