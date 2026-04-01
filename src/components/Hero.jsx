import React from "react";
import Button from "./common/Button";
import HeroBox from "./common/HeroBox";
import { BoxHelper } from "@/utils/helper";

const Hero = () => {
  return (
    <div className="w-full mx-auto min-h-203.25 hero-img">

      <div className="max-w-287 w-full flex items-center mx-auto">
        <div className="w-full">
          <h1 className="mt-63 max-w-181.75 text-[#ffffff] text-[64px] leading-[118%] tracking-[-6%] font-medium">
            The Ultimate{" "}
            <span className="text-[#E9AE82]"> CS 2 Marketplace </span> for
            Gamers Who Mean Business
          </h1>
          <p className="mb-10.25 font-medium text-base leading-[125%] tracking-[-6%] text-[#F5F5F5] mt-3.25">
            Buy, sell, and trade skins securely with unbeatable prices and
            transparency
          </p>
          <Button />
          <div className="max-w-287  mt-20.5  bg-[#FFFFFF]/6 pt-[28px] pb-[29px] px-8 rounded-3xl backdrop-blur-[50px] shadow-[0_0_50px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-17.5">
              {BoxHelper.map((item, index) => (
                <HeroBox key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;