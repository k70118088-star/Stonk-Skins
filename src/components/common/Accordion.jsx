"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Icons from "./Icons";
import { AccordionData } from "@/utils/helper";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[759px] space-y-3 sm:space-y-4">
        {AccordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="relative rounded-2xl cursor-pointer bg-white/6 
              py-4 sm:py-5.25 pl-4 sm:pl-6 md:pl-7.75 pr-3 sm:pr-3.75 
              border border-white/10 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-pink-400/30 blur-2xl rounded-full"></div>

              {/* Header */}
              <button
                className="w-full cursor-pointer flex items-center justify-between 
                text-[#ffffff] text-lg sm:text-xl md:text-2xl lg:text-[32px] 
                leading-[118%] tracking-[-0.06em] font-medium"
              >
                {item.title}

                <span
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12.25 lg:h-12.25 
                  flex items-center justify-center rounded-[14px] sm:rounded-[16px] md:rounded-[19px] 
                  ${isOpen ? "bg-gradient-to-r from-orange-400 to-purple-500" : "bg-white/4"}`}
                >
                  {isOpen ? (
                    <Icons icon={"arrowUp"} />
                  ) : (
                    <Icons icon={"arrowDown"} />
                  )}
                </span>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 sm:max-h-52 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2 sm:pt-2.75 text-sm sm:text-base text-white font-medium leading-[125%] tracking-[-0.006em]">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
