import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { MdOutlinePayments } from "react-icons/md";

const Facilities = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-y-[1px] lg:gap-y-0 lg:gap-x-[2px] mt-[2px]">
      <section className="bg-[#097CA3] text-white text-center py-2 flex items-center px-5 lg:px-0  justify-between lg:gap-0  lg:flex-col">
        <div className="flex items-center space-x-1 justify-center ">
          <AiFillLike className="text-xl md:text-2xl" />
          <p className="sm:text-xl text-[15px] font-bold">100% Satisfactions</p>
        </div>
        <div className="border-r-1 pr-5 lg:border-none md:h-0 h-8"></div>
        <p className="text-center">Feedback</p>
      </section>
      <section className="bg-[#097CA3] text-white flex items-center px-5 lg:px-0  justify-between lg:gap-0  lg:flex-col sm:flex-row text-center py-2">
        <div className="flex items-center space-x-1 justify-center ">
          <FaMessage className="text-xl md:text-2xl" />

          <p className="sm:text-xl text-[15px] font-semibold">24/7 Support</p>
        </div>
        <div className="border-r-1 pr-5 lg:border-none  h-8 md:h-0"></div>
        <p>Customer Care </p>
      </section>
      <section className="bg-[#097CA3] text-white text-center py-2 flex items-center px-5 lg:px-0  justify-between lg:gap-0  lg:flex-col">
        <div className="flex items-center space-x-1 justify-center">
          <MdOutlinePayments className="text-xl md:text-2xl" />

          <p className="sm:text-xl text-[15px] font-bold">Payments</p>
        </div>
        <div className="border-r-1 pr-5 lg:border-none md:h-0 h-8"></div>
        <p>Secure System </p>
      </section>
      <section className="bg-[#097CA3] text-white text-center py-2 flex items-center px-5 lg:px-0  justify-between lg:gap-0  lg:flex-col">
        <div className="flex items-center space-x-1 justify-center">
          <SlBadge className="text-xl md:text-2xl" />

          <p className="sm:text-xl text-[15px] font-bold">Quality Assurance</p>
        </div>
        <div className="border-r-1 pr-5 lg:border-none md:h-0 h-8"></div>
        <p>100% Secure </p>
      </section>
      <section className="bg-[#097CA3] text-white lg:text-center lg:py-2 py-3 px-5">
        <div className="flex  items-center space-x-1 lg:justify-center">
          <CiDeliveryTruck className="text-xl md:text-2xl" />

          <p className="sm:text-xl text-[15px] font-bold">Fast Delivery</p>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
