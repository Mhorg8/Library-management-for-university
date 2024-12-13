"use client";
import { features } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Features = () => {
  return (
    <div className="container mt-14 ">
      <h2 className="mb-10 text-3xl md:text-4xl font-bold text-primaryColor">
        ویژگی ها
      </h2>
      <div className="flex flex-wrap gap-5 items-center justify-between gap-x-10">
        <div className="hidden md:flex flex-col md:flex-row items-center justify-between gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className=" bg-softGray p-4 rounded-lg w-full h-[150px] text-center flex flex-col items-center justify-center shadow-md hover:shadow-lg cursor-pointer "
            >
              <h2 className="text-2xl font-bold text-primaryColor">
                {feature.title}
              </h2>
              <p className="leading-tight mt-2">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="inline-block md:hidden max-w-[320px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.title}>
                <div
                  key={feature.title}
                  className="flex flex-col items-center justify-start bg-softGray p-4 rounded-lg w-full 
                  h-[200px] text-center shadow-sm hover:shadow-md cursor-pointer "
                >
                  <h2 className="text-2xl font-bold text-primaryColor">
                    {feature.title}
                  </h2>
                  <p className="leading-tight mt-2">{feature.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
