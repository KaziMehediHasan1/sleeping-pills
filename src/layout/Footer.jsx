import {
  IoMdArrowDropright,
  IoMdLock,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" w-full text-white mx-auto bg-[#002139] mt-7">
      <div className="xl:w-[1250px] mx-auto">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4 gap-5">
          <div>
            <h1>Support</h1>
            <div className="border border-b-1 border-[#0e3e61] my-2"></div>
            <p>
              <span className="font-semibold text-sm">Working hours :</span>{" "}
              <span className="text-xs">24 hours a day</span>
            </p>
            <p>
              <span className="font-semibold text-sm">Working days :</span>{" "}
              <span className="text-xs">Monday to Sunday </span>
            </p>
          </div>
          {/*  */}
          <div>
            <h1>Information</h1>
            <div className="flex  space-x-4">
              <div>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">About us</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Privacy Policy</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Contact us</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Blogs</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Sitemap</span>
                </p>
              </div>
              {/* second section */}
              <div>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Delivery Inpormation</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Trams & Conditions</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Returns</span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoMdArrowDropright className="text-xl text-[#087ea5]" />
                  <span className="text-xs">Share With Friends</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="min-w-[160px] flex items-center">
              <img
                src="https://www.sleepingpillsuk.com/images/secured.png"
                alt="logo"
              />
              <p>Shop online with us Safely & securely</p>
            </div>
            <img
              src="https://www.sleepingpillsuk.com/images/dmca_protected_16_120.png"
              alt="logo"
            />
          </div>
          <div>
            <img
              src="https://www.sleepingpillsuk.com/images/satisfaction.png"
              alt="logo"
            />
            <div className="flex items-center space-x-1">
              <IoMdLock />
              <p>Secure Shopping</p>
            </div>
            <img
              src="https://www.sleepingpillsuk.com/images/icons_payment.png"
              alt="card-logo"
            />
            <div className="flex items-center space-x-3 pt-2">
              <IoLogoFacebook className="text-4xl  font-semibold text-blue-500" />
              <IoLogoInstagram className="text-4xl  font-semibold text-red-500" />
              <IoLogoPinterest className="text-4xl  font-semibold text-red-500" />
              <IoLogoYoutube className="text-4xl  font-semibold text-red-500" />
              <AiFillTikTok className="text-4xl  font-semibold text-white" />
            </div>
          </div>
        </div>
      </div>
      <p className="bg-black text-white text-center py-1">
        2025 © Sleeping Pills. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
