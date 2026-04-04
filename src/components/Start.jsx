import React from "react";
import Button from "./common/Button";

const Start = () => {
  return (
    <div className="w-full mx-auto relative overflow-hidden mt-6 sm:mt-8 md:mt-10 lg:mt-1 px-4 sm:px-6 md:px-0">
      <div
        className="max-w-287 w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-77.25 mx-auto rounded-[20px] sm:rounded-[30px] md:rounded-[41px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/start-bg.png')` }}
      >
        <div
          className="w-full bg-cover min-h-[120px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-40 absolute mx-auto bg-no-repeat bg-center"
          style={{ backgroundImage: `url('/assets/start-svg.png')` }}
        />

        <div className="max-w-[312px] sm:max-w-150.25 mx-auto flex flex-col items-center justify-center w-full pt-8 sm:pt-10 md:pt-12 lg:pt-10 px-2 sm:px-4 md:px-0">
          <h3 className="text-center font-medium text-[32px] md:text-4xl lg:text-5xl leading-[118%] tracking-[-6%] text-[#FFFFFF] poppins">
            Start Trading Smarter with StonksSkins Today!
          </h3>

          <p className="text-center max-w-full sm:max-w-112.5 pt-2 sm:pt-2.75 pb-3 sm:pb-4 font-bold text-base leading-[125%] tracking-[-0.006em] text-white">
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
