import React from "react";
import Button from "./common/Button";

const Start = () => {
  return (
    <div className="w-full mx-auto relative overflow-hidden mt-1">
      <div
        className="max-w-287 w-full min-h-77.25 mx-auto rounded-[41px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/start-bg.png')` }}
      >
        <div
          className="w-full bg-cover min-h-40 absolute mx-auto bg-no-repeat bg-center"
          style={{ backgroundImage: `url('/assets/start-svg.png')` }}
        />
        <div className="max-w-150.25 mx-auto flex flex-col items-center justify-center w-full pt-10">
          <h3 className="text-center font-medium text-5xl leading-[118%] tracking-[-6%] text-[#FFFFFF] poppins">
            Start Trading Smarter with StonksSkins Today!
          </h3>
          <p className="text-center max-w-112.5 pt-2.75 pb-4 font-bold text-base leading-[125%] tracking-[-0.006em] text-white">
            Join thousands of gamers already buying, selling, and trading skins
            securely and hassle-free.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Start;
