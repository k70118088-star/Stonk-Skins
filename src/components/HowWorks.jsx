import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";

const HowWorks = () => {
    return (
        <div className="w-full min-h-180 mt-15.75 how-img">
            <div className="w-full min-h-158 howbg-img">
                <div className="pt-4.25 sm:pt-15 md:pt-30 lg:pt-42.25 flex flex-col items-center justify-center max-w-285 w-full mx-auto">
                    <h6 className="font-medium text-[#FFFFFF] text-[40px] sm:text-5xl leading-[118%] tracking-[-6%]">
                        How It Works
                    </h6>
                    <div className="-mt-32 lg:block hidden absolute "><Icons icon={"line"}/></div>
                    <div className="mt-5.5 relative flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 w-full">

                        <div className="flex flex-col items-center justify-center w-full sm:w-[45%] md:w-auto">
                            
                            <div className="flex items-center justify-center w-[68.04px] h-17.25 bg-gradient-to-r from-orange-400 to-purple-500 rounded-[19px]">
                                <p className="poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%]">
                                    01
                                </p>
                            </div>
                            <h3 className="mt-6.25 poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%] text-center md:text-left">
                                Deposit Your Skins
                            </h3>
                            <p className="mt-3.25 text-center max-w-[250px] font-medium text-[#F5F5F5] text-base leading-[125%] tracking-[-0.006em]">
                                Add your CS 2 skins to the marketplace in seconds.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full sm:w-[45%] md:w-auto">
                            <div className="flex items-center justify-center w-[68.04px] h-17.25 bg-gradient-to-r from-orange-400 to-purple-500 rounded-[19px]">
                                <p className="poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%]">
                                    02
                                </p>
                            </div>
                            <h3 className="mt-6.25 poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%] text-center md:text-left">
                                Set Your Price
                            </h3>
                            <p className="mt-3.25 text-center max-w-[250px] font-medium text-[#F5F5F5] text-base leading-[125%] tracking-[-0.006em]">
                                Choose your listing price or let us recommend market rates.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full sm:w-[45%] md:w-auto">
                            <div className="flex items-center justify-center w-[68.04px] h-17.25 bg-gradient-to-r from-orange-400 to-purple-500 rounded-[19px]">
                                <p className="poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%]">
                                    03
                                </p>
                            </div>
                            <h3 className="mt-6.25 poppins font-medium text-[#FFFFFF] text-[32px] leading-[118%] tracking-[-6%] text-center md:text-left">
                                Step 3
                            </h3>
                            <p className="mt-3.25 text-center max-w-[250px] font-medium text-[#F5F5F5] text-base leading-[125%] tracking-[-0.006em]">
                                Receive instant payouts in your preferred method.
                            </p>
                        </div>

                    </div>

                    <Button className={"mt-10"} />
                </div>
            </div>
        </div>
    );
};

export default HowWorks;