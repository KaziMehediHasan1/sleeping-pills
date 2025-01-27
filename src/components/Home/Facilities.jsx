import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { MdOutlinePayments } from "react-icons/md";

const Facilities = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-y-[1px] lg:gap-y-0 lg:gap-x-[2px] mt-[2px]">
      <section className="bg-[#097CA3] text-white text-center py-2 flex items-center  lg:flex-col">
        <div className="flex items-center space-x-1 justify-center">
          <AiFillLike size={30} />

          <p className="text-xl font-bold">100% Satisfactions</p>
        </div>
        <p className="text-center">Feedback</p>
      </section>
      <section className="bg-[#097CA3] text-white flex items-center px-3 lg:px-0 gap-44 lg:gap-0  lg:flex-col sm:flex-row text-center py-2">
        <div className="flex items-center space-x-1 justify-center">
          <FaMessage size={30} />

          <p className="text-xl font-semibold">24/7 Support</p>
        </div>
        <div className="h-8  border border-r-1 block lg:hidden border-white"></div>
        <p>Customer Care </p>
      </section>
      <section className="bg-[#097CA3] text-white text-center py-2">
        <div className="flex items-center space-x-1 justify-center">
          <MdOutlinePayments size={30} />

          <p className="text-xl font-semibold">Payments</p>
        </div>
        <p>Secure System </p>
      </section>
      <section className="bg-[#097CA3] text-white text-center py-2">
        <div className="flex items-center space-x-1 justify-center">
          <SlBadge size={30} />

          <p className="text-xl font-semibold">Quality Assurance</p>
        </div>
        <p>100% Secure </p>
      </section>
      <section className="bg-[#097CA3] text-white text-center lg:py-2 py-5">
        <div className="flex items-center space-x-1 justify-center">
          <CiDeliveryTruck size={30} />

          <p className="text-xl font-semibold">Fast Delivery</p>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
