import React from "react";
import { Menu, BellDot, Mail } from "lucide-react";
import ProfilePicture from "../assets/profile.jpg";

const Navbar = () => {
    
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 rounded-lg bg-gray-100 lg:bg-transparent lg:px-6">
      <label
        htmlFor="my-drawer-2"
        className="drawer-button p-2 lg:hidden absolute left-0 z-10 pt-8 md:pt-4"
      >
        <Menu className="text-black" />
      </label>
      <nav className="flex-1 flex flex-col-reverse gap-3 md:flex-col lg:flex-row items-center justify-between mt-0 md:mt-4 lg:mt-0">
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-sm md:text-lg text-black">
            Hello 👋🏻, <span className="font-bold"> Robert Fox</span>
          </p>
          <p>
            <span className="font-medium text-xs text-gray-500">
              Here's your overview of your business!
            </span>
          </p>
        </div>
        <div className="flex md:flex-col lg:flex-row flex-row-reverse gap-6 items-center mt-4 lg:mt-0 border-b-2 md:border-0 p-2">
          {/* Notification section */}
          <div className="flex items-center gap-5 bg-gray-200 rounded-3xl px-2 h-9">
            <div className="bg-white rounded-full p-[2px] text-black">
              <BellDot className="h-4 w-4 md:w-6 md:h-6" />
            </div>
            <div className="text-black">
              <Mail className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-3">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-center lg:text-left">
              <p className="text-sm md:text-md font-normal md:font-bold text-black">
                Esther Howard
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Howard@example.com
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
