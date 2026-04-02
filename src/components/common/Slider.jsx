
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Products } from "@/utils/helper";
import Icons from "./Icons";
import { useRef } from "react";

const Slider = ({ className, prevRef, nextRef }) => {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, Navigation]}
      spaceBetween={21}
      slidesPerView={1}
      loop={true}
      speed={800}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >

      {Products.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-white/6 rounded-3xl p-3 border border-white/10 relative">
            <div className="bg-[#220933] max-w-86.25 h-55.25 rounded-3xl flex items-center justify-center">
              <Image
                src={item.image}
                alt="product"
                width={317}
                height={91}
                className="rotate-15"
              />
            </div>

            <span className="absolute poppins right-9 top-54 bg-gradient-to-r from-orange-400 to-purple-500 text-sm font-semibold leading-[137%] px-[16.44px] py-1.75 rounded-full text-white">
              TRADABLE
            </span>

            <div className="flex items-end justify-between p-1.5">
              <div className="mt-3">
                <h3 className="text-white font-medium poppins text-[32px] leading-[118%] teacking-[-6%]">
                  Product Name
                </h3>
                <p className="mt-2 text-[#F5F5F5] font-medium text-base leading-[118%] tracking-[-0.006em]">
                  Lorem ipsum dolor sit
                </p>
                <p className="mt-3 text-[#F5F5F54F] font-medium text-base leading-[118%] tracking-[-0.006em]">
                  Suggested Price $687.58
                </p>
                <p className="mt-2 bg-gradient-to-r poppins from-orange-400 to-purple-500 bg-clip-text text-transparent leading-[118%] teacking-[-6%] text-2xl font-medium flex items-center gap-4">
                  $528.69{" "}
                  <span className="text-base leading-[125%] tracking-[-0.006em] text-[#FF6565]">
                    -20%
                  </span>
                </p>
              </div>

              <button className="w-15.25 h-15.25 img cursor-pointer flex items-center justify-center text-[#FFFFFF]">
                <Icons icon={"bag"} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;