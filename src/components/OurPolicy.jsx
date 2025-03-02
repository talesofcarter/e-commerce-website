import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <TbTruckDelivery className="w-12 h-12 m-auto mb-5 " />
        <p className="font-semibold">Free Delivery</p>
        <p className="text-gray-400">For all orders within Nairobi</p>
      </div>

      <div>
        <CiTimer className="w-12 h-12 m-auto mb-5" />
        <p className="font-semibold">7 Days Return</p>
        <p className="text-gray-400">We offer a 7-day return policy</p>
      </div>

      <div>
        <GoShieldCheck className="w-12 h-12 m-auto mb-5" />
        <p className="font-semibold">Secure Payments</p>
        <p className="text-gray-400">100% secure payments</p>
      </div>
    </div>
  );
};

export default OurPolicy;
