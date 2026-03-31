"use client";
import React, { useState } from "react";
import {
  FaWallet,
  FaCaretDown,
  FaUserAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Icons from "./Icons";
import Category from "./Category";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-[#572071]">
      <div className="max-w-287 mx-auto w-full flex flex-col items-center justify-center pt-3 px-4 lg:px-0">
        
        {/* 🔹 Top Section */}
        <div className="flex items-center justify-between w-full mb-4 sm:gap-0 gap-3 gap-y-3">
          
          {/* Left */}
          <div className="flex items-center gap-7.75 w-full md:w-auto">
            <img src="/assets/loho.webp" alt="" className="w-29 h-13.75" />

            <div className="flex items-center backgroung-img max-w-[320px] w-full h-13">
              <input
                type="search"
                placeholder="Search Skins..."
                className="py-4 max-w-67 focus:outline-none w-full h-[52px] pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px]"
              />
              <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                <Icons icon={"search"} />
              </button>
            </div>
          </div>

          {/* 🔹 Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-xl"
          >
            <FaBars />
          </button>

          {/* Right (desktop only) */}
          <div className="hidden md:flex items-center justify-center flex-wrap gap-x-6 gap-y-2 w-full md:w-auto">
            <p className="font-medium text-base text-[#F5F5F5] leading-[125%]">
              Market
            </p>

            <p className="font-bold text-base leading-[150%] text-[#F5F5F5] flex items-center gap-2">
              <span className="text-[#FFFFFF]/10">
                <FaWallet />
              </span>
              $0
            </p>

            <div className="flex items-center">
              <p className="font-normal text-base leading-[150%] text-[#F5F5F5] mr-2">
                John Doe
              </p>
              <div className="h-11 w-11 img flex items-center justify-center text-[#FFFFFF]">
                <FaUserAlt />
              </div>
              <p className="text-white">
                <FaCaretDown />
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 Overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}

        {/* 🔹 Right Side Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-[#2C1638] z-50 transform transition-transform duration-300 md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-6 p-6 pt-6">

            {/* ❌ Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-xl"
              >
                <FaTimes />
              </button>
            </div>

            <p className="font-medium text-base text-[#F5F5F5]">
              Market
            </p>

            <p className="font-bold text-base text-[#F5F5F5] flex items-center gap-2">
              <span className="text-[#FFFFFF]/10">
                <FaWallet />
              </span>
              $0
            </p>

            <div className="flex items-center">
              <p className="text-[#F5F5F5] mr-2">John Doe</p>
              <div className="h-11 w-11 flex items-center justify-center text-white">
                <FaUserAlt />
              </div>
              <FaCaretDown className="text-white ml-1" />
            </div>

          </div>
        </div>

        {/* 🔹 Category */}
        <div className="border-t border-t-[#43344C8C] w-full pt-3.5 pb-4.5 overflow-x-auto">
          <Category />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
