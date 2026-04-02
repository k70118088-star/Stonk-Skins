"use client";
import Slider from "./common/Slider";
import Icons from "./common/Icons";
import { Sections } from "@/utils/helper";
import { useRef } from "react";

const CategorySection = () => {
  return (
    <div>
      {Sections.map((item, index) => {
        const prevRef = useRef(null);
        const nextRef = useRef(null);

        return (
          <div
            key={index}
            className="w-full pt-14 sm:pt-18 md:pt-22 lg:pt-26 -mt-0.5 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[850px] overflow-hidden category-img"
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header */}
              <div className="flex items-center max-w-287 mx-auto justify-between mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[118%] tracking-[-6%] font-medium">
                  Category Name
                </h2>

                <div className="hidden min-[450px]:block">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    
                    {/* Prev Button */}
                    <button
                      ref={prevRef}
                      className="w-15 h-15 slider-btn1 rounded-[19px] text-white flex items-center justify-center"
                    >
                      <Icons icon={"leftArrow"} />
                    </button>

                    {/* Next Button */}
                    <button
                      ref={nextRef}
                      className="w-15 h-15 slider-btn2 rounded-[19px] text-white flex items-center justify-center"
                    >
                      <Icons icon={"rightArrow"} />
                    </button>

                  </div>
                </div>
              </div>

              {/* Slider */}
              <Slider
                className={item.className}
                prevRef={prevRef}
                nextRef={nextRef}
              />

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
