"use client";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "./Input";

interface Props {
  userId: string;
}

const UserCardTextView = ({ userId }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      {/* text content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full px-5 flex items-center justify-center gap-2 flex-col ">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold">نام</p>
          <h2 className="text-lg font-semibold">مبینا</h2>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold"> نام خانوادگی</p>
          <h2 className="text-lg font-semibold">کریمی</h2>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold">کد دانشجویی</p>
          <h2 className="text-lg font-semibold">{userId}</h2>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold">شماره تلفن</p>
          <h2 className="text-lg font-semibold">09334055539</h2>
        </div>
        <PrimaryButton
          click={() => setOpenModal(true)}
          text="اضافه کردن کتاب"
          type="button"
          customStyle=" md:mt-5 w-full py-2"
        />
      </div>
      {/* adding book to book-list form */}
      {openModal && (
        <div className="w-full h-screen absolute inset-0  bg-black/20 flex items-center justify-center">
          <div className="relative md:w-[400px] w-[350px] h-[370px] md:h-[350px]  rounded-xl bg-white shadow-md">
            {/* close modal button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-5 right-5"
            >
              <IoCloseCircleOutline size={24} />
            </button>
            <h2 className="mt-14 text-center font-semibold text-2xl">
              افزودن کتاب
            </h2>
            {/* form */}
            <form className=" px-5 ">
              <Input
                type="text"
                name="bookName"
                placeholder="عقاید یک دلقک"
                label="نام کتاب"
              />
              <p className=" text-lg text-darkGray font-semibold my-3 ">یا</p>
              <Input
                type="text"
                name="bookName"
                placeholder="400200"
                label="شماره کتاب"
              />

              <PrimaryButton
                type="submit"
                text="افزودن"
                customStyle="py-2 w-full mt-2 md:mt-5"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCardTextView;
