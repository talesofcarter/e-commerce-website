import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Shop = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [openCategories, setOpenCategories] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <div className="my-2 text-xl flex items-center cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Filters
        </div>
        {/* Category */}
        <div
          className={` border-t border-b-0 border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <div className="mb-3 font-medium">
            <div className="flex items-center justify-between mb-3">
              <span>Categories</span>
              <button onClick={() => setOpenCategories((prev) => !prev)}>
                {openCategories ? (
                  <IoIosArrowUp className="w-5 h-5 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                )}
              </button>
            </div>

            {openCategories && (
              <div className="flex flex-col gap-2 font-light text-gray-700">
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Accessories`}
                  />
                  Accessories
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Blouses`}
                  />
                  Blouses
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Dresses`}
                  />
                  Dresses
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Skirts`}
                  />
                  Skirts
                </p>
              </div>
            )}
          </div>

          <div className="mb-3 font-medium">
            <div className="flex items-center justify-between mb-3">
              <span>Size</span>
              <button onClick={() => setOpenSize((prev) => !prev)}>
                {openCategories ? (
                  <IoIosArrowUp className="w-5 h-5 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                )}
              </button>
            </div>

            {openSize && (
              <div className="flex flex-col gap-2 font-light text-gray-700">
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Accessories`}
                  />
                  L
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Blouses`}
                  />
                  M
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Dresses`}
                  />
                  S
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Skirts`}
                  />
                  XL
                </p>
              </div>
            )}
          </div>

          <div className="mb-3 font-medium">
            <div className="flex items-center justify-between mb-3">
              <span>Price</span>
              <button onClick={() => setOpenPrice((prev) => !prev)}>
                {openPrice ? (
                  <IoIosArrowUp className="w-5 h-5 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
                )}
              </button>
            </div>

            {openPrice && (
              <div className="flex flex-col gap-2 font-light text-gray-700">
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Accessories`}
                  />
                  0 - 1,000
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Blouses`}
                  />
                  1,000 - 1,999
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Dresses`}
                  />
                  2,000 - 2,999
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Skirts`}
                  />
                  3,000 - 3,999
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Skirts`}
                  />
                  4,000 - 4,999
                </p>
                <p className="flex gap-3">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={`Skirts`}
                  />
                  5,000+
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
