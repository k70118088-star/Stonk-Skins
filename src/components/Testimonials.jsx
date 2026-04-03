"use client"
import React, { useRef } from 'react'
import Icons from './common/Icons'
import TestimonialSlider from './common/TestimonialSlider'


const Testimonials = () => {
    const prevRef = useRef()
    const nextRef = useRef()
  return (
    <div className='w-full mx-auto flex flex-col items-center justify-center overflow-hidden'>
        <div className='max-w-287 mx-auto w-full mt-16 flex items-center justify-between'>
            <h2 className='poppins text-[#FFFFFF] font-medium text-5xl leading-[118%] tracking-[-6%]'>Testimonials</h2>
            <div className="hidden min-[450px]:block">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    
                    {/* Prev Button */}
                    <button
                    ref={prevRef}
                     
                      className="w-15 h-15 cursor-pointer slider-btn1 rounded-[19px] text-white flex items-center justify-center"
                    >
                      <Icons icon={"leftArrow"} />
                    </button>

                    {/* Next Button */}
                    <button
                      ref={nextRef}
                      
                      className="w-15 h-15 cursor-pointer slider-btn2 rounded-[19px] text-white flex items-center justify-center"
                    >
                      <Icons icon={"rightArrow"} />
                    </button>

                  </div>
                </div>
        </div>
        <div className="w-full flex justify-end mb-6 md:mb-7.5 mt-8.75">
        <div className="max-w-7xl w-full flex flex-col items-center md:flex-row gap-8.25 md:gap-5.25">
          <div className="flex flex-col text-center max-w-79.25 md:min-w-79.75 w-full items-center py-12.5 px-4.75 bg-gradient-to-r from-orange-400 to-purple-500 rounded-[19px] gap-3.75">
            <h6 className="text-custom-3xl text-[#FFFFFF] font-poppins tracking-[-6%] leading-[118%] font-medium">
              Excellent
            </h6>
            <img
              src={"/assets/testimonial.png"}
              height={107}
              width={104}
              alt="testimonial-icon"
            />
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <Icons
                    key={index}
                    icon={"star"}
                    className={"h-8.5 w-8.5 md-h-10 md-w-10 "}
                  />
                ))}
              </div>
              <span className="-tracking-6 text-[#FFFFFF] leading-100 font-medium font-dm-sans">
                Based on
                <p  className="font-bold text-[#FFFFFF] underline">
                  456 reviews
                </p>
              </span>
              <span className="flex gap-1 text-[#FFFFFF] items-center font-medium leading-[150%] justify-center">
                <Icons icon={"star"} />
                Trustpilot
              </span>
            </div>
          </div>
          <div className="w-full">
            <TestimonialSlider prevRef={prevRef} nextRef={nextRef} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials