"use client";
import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import PrimaryButton from "../PrimaryButton";

const Slider = () => {
  return (
    <div className="mt-20 container flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-[250px] h-[350px]">
        <h2 className="text-3xl font-bold">روانشناسی</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[250px] h-[300px] bg-lightBlue rounded-lg p-3 space-y-4">
              <div className="book__card-box">
                <h2 className="book__card-title">اسم کتاب:</h2>
                <h3 className="book__card-text">عادت های اتمی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">نویسنده:</h2>
                <h3 className="book__card-text">محمدحسین علیرضایی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">تعداد موحود:</h2>
                <h3 className="book__card-text">5</h3>
              </div>
              <div className="book__card-box mb-5">
                <h2 className="book__card-title">سال انتشار:</h2>
                <h3 className="book__card-text">2002</h3>
              </div>

              <PrimaryButton
                text="افزودن"
                type="button"
                click={() => {}}
                customStyle="w-full  py-3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[300px] bg-softGray rounded-lg p-3 space-y-4">
              <div className="book__card-box">
                <h2 className="book__card-title">اسم کتاب:</h2>
                <h3 className="book__card-text">عادت های اتمی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">نویسنده:</h2>
                <h3 className="book__card-text">محمدحسین علیرضایی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">تعداد موحود:</h2>
                <h3 className="book__card-text">5</h3>
              </div>
              <div className="book__card-box mb-5">
                <h2 className="book__card-title">سال انتشار:</h2>
                <h3 className="book__card-text">2002</h3>
              </div>

              <PrimaryButton
                text="افزودن"
                type="button"
                click={() => {}}
                customStyle="w-full  py-3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[300px] bg-primaryColor rounded-lg p-3 space-y-4 text-white ">
              <div className="book__card-box">
                <h2 className="book__card-title">اسم کتاب:</h2>
                <h3 className="book__card-text">عادت های اتمی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">نویسنده:</h2>
                <h3 className="book__card-text">محمدحسین علیرضایی</h3>
              </div>
              <div className="book__card-box">
                <h2 className="book__card-title">تعداد موحود:</h2>
                <h3 className="book__card-text">5</h3>
              </div>
              <div className="book__card-box mb-5">
                <h2 className="book__card-title">سال انتشار:</h2>
                <h3 className="book__card-text">2002</h3>
              </div>

              <PrimaryButton
                bgColor="#fff"
                textColor="#274c77"
                text="افزودن"
                type="button"
                click={() => {}}
                customStyle="w-full  py-3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[300px] bg-success rounded-lg p-3  flex flex-col justify-between">
              <div className="space-y-4">
                <div className="book__card-box">
                  <h2 className="book__card-title">اسم کتاب:</h2>
                  <h3 className="book__card-text">عادت های اتمی</h3>
                </div>
                <div className="book__card-box">
                  <h2 className="book__card-title">نویسنده:</h2>
                  <h3 className="book__card-text">محمدحسین علیرضایی</h3>
                </div>
                <div className="book__card-box">
                  <h2 className="book__card-title">تعداد موحود:</h2>
                  <h3 className="book__card-text">5</h3>
                </div>
                <div className="book__card-box mb-5">
                  <h2 className="book__card-title">سال انتشار:</h2>
                  <h3 className="book__card-text">2002</h3>
                </div>
              </div>
              <PrimaryButton
                text="افزودن"
                type="button"
                click={() => {}}
                customStyle="w-full  py-3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
