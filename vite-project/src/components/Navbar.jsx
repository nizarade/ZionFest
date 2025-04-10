import React from "react";
import { IoMenu } from "react-icons/io5";
import LogoImage from "../../src/assets/logo.png"

const Navbar = () => {
  return (
      <div className=" flex justify-start items-center w-full bg-primary  border-4 overflow-hidden">
        <div>
          <div className="hidden md:block">
            <img
              className="w-18 border-r-4 p-2"
              src={LogoImage}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center w-full  md:hidden">
            <IoMenu className=" w-15 h-full border-r-4 p-2" />
          </div>
        </div>
        <div className="flex justify-center w-full md:hidden">
          <a className="text-lg md:text-2xl text-black" href="/">
            ZionFest
          </a>
        </div>
        <div className="hidden md:flex w-full px-5 gap-4 overflow-hidden">
          <a className="hover:scale-110 transform transition-all " href="/">
            Home
          </a>
          <a className="hover:scale-110 transform transition-all" href="/about">
            About
          </a>
          <a className="hover:scale-110 transform transition-all" href="/news">
            News
          </a>
          <a
            className="hover:scale-110 transform transition-all"
            href="/ticketCenter"
          >
            Ticket Center
          </a>
          <a
            className="hover:scale-110 transform transition-all"
            href="/schedule"
          >
            Schedule
          </a>
        </div>
      </div>
  );
};

export default Navbar;
