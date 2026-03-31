"use client";
import React, { useState } from "react";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [activeTop, setActiveTop] = useState(null);
  const [activeSub, setActiveSub] = useState(0);

  const categories = Array(8).fill("Category");

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 🔹 Top Categories */}
      <div className="flex items-center w-full gap-8.25 cursor-pointer">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (activeTop === index) {
                setOpen(false);
                setActiveTop(null);
              } else {
                setActiveTop(index);
                setOpen(true);
              }
            }}
            className="flex items-center gap-2"
          >
            <p
              className={`font-medium text-base leading-[125%] flex items-center gap-2.75
              ${
                activeTop === index
                  ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                  : "text-[#F5F5F5]"
              }`}
            >
              {item}
            </p>

            <span className="w-[31px] h-[26px] flex items-center justify-center rounded-lg border-2  bg-[#220E2D] opacity-75 border-[#432755] shadow-[0px_3.5px_0px_0px_#3B214B]">
                <p
              className={`
              ${activeTop === index ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent" : " text-[#f5f5f5]"}
             `}
            >
              C
              </p>
            </span>
          </div>
        ))}
      </div>

      {/* 🔹 Dropdown Box */}
      {open && (
        <div className="mt-4 w-full max-w-[1167px] bg-[#2C1638]/90 rounded-2xl pt-5.75 pb-8.25 pr-6 shadow-lg">
          {/* Sub Categories */}
          <div className="flex gap-7.5 mb-5.75 pl-[39px]">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <p
                key={item}
                onClick={() => setActiveSub(index)}
                className={`cursor-pointer text-base leading-[125%] font-medium transition-all
                ${
                  activeSub === index
                    ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent underline"
                    : "text-[#F5F5F5]"
                }`}
              >
                Sub-Category {item}
              </p>
            ))}
          </div>

          {/* Products */}
          <div className="flex gap-6.5 pl-[39px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="max-w-[115px] px-[4.5px] w-full">
                <div className="bg-[#3A1A4D] rounded-xl">
                  <img
                    src="/assets/component.png"
                    alt="product"
                    className="w-[106px] h-[73px]"
                  />
                </div>

                <p className="text-[#F5F5F5] text-[15px] font-medium leading-[121%] mt-2">Product</p>
                <p className="text-[#F5F5F5]/31 text-[13px] font-medium">From $687.58</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;