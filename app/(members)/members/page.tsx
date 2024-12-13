import MemberItem from "@/app/components/MemberItem";
import React from "react";

const MembersPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 md:gap-x-10 gap-y-5 py-5 w-full h-[calc(100dvh-70px)] container">
        <div className="col-span-12 md:col-span-3 bg-gray-200 h-fit p-5 rounded-xl">
          <h2 className="text-2xl font-bold">اطلاعات تکمیلی اعضا</h2>
          <div className="flex flex-col h-full items-start mt-10 gap-5">
            <div className="sidebar__item">
              <h3 className="sidebar__item-title">تعداد اعضا</h3>
              <p className="sidebar__item-value">
                122 <span className="text-sm">نفر</span>
              </p>
            </div>
            <div className="sidebar__item">
              <h3 className="sidebar__item-title"> تعداد اعضا فعال</h3>
              <p className="sidebar__item-value text-green-400">
                122 <span className="text-sm">نفر</span>
              </p>
            </div>
            <div className="sidebar__item">
              <h3 className="sidebar__item-title"> تعداد اعضا غیر فعال</h3>
              <p className="sidebar__item-value text-red-500">
                0 <span className="text-sm">نفر</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 bg-gray-200 rounded-xl p-5 h-full flex flex-col">
          <h2 className="text-2xl font-bold">لیست تمامی اعضا</h2>
          {/* member list */}
          <div className="grid grid-cols-10 gap-5 mt-10 h-[80%] flex-1">
            {/* member item */}
            <MemberItem />
          </div>
          {/* pagination */}
          <div className="w-full flex items-center justify-center justify-self-end mt-5 gap-2">
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              1
            </button>
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              2
            </button>
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
