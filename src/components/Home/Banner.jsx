import { Button } from "../ui/button";
import React from "react";
import { DiAndroid } from "react-icons/di";
const Banner = () => {
  return (
    <div className="pt-[2px] flex flex-col lg:flex-row  gap-x-[3px] lg:h-[260px] ">

      <img
        src="https://www.sleepingpillsuk.com/images/banner2.jpg"
        alt="banner-img"
        className="lg:w-[80%] w-full object-cover"
      />

      <div className="w-[20%] md:w-full px-2 bg-[#057793] lg:block mt-1 lg:mt-0">
        <div className="py-4 pt ">
          <img
            src="https://www.sleepingpillsuk.com/images/free_pills_icon.png"
            alt="pills-img"
            className="mx-auto"
          />
          <div className="space-y-2 mt-4 ">
            <h1 className="uppercase border border-dashed text-center font-extrabold text-xl py-1 text-white">
              Get 30 free pills
            </h1>
            <p className="text-white text-center font-bold">
              With 1st Mobile App Order
            </p>
            <Button

              variant="outline"
              className="w-full bg-transparent hover:bg-green-500 bg-gray-800 uppercase text-white hover:text-white "
            >
              <DiAndroid className="w-20" />
              <span>Read More</span>
            </Button>
            <p className="italic text-center text-white">
              For Android Devices Only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
