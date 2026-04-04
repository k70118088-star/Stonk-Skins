"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Icons from "./Icons";
import { AccordionData } from "@/utils/helper";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-[759px] space-y-4">
        {AccordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="relative rounded-2xl cursor-pointer bg-white/6 py-5.25 pl-7.75 pr-3.75 border border-white/10 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400/30 blur-2xl rounded-full"></div>

              {/* Header */}
              <button
                
                
                className="w-full cursor-pointer flex items-center justify-between text-[#ffffff] text-[32px] leading-[118%] tracking-[-6%] font-medium"
              >
                {item.title}

                <span className={`w-12.25 h-12.25 flex items-center justify-center rounded-[19px] ${isOpen ? "bg-gradient-to-r from-orange-400 to-purple-500" : "bg-white/4"}`}>
                  {isOpen ? (
                    <Icons icon={"arrowUp"}/>
                  ) : (
                    <Icons icon={"arrowDown"}/>
                  )}
                </span>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2.75 text-base text-white font-medium leading-[125%] tracking-[-0.006em]">
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
